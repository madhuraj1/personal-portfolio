import { gql } from "@apollo/client";

export const Aboutquery = gql`query About{
  aboutCollection{
    items{
      name
      about
      profilePicture{
        url
      }
      youtubeLinks
    }
  }
}
`
export const Carouselquery = gql`query Carousel{
    slideshowCollection{
      items{
        imageBase64{
          url
        }
      }
    }
  }
`
export const MemoryQuery = gql`
query Memories{
    memoriesCollection{
      items{
        name
        caption
        coverImage{
          fileName
          url
        }
        memoryCollectionCollection{
          items{
            url
          }
        }
      } 
    }
  }
`
export const QuoteQuery = gql`query quote{
    quoteCollection{
      items{
        quote
      }
    }
}`

export const contactQuery = gql`
query contactQuery{
    contactCollection{
      items{
        address
        email
        number
        instagram
        youtube
          behance
      }
    }
}`

export const cinemaQuery = gql`
query youtubeLinks{
  youtubeLinksCollection{
    items{
			youtubeVideoId
    }
  }
}`