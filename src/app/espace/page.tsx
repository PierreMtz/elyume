'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { rose, sauge, bleu, beige, txt, txtSoft, cardStyle, pageBase, btnPrimary } from '@/lib/design'

const steps = [
  { num: 1, title: 'Prise de contact', desc: 'Formulaire envoyé, un conseiller vous est attribué.', status: 'done' as const },
  { num: 2, title: 'Analyse du dossier', desc: 'Vos documents sont en cours d\'analyse.', status: 'current' as const },
  { num: 3, title: 'Démarches en cours', desc: 'Déclarations, clôtures et recherches lancées.', status: 'pending' as const },
  { num: 4, title: 'Dossier clôturé', desc: 'Toutes les démarches sont finalisées.', status: 'pending' as const },
]

const statusColor = { done: sauge, current: rose, pending: 'rgba(0,0,0,.15)' }
const statusLabel = { done: 'Terminé', current: 'En cours', pending: 'À venir' }

export default function EspacePage() {
  return (
    <main style={{ ...pageBase, minHeight: '100vh' }}>
      {/* Top bar */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
        background: 'rgba(243,240,231,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 1px 24px rgba(206,111,99,0.07)',
      }}>
        <Link href="/">
          <img src="/logo.png" alt="Eliume" width={140} height={48} style={{ objectFit: 'contain' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/formulaire" style={{ fontSize: 13, color: rose, fontWeight: 600, textDecoration: 'none' }}>
            Formulaire détaillé
          </Link>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: `linear-gradient(135deg, ${sauge} 0%, ${bleu} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff', cursor: 'pointer',
          }}>
            PD
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
        {/* Bienvenue */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1, color: txt, marginBottom: 6 }}>
            Bonjour, Pierre
          </h1>
          <p style={{ fontSize: 15, color: txtSoft }}>
            Voici le suivi de votre dossier.
          </p>
        </div>

        {/* Statistiques rapides */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
          {[
            { label: 'Statut du dossier', value: 'En cours', color: rose },
            { label: 'Conseiller dédié', value: 'Sophie M.', color: sauge },
            { label: 'Prochaine étape', value: 'Analyse', color: bleu },
          ].map(s => (
            <div key={s.label} style={{ ...cardStyle, padding: '24px 28px' }}>
              <div style={{ fontSize: 12, color: txtSoft, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Suivi étapes */}
        <div style={{ ...cardStyle, marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: txt, marginBottom: 28 }}>Avancement du dossier</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                {/* Ligne verticale */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 17, top: 36, bottom: -4, width: 2,
                    background: step.status === 'done' ? sauge : 'rgba(0,0,0,.08)',
                  }} />
                )}
                {/* Pastille */}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: step.status === 'current' ? rose : step.status === 'done' ? sauge : 'rgba(0,0,0,.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700,
                  color: step.status === 'pending' ? txtSoft : '#fff',
                  border: step.status === 'current' ? `3px solid rgba(206,111,99,.2)` : 'none',
                }}>
                  {step.status === 'done' ? '✓' : step.num}
                </div>
                {/* Contenu */}
                <div style={{ paddingBottom: i < steps.length - 1 ? 28 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: step.status === 'pending' ? txtSoft : txt }}>{step.title}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 980,
                      background: `${statusColor[step.status]}18`,
                      color: statusColor[step.status],
                    }}>
                      {statusLabel[step.status]}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: txtSoft, lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions rapides */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Link href="/formulaire" style={{
            ...cardStyle, padding: '28px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 16,
            transition: 'box-shadow .2s',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `rgba(206,111,99,.10)`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 22,
            }}>📋</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: txt }}>Formulaire détaillé</div>
              <div style={{ fontSize: 13, color: txtSoft }}>Compléter vos informations</div>
            </div>
          </Link>
          <div style={{
            ...cardStyle, padding: '28px',
            display: 'flex', alignItems: 'center', gap: 16,
            opacity: 0.6, cursor: 'not-allowed',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `rgba(139,170,145,.10)`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 22,
            }}>📁</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: txt }}>Documents</div>
              <div style={{ fontSize: 13, color: txtSoft }}>Bientôt disponible</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
