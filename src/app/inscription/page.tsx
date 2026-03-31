'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { rose, sauge, beige, txt, txtSoft, inputStyle, btnPrimary, cardStyle, pageBase } from '@/lib/design'

export default function InscriptionPage() {
  return (
    <main style={{ ...pageBase, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Link href="/">
            <img src="/logo.png" alt="Eliume" width={200} height={70} style={{ objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Card */}
        <div style={cardStyle}>
          <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1, color: txt, marginBottom: 6 }}>
            Créer un compte
          </h1>
          <p style={{ fontSize: 14, color: txtSoft, marginBottom: 32 }}>
            Rejoignez Eliume pour accéder à votre espace
          </p>

          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                  Prénom
                </label>
                <input type="text" placeholder="Pierre" required style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                  Nom
                </label>
                <input type="text" placeholder="Dupont" required style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                Email
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
                Mot de passe
              </label>
              <input type="password" placeholder="••••••••" required style={inputStyle} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: txt, display: 'block', marginBottom: 6 }}>
                Confirmer le mot de passe
              </label>
              <input type="password" placeholder="••••••••" required style={inputStyle} />
            </div>

            <button type="submit" style={{ ...btnPrimary, marginTop: 8 }}>
              Créer mon compte
            </button>
          </form>

          {/* Séparateur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '28px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,.08)' }} />
            <span style={{ fontSize: 12, color: txtSoft }}>ou</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,.08)' }} />
          </div>

          {/* Google */}
          <button
            type="button"
            style={{
              width: '100%', padding: '14px 0', borderRadius: 980,
              border: '1.5px solid rgba(0,0,0,.08)', background: '#fff',
              fontSize: 14, fontWeight: 600, color: txt, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Continuer avec Google
          </button>

          <p style={{ fontSize: 12, color: txtSoft, textAlign: 'center', marginTop: 20, lineHeight: 1.5 }}>
            En créant un compte, vous acceptez nos{' '}
            <Link href="#" style={{ color: rose, textDecoration: 'none' }}>conditions d&#39;utilisation</Link>
            {' '}et notre{' '}
            <Link href="#" style={{ color: rose, textDecoration: 'none' }}>politique de confidentialité</Link>.
          </p>
        </div>

        {/* Lien connexion */}
        <p style={{ textAlign: 'center', fontSize: 14, color: txtSoft, marginTop: 24 }}>
          Déjà un compte ?{' '}
          <Link href="/connexion" style={{ color: rose, fontWeight: 600, textDecoration: 'none' }}>
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  )
}
