export interface Data {
    quoteCollection: QuoteCollection;
}

export interface QuoteCollection {
    items: Item[];
}

export interface Item {
    quote: string;
}
