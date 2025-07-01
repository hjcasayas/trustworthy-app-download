import { gql } from "graphql-request";

export const landingPageQuery = gql`
  query LandingPage {
    landingPage {
      blocks {
        ... on ComponentBlocksSidebar {
          __typename
          id
          website {
            name
            logo {
              alternativeText
              height
              width
              url
            }
          }
          cta {
            label
            url
            isExternal
          }
          headline1
          headline2
          headline3
          description
          offerings {
            title
            navigationLinks {
              id
              label
              url
              icon {
                alternativeText
                height
                url
                width
              }
            }
          }
          contactLinks {
            id
            label
            url
          }
        }
        ... on ComponentBlocksHeader {
          __typename
          id
          hero {
            alternativeText
            url
            height
            width
          }
          headlines {
            id
            text
          }
          logos {
            alternativeText
            url
            height
            width
          }
        }
      }
    }
  }
`;
