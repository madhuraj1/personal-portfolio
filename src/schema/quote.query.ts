import { gql } from "@apollo/client";

export const QuoteQuery = gql`query quote{
    quoteCollection{
      items{
        quote
      }
    }
}`