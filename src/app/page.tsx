'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'

const grad = 'linear-gradient(135deg,#C83A28 0%,#C5A55A 100%)'
const gradGold = 'linear-gradient(135deg,#C5A55A 0%,#d4b96a 100%)'

const cards = [
  { icon: '📋', title: 'Démarches administratives', desc: 'Déclaration de décès, clôture de comptes, résiliation de contrats — nous gérons tout à votre place.', color: '#C83A28' },
  { icon: '🔍', title: "Recherche d'assurances",    desc: 'Identification et activation de toutes les assurances vie, prévoyance et garanties auxquelles vous avez droit.', color: '#C5A55A' },
  { icon: '🤝', title: 'Accompagnement humain',     desc: "Un conseiller dédié à vos côtés à chaque étape, disponible et à l'écoute de vos besoins.", color: '#C83A28' },
]

const services = [
  { icon: '📄', title: 'Déclaration de décès',       desc: 'Nous effectuons toutes les déclarations auprès des organismes concernés : mairie, sécurité sociale, caisses de retraite, mutuelles.' },
  { icon: '🏦', title: 'Clôture de comptes',          desc: 'Fermeture des comptes bancaires, résiliation des abonnements, transfert des contrats en cours.' },
  { icon: '🔎', title: 'Recherche d\'assurances vie',  desc: 'Identification de tous les contrats d\'assurance vie, prévoyance et garanties décès auxquels vous avez droit.' },
  { icon: '📑', title: 'Constitution du dossier',      desc: 'Collecte et organisation de tous les documents nécessaires pour vos démarches successorales.' },
  { icon: '🤝', title: 'Accompagnement notarial',      desc: 'Coordination avec le notaire pour faciliter le règlement de la succession.' },
  { icon: '📞', title: 'Conseiller dédié',             desc: 'Un interlocuteur unique, disponible et à l\'écoute, qui vous accompagne du début à la fin.' },
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
      <main style={{ background: 'linear-gradient(180deg, #fff 0%, #fdf8f3 30%, #faf5ef 60%, #fdf8f3 80%, #fff 100%)', color: '#0f1117', overflowX: 'hidden', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }}>
        <Navbar />

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 900, height: 700, borderRadius: '50%', background: 'radial-gradient(ellipse at 50% 40%,rgba(200,58,40,.14) 0%,rgba(197,165,90,.10) 40%,transparent 70%)', pointerEvents: 'none' }} />
          {/* Secondary gold glow */}
          <div style={{ position: 'absolute', top: '30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(197,165,90,.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,58,40,.08) 0%,transparent 70%)', pointerEvents: 'none' }} />
          {/* Feather watermark left */}
          <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 600, height: 750, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .7, pointerEvents: 'none', transform: 'rotate(-15deg)' }} />
          {/* Feather watermark right */}
          <div style={{ position: 'absolute', bottom: '-10%', right: '-8%', width: 500, height: 625, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .5, pointerEvents: 'none', transform: 'rotate(160deg)' }} />

          <Image src="/logo.png" alt="Eliume" width={280} height={120} style={{ objectFit: 'contain', marginBottom: 32 }} priority />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fdecea', border: '1px solid rgba(200,58,40,.2)', color: '#C83A28', fontSize: 12, fontWeight: 600, letterSpacing: '.6px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 980, marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C83A28', display: 'inline-block' }} />
            Accompagnement & sérénité
          </div>

          <h1 style={{ fontSize: 'clamp(38px,5.5vw,76px)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.05, marginBottom: 24, maxWidth: 860 }}>
            Nous gérons tout.<br />
            Vous vous concentrez<br />
            sur <span style={{ color: '#C83A28' }}>ce qui compte.</span>
          </h1>

          <p style={{ fontSize: 19, color: '#6b7280', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
            Après la perte d&#39;un proche, Eliume prend en charge toutes vos démarches administratives et vous aide à récupérer les fonds auxquels vous avez droit.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" style={{ background: grad, color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 36px', borderRadius: 980, textDecoration: 'none', boxShadow: '0 8px 28px rgba(200,58,40,.35)' }}>
              Être rappelé gratuitement
            </a>
            <a href="#apropos" style={{ background: '#fef7f0', color: '#0f1117', border: '1.5px solid rgba(200,58,40,.15)', fontSize: 16, padding: '16px 36px', borderRadius: 980, textDecoration: 'none' }}>
              Découvrir nos services
            </a>
          </div>

          <div style={{ display: 'flex', gap: 60, marginTop: 80, paddingTop: 48, borderTop: '2px solid rgba(200,58,40,.1)' }}>
            {[{ num: '98%', label: 'Familles satisfaites' }, { num: '72h', label: 'Délai de prise en charge' }].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: '#C83A28' }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{s.label}</div>
                </div>
            ))}
          </div>
        </section>

        {/* COUNTER / RESULTS */}
        <section style={{ background: 'linear-gradient(135deg, #3a1c17 0%, #2a1510 50%, #1f1a10 100%)', padding: '48px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,58,40,.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, textAlign: 'center' }}>
              <div style={{ padding: '24px 16px' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: '#C5A55A' }}>6</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Familles accompagnées</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: '#C83A28' }}>1,5M€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Fonds récoltés</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: '#C5A55A' }}>600k€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Meilleure perf.</div>
                <div style={{ fontSize: 12, color: '#C5A55A', marginTop: 2 }}>+ 300€/mois à vie</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: 'rgba(255,255,255,.75)' }}>30k€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Perf. minimale</div>
                <div style={{ fontSize: 12, color: '#C83A28', marginTop: 2 }}>+ 700€/mois à vie</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="apropos" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px' }}>
          <span className="reveal" style={{ display: 'block', color: '#C83A28', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Notre mission</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, transitionDelay: '.1s' }}>
            Vous n&#39;êtes pas seul face aux <span style={{ color: '#C83A28' }}>démarches</span>
          </h2>
          <p className="reveal" style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
            La perte d&#39;un proche s&#39;accompagne d&#39;une montagne de démarches complexes. Eliume est là pour tout prendre en charge, avec bienveillance et efficacité.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {cards.map((c, i) => (
                <div key={c.title} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, borderTop: `3px solid ${c.color}`, boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: c.color === '#C83A28' ? '#fdecea' : '#fdf5e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ background: 'linear-gradient(180deg, #faf5ef 0%, #f5ece0 100%)', padding: '100px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 450, height: 560, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .5, pointerEvents: 'none', transform: 'rotate(-30deg) scaleX(-1)' }} />
          {/* Gold accent glow */}
          <div style={{ position: 'absolute', top: '20%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(197,165,90,.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
            <span className="reveal" style={{ display: 'block', color: '#C83A28', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Nos services</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, transitionDelay: '.1s' }}>
              Tout ce dont vous avez besoin, en <span style={{ color: '#C5A55A' }}>un seul endroit</span>
            </h2>
            <p className="reveal" style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
              De la première démarche à la clôture du dossier, nous prenons tout en charge pour que vous puissiez vous concentrer sur l&#39;essentiel.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {services.map((s, i) => (
                <div key={s.title} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, borderLeft: `3px solid ${i % 2 === 0 ? '#C83A28' : '#C5A55A'}`, boxShadow: '0 4px 24px rgba(0,0,0,.05)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: i % 2 === 0 ? '#fdecea' : '#fdf5e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="tarifs" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px', position: 'relative' }}>
          <span className="reveal" style={{ display: 'block', color: '#C83A28', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Tarifs</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, transitionDelay: '.1s' }}>
            Un tarif unique, <span style={{ color: '#C5A55A' }}>transparent</span>
          </h2>
          <p className="reveal" style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
            Premier échange toujours gratuit et sans engagement. Paiement en 3 fois disponible.
          </p>

          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div className="reveal" style={{
              background: grad,
              borderRadius: 32, padding: '56px 48px', textAlign: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(200,58,40,.25)',
            }}>
              {/* Decorative circles inside */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.04)', pointerEvents: 'none' }} />

              <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Accompagnement complet</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', marginBottom: 32, lineHeight: 1.6 }}>
                Prise en charge intégrale de toutes vos démarches après le décès d&#39;un proche. Recherche et récupération de tous les fonds auxquels vous avez droit.
              </p>

              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 56, fontWeight: 800, color: '#fff', letterSpacing: -2 }}>800€</span>
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', marginBottom: 8 }}>Tarif unique tout compris</p>

              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.18)', borderRadius: 980, padding: '8px 20px', marginBottom: 32 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>ou 266€ × 3 mois</span>
              </div>

              <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: 16, padding: '20px 24px', marginBottom: 32, textAlign: 'left' }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.85)', lineHeight: 1.7 }}>
                  💡 L&#39;argent récolté tombe dès la première semaine. En payant en 3 fois, vous n&#39;avancez que 266€ : ce sont les fonds récupérés qui financent le reste.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', textAlign: 'left' }}>
                {[
                  'Déclaration de décès complète',
                  'Résiliation des abonnements et comptes',
                  'Recherche d\'assurances vie et prévoyance',
                  'Coordination avec le notaire',
                  'Conseiller dédié prioritaire',
                  'Constitution intégrale du dossier',
                  'Suivi par email et téléphone',
                ].map(f => (
                  <li key={f} style={{ fontSize: 15, color: 'rgba(255,255,255,.85)', padding: '7px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#C5A55A', fontWeight: 700, fontSize: 16 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center', padding: '16px 0', borderRadius: 980, textDecoration: 'none', fontWeight: 700, fontSize: 16,
                background: '#fff',
                color: '#C83A28',
                boxShadow: '0 4px 16px rgba(0,0,0,.15)',
              }}>
                Être rappelé gratuitement
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="temoignages" style={{ background: 'linear-gradient(180deg, transparent 0%, #faf5ef 30%, #faf5ef 70%, transparent 100%)', padding: '100px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <span className="reveal" style={{ display: 'block', color: '#C83A28', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Témoignages</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 60, maxWidth: 680, transitionDelay: '.1s' }}>
              Des familles <span style={{ color: '#C83A28' }}>soulagées</span>, partout en France
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {testimonials.map((t, i) => (
                  <div key={t.name} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, boxShadow: '0 4px 24px rgba(0,0,0,.06)', borderBottom: `3px solid ${i === 1 ? '#C5A55A' : '#C83A28'}` }}>
                    <div style={{ fontSize: 14, marginBottom: 16, color: '#C5A55A' }}>★★★★★</div>
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
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 100px' }}>
          <div className="reveal" style={{ background: grad, borderRadius: 32, padding: 80, textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(200,58,40,.2)' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(197,165,90,.15)', pointerEvents: 'none' }} />
            <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 800, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>Nous sommes là pour vous</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,.8)', marginBottom: 40 }}>Un premier échange gratuit et sans engagement pour vous expliquer comment nous pouvons vous aider.</p>
            <a href="#contact" style={{ background: '#fff', color: '#C83A28', fontSize: 16, fontWeight: 700, padding: '16px 40px', borderRadius: 980, textDecoration: 'none', boxShadow: '0 8px 28px rgba(0,0,0,.15)', display: 'inline-block' }}>
              Prendre contact maintenant
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <div>
              <span className="reveal" style={{ display: 'block', color: '#C83A28', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Contact</span>
              <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, transitionDelay: '.1s' }}>
                Parlons de votre <span style={{ color: '#C5A55A' }}>situation</span>
              </h2>
              <p className="reveal" style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 40, transitionDelay: '.2s' }}>
                Remplissez le formulaire et nous vous rappelons sous 24h. L&#39;échange est gratuit et sans engagement.
              </p>
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, transitionDelay: '.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fdecea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: '1.5px solid rgba(200,58,40,.1)' }}>📞</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Téléphone</div>
                    <div style={{ fontSize: 14, color: '#6b7280' }}>01 23 45 67 89</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fdf5e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: '1.5px solid rgba(197,165,90,.15)' }}>✉️</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Email</div>
                    <div style={{ fontSize: 14, color: '#6b7280' }}>contact@eliume.fr</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fdecea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: '1.5px solid rgba(200,58,40,.1)' }}>🕐</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Disponibilité</div>
                    <div style={{ fontSize: 14, color: '#6b7280' }}>Lun–Ven, 9h–18h</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="reveal" onSubmit={e => e.preventDefault()} style={{ background: '#fff', border: '2px solid rgba(200,58,40,.1)', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 8px 32px rgba(200,58,40,.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input type="text" placeholder="Prénom" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: '#fef7f0' }} />
                <input type="text" placeholder="Nom" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: '#fef7f0' }} />
              </div>
              <input type="email" placeholder="Email" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: '#fef7f0' }} />
              <input type="tel" placeholder="Téléphone" style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: '#fef7f0' }} />
              <textarea placeholder="Décrivez brièvement votre situation..." rows={4} style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', resize: 'vertical', background: '#fef7f0', fontFamily: 'inherit' }} />
              <button type="submit" style={{ background: grad, color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 0', borderRadius: 980, border: 'none', cursor: 'pointer', boxShadow: '0 8px 28px rgba(200,58,40,.35)', marginTop: 8 }}>
                Être rappelé gratuitement
              </button>
              <p style={{ fontSize: 12, color: '#9ca3af', textAlign: 'center', marginTop: 4 }}>
                En soumettant ce formulaire, vous acceptez d&#39;être contacté par Eliume.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: '#1f1a10', borderTop: '2px solid rgba(197,165,90,.2)', padding: '36px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
          <span>© 2025 Eliume — Tous droits réservés</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales', 'Confidentialité', 'CGV', 'Contact'].map(l => (
                <a key={l} href="#" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </footer>
      </main>
  )
}
