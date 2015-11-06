var greet = function(callback){
	console.log('Hello');
	var obj = {
		name: 'Jonathan Lee'
	}
	callback(obj);
}

greet(function(data){
	console.log('This is a callback function: ', data.name)
});