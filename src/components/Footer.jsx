import { IG_HANDLE, WA_DISPLAY, wa } from '../data'

export default function Footer() {
    return (
        <footer className="px-6 pb-10 pt-6">
            <div className="gold-rule mx-auto mb-8 max-w-[1100px]" />
            <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
                <p>© 2026 Sophie’s Noir · Luxury made Elegant</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <a
                        href={`https://instagram.com/${IG_HANDLE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition hover:text-gold"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-gold stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="0.8" />
                        </svg>
                        @{IG_HANDLE}
                    </a>
                    <a
                        href={wa('Hello Sophie’s Noir, I need some help.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition hover:text-gold"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-gold stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
                        </svg>
                        {WA_DISPLAY}
                    </a>
                </div>
            </div>
        </footer>
    )
}