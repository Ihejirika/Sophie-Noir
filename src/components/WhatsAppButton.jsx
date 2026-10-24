import { wa } from '../data'

export default function WhatsAppButton() {
    return (
        <a
            href={wa('Hello Sophie’s Noir, I need some help.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-linear-to-br from-gold2 to-gold shadow-xl shadow-gold/40 transition hover:-translate-y-1"
        >
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-white stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
                <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2z" />
            </svg>
        </a>
    )
}