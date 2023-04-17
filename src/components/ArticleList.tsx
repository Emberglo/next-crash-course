import ArticleItem from './ArticleItem';
import articleStyles from '@/styles/Article.module.css';

const ArticleList = ({articles}: {articles:any}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
