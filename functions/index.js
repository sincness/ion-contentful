const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.topicNotifications = functions.https.onRequest((req, res) => {

	// Contentful sender entry data med i request body
	const nyhed = req.body.fields
	const emne = "Nyheder"


	// Beskedens detaljer til slutbrugeren
	const payload = {
		notification: {
			title: "Nyhed",
			body: "Tjek den ud",
			icon: "https://i.imgur.com/iSvtx52.png"
		}
	}

	return admin.messaging().sendToTopic(emne, payload)
		.then(_ => {
			// succesfuld respons
			res.status(200).send('Abonnenter har fået påmindelsen')
		})
		.catch(err => {
			res.status(400).send('Besked fejlet i at sende')
		});

})