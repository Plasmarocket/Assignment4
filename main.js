//JavaScript Document 

let requestURL = 'https://plasmarocket.github.io/lab4/main.json';

//grabs objects from json

fetch(requestURL).then(function(response){
	response.lots().then (function(lots){
		//store response in variable
		console.log(lots);
		products(lots);
	});
});

// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();


// request.onload = function(){
// 	let lots = request.response;
// 		console.log(lots);
// 		products(lots);
// };

function products(jsonObj){

	//references to products json 
	let products = jsonObj.products;

	//for loop to go thought the data 
	for(let i = 0; i<products.length;i++){

		//elements for data
		let h2 = document.createElement('h2');
		let p = document.createElement('p');
		let img = document.createElement('img');

		let main = document.querySelector('div');
		//set images
		img.setAttribute('src', 'https://plasmarocket.github.io/lab4/Pictures/' + products[i].image);
		img.setAttribute('alt', products[i].image);
		//set h2 text to name
		h2.textContent = products[i].name;
		//set p text to price
		p.textContent = 'Price ' + products[i].price;
	
	//append child to div
	main.appendChild(h2);
	main.appendChild(p);
	main.appendChild(img);
	}
}
