export function slugify(link: string): string {
    return link.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}


export function deSlugify(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}
