export const contact = {
  email: 'meliodax22@outlook.com',
  linkedin: 'https://www.linkedin.com/in/samuel-santana-dev/',
  github: 'https://github.com/meliodax22',
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
  summary: string
  points: string[]
  stack: string[]
}

export const features: Feature[] = [
  {
    title: 'Goat Phone',
    context: 'Produto próprio, 2026',
    summary:
      'Celular para servidores FiveM, vendido como produto e feito em dupla. A interface é um app React que roda dentro do jogo e o servidor é escrito em Lua com MySQL.',
    points: [
      'Uma camada de integração faz o mesmo celular funcionar em vRP, ESX, QBCore ou sem framework.',
      'Cada app tem um contrato tipado entre interface e servidor, com testes nas duas pontas.',
      'Tradução para português, inglês e espanhol.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind', 'zustand', 'Vitest', 'Lua', 'MySQL'],
  },
  {
    title: 'Revoada Logs',
    context: 'WinsVUE, 2026',
    summary:
      'Os logs do servidor saíam em canais do Discord e ninguém conseguia buscar nada. Construí um sistema próprio: o jogo manda os eventos em lotes, um serviço grava no banco e a staff pesquisa num site.',
    points: [
      'Ingestão em Node.js gravando em PostgreSQL particionado por dia, com retenção de 30 dias.',
      'Views materializadas para os contadores por canal e organização.',
      'Site em Next.js com login pelo Discord, separado por servidor de jogo, com HTTPS pelo Caddy.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Next.js', 'Caddy', 'pm2'],
  },
  {
    title: 'Painel da staff e API externa',
    context: 'WinsVUE, 2026',
    summary:
      'Painel dentro do jogo para a equipe de moderação, com as mesmas ações liberadas para um site externo por uma API.',
    points: [
      'Filtro de jogadores, histórico de verificação de tela e ações de moderação.',
      'Clipes de 15 segundos enviados para o Discord, com o site de logs como alternativa.',
      'Rotas para estatísticas de atendimento, organizações e remoção de jogadores.',
    ],
    stack: ['Lua', 'React', 'TypeScript', 'MySQL'],
  },
  {
    title: 'Menos carga no banco',
    context: 'Revoada RJ, 2026',
    summary:
      'Com o servidor cheio, o banco virava o gargalo. Revisei o caminho de gravação e as consultas mais pesadas do horário de pico.',
    points: [
      'Dados dos jogadores salvos a cada 5 minutos, com prazo próprio por jogador, em vez de a cada segundo.',
      'Cache dos dados de usuário no lugar de uma consulta por chamada.',
      'As quatro consultas mais pesadas do pico reescritas.',
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
    summary: 'Três trilhas de XP com ranks e pontos de habilidade, na aba Carreira do menu de pausa.',
  },
  {
    name: 'Dominação de território',
    where: 'Juice',
    summary: 'Disputa entre organizações por pontos A, B e C, com agenda, HUD da partida e ranking.',
  },
  {
    name: 'Bot de Discord da cidade',
    where: 'Vice e Juice',
    summary: 'Whitelist, tickets com transcrição em HTML e punições sincronizadas entre jogo e Discord.',
  },
  {
    name: 'Servidor de mídia',
    where: 'Vice',
    summary: 'Upload e hospedagem de fotos, áudios e vídeos do celular do jogo.',
  },
  {
    name: 'Hub de missões e eventos',
    where: 'Revoada RJ',
    summary: 'Central de missões, painel de influenciadores e vitórias de Battle Royale por organização.',
  },
  {
    name: 'Organizações',
    where: 'Revoada RJ',
    summary: 'Facções com metas, recompensas, cargos e permissões, com cache para aliviar o banco.',
  },
  {
    name: 'Inventário e craft',
    where: 'Revoada RJ',
    summary: 'Inventário com testes automatizados e fabricação individual e por organização.',
  },
  {
    name: 'Central da staff',
    where: 'Revoada RJ',
    summary: 'Frota de garagens, catálogo de veículos, rotação de mapas e pontos de teleporte.',
  },
]
