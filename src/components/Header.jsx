import logo from '../assets/logo.png'

const links = [
    { label: 'Collection', href: '#collection' },
    { label: 'Our story', href: '#about' },
]

export default function Header() {
    return (
        <header className="sticky top-2 z-30 px-3">
            <div className="glass mx-auto flex max-w-[1000px] items-center justify-between rounded-full py-1 pl-3 pr-1.5">
                <a href="#top" aria-label="Sophie’s Noir home">
                    <img src={logo} alt="Sophie’s Noir" className="-my-3 h-16 w-auto sm:-my-4 sm:h-20" />
                </a>
                <nav className="flex items-center gap-5">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="hidden text-xs text-muted transition hover:text-gold sm:inline">
                            {l.label}
                        </a>
                    ))}
                    <a href="#order" className="btn-gold !px-5 !py-2 !text-xs">Order</a>
                </nav>
            </div>
        </header>
    )
}