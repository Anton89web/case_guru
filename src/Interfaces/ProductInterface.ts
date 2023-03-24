
export interface Product {
    id: string,
    etag: string,
    volumeInfo: {
        title: string,
        authors: [
            string
        ],
        description: string,
        categories: [
            string
        ],
        imageLinks: {
            thumbnail: string,
        },
    },
}