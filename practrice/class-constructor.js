class MakeNetflixTv{
	constructor(title, genre, rating, numOfEp){
		this.title = title
		this.genre = genre
		this.rating = rating
		this.numOfEp = numOfEp
	}
	play(){
		console.log('playing...')
	}
	stop(){
		console.log('stopping...')
	}
	skip(){
		console.log('skipping...')
	}
}

let netflix = new MakeNetflixTv('King of Boys', 'action', '90%', 7)

console.log(netflix)

