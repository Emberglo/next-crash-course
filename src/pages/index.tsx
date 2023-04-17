import Head from 'next/head';
import ArticleList from '@/components/ArticleList';

export default function Home({articles}: {articles: any}) {
  return (
    <div>

      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={articles} />

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
}


//Types of fetch requests:
//getStaticProps - fetch data a build time
//getServerSideProps - fetch data on every request
//getStaticPaths - dynamically generate paths based on the data we're fetching