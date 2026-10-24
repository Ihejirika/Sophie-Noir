import { items, wa } from '../data'

export default function Collection() {
    return (
        <section id="collection" className="mx-auto max-w-[1100px] px-6 py-20">
            <h2 className="text-3xl sm:text-4xl">The collection</h2>
            <p className="mb-12 mt-3 max-w-md text-muted">
                Five ways to wear luxury. Tap order and we continue on WhatsApp.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => (
                    <article
                        key={it.name}
                        className="glass flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-gold"
                    >
                        {it.icon}
                        <h3 className="text-2xl">{it.name}</h3>
                        <p className="mb-6 mt-2 flex-1 text-sm text-muted">{it.text}</p>
                        <a
                            href={wa(`Hello Sophie’s Noir, I would like to ask about ${it.name}. Please send me the available options and prices.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start border-b border-gold pb-0.5 text-sm font-normal text-gold"
                        >
                            Order on WhatsApp
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}