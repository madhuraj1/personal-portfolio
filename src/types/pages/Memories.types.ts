export interface Memory {
    memoriesCollection: MemoriesCollection;
}

export interface MemoriesCollection {
    items: MemoriesCollectionItem[];
}

export interface MemoriesCollectionItem {
    name: string;
    caption:string;
    coverImage: CoverImage;
    memoryCollectionCollection: MemoryCollectionCollection;
}

export interface CoverImage {
    fileName: string;
    url:      string;
}

export interface MemoryCollectionCollection {
    items: MemoryCollectionCollectionItem[];
}

export interface MemoryCollectionCollectionItem {
    url: string;
}
