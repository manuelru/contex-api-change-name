

export const getProducts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products`);
    const products = await response.json();

    return products;
}


export const getProduct = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products/${id}`);
    const product = await response.json();

    return product;
}


export const postProduct = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}