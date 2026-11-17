import { type ReactNode, useEffect, useState } from 'react'
import goatgram from './assets/goat-phone/goatgram.png'
import home from './assets/goat-phone/home.png'
import lock from './assets/goat-phone/lock.png'
import zap from './assets/goat-phone/zap.png'
import { career, contact, features, now, systems } from './content'

const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'sistemas', label: 'Sistemas' },
]

const phoneScreens = [
  { label: 'Tela de bloqueio', src: lock },
  { label: 'Tela inicial', src: home },
  { label: 'Zap', src: zap },
  { label: 'Goatgram', src: goatgram },
]

function useLocalTime() {
  const format = () =>
    new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date())
  const [time, setTime] = useState(format)

  useEffect(() => {
    const timer = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(timer)
  }, [])

  return time
}

function useActiveSection() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [])

  return active
}

function Icon({ path, label }: { path: string; label: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" role="img" aria-label={label}>
      <path d={path} />
    </svg>
  )
}

const icons = {
  github:
    'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  mail: 'M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3-.5 7.7 6.16L19.7 5H4.3ZM20 6.6l-7.38 5.9a1 1 0 0 1-1.24 0L4 6.6v11.9c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V6.6Z',
}

function StatusLine() {
  const time = useLocalTime()

  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dim">
      <span className="flex items-center gap-2 text-bright">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-online opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-online" />
        </span>
        Disponível para trabalho
      </span>
      <span>Diadema, SP</span>
      <span className="tabular-nums">{time} no horário local</span>
    </p>
  )
}

function Sidebar({ active }: { active: string }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <StatusLine />
        <h1 className="name-display mt-8 text-5xl text-bright sm:text-6xl">
          Samuel <span className="text-ember">Santana</span>
        </h1>
        <h2 className="mt-4 text-xl font-medium text-bright">Desenvolvedor Full Stack</h2>
        <p className="mt-4 max-w-xs leading-relaxed">
          Faço sistemas para servidores de GTA V, do jogo até os serviços web que rodam ao lado.
        </p>
        <nav className="mt-16 hidden lg:block" aria-label="Seções">
          <ul className="space-y-1">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive ? 'w-16 bg-bright' : 'w-8 bg-dim group-hover:w-16 group-hover:bg-bright'
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isActive ? 'text-bright' : 'text-dim group-hover:text-bright'
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <ul className="mt-8 flex items-center gap-5" aria-label="Contato">
        <li>
          <a href={contact.github} className="block text-dim hover:text-bright">
            <Icon path={icons.github} label="GitHub" />
          </a>
        </li>
        <li>
          <a href={contact.linkedin} className="block text-dim hover:text-bright">
            <Icon path={icons.linkedin} label="LinkedIn" />
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="block text-dim hover:text-bright">
            <Icon path={icons.mail} label="E-mail" />
          </a>
        </li>
      </ul>
    </header>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
      <h2 className="sticky top-0 z-10 -mx-6 mb-6 bg-night/80 px-6 py-5 text-sm font-bold text-bright backdrop-blur lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-ember/10 px-3 py-1 text-xs font-medium text-ember">
          {item}
        </li>
      ))}
    </ul>
  )
}

