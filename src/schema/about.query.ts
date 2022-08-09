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