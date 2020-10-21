function showTime() {
	const timeElement = document.getElementById('timeElement');

	const params = {
		param1: "", 
		param2: "", 
	};
	const body = {

	};
	const additionalParams = {
		headers: {
			param1: "", 
			param2: '', 
		}, 
		queryParams: {
			param1: "", 
			param2: '', 
		}, 
	};

	var apigClient = apigClientFactory.newClient();
	console.log(apigClient);
	apigClient.requesttimeGet(params, body, additionalParams)
		.then(function(result) {
			timeElement.innerHTML = result.data
		})
		.catch(function(result) {
			;
		})
	return;
}