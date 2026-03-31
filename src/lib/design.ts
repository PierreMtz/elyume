/* ── Charte Eliume — constantes partagées ─────────────────── */

export const rose    = '#CE6F63'
export const sauge   = '#8BAA91'
export const bleu    = '#9DBBD9'
export const beige   = '#F3F0E7'
export const txt     = '#333333'
export const txtSoft = '#6b7280'

export const grad     = `linear-gradient(135deg, ${rose} 0%, ${bleu} 100%)`
export const gradSoft = `linear-gradient(135deg, ${sauge} 0%, ${bleu} 100%)`

/* ── Styles réutilisables ─────────────────────────────────── */

export const inputStyle: React.CSSProperties = {
  padding: '14px 16px',
  borderRadius: 12,
  border: '1.5px solid rgba(0,0,0,.08)',
  fontSize: 14,
  outline: 'none',
  background: beige,
  width: '100%',
}

export const btnPrimary: React.CSSProperties = {
  background: rose,
  color: '#fff',
  fontSize: 16,
  fontWeight: 600,
  padding: '16px 0',
  borderRadius: 980,
  border: 'none',
  cursor: 'pointer',
  boxShadow: `0 8px 28px rgba(206,111,99,.30)`,
  width: '100%',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
}

export const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '2px solid rgba(139,170,145,.15)',
  borderRadius: 24,
  padding: 40,
  boxShadow: '0 8px 32px rgba(0,0,0,.05)',
}

export const pageBase: React.CSSProperties = {
  background: beige,
  color: txt,
  minHeight: '100vh',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
}
