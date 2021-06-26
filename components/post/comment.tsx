import Post from '~/types/post'
import { DiscussionEmbed } from 'disqus-react'
import cst from '~/lib/constants'

type Props = {
  post: Post
}

const Comment = ({ post }: Props) => {
  const disqusConfig = {
    url: `${cst.FRONT_URL}/posts/${post.slug}`,
    identifier: post.slug,
    title: post.title,
    language: 'ja',
  }
  return (
    <div className="py-3">
      <DiscussionEmbed shortname={cst.DISQUS_SHORTNAME} config={disqusConfig} />
    </div>
  )
}

export default Comment
