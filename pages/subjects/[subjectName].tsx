import Head from "next/head";
import { GetStaticProps } from 'next';
import clientPromise from "../../lib/mongodb";
import { InferGetStaticPropsType } from 'next';
import type { GetStaticPaths, NextPage } from "next";
import Layout, { siteTitle } from "../../components/layout/layout";
import SubjectDataLayout from "../../components/subjectDataLayout/subjectDataLayout";

const Subject: NextPage = ({ subjectData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  	return (
		<Layout>
			<Head>
				<title>{ siteTitle }</title>
			</Head>
            {subjectData.courseObjectives? <SubjectDataLayout subjectData={subjectData}/>: <p style={{"textAlign": "center"}}>These subjects are under development. Please checkout <strong>Software Architecture.</strong> <br/> Click on <strong>Joey</strong> to go back.</p>}
		</Layout>
  	);
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 
                    subjectName: "Software Architectures" 
                } 
            }, 
            { 
                params: { 
                    subjectName: "Agile Software Processes" 
                } 
            },
            { 
                params: { 
                    subjectName: "Cloud Computing" 
                } 
            },
            { 
                params: { 
                    subjectName: "Artificial Intelligence" 
                } 
            }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = await clientPromise;
    let subjectData = await client.db("bitsDatabase").collection('subjectsDataCollection')
        .findOne({
            subjectName: context.params?.subjectName
        })

	if (!Object.keys(subjectData).length) {
		return {
			notFound: true,
		}
	}
  
    return {
        props: {
            subjectData
        },
    }
}

export default Subject;
