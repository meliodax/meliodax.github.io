export const contact = {
  email: 'meliodax22@outlook.com',
  linkedin: 'https://www.linkedin.com/in/samuel-santana-dev/',
  github: 'https://github.com/meliodax22',
}

export type CareerStep = {
  period: string
  role: string
  place: string
  summary: string
}

export const career: CareerStep[] = [
  {
    period: '2024 até hoje',
    role: 'Desenvolvedor principal',
    place: 'Servidores Vice e Juice, em sociedade',
    summary:
      'Base própria de dois servidores com mais de 700 jogadores simultâneos. Uns 100 sistemas no jogo e os serviços em Node.js que rodam ao lado.',
  },
  {
    period: 'dez/2025 a out/2026',
    role: 'Desenvolvedor Full Stack',
    place: 'WinsVUE',
    summary:
      'Revoada RJ, Revoada RJ Season 2 e Lado Leste. Principal desenvolvedor do Revoada, autor do sistema de logs e do painel da staff.',
  },
  {
    period: 'ago/2025 a dez/2025',
    role: 'Desenvolvedor Full Stack',
    place: 'Fusion Group',
    summary:
      'Sistemas de gameplay e economia do Revoada RJ. Continuei no projeto quando o servidor foi vendido para a WinsVUE.',
  },
  {
    period: '2024 a 2025',
    role: 'Desenvolvedor Back-end',
    place: 'Lotus Group',
    summary: 'Base de servidores do grupo e biblioteca de interfaces compartilhada entre os projetos.',
  },
  {
    period: '2021 a 2024',
    role: 'Desenvolvedor FiveM',
    place: 'Freelancer',
    summary: 'Scripts sob encomenda para servidores, como HUD, roubos e ferramentas para vRP.',
  },
  {
    period: '2019 a 2021',
    role: 'Fundador',
    place: 'Servidor de roleplay próprio',
    summary: 'Comunidade, equipe de staff, monetização e operação do dia a dia.',
  },
]

export type Feature = {
  title: string
  context: string
  summary: string
  points: string[]
  stack: string[]
}

export const features: Feature[] = [
  {
    title: 'Revoada Logs',
    context: 'WinsVUE, 2026',
    summary:
      'Os logs do servidor saíam em canais do Discord e ninguém conseguia buscar nada. Construí um sistema próprio: o jogo manda os eventos em lotes, um serviço grava no banco e a staff pesquisa num site.',
    points: [
      'Ingestão em Node.js gravando em PostgreSQL particionado por dia, com retenção de 30 dias.',
      'Views materializadas para os contadores por canal e organização, atualizadas em segundo plano.',
      'Site em Next.js com login pelo Discord, separado por servidor de jogo.',
      'HTTPS automático com Caddy e processos mantidos pelo pm2.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Next.js', 'Caddy', 'pm2'],
  },
  {
    title: 'Painel da staff e API externa',
    context: 'WinsVUE, 2026',
    summary:
      'Painel dentro do jogo para a equipe de moderação, com as mesmas ações liberadas para um site externo por uma API.',
    points: [
      'Lista e filtro de jogadores, histórico de verificação de tela e ações de moderação.',
      'Clipes de 15 segundos enviados para um canal do Discord, com o site de logs como alternativa quando o Discord recusa.',
      'Rotas da API para estatísticas de atendimento, organizações e remoção de jogadores.',
    ],
    stack: ['Lua', 'React', 'TypeScript', 'MySQL'],
  },
  {
    title: 'Menos carga no banco do servidor',
    context: 'Revoada RJ, 2026',
    summary:
      'Com o servidor cheio, o banco virava o gargalo. Revisei o caminho de gravação e as consultas mais pesadas do horário de pico.',
    points: [
      'Dados dos jogadores salvos a cada 5 minutos, com prazo próprio por jogador, em vez de a cada segundo.',
      'Cache dos dados de usuário no lugar de uma consulta por chamada.',
      'As quatro consultas mais pesadas do pico reescritas, e atualizações incrementais nos caches de garagens e casas.',
    ],
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
    summary: 'Três trilhas de XP (carreira legal, reputação criminal e físico), com ranks e pontos de habilidade na aba Carreira do menu de pausa.',
  },
  {
    name: 'Dominação de território',
    where: 'Juice',
    summary: 'Disputa entre organizações por pontos A, B e C, com agenda, HUD da partida, placar final e ranking histórico.',
  },
  {
    name: 'Bot de Discord da cidade',
    where: 'Vice e Juice',
    summary: 'Whitelist automática, tickets com transcrição em HTML, consultas de perfil e punições sincronizadas entre jogo e Discord.',
  },
  {
    name: 'Servidor de mídia',
    where: 'Vice',
    summary: 'Upload e hospedagem de fotos, áudios e vídeos do celular do jogo, substituindo serviços externos.',
  },
  {
    name: 'Hub de missões e eventos',
    where: 'Revoada RJ',
    summary: 'Central de missões, painel de influenciadores e controle de vitórias de Battle Royale por organização.',
  },
  {
    name: 'Organizações',
    where: 'Revoada RJ',
    summary: 'Gestão de facções com metas, recompensas, cargos e permissões do painel, com cache para aliviar o banco.',
  },
  {
    name: 'Inventário e craft',
    where: 'Revoada RJ',
    summary: 'Inventário com testes automatizados e sistema de fabricação individual e por organização, com logs.',
  },
  {
    name: 'Central da staff',
    where: 'Revoada RJ',
    summary: 'Ferramentas de administração: frota de garagens, catálogo de veículos, rotação de mapas e pontos de teleporte.',
  },
  {
    name: 'Minijogos',
    where: 'Revoada RJ',
    summary: 'Painel de jogos de mesa abertos a partir do inventário, com o tema visual do servidor.',
  },
]

export const stack: { group: string; items: string[] }[] = [
  { group: 'Linguagens', items: ['Lua', 'TypeScript', 'JavaScript', 'C#', 'SQL'] },
  { group: 'Front-end', items: ['React', 'Vite', 'Next.js', 'Tailwind CSS'] },
  { group: 'Back-end', items: ['Node.js', 'Express', 'APIs REST', 'discord.js'] },
  { group: 'Dados', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: 'Operação', items: ['Git', 'Linux', 'pm2', 'Caddy', 'Docker'] },
]
