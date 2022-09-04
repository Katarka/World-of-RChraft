import { gql } from '@apollo/client';

export const FETCH_PAGINATED_POSTS = gql`
query PaginatedPosts {
    paginatedPosts {
        entries {
            id
            insertedAt
            summary
            title
        }
        pageNumber
        pageSize
        totalPages
    }
}
`