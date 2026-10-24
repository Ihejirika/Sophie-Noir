const steps = [
    { title: 'Choose', text: 'Pick a product above, or ask us to recommend one.' },
    { title: 'Message us', text: 'Tap order. Your message is already written for you.' },
    { title: 'Receive', text: 'We confirm price, payment and delivery in the chat.' },
]

export default function Steps() {
    return (
        <section className="mx-auto max-w-[1100px] px-6 py-20">
            <h2 className="mb-10 text-3xl sm:text-4xl">How to order</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {steps.map((s, i) => (
                    <div key={s.title} className="glass rounded-3xl p-7">
                        <span className="font-display text-4xl text-gold">{i + 1}</span>
                        <h3 className="mt-3 text-xl">{s.title}</h3>
                        <p className="mt-2 text-sm text-muted">{s.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}