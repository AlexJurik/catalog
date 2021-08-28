import ProductInterface from '@/lib/product/interfaces';

export enum FilterEnum {
    Vsetko = "Vsetko",
    MBundy = "MBundy",
    MMikiny = "MMikiny",
    MTricka = "MTricka",
    MKrataseNohavice = "MKrataseNohavice",
    ZBundy = "ZBundy",
    ZMikiny = "ZMikiny",
    ZTricka = "ZTricka",
    ZKrataseNohavice = "ZKrataseNohavice",
    Prislusenstvo = "Prislusenstvo",
    Obuv = "Obuv",
    Ostatne = "Ostatne"
}
export interface RootState {
    products: ProductInterface[];
    filteredProducts: ProductInterface[];
    activeFilter: FilterEnum;
}