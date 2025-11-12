    const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-titulo");
        const modalDescription = document.getElementById("modal-descricao");
        const modalLink = document.getElementById("modal-link");
        const closeBtn = document.querySelector(".btnfechar");

        // ✨ Aqui você coloca o texto de cada jogo (pode personalizar à vontade)
        const textos = {
            "Dave the Driver": "Mergulhe durante o dia para pescar e explore as profundezas do oceano, depois administre um restaurante de sushi à noite. Este é um dos jogos indie mais aclamados pela crítica e jogadores, oferecendo uma experiência única que combina gameplay envolvente com uma apresentação visual impressionante. Mergulhe em um mundo rico em detalhes e descubra por que este título conquistou milhões de fãs ao redor do mundo.",

            "Hollow Knight": "Desça às profundezas de Hallownest, um reino de insetos e heróis arruinado. Explore cavernas sinuosas e lute contra criaturas corrompidas. Este é um dos jogos indie mais aclamados pela crítica e jogadores, oferecendo uma experiência única que combina gameplay envolvente com uma apresentação visual impressionante. Mergulhe em um mundo rico em detalhes e descubra por que este título conquistou milhões de fãs ao redor do mundo.",

            "Celeste": "Ajude Madeline a sobreviver sua jornada ao topo da Montanha Celeste neste desafiador jogo de plataforma. Este é um dos jogos indie mais aclamados pela crítica e jogadores, oferecendo uma experiência única que combina gameplay envolvente com uma apresentação visual impressionante. Mergulhe em um mundo rico em detalhes e descubra por que este título conquistou milhões de fãs ao redor do mundo.",

            "Stardew Valley": "Você herdou a velha fazenda do seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, você parte para começar sua nova vida. Você consegue aprender a viver da terra e transformar esses campos cobertos de mato em um lar próspero? Construa relacionamentos com mais de 30 moradores, explore cavernas misteriosas e personalize sua fazenda ao seu gosto.",

            "Hades": "Hades é um roguelike de ação desafiador que combina o melhor das ofertas aclamadas da Supergiant, incluindo o combate rápido de Bastion, a atmosfera rica e imersiva de Transistor, e a narrativa profunda de Pyre. Como Zagreus, príncipe imortal do submundo, você lutará para escapar da casa de seu pai, o próprio Hades, encontrando ajuda dos poderosos Olimpianos.",

            "Gris": "Uma experiência serena e evocativa, livre de perigo, frustração ou morte. Explore um mundo meticulosamente desenhado à mão. Este é um dos jogos indie mais aclamados pela crítica e jogadores, oferecendo uma experiência única que combina gameplay envolvente com uma apresentação visual impressionante. Mergulhe em um mundo rico em detalhes e descubra por que este título conquistou milhões de fãs ao redor do mundo.",

            "Dead Cells": "Dead Cells é um roguelike de ação inspirado em metroidvania. Você vai explorar um castelo em constante mudança... assumindo que você seja capaz de lutar através de seus guardiões. Sem checkpoints. Mate, morra, aprenda, repita.",

            "Stray": "Perdido, sozinho e separado da família, um gato de rua precisa desvendar um antigo mistério para escapar de uma cidade ciberpunk há muito esquecida e encontrar o caminho de volta para casa. Stray é um jogo de aventura em terceira pessoa ambientado nos becos de neon detalhados de uma cidade ciberpunk decadente.",

            "Terraria": "Cave, lute, explore, construa! Nada é impossível neste jogo de aventura repleto de ação. Este é um dos jogos indie mais aclamados pela crítica e jogadores, oferecendo uma experiência única que combina gameplay envolvente com uma apresentação visual impressionante. Mergulhe em um mundo rico em detalhes e descubra por que este título conquistou milhões de fãs ao redor do mundo.",

            "Balatro": "Balatro é um jogo de construção de deck inspirado em poker onde você deve jogar mãos ilegais, descobrir Jokers que mudam o jogo e desencadear combinações alucinantes. Combine cartas legítimas de poker com Jokers únicos para criar sinergias e combinações poderosas.",
        };

        // 🎮 Quando clicar em qualquer botão "Ver mais"
        document.querySelectorAll(".bottom").forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();

                const card = button.closest(".card");
                const titulo = card.querySelector("h1").textContent;

                // Atualiza o conteúdo do modal
                modalTitle.textContent = titulo;
                modalDescription.textContent = textos[titulo];
                modalLink.href = button.href;

                // Mostra o modal
                modal.style.display = "flex";
            });
        });

        // Botão X e clique fora do modal fecham ele
        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };