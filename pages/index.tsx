import Head from "next/head";
import type { NextPage } from "next";
import { GetStaticProps } from 'next';
import clientPromise from "../lib/mongodb";
import { InferGetStaticPropsType } from 'next';
import Layout, { siteTitle } from "../components/layout/layout";
import LandingLayout from "../components/landingLayout/landingLayout";
import SubjectShelfLayout from "../components/subjectShelfLayout/subjectShelfLayout";

const Home: NextPage = ({ subjects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  	return (
		<Layout>
			<Head>
				<title>{ siteTitle }</title>
			</Head>
			<LandingLayout></LandingLayout>
			<SubjectShelfLayout subjects={subjects}></SubjectShelfLayout>
		</Layout>
  	);
}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = await clientPromise;
    let subjects = await client.db("bitsDatabase").collection('subjectsCollection').find({})
        .sort({ metacritic: -1 })
        .toArray();

	if (!subjects.length) {
		return {
			notFound: true,
		}
	}
  
    return {
        props: {
            subjects,
        },
    }
}

export default Home;
