export interface ICinema {
    youtubeLinksCollection: YoutubeLinksCollection;
}

export interface YoutubeLinksCollection {
    items: Item[];
}

export interface Item {
    youtubeVideoId: string;
}
