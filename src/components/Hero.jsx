import logo from '../assets/logo.png'
import { wa } from '../data'

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2">
            <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl">Luxury made elegant.</h1>
                <p className="mt-6 max-w-sm text-muted">
                    Perfumes, niche and designer oils, decants, car air fresheners and diffusers.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#collection" className="btn-gold">Shop the collection</a>
                    <a
                        href={wa('Hello Sophie’s Noir, I need help choosing a perfume.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glass"
                    >
                        Chat with us
                    </a>
                </div>
            </div>
            <div className="glass rounded-[2rem] p-6">
                <img src={logo} alt="Sophie’s Noir: Luxury made Elegant" className="mx-auto w-full max-w-md" />
            </div>
        </section>
    )
}