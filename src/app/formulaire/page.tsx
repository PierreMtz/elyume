'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { rose, sauge, bleu, beige, txt, txtSoft, inputStyle, btnPrimary, cardStyle, pageBase } from '@/lib/design'

export default function FormulairePage() {
  return (
    <main style={{ ...pageBase, padding: '40px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Link href="/">
            <img src="/logo.png" alt="Eliume" width={180} height={63} style={{ objectFit: 'contain', marginBottom: 24 }} />
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,170,145,.12)', border: '1px solid rgba(139,170,145,.25)', color: sauge, fontSize: 12, fontWeight: 600, letterSpacing: '.6px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 980, marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: sauge, display: 'inline-block' }} />
            Prise de contact
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1.5, color: txt, marginBottom: 10 }}>
            Parlons de votre <span style={{ color: rose }}>situation</span>
          </h1>
          <p style={{ fontSize: 16, color: txtSoft, lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
            Remplissez ce formulaire pour que nous puissions vous rappeler et comprendre votre besoin.
          </p>
        </div>

        {/* Formulaire */}
        <div style={cardStyle}>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                  Prénom <span style={{ color: rose }}>*</span>
                </label>
                <input type="text" placeholder="Votre prénom" required style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                  Nom <span style={{ color: rose }}>*</span>
                </label>
                <input type="text" placeholder="Votre nom" required style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                Email <span style={{ color: rose }}>*</span>
              </label>
              <input type="email" placeholder="votre@email.fr" required style={inputStyle} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                Téléphone
              </label>
              <input type="tel" placeholder="06 12 34 56 78" style={inputStyle} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                Décrivez brièvement votre situation <span style={{ color: rose }}>*</span>
              </label>
              <textarea
                placeholder="Quand le décès a-t-il eu lieu ? Quelles démarches avez-vous déjà entamées ? Quels sont vos principaux besoins ?"
                rows={5}
                required
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            <button type="submit" style={{ ...btnPrimary, marginTop: 8 }}>
              Envoyer ma demande
            </button>

            <p style={{ fontSize: 12, color: txtSoft, textAlign: 'center', marginTop: 4 }}>
              Nous vous recontactons sous 24h. Échange gratuit et sans engagement.
            </p>
          </form>
        </div>

        {/* Infos de contact */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 40 }}>
          {[
            { icon: '📞', label: '01 23 45 67 89', color: `rgba(206,111,99,.10)` },
            { icon: '✉️', label: 'contact@eliume.fr', color: `rgba(139,170,145,.10)` },
            { icon: '🕐', label: 'Lun–Ven, 9h–18h', color: `rgba(157,187,217,.10)` },
          ].map(c => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{c.icon}</div>
              <span style={{ fontSize: 13, color: txtSoft }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
