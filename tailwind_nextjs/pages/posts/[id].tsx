import Layout from '../../components/Layout'
import { getPostData, getAllPostIds } from '../../libs/posts'

type Props = {
  post: PostType
}

const Post = (props: Props) => {
  return (
    <Layout title={props.post.title}>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = await getAllPostIds()

  return {
    paths, // {1, 2, 3, ..., 100}
    fallback: false, // 存在しないページのときは404
  }
}

type Params = {
  params: {
    id: number
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = await getPostData(params.id)
  return {
    props: { post },
  }
}
