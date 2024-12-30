export function slugify(link: string): string {
    return link.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}