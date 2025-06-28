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
          headline
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
      }
    }
  }
`;
