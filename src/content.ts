import goatgram from './assets/goat-phone/goatgram.png'
import home from './assets/goat-phone/home.png'
import lock from './assets/goat-phone/lock.png'
import zap from './assets/goat-phone/zap.png'
import logsBusca from './assets/projects/logs-busca.png'
import painelDeteccoes from './assets/projects/painel-deteccoes.png'
import painelJogadores from './assets/projects/painel-jogadores.png'

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
  { label: 'Buscando', title: 'Vaga full stack', detail: 'CLT ou PJ, fora dos jogos também' },
  { label: 'Mantendo', title: 'Vice e Juice', detail: '700+ usuários ao mesmo tempo' },
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
      'Plataforma própria, feita em sociedade, com mais de 700 usuários conectados ao mesmo tempo. Cuido do back-end, do banco de dados, das interfaces e dos serviços em Node.js que rodam ao lado: bot de Discord, servidor de mídia e loja virtual.',
    tech: ['Lua', 'Node.js', 'React', 'MySQL', 'discord.js'],
  },
  {
    period: 'dez/2025 a out/2026',
    role: 'Desenvolvedor Full Stack',
    place: 'WinsVUE',
    summary:
      'Principal desenvolvedor de três servidores da empresa. Criei o sistema de logs (Node.js, PostgreSQL e Next.js), o painel de moderação com transmissão de tela por WebRTC e a otimização que tirou carga do banco no horário de pico.',
    tech: ['Node.js', 'PostgreSQL', 'Next.js', 'Vue', 'WebRTC', 'Lua'],
  },
  {
    period: 'ago/2025 a dez/2025',
    role: 'Desenvolvedor Full Stack',
    place: 'Fusion Group',
    summary:
      'Regras de negócio e economia do servidor Revoada RJ, do banco de dados à interface. Continuei no projeto quando ele foi vendido para a WinsVUE.',
    tech: ['Lua', 'React', 'MySQL'],
  },
  {
    period: '2024 a 2025',
    role: 'Desenvolvedor Back-end',
    place: 'Lotus Group',
    summary: 'Back-end dos servidores do grupo e biblioteca de componentes de interface compartilhada entre os projetos.',
    tech: ['Lua', 'MySQL', 'React'],
  },
  {
    period: '2021 a 2024',
    role: 'Desenvolvedor',
    place: 'Freelancer',
    summary: 'Sistemas sob encomenda para servidores de jogo. Comecei no back-end e passei a fazer também as interfaces.',
    tech: ['Lua', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    period: '2019 a 2021',
    role: 'Fundador',
    place: 'Servidor de jogo próprio',
    summary: 'Onde comecei. Comunidade, equipe de suporte, monetização e operação do dia a dia.',
    tech: [],
  },
]

export type Shot = {
  label: string
  src: string
}

export type Feature = {
  title: string
  context: string
  problem: string
  solution: string[]
  result: string
  stack: string[]
  shots: Shot[]
  shape: 'wide' | 'phone'
}

