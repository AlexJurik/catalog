import ProductInterface from '@/lib/product/interfaces';
export interface CartInterface {
    count: number;
    product: ProductInterface;
}