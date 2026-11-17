import { useState } from 'react'
import goatgram from './assets/goat-phone/goatgram.png'
import home from './assets/goat-phone/home.png'
import lock from './assets/goat-phone/lock.png'
import zap from './assets/goat-phone/zap.png'
import { career, contact, features, stack, systems } from './content'

const screens = [
  { label: 'Bloqueio', src: lock },
  { label: 'Início', src: home },
  { label: 'Zap', src: zap },
  { label: 'Goatgram', src: goatgram },
]

function PhoneShowcase() {
  const [active, setActive] = useState(0)
  const screen = screens[active]

  return (
    <figure className="mx-auto w-full max-w-[19rem]">
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-panel" aria-hidden="true" />
        <img
          src={screen.src}
          alt={`Tela ${screen.label} do Goat Phone`}
          width={387}
          height={815}
          className="w-full rounded-[2.6rem] shadow-[0_30px_60px_-30px_rgba(21,32,43,0.55)]"
        />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-1" role="tablist" aria-label="Telas do Goat Phone">
        {screens.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              index === active ? 'bg-ink text-paper' : 'text-muted hover:bg-panel hover:text-ink'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-sm text-muted">
        Goat Phone rodando no navegador com dados de exemplo.
      </figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <header className="mx-auto grid max-w-6xl gap-16 px-5 pt-14 pb-24 sm:px-8 md:grid-cols-[1.25fr_1fr] md:items-center md:pt-24">
      <div>
        <h1 className="display text-[clamp(3rem,9vw,6.5rem)]">
          Samuel
          <br />
          Santana
        </h1>
        <p className="mt-8 max-w-[34rem] text-xl leading-relaxed text-ink/85">
          Desenvolvedor full stack. Há 5 anos faço sistemas para servidores de GTA V na plataforma FiveM,
          do jogo até os serviços web que rodam ao lado. Hoje cuido de dois servidores que passam de 700
          jogadores ao mesmo tempo.
        </p>
        <p className="mt-4 text-muted">Lua, TypeScript, React, Node.js e SQL. Diadema, São Paulo.</p>
        <nav className="mt-10 flex flex-wrap items-center gap-3" aria-label="Contato">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-ink px-5 py-3 font-semibold text-paper transition-colors hover:bg-marker hover:text-ink"
          >
            Enviar e-mail
          </a>
          <a href={contact.linkedin} className="rounded-full px-5 py-3 font-semibold ring-1 ring-rule hover:ring-ink">
            LinkedIn
          </a>
          <a href={contact.github} className="rounded-full px-5 py-3 font-semibold ring-1 ring-rule hover:ring-ink">
            GitHub
          </a>
        </nav>
      </div>
      <PhoneShowcase />
    </header>
  )
}

function GoatPhone() {
  return (
    <section className="bg-ink text-paper" aria-labelledby="goat-phone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 id="goat-phone" className="heading text-4xl">
            Goat Phone
          </h2>
          <p className="mt-3 text-paper/60">Produto próprio, 2026, feito em dupla</p>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-paper/85">
          <p>
            Celular para servidores FiveM, vendido como produto. A interface é um app React 19 com
            TypeScript que roda dentro do jogo, e o servidor é escrito em Lua com MySQL.
          </p>
          <p>
            Uma camada de integração faz o mesmo celular funcionar em vRP, ESX, QBCore ou sem framework.
            Cada app tem seu contrato entre interface e servidor, testes automatizados nas duas pontas e
            tradução para português, inglês e espanhol.
          </p>
          <p className="text-base text-paper/60">
            React 19, TypeScript, Vite, Tailwind, zustand, Vitest, Lua 5.4, MySQL
          </p>
        </div>
      </div>
    </section>
  )
}

function Career() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="carreira">
      <h2 id="carreira" className="heading text-4xl">
        Por onde passei
      </h2>
      <ol className="mt-12 border-l-2 border-rule">
        {career.map((step) => (
          <li key={step.period} className="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-10">
            <span className="waypoint absolute top-1.5 -left-[0.53rem]" aria-hidden="true" />
            <p className="font-medium text-muted tabular-nums">{step.period}</p>
            <div className="max-w-[40rem]">
              <h3 className="heading text-xl">{step.role}</h3>
              <p className="text-marker-deep font-semibold">{step.place}</p>
              <p className="mt-2 leading-relaxed text-ink/80">{step.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Features() {
  return (
    <section className="bg-panel" aria-labelledby="projetos">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <h2 id="projetos" className="heading text-4xl">
          Projetos que mais me orgulham
        </h2>
        <div className="mt-14 space-y-16">
          {features.map((feature) => (
            <article key={feature.title} className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
              <div>
                <h3 className="heading text-2xl">{feature.title}</h3>
                <p className="mt-1 text-muted">{feature.context}</p>
                <p className="mt-5 text-sm text-muted">{feature.stack.join(', ')}</p>
              </div>
              <div>
                <p className="text-lg leading-relaxed">{feature.summary}</p>
                <ul className="mt-5 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-ink/80">
                      <span className="mt-2 size-1.5 flex-none rounded-full bg-marker" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Systems() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="sistemas">
      <h2 id="sistemas" className="heading text-4xl">
        Outros sistemas
      </h2>
      <p className="mt-4 max-w-[40rem] text-lg text-muted">
        Uma parte do que escrevi para os servidores. O código é dos clientes, então mostro o que cada um faz.
      </p>
      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {systems.map((system) => (
          <div key={system.name} className="border-t border-rule pt-5">
            <dt className="heading text-lg">{system.name}</dt>
            <dd className="mt-1 text-sm font-semibold text-live">{system.where}</dd>
            <dd className="mt-3 leading-relaxed text-ink/80">{system.summary}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Stack() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8" aria-labelledby="ferramentas">
      <h2 id="ferramentas" className="heading text-4xl">
        Ferramentas
      </h2>
      <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {stack.map((group) => (
          <div key={group.group}>
            <dt className="font-semibold">{group.group}</dt>
            <dd className="mt-2 leading-relaxed text-ink/75">{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Contact() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="heading text-4xl">Vamos conversar</h2>
        <p className="mt-4 max-w-[36rem] text-lg text-paper/75">
          Estou aberto a vagas CLT ou PJ como desenvolvedor full stack, back-end ou de jogos, remoto, híbrido
          ou presencial na Grande São Paulo.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-10 inline-block break-all text-[clamp(1.4rem,4vw,2.6rem)] font-bold text-marker underline decoration-2 underline-offset-8 hover:text-paper"
        >
          {contact.email}
        </a>
        <div className="mt-10 flex gap-6 text-paper/75">
          <a href={contact.linkedin} className="hover:text-paper">
            LinkedIn
          </a>
          <a href={contact.github} className="hover:text-paper">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export function App() {
  return (
    <main>
      <Hero />
      <GoatPhone />
      <Career />
      <Features />
      <Systems />
      <Stack />
      <Contact />
    </main>
  )
}
