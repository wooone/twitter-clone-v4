import Head from "next/head";
import CommentModal from "../components/CommentModal";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results}/>

        {/* Modal */}
        <CommentModal />
      </main>
    </div>
  );
}

// https://newsapi.org/v2/top-headlines?country=tw&apiKey=95aa15c3cff64af9a9c2e439379bd47c
export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://newsapi.org/v2/top-headlines?country=tw&apiKey=95aa15c3cff64af9a9c2e439379bd47c"
  ).then((res) => res.json());

  const randomUsersResults = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture").then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
