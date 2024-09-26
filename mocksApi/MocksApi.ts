export const dadosLista = [
    {idService: 1, idProvider: 1, title: "Desenvolvedor Front-End", descricao: "Realizo um trabalho completo da criação do front end das aplicações."},
    {idService: 2, idProvider: 1, title: "Designer Gráfico", descricao: "Crio designs visuais atraentes para marcas, incluindo logotipos, materiais impressos e gráficos para mídias sociais."},
    {idService: 3, idProvider: 2, title: "Redator de Conteúdo", descricao: "Produzo conteúdo otimizado para SEO, artigos de blog, e textos persuasivos que engajam e informam o público."},
    {idService: 4, idProvider: 3, title: "Desenvolvedor Backend", descricao: "Especializado em construir APIs robustas e escaláveis, garantindo a integração eficaz com o front-end e banco de dados."},
    {idService: 5, idProvider: 4, title: "Consultor de Marketing Digital", descricao: "Ofereço estratégias personalizadas para aumentar a presença online da sua marca, incluindo gestão de redes sociais e campanhas de anúncios."},
    {idService: 6, idProvider: 5, title: "Fotógrafo Profissional", descricao: "Capturo momentos únicos em eventos, retratos e ensaios fotográficos com foco na qualidade e na estética."},
    {idService: 7, idProvider: 6, title: "Desenvolvedor de Aplicativos Móveis", descricao: "Crio aplicativos móveis intuitivos e funcionais para iOS e Android, focando na experiência do usuário e performance."},
    {idService: 8, idProvider: 7, title: "Treinamento em Desenvolvimento Pessoal", descricao: "Ofereço workshops e sessões de coaching para ajudar indivíduos a alcançarem seus objetivos pessoais e profissionais."},
    {idService: 9, idProvider: 8, title: "Especialista em SEO", descricao: "Melhoro a visibilidade do seu site nos mecanismos de busca através de técnicas de otimização e análise de palavras-chave."},
    {idService: 10, idProvider: 9, title: "Consultor Financeiro", descricao: "Auxilio na gestão financeira, elaboração de orçamentos e estratégias de investimento para alcançar suas metas financeiras."},
    {idService: 11, idProvider: 10, title: "Professor Particular de Matemática", descricao: "Ofereço aulas personalizadas de matemática para estudantes de todas as idades, focando em técnicas de aprendizado eficientes."}
]; 

export const dadosProviders = [
    {
        idProvider: 1,
        email: "aranprovider@teste.com",
        password: "123456789",
        name: "Aran Provider",
        gender: "male",
        age: 21,
        aboutMe: "Eu sou uma pessoa muito tranquila!",
        services: [1, 2] // Conectando a Serviços 1 e 2
    },
    {
        idProvider: 2,
        email: "johndoe@teste.com",
        password: "123456789",
        name: "John Doe",
        gender: "male",
        age: 28,
        aboutMe: "Sou um redator apaixonado por contar histórias.",
        services: [3] // Conectando ao Serviço 3
    },
    {
        idProvider: 3,
        email: "janedoe@teste.com",
        password: "123456789",
        name: "Jane Doe",
        gender: "female",
        age: 25,
        aboutMe: "Designer gráfico com experiência em branding.",
        services: [4] // Conectando ao Serviço 4
    },
    {
        idProvider: 4,
        email: "marksmith@teste.com",
        password: "123456789",
        name: "Mark Smith",
        gender: "male",
        age: 30,
        aboutMe: "Consultor de marketing digital, especialista em redes sociais.",
        services: [5] // Conectando ao Serviço 5
    },
    {
        idProvider: 5,
        email: "emilyjones@teste.com",
        password: "123456789",
        name: "Emily Jones",
        gender: "female",
        age: 27,
        aboutMe: "Fotógrafa profissional focada em retratos.",
        services: [6] // Conectando ao Serviço 6
    },
    {
        idProvider: 6,
        email: "alexbrown@teste.com",
        password: "123456789",
        name: "Alex Brown",
        gender: "non-binary",
        age: 26,
        aboutMe: "Desenvolvedor de aplicativos móveis.",
        services: [7] // Conectando ao Serviço 7
    },
    {
        idProvider: 7,
        email: "sarahconnor@teste.com",
        password: "123456789",
        name: "Sarah Connor",
        gender: "female",
        age: 29,
        aboutMe: "Coach de desenvolvimento pessoal.",
        services: [8] // Conectando ao Serviço 8
    },
    {
        idProvider: 8,
        email: "robertbrown@teste.com",
        password: "123456789",
        name: "Robert Brown",
        gender: "male",
        age: 32,
        aboutMe: "Especialista em SEO.",
        services: [9] // Conectando ao Serviço 9
    },
    {
        idProvider: 9,
        email: "michaelclark@teste.com",
        password: "123456789",
        name: "Michael Clark",
        gender: "male",
        age: 34,
        aboutMe: "Consultor financeiro experiente.",
        services: [10] // Conectando ao Serviço 10
    },
    {
        idProvider: 10,
        email: "lindawhite@teste.com",
        password: "123456789",
        name: "Linda White",
        gender: "female",
        age: 22,
        aboutMe: "Professora particular de matemática.",
        services: [11] // Conectando ao Serviço 11
    }
];

export const dadosAgendamentosApi:any = [
    {"data": "27/09/2024", "hora": "14:30", "idAgendamento": 19, "idClient": 1, "idService": 1, "infoService": {"descricao": "Realizo um trabalho completo da criação do front end das aplicações.", "idProvider": 1, "idService": 1, "title": "Desenvolvedor Front-End"}, "statusClient": "confirmed", "statusProvider": "pending"}
]

export const dadosServiceProvider = [
    {idProvider: 1, title: "Designer Gráfico", descricao: "Crio designs visuais atraentes para marcas, incluindo logotipos, materiais impressos e gráficos para mídias sociais."}
]
