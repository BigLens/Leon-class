document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
	const value = document.querySelector('input').value
	const url = `https://api.nasa.gov/planetary/apod?api_key=W7F2xqzvikUaEbhITXQkroLNbRthiRy2xnzu1iBM&date=${value}`
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.media_type === 'image'){
				document.querySelector('img').src = data.hdurl
			}
			if(data.media_type === 'video'){
				document.querySelector('iframe').src = data.url
			}
			document.querySelector('h3').innerText = data.explanation
			
})
		.catch(err => {
			console.log(`error ${err}`)
});
}

