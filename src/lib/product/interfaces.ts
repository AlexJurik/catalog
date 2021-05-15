export default interface ProductInterface {
    id: number;
    title: string;
    description: string;
    short_description: string;
    descriptionHtml: string;
    giveaway: boolean;
    size: string;
    state: string;
    price: number;
    url: string;
    created_at: Date;
    isNew: boolean;
    images: ImageInterface[];
}

export interface ImageInterface {
    id: number;
    alternativeText: string;
    height: number;
    width: number;
    url: string;
}
