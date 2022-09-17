
  export interface ICinema {
    youtubeCollection: YoutubeCollection;
  }
  export interface YoutubeCollection {
    items?: (ItemsEntity)[] | null;
    __typename: string;
  }
  export interface ItemsEntity {
    youtubeVideoId: string;
    __typename: string;
  }
  