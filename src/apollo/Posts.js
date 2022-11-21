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

export const FETCH_POST = gql`
query Post($id:ID!){
  post (where: {id:$id}){
    id,
    title,
    publishedAt,
    content {
      document
    }
  }
}
`