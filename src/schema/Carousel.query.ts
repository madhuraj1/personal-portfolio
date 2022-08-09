import { gql } from "@apollo/client";

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