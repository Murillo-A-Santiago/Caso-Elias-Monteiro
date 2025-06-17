// Dados do Jogo de Investigação

const casoData = {
    vitima: {
        nome: "Elias Monteiro",
        idade: 55,
        profissao: "Empresário do ramo imobiliário",
        horaMorte: "Entre 22h e 00h",
        local: "Mansão Monteiro - Sala de estar",
        causaMorte: "Traumatismo craniano"
    },
    
    suspeitos: [
        {
            id: 1,
            nome: "Sofia Almeida",
            relacao: "Ex-sócia e ex-amante",
            motivo: "Vingança, desespero financeiro e silenciamento de segredos",
            alibi: "Em casa sozinha, celular desligado",
            declaracao: "Elias era um homem cruel e manipulador. Ele me roubou tudo e ainda ameaçava destruir o pouco que me restava. Mas eu não o matei. Eu estava em casa, sozinha, tentando esquecer a desgraça que ele me causou. Meu celular estava sem bateria.",
            perguntas: [
                {
                    pergunta: "Você tinha algum contato com Elias após a separação dos negócios?",
                    resposta: "Apenas o necessário para tentar reaver o que ele me devia. Ele sempre me ignorava e ria da minha situação."
                },
                {
                    pergunta: "Alguém pode confirmar que você estava em casa?",
                    resposta: "Não, eu estava sozinha. Não recebi visitas e não saí. Eu só queria paz."
                },
                {
                    pergunta: "Por que seu celular estava desligado?",
                    resposta: "A bateria acabou e eu não percebi. Estava tão exausta que nem me importei em carregar."
                },
                {
                    pergunta: "Você tinha conhecimento da festa na mansão?",
                    resposta: "Sim, eu soube por terceiros. Fui convidada, mas não tive coragem de ir. Aquele lugar me traz péssimas lembranças."
                }
            ],
            imagem: "assets/sofia_almeida.png"
        },
        {
            id: 2,
            nome: "Carlos 'Carlão' Silva",
            relacao: "Concorrente no ramo imobiliário",
            motivo: "Proteção de negócios contra táticas desleais",
            alibi: "No bar com amigos, saiu às 22h30",
            declaracao: "Elias era um tubarão, um parasita. Ele queria me engolir e destruir tudo que construí. Mas eu não sou assassino. Eu estava com meus amigos no bar, depois fui resolver um assunto pessoal e voltei para casa.",
            perguntas: [
                {
                    pergunta: "A que horas você saiu do bar e para onde foi?",
                    resposta: "Saí por volta das 22h30. Fui encontrar uma pessoa para discutir um negócio urgente. Não posso revelar quem é."
                },
                {
                    pergunta: "Seus amigos podem confirmar sua saída e o horário?",
                    resposta: "Eles estavam distraídos. Acho que não notaram a hora exata. E a pessoa que encontrei não vai querer se envolver."
                },
                {
                    pergunta: "Você foi à festa na mansão de Elias?",
                    resposta: "Não, eu não fui convidado e nem queria ir. Tinha mais o que fazer do que aturar aquele sujeito."
                }
            ],
            imagem: "assets/carlos_silva.png"
        },
        {
            id: 3,
            nome: "Dr. Arthur Costa",
            relacao: "Médico particular",
            motivo: "Chantagem e proteção da reputação",
            alibi: "Plantão no hospital, ausente por 45 min",
            declaracao: "Elias era um paciente difícil, cheio de exigências, mas eu sempre cumpri meu juramento. Eu estava no hospital, como sempre. Não tenho nada a ver com a morte dele. Aqueles 45 minutos foram para um café rápido, nada mais.",
            perguntas: [
                {
                    pergunta: "Houve algum momento em que você se ausentou do hospital durante o plantão, além do café?",
                    resposta: "Não, absolutamente. Eu estava focado nos meus pacientes."
                },
                {
                    pergunta: "Você tinha algum desentendimento com Elias?",
                    resposta: "Apenas discussões sobre o tratamento dele e a recusa dele em seguir as recomendações. Nada pessoal que justificasse algo assim."
                },
                {
                    pergunta: "Elias o chantageava? Ele tinha algum segredo que você guardava?",
                    resposta: "Isso é um absurdo! Eu sou um profissional ético e sigiloso. Meus pacientes confiam em mim."
                }
            ],
            imagem: "assets/dr_arthur_costa.png"
        },
        {
            id: 4,
            nome: "Helena Santos",
            relacao: "Empregada doméstica há 10 anos",
            motivo: "Maus tratos e recusa em ajudar filha doente",
            alibi: "Em casa com filha doente, vizinha ouviu gritos",
            declaracao: "Elias era um monstro. Ele me fez sofrer muito e deixou minha filha à beira da morte. Mas eu estava cuidando dela. Eu nunca faria mal a ninguém. Os gritos? Eram da minha filha com febre, eu estava desesperada.",
            perguntas: [
                {
                    pergunta: "Sua filha pode confirmar que você estava com ela a noite toda?",
                    resposta: "Sim, ela estava com febre alta. Eu não saí do lado dela um minuto sequer."
                },
                {
                    pergunta: "A vizinha ouviu gritos. O que aconteceu?",
                    resposta: "Minha filha estava delirando de febre. Eu estava tentando acalmá-la. Foi uma noite terrível."
                },
                {
                    pergunta: "Você tinha acesso à mansão durante a festa?",
                    resposta: "Não, eu não trabalho durante as festas. Apenas cuido da casa durante o dia. Não tenho chaves da mansão."
                },
                {
                    pergunta: "Você se sentia ameaçada por Elias?",
                    resposta: "Sim, ele sempre me ameaçava de demissão. E ele se recusou a ajudar minha filha. Eu o odiava com todas as minhas forças."
                }
            ],
            imagem: "assets/helena_santos.png"
        },
        {
            id: 5,
            nome: "Ricardo 'Ricardinho' Farias",
            relacao: "Sobrinho e ex-herdeiro",
            motivo: "Deserdado recentemente, dívidas de jogo",
            alibi: "Cassino clandestino, taxista o deixou perto da mansão",
            declaracao: "Meu tio era um velho louco. Ele me deserdou! Mas eu não o matei. Eu estava jogando, tentando ganhar algum dinheiro para me virar. O taxista? Ele me deixou perto de um bar, não da mansão.",
            perguntas: [
                {
                    pergunta: "Você pode provar que estava no cassino?",
                    resposta: "Não, é um lugar secreto. Ninguém vai me entregar. E eu não quero problemas com a polícia."
                },
                {
                    pergunta: "Você sabia que seu tio havia mudado o testamento?",
                    resposta: "Sim, ele me disse. Eu fiquei furioso, claro, mas não a ponto de matá-lo. Eu ia dar um jeito nas minhas dívidas."
                },
                {
                    pergunta: "Um taxista o deixou perto da mansão de Elias. O que você estava fazendo lá?",
                    resposta: "Eu estava indo para um bar ali perto. O taxista deve ter se enganado no endereço."
                },
                {
                    pergunta: "Você tinha dívidas de jogo muito grandes?",
                    resposta: "Sim, algumas. Mas eu ia resolver isso. Não precisava matar ninguém. Eu sou um homem de palavra."
                }
            ],
            imagem: "assets/ricardo_farias.png"
        },
        {
            id: 6,
            nome: "Patrícia Mendes",
            relacao: "Jornalista investigativa",
            motivo: "Ameaçada de processo e destruição de carreira",
            alibi: "Na redação até 22h, depois 'investigando uma pista'",
            declaracao: "Elias Monteiro era um criminoso, e eu estava prestes a expor tudo. Ele me ameaçou, mas eu não me intimidei. Eu estava trabalhando, depois fui atrás de uma pista importante. Não o matei, mas não vou chorar por ele.",
            perguntas: [
                {
                    pergunta: "Que pista você estava investigando e onde?",
                    resposta: "Não posso revelar minhas fontes. É sigilo jornalístico. Mas era algo relacionado a Elias."
                },
                {
                    pergunta: "Seu editor pode confirmar sua presença na redação até que horas?",
                    resposta: "Sim, até as 22h. Depois, eu saí."
                },
                {
                    pergunta: "Por que você parecia agitada ao voltar para casa, segundo seu vizinho?",
                    resposta: "Eu estava cansada e frustrada. A pista não levou a nada. E a morte de Elias é um grande furo que eu perdi."
                },
                {
                    pergunta: "Você tinha acesso à mansão de Elias?",
                    resposta: "Não, mas eu sabia onde ele morava. Eu estava investigando-o há meses."
                }
            ],
            imagem: "assets/patricia_mendes.png"
        }
    ],
    
    evidencias: [
        {
            id: 1,
            nome: "Estatueta de Bronze",
            tipo: "Arma do Crime",
            descricao: "Encontrada na estante, com manchas de sangue tipo AB (tipo sanguíneo de Elias) e alguns fios de cabelo castanho e um pequeno fragmento de tecido de seda, acredita-se ser da cor azul, mas é dificil distinguir por conta do sangue.",
            significancia: "Alta",
            imagem: "assets/estatueta_bronze.png",
            categoria: "fisica"
        },
        {
            id: 2,
            nome: "Copo de Uísque Quebrado",
            tipo: "Evidência Física",
            descricao: "Encontrado próximo ao corpo. Análise de impressões digitais revelou digitais parciais de Elias e de uma pessoa desconhecida.",
            significancia: "Média",
            imagem: "assets/copo_quebrado.png",
            categoria: "fisica"
        },
        {
            id: 3,
            nome: "Bilhete Amassado",
            tipo: "Evidência Física",
            descricao: "Encontrado no bolso de Elias. Contém uma ameaça: 'Seu fim agora foi inevitável. Assassinos sempre deixam evidências, ou não'.",
            significancia: "Alta",
            imagem: "assets/bilhete_amassado.png",
            categoria: "fisica"
        },
        {
            id: 4,
            nome: "Gravação de Câmera de Segurança",
            tipo: "Evidência Digital",
            descricao: "Imagens da entrada da mansão. Mostra a chegada e saída de convidados, mas há um ponto cego na área da sala de estar. Um vulto rápido e indistinto é visto saindo pela porta dos fundos por volta das 23h10.",
            significancia: "Média",
            imagem: "assets/camera_seguranca.png",
            categoria: "digital"
        },
        {
            id: 5,
            nome: "Anel de Safira",
            tipo: "Evidência Física",
            descricao: "Encontrado debaixo do sofá, próximo ao corpo. Não pertence a Elias. Possui uma gravação interna microscópica: 'S.A. 2019'.",
            significancia: "Alta",
            imagem: "assets/anel_safira.png",
            categoria: "fisica"
        },
        {
            id: 6,
            nome: "Pegadas de Lama",
            tipo: "Evidência Física",
            descricao: "Encontradas na entrada dos fundos da mansão, indicando que alguém entrou ou saiu por ali.",
            significancia: "Média",
            imagem: "assets/pegadas_lama.png",
            categoria: "fisica"
        },
        {
            id: 7,
            nome: "Histórico de Chamadas de Elias",
            tipo: "Evidência Digital",
            descricao: "Revela ligações frequentes para um número desconhecido nas últimas semanas, além de várias chamadas não atendidas de Patrícia Mendes.",
            significancia: "Média",
            imagem: "assets/historico_chamadas.png",
            categoria: "digital"
        },
        {
            id: 8,
            nome: "E-mails de Elias",
            tipo: "Evidência Digital",
            descricao: "Trocas de e-mails com um advogado sobre a mudança do testamento, e e-mails ameaçadores enviados para Sofia Almeida e Patrícia Mendes.",
            significancia: "Alta",
            imagem: "assets/emails.png",
            categoria: "digital"
        },
        {
            id: 9,
            nome: "Mensagens de Texto de Elias",
            tipo: "Evidência Digital",
            descricao: "Mensagens trocadas com Sofia Almeida, com conteúdo tenso e formal. Uma mensagem de texto de Elias para Ricardo Farias dizia: 'Mudanças no testamento foram finalizadas. Você foi informado.'",
            significancia: "Alta",
            imagem: "assets/mensagens_texto.png",
            categoria: "digital"
        },
        {
            id: 10,
            nome: "Registro de GPS do Carro de Ricardo",
            tipo: "Evidência Digital",
            descricao: "Mostra que o carro de Ricardo esteve estacionado a duas quadras da mansão de Elias entre 22h45 e 23h15.",
            significancia: "Alta",
            imagem: "assets/registro_gps.png",
            categoria: "digital"
        },
        {
            id: 11,
            nome: "Relógio da Cena do Crime",
            tipo: "Evidência Física",
            descricao: "Relógio antigo na sala de estar, parado exatamente às 23:10, com manchas de sangue em um dos cantos.",
            significancia: "Alta",
            imagem: "assets/relogio_crime.png",
            categoria: "fisica"
        },
        {
            id: 12,
            nome: "Anotações de Patrícia",
            tipo: "Evidência Digital",
            descricao: "Anotações encontradas no computador de Patrícia sobre sua investigação.",
            significancia: "Média",
            imagem: "assets/anotacoes_patricia.png",
            categoria: "digital"
        }
    ],
    
    charadas: [
        {
            id: 1,
            titulo: "Código dos Horários",
            tipo: "temporal",
            descricao: "Os horários mencionados pelos suspeitos formam um código quando organizados, pode ser a hora da morte.",
            dica: "Carlos: 22h30, Dr. Arthur: 45 min, Ricardo: 22h45 a 23h15, Vulto na câmera: 23h10",
            solucao: "23:10",
            explicacao: "23h10 é o horário em que o vulto foi visto saindo pela porta dos fundos, coincidindo com o horário do crime e com o relógio parado na cena.",
            locked: false
        },
        {
            id: 2,
            titulo: "O Enigma da Jornalista",
            tipo: "criptografia",
            descricao: "As anotações de Patrícia Mendes contêm um código oculto sobre o que ela descobriu.",
            dica: "Radicalismo imobiliário: Alguém silenciou o informante. Seguir a pista do dinheiro. Falar com a ex-sócia. Investigar antigos negócios. Amanhã será tarde demais.",
            solucao: "SAFIRA",
            explicacao: "As primeiras letras de cada frase formam 'RASFIA', que é um anagrama de 'SAFIRA', apontando para o anel de safira como evidência crucial.",
            locked: true
        },
        {
            id: 3,
            titulo: "A Sequência de Cores",
            tipo: "logica",
            descricao: "As evidências físicas formam uma sequência de cores que revela algo importante. Observe as cores da estatueta de bronze, do copo de uísque, do bilhete amassado, do anel de safira e das pegadas de lama.",
            dica: "Bronze (marrom), Vidro (transparente), Papel (branco), Safira (azul), Lama (marrom). A sequência de cores aponta para algo relacionado a um dos suspeitos, qual cor se destaca?.",
            solucao: "AZUL",
            explicacao: "A sequência de cores (marrom, transparente, branco, azul, marrom) pode ser interpretada como uma referência a Sofia Almeida. O anel de safira (azul) é dela, e o fragmento de tecido azul na estatueta de bronze também a incrimina.",
            locked: true
        },
        {
            id: 4,
            titulo: "O Código da Safira",
            tipo: "codigo",
            descricao: "O anel de safira tem uma gravação interna microscópica: 'S.A. 2019'.",
            dica: "S.A. são iniciais. 2019 é um ano significativo na vida de Elias e de um dos suspeitos.",
            solucao: "SOFIA ALMEIDA",
            explicacao: "S.A. são as iniciais de Sofia Almeida, e 2019 foi o ano em que ela e Elias terminaram seu relacionamento e seus negócios.",
            locked: true
        },
        {
            id: 5,
            titulo: "O Segredo do Bilhete",
            tipo: "anagrama",
            descricao: "O bilhete encontrado no bolso de Elias contém uma mensagem oculta. Observe a primeira letra de cada palavra da ameaça: 'Seu fim agora foi inevitável. Assassinos sempre deixam evidências, ou não'.",
            dica: "As primeiras letras formam um anagrama. Reorganize-as para revelar o nome de um suspeito.",
            solucao: "SOFIA",
            explicacao: "As primeiras letras de cada palavra formam 'SFAFIASDEON'. Reorganizando, pode-se formar 'SOFIA', apontando diretamente para Sofia Almeida.",
            locked: true
        }
    ],
    
    assassino: {
        id: 1, // ID da Sofia Almeida
        explicacao: "Sofia Almeida tinha motivos de vingança e desespero financeiro. O anel de safira com suas iniciais e o bilhete amassado com a mensagem oculta apontam para ela. O vulto na câmera de segurança e o álibi fraco também a incriminam."
    }
};