export const features: Feature[] = [
  {
    title: 'Sistema de logs com busca',
    context: 'WinsVUE, 2026',
    problem:
      'Toda ação importante no servidor, como compras, transferências de dinheiro e punições, virava uma mensagem em canais do Discord. Com milhares de mensagens por dia, a equipe não conseguia investigar uma denúncia: não dava para filtrar por usuário, data ou tipo de ação.',
    solution: [
      'Criei um serviço em Node.js que recebe esses eventos em lotes e grava num banco PostgreSQL próprio.',
      'O banco é dividido por dia (particionamento) e apaga sozinho o que passa de 30 dias, então não cresce sem limite. Os contadores do painel usam views materializadas para não pesar nas buscas.',
      'Fiz o site em Next.js: login com a conta do Discord, busca em todos os campos, filtros por categoria e gráficos de volume por hora e por dia.',
      'O mesmo sistema atende mais de um servidor, cada um com seus usuários e dados separados, publicado com Caddy (HTTPS) e pm2.',
    ],
    result: 'Investigar uma denúncia deixou de ser rolar canais do Discord e passou a ser uma busca num site.',
    stack: ['Node.js', 'PostgreSQL', 'Next.js', 'React', 'Tailwind', 'Caddy'],
    shots: [{ label: 'Busca de logs', src: logsBusca }],
    shape: 'wide',
  },
  {
    title: 'Painel de moderação com tela ao vivo',
    context: 'WinsVUE, 2026',
    problem:
      'Para pegar trapaça, a equipe de moderação precisava ver a tela do jogador na hora, filtrar quem estava em situação suspeita e ter uma prova gravada, tudo sem sair do jogo.',
    solution: [
      'Interface em Vue 3 com filtros de usuários (novatos, armados, parados, em combate), lista de moderadores, organizações e alertas do anticheat.',
      'Transmissão ao vivo da tela do jogador para o moderador por WebRTC, com até seis câmeras abertas ao mesmo tempo.',
      'Gravação de clipes de 15 segundos com MediaRecorder, enviados ao Discord. Se o Discord recusa o arquivo, o clipe vai para o sistema de logs.',
      'Uma API que deixa um site externo usar as mesmas ações: estatísticas de atendimento, dados das organizações e remoção de usuários.',
    ],
    result: 'A moderação passou a ver, gravar e agir sobre um caso suspeito no mesmo lugar.',
    stack: ['Vue 3', 'TypeScript', 'WebRTC', 'MediaRecorder', 'Lua', 'MySQL'],
    shots: [
      { label: 'Usuários online', src: painelJogadores },
      { label: 'Alertas do anticheat', src: painelDeteccoes },
    ],
    shape: 'wide',
  },
  {
    title: 'Banco de dados mais leve no pico',
    context: 'Revoada RJ, 2026',
    problem:
      'Quando o servidor enchia, tudo ficava lento. O sistema gravava os dados de cada usuário no banco a cada segundo, e algumas consultas pesadas travavam o resto.',
    solution: [
      'Os dados passaram a ficar em memória e ser gravados a cada 5 minutos, cada usuário no seu próprio horário, para as gravações não acontecerem todas de uma vez.',
      'Informações consultadas o tempo todo, como os dados de cada conta, passaram a ficar em cache em vez de irem ao banco toda vez.',
      'Reescrevi as quatro consultas que mais pesavam no pico e troquei recargas completas por atualizações só do que mudou.',
    ],
    result: 'Cerca de 300 vezes menos gravações por usuário, e o banco deixou de ser o gargalo quando o servidor lota.',
    stack: ['Lua', 'MySQL', 'Cache', 'Otimização de consultas'],
    shots: [],
    shape: 'wide',
  },
  {
    title: 'Goat Phone',
    context: 'Produto próprio, 2026',
    problem:
      'Todo servidor de jogo precisa de um celular virtual, onde o usuário troca mensagens, posta fotos e ouve música. Os que existem costumam funcionar com uma base só e são difíceis de manter.',
    solution: [
      'Criei com meu sócio um celular completo, vendido como produto, com apps de mensagens, rede social, vídeos curtos, música, câmera, fotos, notas e contatos.',
      'A interface é um app React 19 com TypeScript; o back-end é em Lua com MySQL, organizado em rotas, regras de negócio e acesso a dados.',
      'Uma camada de adaptação deixa o mesmo produto funcionar em três plataformas diferentes (vRP, ESX e QBCore).',
      'Testes automáticos nas duas pontas, integração contínua no GitHub e tradução para português, inglês e espanhol.',
    ],
    result: 'Um produto que o cliente instala e usa sem depender da plataforma que escolheu.',
    stack: ['React 19', 'TypeScript', 'Tailwind', 'zustand', 'Vitest', 'Lua', 'MySQL'],
    shots: [
      { label: 'Bloqueio', src: lock },
      { label: 'Início', src: home },
      { label: 'Mensagens', src: zap },
      { label: 'Rede social', src: goatgram },
    ],
    shape: 'phone',
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
      'O personagem evolui em três trilhas: carreira legal (empregos, polícia e paramédico), reputação no crime e físico, que melhora correndo, nadando e lutando. Cada trilha tem níveis e pontos para desbloquear habilidades.',
  },
  {
    name: 'Disputa de território',
    where: 'Juice',
    summary:
      'Evento em que as organizações disputam uma região capturando três pontos. Tem agenda, placar ao vivo, tela final com a contribuição de cada um e ranking histórico.',
  },
  {
    name: 'Corridas',
    where: 'Juice',
    summary:
      'Sala de espera com o status de cada convidado, temporadas, ranking e painel para a administração criar e editar pistas, com interface em React.',
  },
  {
    name: 'Sistema da polícia',
    where: 'Juice',
    summary:
      'Multas, prisões e redução de penas, com bate-ponto por unidade, códigos de ocorrência, perímetros no mapa e central de chamados.',
  },
  {
    name: 'Player de música',
    where: 'Juice',
    summary:
      'App de música no estilo Spotify, com busca, playlists, curtidas, fila e modo festa para ouvir junto. Uma API em Node.js busca as faixas e guarda o áudio em cache.',
  },
  {
    name: 'Vagas de trabalho com pagamento garantido',
    where: 'Juice',
    summary:
      'Donos de estabelecimento publicam vagas e os usuários aceitam pelo mural. O pagamento fica retido até o serviço ser concluído e volta ao dono se a vaga for cancelada.',
  },
  {
    name: 'Controle de acesso da equipe',
    where: 'Juice',
    summary:
      'Permissões por cargo com exceções por pessoa, gestão de criadores de conteúdo (liberação, renovação e nível) e aviso na tela quando alguém abre um chamado de suporte.',
  },
  {
    name: 'Bot de Discord',
    where: 'Vice e Juice',
    summary:
      'Libera a entrada de novos usuários, abre tickets de suporte com histórico salvo, mostra o perfil de cada um e aplica a mesma punição no jogo e no Discord.',
  },
  {
    name: 'Servidor de mídia',
    where: 'Vice',
    summary:
      'API em Node.js com Express que recebe e hospeda fotos, áudios e vídeos enviados pelo celular do jogo. Substituiu serviços de terceiros.',
  },
  {
    name: 'Hub de missões e eventos',
    where: 'Revoada RJ',
    summary:
      'Central de missões e eventos, com painel para os influenciadores e controle das vitórias de cada organização no modo Battle Royale.',
  },
  {
    name: 'Organizações',
    where: 'Revoada RJ',
    summary: 'Gestão de grupos com metas, recompensas, cargos e permissões, com cache para não sobrecarregar o banco.',
  },
  {
    name: 'Inventário e fabricação',
    where: 'Revoada RJ',
    summary:
      'Inventário do usuário com testes automáticos e fabricação de itens, individual ou por grupo, com registro de tudo que é produzido.',
  },
]
