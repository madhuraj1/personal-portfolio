export interface Data {
  aboutCollection: AboutCollection;
}

export interface AboutCollection {
  limit: number;
  items: Item[];
}

export interface Item {
  name: string;
  about: string;
  profilePicture: ProfilePicture;
  heading: string;
  whatapp: string;
  instagram: string;
  gmail: string;
  youtube: string;
  twitter: null;
}

export interface ProfilePicture {
  url: string;
  height: number;
  width: number;
}
