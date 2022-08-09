import { gql } from "@apollo/client";

export const query = gql`query Slideshow{
    slideshowCollection(limit:10){
      items{
        imageBase64{
          url
        }
      }
    }
  }
`