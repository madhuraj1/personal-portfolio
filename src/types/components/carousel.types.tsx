export interface SlideShow {
  data: Data;
}

export interface Data {
  slideshowCollection: SlideshowCollection;
}

export interface SlideshowCollection {
  items: Item[];
}

export interface Item {
  entryName: string;
  order: number;
  imageBase64: ImageBase64;
}

export interface ImageBase64 {
  url: string;
  title: string;
  description: null;
}
