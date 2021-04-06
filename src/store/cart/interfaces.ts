import ProductInterface from "@/lib/product/interfaces";

export interface CartState {
    products: CartInterface[];
}

export interface CartInterface {
    count: number;
    product: ProductInterface;
}