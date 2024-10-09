export interface ICinema {
  youtubeCollection: YoutubeCollection;
}
export interface YoutubeCollection {
  items?: ItemsEntity[] | null;
  __typename: string;
}
export interface ItemsEntity {
  youtubeVideoId: string;
  __typename: string;
}

export interface FilmsIntroductionCollection {
  filmsIntroductionCollection: {
    items: FilmsIntroductionCollectionItem[];
  };
}

export interface FilmsIntroductionCollectionItem {
  introductionText: string;
  filmsVideo: {
    url: string;
  };
}