function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="space-y-4 leading-relaxed">
        <p>
          Comecei em 2019 com um servidor de roleplay próprio. Em 2021 passei a programar para outros
          servidores e, depois, para empresas do setor como <span className="text-bright">Lotus Group</span>,{' '}
          <span className="text-bright">Fusion Group</span> e <span className="text-bright">WinsVUE</span>.
        </p>
        <p>
          No dia a dia escrevo Lua e Node.js no back-end, MySQL e PostgreSQL no banco e React com TypeScript
          nas interfaces. Já fiz de inventário e economia de jogo a sistema de logs, bot de Discord e painel de
          moderação com API.
        </p>
        <p>
          Hoje cuido, junto com um sócio, de dois servidores que passam de 700 jogadores ao mesmo tempo, e
          estou procurando uma vaga CLT ou PJ como desenvolvedor full stack, back-end ou de jogos.
        </p>
      </div>
      <ul className="mt-10 grid gap-3 sm:grid-cols-3">
        {now.map((item) => (
          <li key={item.label} className="rounded-lg border border-line bg-night-raised/60 p-4">
            <p className="text-xs font-medium text-ember">{item.label}</p>
            <p className="mt-2 font-semibold text-bright">{item.title}</p>
            <p className="mt-1 text-sm text-dim">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="group/list space-y-12">
        {career.map((step) => (
          <li key={step.period} className="transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <div className="grid gap-2 rounded-lg sm:grid-cols-8 sm:gap-6 lg:-m-4 lg:p-4 lg:hover:bg-night-raised/70">
              <p className="pt-1 text-xs font-semibold text-dim sm:col-span-2">{step.period}</p>
              <div className="sm:col-span-6">
                <h3 className="font-semibold leading-snug text-bright">
                  {step.role} <span className="text-dim">em</span> {step.place}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{step.summary}</p>
                <Tags items={step.tech} />
              </div>
            </div>
          </li>
        ))}
      </ol>
      <a
        href={contact.linkedin}
        className="mt-12 inline-block font-semibold text-bright underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
      >
        Ver perfil completo no LinkedIn
      </a>
    </Section>
  )
}

function PhoneThumb() {
  const [index, setIndex] = useState(0)
  const screen = phoneScreens[index]

  return (
    <div className="w-32 flex-none">
      <button
        type="button"
        onClick={() => setIndex((index + 1) % phoneScreens.length)}
        className="block"
        aria-label={`Mostrar próxima tela do Goat Phone. Agora: ${screen.label}`}
      >
        <img
          src={screen.src}
          alt={`${screen.label} do Goat Phone`}
          width={387}
          height={815}
          className="w-full rounded-[1.1rem] border border-line"
        />
      </button>
      <p className="mt-2 text-center text-xs text-dim">Toque para trocar</p>
    </div>
  )
}

function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <ul className="group/list space-y-14">
        {features.map((feature, index) => (
          <li key={feature.title} className="transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <article className="flex flex-col gap-5 rounded-lg sm:flex-row-reverse sm:gap-8 lg:-m-4 lg:p-4 lg:hover:bg-night-raised/70">
              <div className="flex-1">
                <h3 className="font-semibold text-bright">{feature.title}</h3>
                <p className="text-sm text-dim">{feature.context}</p>
                <h4 className="mt-4 text-xs font-semibold text-bright">O problema</h4>
                <p className="mt-1 text-sm leading-relaxed">{feature.problem}</p>
                <h4 className="mt-4 text-xs font-semibold text-bright">O que eu fiz</h4>
                <ul className="mt-1 space-y-1.5 text-sm leading-relaxed">
                  {feature.solution.map((step) => (
                    <li key={step} className="flex gap-2.5">
                      <span className="mt-2 size-1 flex-none rounded-full bg-ember" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-md border-l-2 border-ember bg-ember/5 px-3 py-2 text-sm leading-relaxed text-bright">
                  {feature.result}
                </p>
                <Tags items={feature.stack} />
              </div>
              {index === 0 ? <PhoneThumb /> : null}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Systems() {
  return (
    <Section id="sistemas" title="Sistemas">
      <p className="leading-relaxed">
        Outros sistemas que escrevi para os servidores. O código pertence aos clientes, então descrevo o que
        cada um faz.
      </p>
      <dl className="mt-8 divide-y divide-line border-y border-line">
        {systems.map((system) => (
          <div key={system.name} className="grid gap-1 py-4 sm:grid-cols-8 sm:gap-6">
            <dt className="text-xs font-semibold text-dim sm:col-span-2 sm:pt-1">{system.where}</dt>
            <dd className="sm:col-span-6">
              <p className="font-medium text-bright">{system.name}</p>
              <p className="mt-1 text-sm leading-relaxed">{system.summary}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function App() {
  const active = useActiveSection()

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 sm:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar active={active} />
        <main className="pt-20 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Systems />
          <footer className="max-w-md pb-16 text-sm text-dim">
            Escrito em React, TypeScript e Tailwind. O código está no{' '}
            <a href={contact.github} className="font-medium text-text hover:text-ember">
              GitHub
            </a>
            . Para conversar, mande um e-mail para{' '}
            <a href={`mailto:${contact.email}`} className="font-medium text-text hover:text-ember">
              {contact.email}
            </a>
            .
          </footer>
        </main>
      </div>
    </div>
  )
}
