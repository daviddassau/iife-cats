CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener("click", (event) => {
	if(event.target.id.indexOf("adopt") === 0){
		console.log("event", event);
		let catIndex = event.target.id.split("-")[1];
		CatStore.adoptCat(catIndex)
	}
});





	// <button class="btn btn-warning" type="submit" id="all">All Cats</button>
	// <button class="btn btn-danger" type="submit" id="homeless">Homeless Kats</button>
	// <button class="btn btn-info" type="submit" id="zoe">Zoe's Kats</button>
	// <button class="btn btn-warning" type="submit" id="callan">Callan's Kats</button>
	// <button class="btn btn-success" type="submit" id="lauren">Lauren's Kats</button>

document.getElementById("all").addEventListener("click", (event) => {
	let cats = CatStore.getCats();
	let owners = CatStore.getOwners();
	CatStore.combineArrays(cats, owners);
})

// For Callan's Cats Button
document.getElementById("callan").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(2);
});


// For Zoe's Cats Button
document.getElementById("zoe").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(1);
});


// For Lauren's Cats Button
document.getElementById("lauren").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(3);
});


// For All Cats Button
document.getElementById("all").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(3);
});




