export interface Project {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: 'remapp.ing',
        slug: 'remapping',
        description: 'A high-performance, beautiful remapping tool for Haybox based controllers.',
        tags: ['Vue', 'TypeScript', 'WebSerial'],
        link: 'https://remapp.ing/'
    },
    {
        title: 'RideParsec',
        slug: 'rideparsec',
        description: 'An e-commerce website built on a headless Shopify storefront.',
        tags: ['Shopify', 'Vue', 'GraphQL'],
        link: 'https://beta.rideparsec.com'
    },
    {
        title: 'MTG Price Tracker',
        slug: 'mtg-price-tracker',
        description: 'A frontend for MTGStocks meant to look pretty.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        link: 'https://mtgprice.bvoo.xyz'
    },
    {
        title: 'krypton.sh',
        slug: 'krypton',
        description: 'An arcade rom database built with performance and speed in mind.',
        tags: ['Vue', 'TypeScript', 'Meilisearch'],
        link: 'https://krypton.sh'
    },
    {
        title: 'Truffle.vip',
        slug: 'truffle',
        description: 'Built creator monetization systems on top of Twitch and YouTube scaling to over 100k users.',
        tags: ['Rust', 'Postgres', 'React'],
    },
    {
        title: 'Traction',
        slug: 'traction',
        description: 'A SaaS tool to track e-commerce competitors.',
        tags: ['Convex', 'Vue', 'Firecrawl'],
    },

];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}
