'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    { label: 'Notre mission', href: '#apropos' },
    { label: 'Services',      href: '#services' },
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
            background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
            boxShadow: scrolled ? '0 1px 24px rgba(79,110,247,0.07)' : 'none',
            transition: 'all .4s ease',
        }}>
            <Link href="/">
                <Image src="/logo.png" alt="Eliume" width={100} height={44} style={{ objectFit: 'contain' }} priority />
            </Link>

            <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map(l => (
                    <li key={l.href}>
                        <a href={l.href} style={{ color: '#6b7280', fontSize: 14, textDecoration: 'none' }}>{l.label}</a>
                    </li>
                ))}
            </ul>

            <a href="#contact" style={{
                background: 'linear-gradient(135deg,#4f6ef7,#a78bfa)',
                color: '#fff', fontSize: 13, fontWeight: 600,
                padding: '10px 22px', borderRadius: 980, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(79,110,247,0.3)',
            }}>
                Être rappelé gratuitement
            </a>
        </nav>
    )
}