/* eslint-disable no-case-declarations */
import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();

	switch (request.method) {
		case 'GET':
			const users = await User.find({});
			return response.status(200).json({data: users});
		case 'POST':
			const newUser = new User(request.body);
			console.log(request.body);
			await newUser.save();
			return response.status(201).json({data: newUser});
		default:
	}
}
