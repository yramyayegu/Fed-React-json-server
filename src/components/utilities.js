const axios = require('axios');

 async  function GetRequest() {
	let result = null;

	await axios.get('http://localhost:3000/title')
	.then(function (response) {
		result = response.data;
	})
	.catch(function (error) {
		result = error;
	});
	return result;
 }

export default GetRequest;