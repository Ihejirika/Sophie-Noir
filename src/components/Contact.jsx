import { wa } from '../data'

export default function Contact() {
    return (
        <section id="order" className="mx-auto max-w-[1100px] px-6 pb-24 pt-6">
            <div className="glass rounded-[2rem] px-6 py-16 text-center">
                <h2 className="text-3xl sm:text-4xl">Ready when you are</h2>
                <p className="mx-auto mb-8 mt-4 max-w-md text-muted">
                    Send us your choice on WhatsApp and we will take it from there.
                </p>
                <a
                    href={wa('Hello Sophie’s Noir, I would like to place an order.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                >
                    Chat on WhatsApp
                </a>
            </div>
        </section>
    )
}