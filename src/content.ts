export const contact = {
  email: 'meliodax22@outlook.com',
  linkedin: 'https://www.linkedin.com/in/samuel-santana-dev/',
  github: 'https://github.com/meliodax',
}

export type NowItem = {
  label: string
  title: string
  detail: string
}

export const now: NowItem[] = [
  { label: 'Construindo', title: 'Goat Phone', detail: 'Novos apps para o celular' },
  { label: 'Mantendo', title: 'Vice e Juice', detail: '700+ jogadores ao mesmo tempo' },
  { label: 'Estudando', title: 'Inglês', detail: '30 minutos por dia' },
]

export type CareerStep = {
  period: string
  role: string
  place: string
  summary: string
  tech: string[]
}

export const career: CareerStep[] = [
  {
    period: '2024 até hoje',
    role: 'Desenvolvedor principal',
    place: 'Vice e Juice',
    summary:
      'Base própria de dois servidores, feita em sociedade, com mais de 700 jogadores simultâneos. Uns 100 sistemas no jogo e os serviços em Node.js que rodam ao lado: bot de Discord, servidor de mídia e loja.',
    tech: ['Lua', 'Node.js', 'React', 'MySQL', 'discord.js'],
  },
  {
    period: 'dez/2025 a out/2026',
    role: 'Desenvolvedor Full Stack',
    place: 'WinsVUE',
    summary:
      'Revoada RJ, Revoada RJ Season 2 e Lado Leste. Principal desenvolvedor do Revoada, autor do sistema de logs, do painel da staff e da revisão que tirou carga do banco no horário de pico.',
    tech: ['Lua', 'React', 'TypeScript', 'PostgreSQL', 'Next.js'],
  },
  {
    period: 'ago/2025 a dez/2025',
    role: 'Desenvolvedor Full Stack',
    place: 'Fusion Group',
    summary:
      'Sistemas de gameplay e economia do Revoada RJ. Continuei no projeto quando o servidor foi vendido para a WinsVUE.',
    tech: ['Lua', 'React', 'MySQL'],
  },
  {
    period: '2024 a 2025',
    role: 'Desenvolvedor Back-end',
    place: 'Lotus Group',
    summary: 'Base de servidores do grupo e biblioteca de interfaces compartilhada entre os projetos.',
    tech: ['Lua', 'MySQL', 'React'],
  },
  {
    period: '2021 a 2024',
    role: 'Desenvolvedor FiveM',
    place: 'Freelancer',
    summary: 'Scripts sob encomenda para servidores, como HUD, roubos e ferramentas para vRP.',
    tech: ['Lua', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    period: '2019 a 2021',
    role: 'Fundador',
    place: 'Servidor de roleplay próprio',
    summary: 'Onde comecei. Comunidade, equipe de staff, monetização e operação do dia a dia.',
    tech: [],
  },
]

export type Feature = {
  title: string
  context: string
  problem: string
  solution: string[]
  result: string
  stack: string[]
}

export const features: Feature[] = [
  {
    title: 'Goat Phone',
    context: 'Produto próprio, 2026',
    problem:
      'Todo servidor de roleplay precisa de um celular dentro do jogo, onde o jogador troca mensagens, posta fotos, ouve música e liga para os outros. Os que existem no mercado costumam funcionar com uma base de servidor só e são difíceis de manter.',
    solution: [
      'Criei com meu sócio um celular completo, vendido como produto, com apps de mensagens, rede social, vídeos curtos, música, câmera, fotos, notas e contatos.',
      'A tela do celular é um site em React que roda dentro do jogo. A parte que guarda os dados roda no servidor, em Lua, com banco MySQL.',
      'Como cada servidor usa uma base diferente (vRP, ESX, QBCore), fiz uma camada de adaptação que deixa o mesmo celular funcionar em qualquer uma delas.',
      'Cada app tem testes automáticos que rodam antes de cada entrega, e o celular está em português, inglês e espanhol.',
    ],
    result: 'Um produto que o dono do servidor instala e usa sem depender da base que escolheu.',
    stack: ['React 19', 'TypeScript', 'Tailwind', 'zustand', 'Vitest', 'Lua', 'MySQL'],
  },
  {
    title: 'Revoada Logs',
    context: 'WinsVUE, 2026',
    problem:
      'Toda ação importante no servidor, como compras, transferências de dinheiro e punições, virava uma mensagem em canais do Discord. Com milhares de mensagens por dia, a equipe não conseguia investigar uma denúncia: não dava para filtrar por jogador, data ou tipo de ação.',
    solution: [
      'Criei um serviço que recebe esses registros do jogo em lotes e guarda tudo num banco de dados próprio (PostgreSQL).',
      'O banco é dividido por dia e apaga sozinho o que passa de 30 dias, então não cresce sem limite.',
      'Fiz um site onde a staff entra com a conta do Discord e pesquisa por jogador, canal ou organização, com painéis de volume por período.',
      'O mesmo sistema atende mais de um servidor, cada um com seus usuários e dados separados.',
    ],
    result: 'Investigar uma denúncia deixou de ser rolar canais do Discord e passou a ser uma busca num site.',
    stack: ['Node.js', 'PostgreSQL', 'Next.js', 'Caddy', 'pm2'],
  },
  {
    title: 'Painel da staff e API externa',
    context: 'WinsVUE, 2026',
    problem:
      'A equipe de moderação precisava das mesmas ferramentas dentro do jogo e num site, sem manter duas versões das regras.',
    solution: [
      'Painel dentro do jogo para achar jogadores, ver o histórico de verificações de tela (quando a staff confere a tela de alguém suspeito de trapaça) e aplicar punições.',
      'Gravação de clipes de 15 segundos da tela do jogador, enviados para um canal do Discord. Se o Discord recusa o arquivo, o clipe vai para o site de logs.',
      'Uma API que deixa um site externo usar as mesmas ações: estatísticas de atendimento da staff, dados das organizações e remoção de jogadores.',
      'Os alertas do anticheat passaram a aparecer no painel e no site de logs.',
    ],
    result: 'A moderação passou a trabalhar com as mesmas ferramentas no jogo e na web.',
    stack: ['Lua', 'React', 'TypeScript', 'MySQL'],
  },
  {
    title: 'Servidor mais leve no horário de pico',
    context: 'Revoada RJ, 2026',
    problem:
      'Quando o servidor enchia, tudo ficava lento. O jogo gravava os dados de cada jogador no banco de dados a cada segundo, e algumas buscas pesadas travavam o resto.',
    solution: [
      'Os dados dos jogadores passaram a ficar na memória e ser gravados a cada 5 minutos, cada jogador no seu próprio horário, para as gravações não acontecerem todas de uma vez.',
      'Informações consultadas o tempo todo, como os dados de cada conta, passaram a ficar guardadas em memória (cache) em vez de serem buscadas no banco toda vez.',
      'Reescrevi as quatro buscas que mais pesavam nos horários de pico e fiz as telas de garagens e casas atualizarem só o que mudou, em vez de recarregar tudo.',
    ],
    result:
      'Cerca de 300 vezes menos gravações por jogador, e o banco deixou de ser o gargalo quando o servidor lota.',
    stack: ['Lua', 'MySQL', 'oxmysql'],
  },
]

export type System = {
  name: string
  where: string
  summary: string
}

export const systems: System[] = [
  {
    name: 'Progressão de personagem',
    where: 'Juice',
    summary:
      'O personagem evolui em três trilhas: carreira legal (empregos, polícia e paramédico), reputação no crime e físico, que melhora correndo, nadando e lutando. Cada trilha tem níveis e pontos para desbloquear habilidades, mostrados no menu de pausa.',
  },
  {
    name: 'Disputa de território',
    where: 'Juice',
    summary:
      'Evento em que as organizações disputam uma região capturando três pontos (A, B e C). Tem agenda de disputas, placar ao vivo na tela, tela final com a contribuição de cada jogador e ranking histórico.',
  },
  {
    name: 'Corridas',
    where: 'Juice',
    summary:
      'Corridas com sala de espera onde o jogador vê quem aceitou o convite, temporadas, ranking e um painel para a administração criar e editar pistas. Toda a interface foi feita em React.',
  },
  {
    name: 'Computador da polícia',
    where: 'Juice',
    summary:
      'Sistema da polícia para aplicar multas, registrar prisões e reduzir penas, com bate-ponto por delegacia, códigos de ocorrência, perímetros marcados no mapa e central de chamados.',
  },
  {
    name: 'Player de música',
    where: 'Juice',
    summary:
      'Um aplicativo de música dentro do jogo, no estilo Spotify, com busca, playlists, curtidas, fila e modo festa para ouvir junto com outros jogadores. Uma API própria busca as faixas e guarda o áudio em cache.',
  },
  {
    name: 'Vagas de trabalho nos postos',
    where: 'Juice',
    summary:
      'Donos de postos de combustível publicam vagas e os jogadores aceitam pelo mural. O pagamento fica guardado até o serviço ser concluído e volta para o dono se a vaga for cancelada.',
  },
  {
    name: 'Central da staff',
    where: 'Juice',
    summary:
      'Controle do que cada cargo da equipe pode fazer, com exceções por jogador, gestão dos criadores de conteúdo (liberação, renovação e nível) e aviso na tela quando alguém abre um chamado de suporte.',
  },
  {
    name: 'Bot de Discord da cidade',
    where: 'Vice e Juice',
    summary:
      'Libera a entrada de novos jogadores, abre tickets de suporte com histórico salvo, mostra o perfil de cada um e aplica a mesma punição no jogo e no Discord.',
  },
  {
    name: 'Servidor de mídia',
    where: 'Vice',
    summary:
      'Guarda as fotos, áudios e vídeos enviados pelo celular do jogo. Substituiu serviços de terceiros que o servidor usava antes.',
  },
  {
    name: 'Hub de missões e eventos',
    where: 'Revoada RJ',
    summary:
      'Central onde o jogador vê missões e eventos, com painel para os influenciadores do servidor e controle das vitórias de cada organização no modo Battle Royale.',
  },
  {
    name: 'Organizações',
    where: 'Revoada RJ',
    summary:
      'Gestão das facções: metas, recompensas, cargos e permissões de cada membro, com cache para não sobrecarregar o banco.',
  },
  {
    name: 'Inventário e fabricação',
    where: 'Revoada RJ',
    summary:
      'Mochila do jogador com testes automáticos e sistema de fabricação de itens, individual ou por organização, com registro de tudo que é produzido.',
  },
]
