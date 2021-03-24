export default interface ProductInterface {
    id: number;
    title: string;
    description: string;
    size: SizesEnum;
    state: string;
}

export type SizesEnum = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxl';