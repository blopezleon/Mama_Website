export interface Property {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    images?: any[];
    address: string;
    neighborhood?: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    description?: string;
    agentNote?: string;
    status: "for-sale" | "for-rent";
    yearBuilt?: number;
    lotSize?: number;
    displayOnHomepage?: boolean;
}
