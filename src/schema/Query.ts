import { gql } from "@apollo/client";

export const Aboutquery = gql`
  query About {
    aboutCollection(limit: 1) {
      limit: limit
      items {
        name
        about
        profilePicture {
          url
          width
          height
        }
        heading
        whatapp
        instagram
        gmail
        youtube
        twitter
        whatapp
      }
    }
  }
`;
export const Carouselquery = gql`
  query Carousel {
    slideshowCollection(order: order_ASC) {
      items {
        imageBase64 {
          url
        }
      }
    }
  }
`;
export const MemoryQuery = gql`
  query Memories {
    memoriesCollection {
      items {
        sys {
          id
        }
        name
        about
        coverImage {
          fileName
          url
        }
        memoryCollectionCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
export const QuoteQuery = gql`
  query quote {
    quoteCollection {
      items {
        quote
      }
    }
  }
`;

export const contactQuery = gql`
  query contactQuery {
    contactCollection {
      items {
        address
        email
        number
        instagram
        youtube
        behance
      }
    }
  }
`;

export const cinemaQuery = gql`
  query youtubeLinks {
    youtubeCollection {
      items {
        youtubeVideoId
      }
    }
  }
`;

export const getMemoriesdById = gql`
  query Memories($id: String!) {
    memories(id: $id) {
      sys {
        id
      }
      name
      about
      coverImage {
        fileName
        url
      }
      memoryCollectionCollection {
        items {
          url
          height
        }
      }
    }
  }
`;

export const getGalleryQuery = gql`
  query galleryQuery {
    galleryCollection {
      items {
        introduction
        imagedForGalleryCollection {
          items {
            url
            height
          }
        }
      }
    }
  }
`;

export const HomepageVideoQuery = gql`
  {
    homePageCollection {
      items {
        filmsSection {
          url
        }
        getInTouchCarouselImagesCollection {
          items {
            url
          }
        }
        portraitImageForBackground {
          url
        }
        getInTouchText
      }
    }
  }
`;
