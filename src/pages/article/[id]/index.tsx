import Link from "next/link";
import { useRouter } from "next/router";

const article = ({article}: {article: any}) => {
    // one way of getting the article id to disply from the path:
    // const router = useRouter();
    // const {id} = router.query;

    return (
      <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </>
    )
}

// another way of getting the article to get the id using a getServerSideProps request (probably slower?)
// export const getServerSideProps = async (context: any) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// another way of getting the article to get the id using a getStaticProps and getStaticPaths (should be much faster since it's fetched at build time)
export const getStaticProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json();

    // get ids for each article tha is fetched from the posts request above
    const ids = articles.map((article: { id: any; }) => article.id);

    const paths = ids.map((id: { toString: () => any; }) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article


// the pages/article/[id] folder structure allows us to create a page used when any link fitting that path is accessed