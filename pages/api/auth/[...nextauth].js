import NextAuth from 'next-auth';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongo";
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';

export default NextAuth({
  adapter:MongoDBAdapter(clientPromise) ,
	session: {
		jwt: true
	},
	providers: [
		// OAuth authentication providers
		Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		}),
		Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET
		})
	],
	pages: {
		// signIn: '/login'
	},
	// SQL or MongoDB database (or leave empty)
	database: process.env.NEXT_PUBLIC_MONGODB_URI,
	callbacks: {
		session: async (session, user) => {
		   return Promise.resolve(session, user)
	 }}
});
