import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return (
    <Link href="#">
      <a>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
