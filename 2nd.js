var sahil = {
	method: 'GET',
	headers: {
		'X-GoogleNewsAPI-Key': '67ed46fb813f4d229ec17bb449662144',
		'X-GoogleNewsAPI-Host': 'news.google.com'
	}
};

fetch('https://jsonplaceholder.typicode.com/photos',sahil)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        console.log(response.content);
        document.getElementById('title').innerHTML = response.content;
        document.getElementById('description').innerHTML = '- ' + response.content + ' -';
        document.getElementById('link').innerHTML = '- ' + response.content + ' -';
    })
	.catch(err => {
        console.error(err);
    });