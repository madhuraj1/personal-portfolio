export interface IContact {
    contactCollection: ContactCollection;
}

interface ContactCollection {
    items: Item[];
}

interface Item {
    address:   string;
    email:     string;
    number:    string;
    instagram: string;
    youtube:   string;
    behance:   string;
}
