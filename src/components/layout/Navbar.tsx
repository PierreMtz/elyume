'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */

const links = [
    { label: 'Notre mission', href: '#apropos' },
    { label: 'Services',      href: '#services' },
    { label: 'Tarifs',        href: '#tarifs' },
    { label: 'Témoignages',   href: '#temoignages' },
    { label: 'Contact',       href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 48px', height: 64,
            background: scrolled ? 'rgba(243,240,231,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
            boxShadow: scrolled ? '0 1px 24px rgba(206,111,99,0.07)' : 'none',
            transition: 'all .4s ease',
        }}>
            <Link href="/">
                <img src="/logo.png" alt="Eliume" width={160} height={56} style={{ objectFit: 'contain' }} />
            </Link>

            <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map(l => (
                    <li key={l.href}>
                        <a href={l.href} style={{ color: '#333', fontSize: 14, textDecoration: 'none' }}>{l.label}</a>
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Link href="/connexion" style={{ color: '#333', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                    Connexion
                </Link>
                <a href="#contact" style={{
                    background: '#CE6F63',
                    color: '#fff', fontSize: 13, fontWeight: 600,
                    padding: '10px 22px', borderRadius: 980, textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(206,111,99,0.3)',
                }}>
                    Être rappelé gratuitement
                </a>
            </div>
        </nav>
    )
}
