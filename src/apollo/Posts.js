import {gql} from '@apollo/client';

export const FETCH_PAGINATED_POSTS = gql`
query Posts{
  posts{
    id,
    title,
    publishedAt,
    content {
      document
    }
  }
}
`

// query PaginatedPosts {
//     paginatedPosts {
//         entries {
//             id
//             insertedAt
//             summary
//             title
//         }
//         pageNumber
//         pageSize
//         totalPages
//     }
// }