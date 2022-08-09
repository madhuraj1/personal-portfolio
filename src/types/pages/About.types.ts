export interface Data {
    aboutCollection: AboutCollection;
}

export interface AboutCollection {
    items: Item[];
}

export interface Item {
    name:           string;
    about:          string;
    profilePicture: ProfilePicture;
    youtubeLinks:   string[];
}

export interface ProfilePicture {
    url: string;
}
