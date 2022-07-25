import Head from "next/head";
import type { NextPage } from "next";
import { GetStaticProps } from 'next';
import clientPromise from "../lib/mongodb";
import { InferGetStaticPropsType } from 'next';
import Layout, { siteTitle } from "../components/layout/layout";
import LandingLayout from "../components/landingLayout/landingLayout";
import BookShelfLayout from "../components/bookShelfLayout/bookShelfLayout";

const Home: NextPage = ({ books }: InferGetStaticPropsType<typeof getStaticProps>) => {
  	return (
		<Layout>
			<Head>
				<title>{ siteTitle }</title>
			</Head>
			<LandingLayout></LandingLayout>
			<BookShelfLayout books={books}></BookShelfLayout>
		</Layout>
  	);
}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = await clientPromise;
    let books = await client.db("bitsDatabase").collection('booksCollection').find({})
        .sort({ metacritic: -1 })
        .toArray();

	if (!books.length) {
		return {
			notFound: true,
		}
	}
  
    return {
        props: {
            books,
        },
    }
}

export default Home;
