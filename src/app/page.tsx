'use client'
import { useEffect } from 'react'
/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/layout/Navbar'

/* ── Charte Eliume ─────────────────────────────── */
const rose    = '#CE6F63'  // titres, accents principaux
const sauge   = '#8BAA91'  // icônes, checks
const bleu    = '#9DBBD9'  // accent secondaire
const beige   = '#F3F0E7'  // fond
const txt     = '#333333'  // texte principal
const txtSoft = '#6b7280'  // texte secondaire

const grad     = `linear-gradient(135deg, ${rose} 0%, ${bleu} 100%)`
const gradSoft = `linear-gradient(135deg, ${sauge} 0%, ${bleu} 100%)`

const cards = [
  { icon: '📋', title: 'Démarches administratives', desc: 'Déclaration de décès, clôture de comptes, résiliation de contrats — nous gérons tout à votre place.' },
  { icon: '🔍', title: "Recherche d'assurances",    desc: 'Identification et activation de toutes les assurances vie, prévoyance et garanties auxquelles vous avez droit.' },
  { icon: '🤝', title: 'Accompagnement humain',     desc: "Un conseiller dédié à vos côtés à chaque étape, disponible et à l'écoute de vos besoins." },
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
      <main style={{ background: beige, color: txt, overflowX: 'hidden', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }}>
        <Navbar />

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glows */}
          <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 900, height: 700, borderRadius: '50%', background: `radial-gradient(ellipse at 50% 40%,rgba(206,111,99,.10) 0%,rgba(157,187,217,.08) 40%,transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle,rgba(139,170,145,.10) 0%,transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: `radial-gradient(circle,rgba(157,187,217,.08) 0%,transparent 70%)`, pointerEvents: 'none' }} />
          {/* Feather watermarks */}
          <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 600, height: 750, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .7, pointerEvents: 'none', transform: 'rotate(-15deg)' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '-8%', width: 500, height: 625, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .5, pointerEvents: 'none', transform: 'rotate(160deg)' }} />

          <img src="/logo.png" alt="Eliume" width={280} height={120} style={{ objectFit: 'contain', marginBottom: 32 }} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,170,145,.12)', border: `1px solid rgba(139,170,145,.25)`, color: sauge, fontSize: 12, fontWeight: 600, letterSpacing: '.6px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 980, marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: sauge, display: 'inline-block' }} />
            Accompagnement & sérénité
          </div>

          <h1 style={{ fontSize: 'clamp(38px,5.5vw,76px)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.05, marginBottom: 24, maxWidth: 860, color: txt }}>
            Nous gérons tout.<br />
            Vous vous concentrez<br />
            sur <span style={{ color: rose }}>ce qui compte.</span>
          </h1>

          <p style={{ fontSize: 19, color: txtSoft, lineHeight: 1.7, maxWidth: 620, marginBottom: 48 }}>
            Après la perte d&#39;un proche, vos démarches simplifiées, votre esprit apaisé.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" style={{ background: rose, color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 36px', borderRadius: 980, textDecoration: 'none', boxShadow: `0 8px 28px rgba(206,111,99,.30)` }}>
              Être rappelé gratuitement
            </a>
            <a href="#apropos" style={{ background: '#fff', color: txt, border: `1.5px solid rgba(139,170,145,.25)`, fontSize: 16, padding: '16px 36px', borderRadius: 980, textDecoration: 'none' }}>
              Découvrir nos services
            </a>
          </div>

          <div style={{ display: 'flex', gap: 60, marginTop: 80, paddingTop: 48, borderTop: `2px solid rgba(206,111,99,.12)` }}>
            {[{ num: '98%', label: 'Familles satisfaites' }, { num: '72h', label: 'Délai de prise en charge' }].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: rose }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: txtSoft, marginTop: 4 }}>{s.label}</div>
                </div>
            ))}
          </div>
        </section>

        {/* COUNTER / RESULTS */}
        <section style={{ background: `linear-gradient(135deg, ${txt} 0%, #2a2a2a 50%, #222 100%)`, padding: '48px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, borderRadius: '50%', background: `radial-gradient(circle,rgba(206,111,99,.10) 0%,transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, textAlign: 'center' }}>
              <div style={{ padding: '24px 16px' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: bleu }}>6</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Familles accompagnées</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: rose }}>1,5M€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Fonds récoltés</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: sauge }}>600k€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Meilleure perf.</div>
                <div style={{ fontSize: 12, color: sauge, marginTop: 2 }}>+ 300€/mois à vie</div>
              </div>
              <div style={{ padding: '24px 16px', borderLeft: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2, color: 'rgba(255,255,255,.75)' }}>30k€</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>Perf. minimale</div>
                <div style={{ fontSize: 12, color: bleu, marginTop: 2 }}>+ 700€/mois à vie</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="apropos" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px' }}>
          <span className="reveal" style={{ display: 'block', color: sauge, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Notre mission</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, color: txt, transitionDelay: '.1s' }}>
            Vous n&#39;êtes pas seul face aux <span style={{ color: rose }}>démarches</span>
          </h2>
          <p className="reveal" style={{ fontSize: 18, color: txtSoft, lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
            La perte d&#39;un proche s&#39;accompagne d&#39;une montagne de démarches complexes. Eliume est là pour tout prendre en charge, avec bienveillance et efficacité.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {cards.map((c, i) => (
                <div key={c.title} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, borderTop: `3px solid ${[rose, sauge, bleu][i]}`, boxShadow: '0 4px 24px rgba(0,0,0,.05)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(139,170,145,.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: txt }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: txtSoft, lineHeight: 1.6 }}>{c.desc}</p>
                </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ background: '#ece8dd', padding: '100px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 450, height: 560, backgroundImage: 'url(/feather-bg.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .5, pointerEvents: 'none', transform: 'rotate(-30deg) scaleX(-1)' }} />
          <div style={{ position: 'absolute', top: '20%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle,rgba(157,187,217,.10) 0%,transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
            <span className="reveal" style={{ display: 'block', color: sauge, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Nos services</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, color: txt, transitionDelay: '.1s' }}>
              Tout ce dont vous avez besoin, en <span style={{ color: bleu }}>un seul endroit</span>
            </h2>
            <p className="reveal" style={{ fontSize: 18, color: txtSoft, lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
              De la première démarche à la clôture du dossier, nous prenons tout en charge pour que vous puissiez vous concentrer sur l&#39;essentiel.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {services.map((s, i) => (
                <div key={s.title} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, borderLeft: `3px solid ${[rose, sauge, bleu][i % 3]}`, boxShadow: '0 4px 24px rgba(0,0,0,.04)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${[`rgba(206,111,99,.10)`, `rgba(139,170,145,.12)`, `rgba(157,187,217,.12)`][i % 3]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: txt }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: txtSoft, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="tarifs" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px', position: 'relative' }}>
          <span className="reveal" style={{ display: 'block', color: sauge, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Tarifs</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, maxWidth: 680, color: txt, transitionDelay: '.1s' }}>
            Deux formules, <span style={{ color: rose }}>zéro surprise</span>
          </h2>
          <p className="reveal" style={{ fontSize: 18, color: txtSoft, lineHeight: 1.7, maxWidth: 580, marginBottom: 60, transitionDelay: '.2s' }}>
            Premier échange toujours gratuit et sans engagement. Paiement en 3 fois disponible.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28, alignItems: 'start' }}>
            {/* ELIUME */}
            <div className="reveal" style={{
              background: '#fff', borderRadius: 28, padding: '44px 36px',
              border: `2px solid rgba(139,170,145,.2)`, boxShadow: '0 8px 32px rgba(0,0,0,.05)',
              transitionDelay: '.1s',
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, color: txt }}>Eliume</h3>
              <p style={{ fontSize: 13, color: txtSoft, marginBottom: 24 }}>L&#39;essentiel pour traverser la crise</p>

              <div style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: rose, letterSpacing: -2 }}>800€</span>
              </div>
              <p style={{ fontSize: 14, color: txtSoft, marginBottom: 6 }}>Paiement immédiat</p>
              <div style={{ display: 'inline-block', background: `rgba(206,111,99,.08)`, borderRadius: 980, padding: '6px 16px', marginBottom: 28 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: rose }}>ou 266€ × 3 mois</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                {[
                  'Simplification de la situation de crise',
                  'Analyse de 50 services (retraite, CAF, banques, assurances, prévoyance, épargne salariale…)',
                  'Courriers prêts à envoyer en PDF',
                  'Trame pour mise en relation',
                  'Coordination notariale',
                ].map(f => (
                  <li key={f} style={{ fontSize: 14, color: txtSoft, padding: '7px 0', display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.5 }}>
                    <span style={{ color: sauge, fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center', padding: '14px 0', borderRadius: 980, textDecoration: 'none', fontWeight: 700, fontSize: 15,
                background: rose, color: '#fff',
                boxShadow: `0 4px 16px rgba(206,111,99,.25)`,
              }}>
                Choisir Eliume
              </a>
            </div>

            {/* ELIUME SÉRÉNITÉ */}
            <div className="reveal" style={{
              background: `linear-gradient(135deg, ${rose} 0%, #b85a50 100%)`,
              borderRadius: 28, padding: '44px 36px',
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 20px 60px rgba(206,111,99,.25)`,
              transitionDelay: '.2s',
            }}>
              <div style={{ position: 'absolute', top: 16, right: -28, background: sauge, color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 36px', transform: 'rotate(45deg)', letterSpacing: .5 }}>Complet</div>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />

              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Eliume Sérénité</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 24 }}>Accompagnement complet + suivi dans la durée</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: 14, padding: '14px 16px' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 2 }}>Option 1</div>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>600€</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', marginLeft: 6 }}>+ 1,75% des fonds récoltés</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: 14, padding: '14px 16px' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 2 }}>Option 2 — Paiement en 3×</div>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>200€</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', marginLeft: 6 }}>× 3 mois + 1,75% des fonds</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: 14, padding: '14px 16px' }}>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 2 }}>Option 3 — Entrée minimale</div>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>60€</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', marginLeft: 6 }}>+ 1,75% des fonds récoltés</span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                {[
                  'Tout ce qui est inclus dans Eliume',
                  'Pension de réversion',
                  'Vérification sur place',
                  'Envoi de tous les documents',
                  'Suivi et relances',
                  'Tableau de bord pendant 2 ans + récapitulatif PDF',
                ].map((f, i) => (
                  <li key={f} style={{ fontSize: 14, color: 'rgba(255,255,255,.85)', padding: '7px 0', display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.5, fontWeight: i === 0 ? 600 : 400 }}>
                    <span style={{ color: bleu, fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center', padding: '14px 0', borderRadius: 980, textDecoration: 'none', fontWeight: 700, fontSize: 15,
                background: '#fff', color: rose,
                boxShadow: '0 4px 16px rgba(0,0,0,.15)',
              }}>
                Choisir Sérénité
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="temoignages" style={{ background: '#ece8dd', padding: '100px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <span className="reveal" style={{ display: 'block', color: sauge, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Témoignages</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 60, maxWidth: 680, color: txt, transitionDelay: '.1s' }}>
              Des familles <span style={{ color: rose }}>soulagées</span>, partout en France
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {testimonials.map((t, i) => (
                  <div key={t.name} className="reveal" style={{ background: '#fff', borderRadius: 20, padding: 32, transitionDelay: `${(i+1)*.1}s`, boxShadow: '0 4px 24px rgba(0,0,0,.05)', borderBottom: `3px solid ${[rose, sauge, bleu][i]}` }}>
                    <div style={{ fontSize: 14, marginBottom: 16, color: sauge }}>★★★★★</div>
                    <p style={{ fontSize: 15, color: txtSoft, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{t.text}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: gradSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.initials}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: txt }}>{t.name}</div>
                        <div style={{ fontSize: 12, color: txtSoft }}>{t.location}</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 48px 100px' }}>
          <div className="reveal" style={{ background: rose, borderRadius: 32, padding: 80, textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: `0 20px 60px rgba(206,111,99,.2)` }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 150, height: 150, borderRadius: '50%', background: `rgba(139,170,145,.15)`, pointerEvents: 'none' }} />
            <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: 800, letterSpacing: -1, color: '#fff', marginBottom: 16 }}>Nous sommes là pour vous</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,.8)', marginBottom: 40 }}>Un premier échange gratuit et sans engagement pour vous expliquer comment nous pouvons vous aider.</p>
            <a href="#contact" style={{ background: '#fff', color: rose, fontSize: 16, fontWeight: 700, padding: '16px 40px', borderRadius: 980, textDecoration: 'none', boxShadow: '0 8px 28px rgba(0,0,0,.12)', display: 'inline-block' }}>
              Prendre contact maintenant
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <div>
              <span className="reveal" style={{ display: 'block', color: sauge, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Contact</span>
              <h2 className="reveal" style={{ fontSize: 'clamp(30px,3.5vw,50px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20, color: txt, transitionDelay: '.1s' }}>
                Parlons de votre <span style={{ color: bleu }}>situation</span>
              </h2>
              <p className="reveal" style={{ fontSize: 18, color: txtSoft, lineHeight: 1.7, marginBottom: 40, transitionDelay: '.2s' }}>
                Remplissez le formulaire et nous vous rappelons sous 24h. L&#39;échange est gratuit et sans engagement.
              </p>
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, transitionDelay: '.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(206,111,99,.10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: `1.5px solid rgba(206,111,99,.12)` }}>📞</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: txt }}>Téléphone</div>
                    <div style={{ fontSize: 14, color: txtSoft }}>01 23 45 67 89</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(139,170,145,.10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: `1.5px solid rgba(139,170,145,.15)` }}>✉️</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: txt }}>Email</div>
                    <div style={{ fontSize: 14, color: txtSoft }}>contact@eliume.fr</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(157,187,217,.10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: `1.5px solid rgba(157,187,217,.15)` }}>🕐</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: txt }}>Disponibilité</div>
                    <div style={{ fontSize: 14, color: txtSoft }}>Lun–Ven, 9h–18h</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="reveal" onSubmit={e => e.preventDefault()} style={{ background: '#fff', border: `2px solid rgba(139,170,145,.15)`, borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 8px 32px rgba(0,0,0,.05)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input type="text" placeholder="Prénom" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: beige }} />
                <input type="text" placeholder="Nom" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: beige }} />
              </div>
              <input type="email" placeholder="Email" required style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: beige }} />
              <input type="tel" placeholder="Téléphone" style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', background: beige }} />
              <textarea placeholder="Décrivez brièvement votre situation..." rows={4} style={{ padding: '14px 16px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,.08)', fontSize: 14, outline: 'none', resize: 'vertical', background: beige, fontFamily: 'inherit' }} />
              <button type="submit" style={{ background: rose, color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 0', borderRadius: 980, border: 'none', cursor: 'pointer', boxShadow: `0 8px 28px rgba(206,111,99,.30)`, marginTop: 8 }}>
                Être rappelé gratuitement
              </button>
              <p style={{ fontSize: 12, color: txtSoft, textAlign: 'center', marginTop: 4 }}>
                En soumettant ce formulaire, vous acceptez d&#39;être contacté par Eliume.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: txt, borderTop: `2px solid ${sauge}`, padding: '40px 48px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="/logo.png" alt="Eliume" width={180} height={64} style={{ objectFit: 'contain', opacity: .85 }} />
              <span>© 2025 Eliume — Tous droits réservés</span>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Mentions légales', 'Confidentialité', 'CGV', 'Contact'].map(l => (
                  <a key={l} href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
        </footer>
      </main>
  )
}
