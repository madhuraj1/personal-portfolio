import { gql } from "@apollo/client";

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