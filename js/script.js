// Script principal do jogo de investigação

document.addEventListener("DOMContentLoaded", function() {
    // Simulação de carregamento
    const loadingScreen = document.getElementById("loading-screen");
    const progress = document.querySelector(".progress");
    const loadingText = document.querySelector(".loading-text");
    
    const loadingTexts = [
        "Acessando banco de dados criminal...",
        "Carregando arquivos do caso...",
        "Processando evidências...",
        "Analisando perfis dos suspeitos...",
        "Preparando interface de investigação..."
    ];
    
    let loadingIndex = 0;
    let progressWidth = 0;
    
    const loadingInterval = setInterval(() => {
        if (progressWidth >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 500);
            }, 500);
            return;
        }
        
        progressWidth += 5;
        progress.style.width = progressWidth + "%";
        
        if (progressWidth % 20 === 0) {
            loadingText.textContent = loadingTexts[loadingIndex];
            loadingIndex = (loadingIndex + 1) % loadingTexts.length;
        }
    }, 150);
    
    // Navegação entre páginas
    const navLinks = document.querySelectorAll("nav ul li a");
    const pages = document.querySelectorAll("main .page");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os links
            navLinks.forEach(l => l.classList.remove("active"));
            
            // Adicionar classe active ao link clicado
            this.classList.add("active");
            
            // Mostrar a página correspondente
            const targetPage = this.getAttribute("data-page");
            pages.forEach(page => {
                if (page.id === targetPage) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });

            // Desabilitar a página de Conclusão se nem todas as charadas estiverem resolvidas
            if (targetPage === 'conclusao') {
                const allRiddlesSolved = casoData.charadas.every(charada => charada.status === 'resolvida');
                if (!allRiddlesSolved) {
                    alert('Você precisa resolver todas as charadas antes de acessar a Conclusão!');
                    document.getElementById('charadas').classList.add('active');
                    document.getElementById('conclusao').classList.remove('active');
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector('a[data-page="charadas"]').classList.add('active');
                }
            }
        });
    });
    
    // Carregar suspeitos
    const suspeitosGrid = document.getElementById("suspeitos-grid");
    
    casoData.suspeitos.forEach(suspeito => {
        const suspeitoCard = document.createElement("div");
        suspeitoCard.className = "suspeito-card";
        suspeitoCard.innerHTML = `
            <div class="suspeito-img">
                <img src="${suspeito.imagem}" alt="${suspeito.nome}">
            </div>
            <div class="suspeito-info">
                <h3>${suspeito.nome}</h3>
                <p>${suspeito.relacao}</p>
                <div class="suspeito-detalhes">
                    <div class="detalhe-item">
                        <span class="label">Motivo:</span>
                        <span>${suspeito.motivo}</span>
                    </div>
                    <div class="detalhe-item">
                        <span class="label">Álibi:</span>
                        <span>${suspeito.alibi}</span>
                    </div>
                </div>
                <button class="btn-interrogar" data-id="${suspeito.id}">Interrogar</button>
            </div>
        `;
        suspeitosGrid.appendChild(suspeitoCard);
    });
    
    // Carregar evidências físicas
    const evidenciasFisicasGrid = document.getElementById("evidencias-fisicas-grid");
    
    casoData.evidencias.filter(e => e.categoria === "fisica").forEach(evidencia => {
        const evidenciaCard = document.createElement("div");
        evidenciaCard.className = "evidencia-card";
        evidenciaCard.setAttribute("data-id", evidencia.id);
        evidenciaCard.innerHTML = `
            <div class="evidencia-img">
                <img src="${evidencia.imagem}" alt="${evidencia.nome}">
            </div>
            <div class="evidencia-info">
                <h3>${evidencia.nome}</h3>
                <span class="evidencia-tipo ${evidencia.tipo === "Arma do Crime" ? "arma" : "fisica"}">${evidencia.tipo}</span>
                <span class="significancia ${evidencia.significancia.toLowerCase()}">${evidencia.significancia}</span>
                <p>${evidencia.descricao.substring(0, 100)}${evidencia.descricao.length > 100 ? "..." : ""}</p>
            </div>
        `;
        evidenciasFisicasGrid.appendChild(evidenciaCard);
    });
    
    // Carregar evidências digitais
    const evidenciasDigitaisGrid = document.getElementById("evidencias-digitais-grid");
    
    casoData.evidencias.filter(e => e.categoria === "digital").forEach(evidencia => {
        const evidenciaCard = document.createElement("div");
        evidenciaCard.className = "evidencia-card";
        evidenciaCard.setAttribute("data-id", evidencia.id);
        evidenciaCard.innerHTML = `
            <div class="evidencia-img">
                <img src="${evidencia.imagem}" alt="${evidencia.nome}">
            </div>
            <div class="evidencia-info">
                <h3>${evidencia.nome}</h3>
                <span class="evidencia-tipo digital">${evidencia.tipo}</span>
                <span class="significancia ${evidencia.significancia.toLowerCase()}">${evidencia.significancia}</span>
                <p>${evidencia.descricao.substring(0, 100)}${evidencia.descricao.length > 100 ? "..." : ""}</p>
            </div>
        `;
        evidenciasDigitaisGrid.appendChild(evidenciaCard);
    });
    
    // Carregar charadas
    const charadasContainer = document.getElementById("charadas-container");
    
    function renderCharadas() {
        charadasContainer.innerHTML = ''; // Limpa o container antes de renderizar
        casoData.charadas.forEach(charada => {
            const charadaCard = document.createElement("div");
            charadaCard.className = "charada-card";
            charadaCard.setAttribute("data-id", charada.id);
            
            if (charada.locked) {
                charadaCard.classList.add('locked');
                charadaCard.innerHTML = `
                    <div class="charada-header">
                        <h3><i class="fas fa-lock"></i> Charada Bloqueada</h3>
                        <span class="charada-status bloqueada">Bloqueada</span>
                    </div>
                    <div class="charada-body">
                        <p>Resolva a charada anterior para desbloquear esta.</p>
                    </div>
                `;
            } else {
                charadaCard.innerHTML = `
                    <div class="charada-header">
                        <h3><i class="fas fa-puzzle-piece"></i> ${charada.titulo}</h3>
                        <span class="charada-status ${charada.status || 'pendente'}">${charada.status ? (charada.status.charAt(0).toUpperCase() + charada.status.slice(1)) : 'Pendente'}</span>
                    </div>
                    <div class="charada-body">
                        <span class="charada-tipo ${charada.tipo}">${charada.tipo.charAt(0).toUpperCase() + charada.tipo.slice(1)}</span>
                        <p class="charada-descricao">${charada.descricao}</p>
                        <div class="charada-dica">
                            <h4>Dica:</h4>
                            <p>${charada.dica}</p>
                        </div>
                        <div class="charada-input" style="display: ${charada.status === 'resolvida' ? 'none' : 'block'}">
                            <input type="text" placeholder="Digite sua resposta..." class="resposta-input">
                            <button class="verificar-btn" data-id="${charada.id}">Verificar</button>
                        </div>
                        <div class="charada-solucao" id="solucao-${charada.id}" style="display: ${charada.status === 'resolvida' ? 'block' : 'none'}">
                            <h4>Solução:</h4>
                            <p>${charada.solucao}</p>
                            <p><em>${charada.explicacao}</em></p>
                        </div>
                    </div>
                `;
            }
            charadasContainer.appendChild(charadaCard);
        });
        addVerificarButtonListeners(); // Adiciona listeners após renderizar
    }

    renderCharadas(); // Renderiza as charadas inicialmente
    
    // Carregar opções de suspeitos para conclusão
    const suspeitosSelecao = document.getElementById("suspeitos-selecao");
    
    casoData.suspeitos.forEach(suspeito => {
        const suspeitoOpcao = document.createElement("div");
        suspeitoOpcao.className = "suspeito-opcao";
        suspeitoOpcao.setAttribute("data-id", suspeito.id);
        suspeitoOpcao.innerHTML = `
            <img src="${suspeito.imagem}" alt="${suspeito.nome}">
            <span>${suspeito.nome}</span>
        `;
        suspeitosSelecao.appendChild(suspeitoOpcao);
    });
    
    // Tabs de evidências
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");
            
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            this.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });
    
    // Modal de interrogatório
    const interrogatorioModal = document.getElementById("interrogatorio-modal");
    const interrogarBtns = document.querySelectorAll(".btn-interrogar");
    const closeInterrogatorioBtn = interrogatorioModal.querySelector(".close-btn");
    
    interrogarBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const suspeitoId = parseInt(this.getAttribute("data-id"));
            const suspeito = casoData.suspeitos.find(s => s.id === suspeitoId);
            
            document.getElementById("modal-suspeito-img").src = suspeito.imagem;
            document.getElementById("modal-suspeito-nome").textContent = suspeito.nome;
            document.getElementById("modal-suspeito-relacao").textContent = suspeito.relacao;
            document.getElementById("modal-declaracao").textContent = suspeito.declaracao;
            
            const perguntasContainer = document.getElementById("modal-perguntas");
            perguntasContainer.innerHTML = "";
            
            suspeito.perguntas.forEach(p => {
                const perguntaDiv = document.createElement("div");
                perguntaDiv.className = "pergunta-resposta";
                perguntaDiv.innerHTML = `
                    <p class="pergunta">${p.pergunta}</p>
                    <p class="resposta">${p.resposta}</p>
                `;
                perguntasContainer.appendChild(perguntaDiv);
            });
            
            interrogatorioModal.style.display = "block";
        });
    });
    
    closeInterrogatorioBtn.addEventListener("click", function() {
        interrogatorioModal.style.display = "none";
    });
    
    // Modal de evidência
    const evidenciaModal = document.getElementById("evidencia-modal");
    const evidenciaCards = document.querySelectorAll(".evidencia-card");
    const closeEvidenciaBtn = evidenciaModal.querySelector(".close-btn");
    
    evidenciaCards.forEach(card => {
        card.addEventListener("click", function() {
            const evidenciaId = parseInt(this.getAttribute("data-id"));
            const evidencia = casoData.evidencias.find(e => e.id === evidenciaId);
            
            document.getElementById("modal-evidencia-nome").textContent = evidencia.nome;
            document.getElementById("modal-evidencia-img").src = evidencia.imagem;
            document.getElementById("modal-evidencia-descricao").textContent = evidencia.descricao;
            document.getElementById("modal-evidencia-tipo").textContent = evidencia.tipo;
            document.getElementById("modal-evidencia-significancia").textContent = evidencia.significancia;
            
            evidenciaModal.style.display = "block";
        });
    });
    
    closeEvidenciaBtn.addEventListener("click", function() {
        evidenciaModal.style.display = "none";
    });
    
    // Verificar charadas
    function addVerificarButtonListeners() {
        const verificarBtns = document.querySelectorAll(".verificar-btn");
        verificarBtns.forEach(btn => {
            btn.removeEventListener('click', handleVerificarClick); // Remove previous listeners to avoid duplicates
            btn.addEventListener("click", handleVerificarClick);
        });
    }

    function handleVerificarClick() {
        const charadaId = parseInt(this.getAttribute("data-id"));
        const charada = casoData.charadas.find(c => c.id === charadaId);
        const charadaCard = document.querySelector(`.charada-card[data-id="${charadaId}"]`);
        const respostaInput = charadaCard.querySelector(".resposta-input");
        const resposta = respostaInput.value.trim().toLowerCase();
        
        if (resposta === charada.solucao.toLowerCase()) {
            charadaCard.querySelector(".charada-status").textContent = "Resolvida";
            charadaCard.querySelector(".charada-status").classList.remove("pendente");
            charadaCard.querySelector(".charada-status").classList.add("resolvida");
            charadaCard.querySelector(".charada-input").style.display = "none";
            charadaCard.querySelector(".charada-solucao").style.display = "block";
            alert("Parabéns! Você resolveu a charada!");
            charada.status = 'resolvida'; // Atualiza o status no objeto casoData

            // Desbloqueia a próxima charada
            const currentIndex = casoData.charadas.findIndex(c => c.id === charadaId);
            if (currentIndex !== -1 && currentIndex < casoData.charadas.length - 1) {
                casoData.charadas[currentIndex + 1].locked = false;
                renderCharadas(); // Renderiza novamente para mostrar a charada desbloqueada
            }

            // Verifica se todas as charadas foram resolvidas para liberar a Conclusão
            const allRiddlesSolved = casoData.charadas.every(charada => charada.status === 'resolvida');
            if (allRiddlesSolved) {
                const conclusaoLink = document.querySelector('a[data-page="conclusao"]');
                if (conclusaoLink) {
                    conclusaoLink.classList.remove('disabled'); // Remove a classe 'disabled' se existir
                    alert('Todas as charadas foram resolvidas! A página de Conclusão foi desbloqueada.');
                }
            }

        } else {
            alert("Resposta incorreta. Tente novamente!");
        }
    }
    
    // Verificar conclusão
    const verificarConclusaoBtn = document.getElementById("verificar-conclusao");
    const suspeitoOpcoes = document.querySelectorAll(".suspeito-opcao");
    const resultadoContainer = document.getElementById("resultado-container");
    const resultadoContent = document.getElementById("resultado-content");
    
    suspeitoOpcoes.forEach(opcao => {
        opcao.addEventListener("click", function() {
            suspeitoOpcoes.forEach(o => o.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
    
    verificarConclusaoBtn.addEventListener("click", function() {
        const selectedSuspeito = document.querySelector(".suspeito-opcao.selected");
        const justificativa = document.getElementById("justificativa").value.trim();
        
        if (!selectedSuspeito) {
            alert("Por favor, selecione um suspeito!");
            return;
        }
        
        if (justificativa.length < 50) {
            alert("Por favor, forneça uma justificativa mais detalhada (pelo menos 50 caracteres)!");
            return;
        }
        
        const suspeitoId = parseInt(selectedSuspeito.getAttribute("data-id"));
        const assassinoId = casoData.assassino.id;
        
        resultadoContent.innerHTML = "";
        
        if (suspeitoId === assassinoId) {
            const resultadoDiv = document.createElement("div");
            resultadoDiv.className = "resultado-correto";
            resultadoDiv.innerHTML = `
                <h4><i class="fas fa-check-circle"></i> Parabéns! Você identificou o assassino corretamente!</h4>
                <p>${casoData.assassino.explicacao}</p>
                <p>Sua justificativa: "${justificativa}"</p>
            `;
            resultadoContent.appendChild(resultadoDiv);
        } else {
            const suspeitoEscolhido = casoData.suspeitos.find(s => s.id === suspeitoId);
            const resultadoDiv = document.createElement("div");
            resultadoDiv.className = "resultado-incorreto";
            resultadoDiv.innerHTML = `
                <h4><i class="fas fa-times-circle"></i> Infelizmente, você não identificou o assassino corretamente.</h4>
                <p>Você escolheu: ${suspeitoEscolhido.nome}</p>
                <p>O verdadeiro assassino é: ${casoData.suspeitos.find(s => s.id === assassinoId).nome}</p>
                <p>${casoData.assassino.explicacao}</p>
                <p>Sua justificativa: "${justificativa}"</p>
            `;
            resultadoContent.appendChild(resultadoDiv);
        }
        
        resultadoContainer.classList.remove("hidden");
        resultadoContainer.scrollIntoView({ behavior: "smooth" });
    });
    
    // Fechar modais ao clicar fora
    window.addEventListener("click", function(e) {
        if (e.target === interrogatorioModal) {
            interrogatorioModal.style.display = "none";
        }
        if (e.target === evidenciaModal) {
            evidenciaModal.style.display = "none";
        }
    });

    // Inicializa o estado da página de Conclusão
    const conclusaoLink = document.querySelector('a[data-page="conclusao"]');
    if (conclusaoLink) {
        conclusaoLink.classList.add('disabled'); // Desabilita por padrão
    }
});


