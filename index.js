const list = document.querySelector(".list");

let elSelect = document.querySelector(".select");
let elSearch = document.querySelector(".search");

function renderUi(array) {
	for (let item of array) {
		let LI = document.createElement("li");
		let Img = document.createElement("img");
		let Title = document.createElement("h2");
		let Text = document.createElement("p");
		let Mass = document.createElement("p");
		let Age = document.createElement("p");
		let Info = document.createElement("div");
		let Span = document.createElement("span");

		Info.setAttribute("class", "info");
		LI.setAttribute("class", "item");
		Title.setAttribute("class", "title");
		Text.setAttribute("class", "text");
		Mass.setAttribute("class", "mass");
		Age.setAttribute("class", "age");
		Img.setAttribute("class", "img");
		Span.setAttribute("class", "span");

		Img.src = item.img;
		Title.textContent = item.name;
		Text.textContent = item.candy;
		Mass.textContent = item.weight;
		Age.textContent = item.avg_spawns + " age";

		LI.append(Img);
		Info.append(Title);
		Info.append(Text);
		Span.append(Mass);
		Span.append(Age);
		LI.append(Info);
		LI.append(Span);

		list.append(LI);
	}
}
renderUi(pokemons);

// const candyArr = []; pokemons.filter((item) => {
// 	return !(candyArr.includes(item.candy));
// 	console.log(item.candy);
// });
// console.log(candyArr);

const candyArr = [];
pokemons.forEach((item) => {
	if (!candyArr.includes(item.candy)) {
		candyArr.push(item.candy);
	}
});

select(candyArr);

function select(arr) {
	arr.forEach((item) => {
		let elOption = document.createElement("option");
		elOption.textContent = item;
		elSelect.append(elOption);
	});
}

elSelect.addEventListener("change", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;
	list.innerHTML = "";
	if (value == "all") {
		renderUi(pokemons);
	} else {
		const newItem = pokemons.filter((item) => {
			return value == item.candy;
		});
		renderUi(newItem);
	}
});

elSearch.addEventListener("keyup", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;

	const newItem = pokemons.filter((item) => {
		return item.name.includes(value);
	});
	console.log(newItem);

});
