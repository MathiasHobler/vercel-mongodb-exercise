import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();

	const {userId} = request.query;
	const user = await User.findById(userId);

	switch (request.method) {
		case 'GET':
			return response.status(200).json({data: user});
		case 'DELETE':
			await User.findByIdAndRemove(userId);
			return response.status(200).json({data: user});
		default:
			return response.status(403).json({message: 'Error: request method not allowed.'});
	}
}
