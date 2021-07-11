import ProductInterface from '@/lib/product/interfaces';
import { Remarkable } from 'remarkable';

let remarkable: Remarkable;

export function formatProducts(products: ProductInterface[]): ProductInterface[] {
    for (const product of products) {
        extractProduct(product);
    }

    return products;
}

function extractProduct(product: ProductInterface) {
    const converter = getRemarkableInstance();
    product.url = `${window.location.origin}/products/${product.id}`;
    product.descriptionHtml = converter.render(product.description);
    product.created_at = new Date(product.created_at);
    const today = new Date();
    if (
        product.created_at >=
        new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3)
    ) {
        product.isNew = true;
    }
}

function getRemarkableInstance(): Remarkable {
    if (!remarkable) {
        remarkable = new Remarkable({
            html: true,
            breaks: true,
        });
    }

    return remarkable;
}