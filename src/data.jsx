export const WA_NUMBER = '2348093149342'
export const IG_HANDLE = 'sophies_noir'
export const WA_DISPLAY = '+234 809 314 9342'

export const wa = (msg) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const icon = (children) => (
    <svg
        viewBox="0 0 24 24"
        className="mb-5 h-11 w-11 fill-none stroke-gold stroke-[1.2]"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
)

export const items = [
    {
        name: 'Perfumes',
        text: 'Designer and niche fragrances for every occasion.',
        icon: icon(<><rect x="9" y="2.5" width="6" height="3" /><path d="M8 8h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" /></>),
    },
    {
        name: 'Niche & designer oils',
        text: 'Long-lasting concentrated perfume oils.',
        icon: icon(<path d="M12 3c3.5 4.5 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 2.5-6.5 6-11z" />),
    },
    {
        name: 'Decants',
        text: 'Try a fragrance in a smaller size before buying the full bottle.',
        icon: icon(<path d="M10 3h4M11 3v4l-3 4v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8l-3-4V3" />),
    },
    {
        name: 'Car air fresheners',
        text: 'Keep your car smelling fresh and refined.',
        icon: icon(<path d="M5 16l1.5-5h11L19 16M4 16h16v3H4zM7 19v1.5M17 19v1.5" />),
    },
    {
        name: 'Diffusers',
        text: 'Fill your home with a lasting signature scent.',
        icon: icon(<path d="M9 9h6l1 11H8zM12 9V4M10 6c1-2 3-2 4 0" />),
    },
]