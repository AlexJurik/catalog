export default interface ProductInterface {
    id: number;
    title: string;
    description: string;
    size: SizesEnum;
    state: string;
    price: number;
    url: string;
    images: ImageInterface[];
}

export interface ImageInterface {
    id: number;
    alternativeText: string;
    height: number;
    width: number;
    url: string;
}

export type SizesEnum = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxl';