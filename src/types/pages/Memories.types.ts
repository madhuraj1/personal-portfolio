export interface Memory {
  memoriesCollection: MemoriesCollection;
}

export interface MemoriesCollection {
  items: MemoriesCollectionItem[];
}

export interface MemoriesCollectionItem {
  sys: { id: string };
  name: string;
  about: string;
  coverImage: CoverImage;
  memoryCollectionCollection: MemoryCollectionCollection;
}
export interface GetMemoryById {
  memories: MemoriesCollectionItem;
}
export interface CoverImage {
  fileName: string;
  url: string;
}

export interface MemoryCollectionCollection {
  items: MemoryCollectionCollectionItem[];
}

export interface MemoryCollectionCollectionItem {
  url: string;
  height: number;
}

export interface HomepageVideo {
  data: HomePageData;
}

export interface HomePageData {
  homePageCollection: HomePageCollection;
}

export interface HomePageCollection {
  items: Item[];
}

export interface Item {
  getInTouchText: string;
  filmsSection: FilmsSection;
  portraitImageForBackground: FilmsSection;
  getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
  filmsSectionText: string;
}

export interface FilmsSection {
  url: string;
}

export interface GetInTouchCarouselImagesCollection {
  items: FilmsSection[];
}
