export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    tags: Tag[];
    categories: Category[];
}

export interface Tag {
    id: string;
    name: string;
}

export interface Category {
    id: string;
    name: string;
}