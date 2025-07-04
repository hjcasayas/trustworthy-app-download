import { gql } from "graphql-request";

export const landingPageQuery = gql`
  query LandingPage {
    landingPage {
      sidebar {
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
      blocks {
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
          logos1 {
            alternativeText
            url
            height
            width
            documentId
          }
          logos2 {
            alternativeText
            url
            height
            width
            documentId
          }
        }
        ... on ComponentBlocksGetMoreDone {
          __typename
          id
          headline
          description
          cards {
            id
            text
            icon {
              alternativeText
              url
              width
              height
            }
          }
        }
        ... on ComponentBlocksReliableApp {
          __typename
          id
          headline
          benefits {
            id
            title
            description
            image {
              alternativeText
              height
              url
              width
            }
          }
        }
        ... on ComponentBlocksImageBreaker {
          __typename
          id
          mobile {
            alternativeText
            url
            width
            height
          }
          tablet {
            alternativeText
            url
            width
            height
          }
        }
        ... on ComponentBlocksFirstClassSoftware {
          __typename
          id
          headline
          description
          cards {
            id
            text
            icon {
              alternativeText
              height
              url
              width
            }
          }
        }
        ... on ComponentBlocksCtaSection {
          __typename
          id
          headline
          cta {
            label
            url
            icon {
              alternativeText
              url
              height
              width
            }
          }
          image {
            alternativeText
            url
            height
            width
          }
        }
      }
      footer {
        websiteName {
          alternativeText
          url
          height
          width
        }
        websiteLogo {
          alternativeText
          url
          height
          width
        }
        contactDetails {
          title
          links {
            id
            label
            url
            isExternal
          }
        }
        policyLinks {
          id
          label
          url
          isExternal
        }
      }
    }
  }
`;
