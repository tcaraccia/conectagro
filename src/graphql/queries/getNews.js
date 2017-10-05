import { gql } from 'react-apollo'

export default gql`
query {
  allPosts (orderBy: createdAt_DESC) {
    id
    thumbnail
    createdAt
    image
    title
    body
    createdBy
  }
}`