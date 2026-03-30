'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'

const grad = 'linear-gradient(135deg,#4f6ef7 0%,#a78bfa 100%)'

const cards = [
  { icon: '📋', title: 'Démarches administratives', desc: 'Déclaration de décès, clôture de comptes, résiliation de contrats — nous gérons tout à votre place.' },
  { icon: '🔍', title: "Recherche d'assurances",    desc: 'Identification et activation de toutes les assurances vie, prévoyance et garanties auxquelles vous avez droit.' },
  { icon: '🤝', title: 'Accompagnement humain',     desc: "Un conseiller dédié à vos côtés à chaque étape, disponible et à l'écoute de vos besoins." },
]

const testimonials = [
  { initials: 'ML', name: 'Marie L.',  location: 'Lyon, 2024',     text: "« Après le décès de mon père, je ne savais pas par où commencer. Eliume a tout pris en charge en quelques jours. Un soulagement immense dans une période si difficile. »" },
  { initials: 'TB', name: 'Thomas B.', location: 'Paris, 2024',    text: "« Grâce à Eliume, nous avons récupéré une assurance vie que nous ne savions même pas qu'elle existait. Le service est humain, à l'écoute et vraiment professionnel. »" },
  { initials: 'SC', name: 'Sophie C.', location: 'Bordeaux, 2024', text: "« Une équipe attentionnée qui nous a accompagnés pas à pas. Toutes les démarches ont été faites en moins de 3 semaines. Je recommande à toute famille dans cette situation. »" },
]

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).style.opacity = '1'
          ;(e.target as HTMLElement).style.transform = 'translateY(0)'
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => {
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(36px)'
      ;(el as HTMLElement).style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
      <main style={{ background: '#fff', color: '#0f1117', overflowX: 'hidden', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }}>
        <Navbar />

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 900, height: 700, borderRadius: '50%', background: 'radial-gradient(ellipse at 50% 40%,rgba(79,110,247,.13) 0%,rgba(167,139,250,.08) 40%,transparent 70%)', pointerEvents: 'none' }} />

          <Image src="/logo.png" alt="Eliume" width={280} height={120} style={{ objectFit: 'contain', marginBottom: 32 }} priority />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#e8ecff', border: '1px solid rgba(79,110,247,.2)', color: '#4f6ef7', fontSize: 12, fontWeight: 600, letterSpacing: '.6px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 980, marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4f6ef7', display: 'inline-block' }} />
            Accompagnement & sérénité
          </div>

          <h1 style={{ fontSize: 'clamp(38px,5.5vw,76px)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.05, marginBottom: 24, maxWidth: 860 }}>
            Nous gérons tout.<br />
            Vous vous concentrez<br />
            sur <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ce qui compte.</span>
          </h1>

          <p style={{ fontSize: 19, color: '#6b7280', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
            Après la perte d'un proche, Eliume prend en charge toutes vos démarches administratives et vous aide à récupérer les fonds auxquels vous avez droit.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" style={{ background: grad, color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 36px', borderRadius: 980, textDecoration: 'none', boxShadow: '0 8px 28px rgba(79,110,247,.35)' }}>
              Être rappelé gratuitement
            </a>
            <a href="#apropos" style={{ background: '#f7f8fc', color: '#0f1117', border: '1.5px solid rgba(79,110,247,.12)', fontSize: 16, padding: '16px 36px', borderRadius: 980, textDecoration: 'none' }}>
              Découvrir nos services
            </a>
          </div>

          <div style={{ display: 'flex', gap: 60, marginTop: 80, paddingTop: 48, borderTop: '1px solid rgba(0,0,0,.07)' }}>
            {[{ num: '98%', label: 'Familles satisfaites' }, { num: '+3 200', label: 'Dossiers traités' }, { num: '72h', label: 'Délai de prise en charge' }].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{s.label}</div>
                </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="apropos" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px' }}>
          <span className="reveal" style={{ display: 'block', color: '#4f6ef7', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Notre mission</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, transitionDelay: '.1s' }}>
            Vous n'êtes pas seul face aux démarches
          </h2>
          <p className="reveal" style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
            La perte d'un proche s'accompagne d'une montagne de démarches complexes. Eliume est là pour tout prendre en charge, avec bienveillance et efficacité.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {cards.map((c, i) => (
                <div key={c.title} className="reveal" style={{ background: '#f7f8fc', border: '1.5px solid rgba(0,0,0,.05)', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: '#e8ecff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="temoignages" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px' }}>
          <span className="reveal" style={{ display: 'block', color: '#4f6ef7', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Témoignages</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 60, maxWidth: 680, transitionDelay: '.1s' }}>
            Des familles soulagées, partout en France
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {testimonials.map((t, i) => (
                <div key={t.name} className="reveal" style={{ background: '#f7f8fc', border: '1.5px solid rgba(0,0,0,.05)', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s` }}>
                  <div style={{ fontSize: 14, marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
                  <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#9ca3af' }}>{t.location}</div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 100px' }}>
          <div className="reveal" style={{ background: grad, borderRadius: 32, padding: 80, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 800, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>Nous sommes là pour vous</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,.8)', marginBottom: 40 }}>Un premier échange gratuit et sans engagement pour vous expliquer comment nous pouvons vous aider.</p>
            <a href="#contact" style={{ background: '#fff', color: '#4f6ef7', fontSize: 16, fontWeight: 700, padding: '16px 40px', borderRadius: 980, textDecoration: 'none', boxShadow: '0 8px 28px rgba(0,0,0,.15)', display: 'inline-block' }}>
              Prendre contact maintenant
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid rgba(0,0,0,.07)', padding: '36px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: '#9ca3af' }}>
          <span>© 2025 Eliume — Tous droits réservés</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales', 'Confidentialité', 'CGV', 'Contact'].map(l => (
                <a key={l} href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </footer>
      </main>
  )
}