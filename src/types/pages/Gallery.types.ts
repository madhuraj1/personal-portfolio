export interface GalleryImageCollection {
  galleryCollection: GalleryCollection;
}

export interface GalleryCollection {
  items: Item[];
}

export interface Item {
  introduction: string;
  imagedForGalleryCollection: ImagedForGalleryCollection;
}

export interface ImagedForGalleryCollection {
  items: Item2[];
}

export interface Item2 {
  url: string;
  height: number;
}
