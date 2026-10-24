import { useState } from 'react'
import logo from '../assets/logo.png'

const links = [
    { label: 'Collection', href: '#collection' },
    { label: 'Our story', href: '#about' },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-30 bg-linear-to-b from-bg via-bg/85 to-transparent px-6 pb-3 pt-3">
            <div className="glass mx-auto flex max-w-[1100px] items-center justify-between rounded-full py-1 pl-4 pr-2">
                <a href="#top" aria-label="Sophie’s Noir home" onClick={() => setOpen(false)}>
                    <img src={logo} alt="Sophie’s Noir" className="-my-3 h-16 w-auto sm:-my-4 sm:h-20" />
                </a>

                <nav className="flex items-center gap-3 sm:gap-5">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="hidden text-xs text-muted transition hover:text-gold sm:inline">
                            {l.label}
                        </a>
                    ))}
                    <a href="#order" className="btn-gold !px-5 !py-2 !text-xs">Order</a>

                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        className="grid h-9 w-9 place-items-center rounded-full text-gold sm:hidden"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.6]" strokeLinecap="round" aria-hidden="true">
                            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
                        </svg>
                    </button>
                </nav>
            </div>

            {open && (
                <div className="glass absolute inset-x-6 top-full mx-auto mt-1 max-w-[1100px] rounded-3xl p-3 sm:hidden">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-2xl px-4 py-3 text-sm text-ink transition hover:bg-white/60 hover:text-gold"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}