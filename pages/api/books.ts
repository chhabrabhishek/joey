import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
	request: NextApiRequest,
	response: NextApiResponse<any>
) => {
  	const client = await clientPromise;
  	let books = await client.db("bitsDatabase").collection('booksCollection').find({})
    	.sort({ metacritic: -1 })
    	.toArray();
	response.json(books);
}

export default handler;
