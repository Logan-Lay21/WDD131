import recipes from './recipes.mjs';


function randomNumber(number) {
    return Math.floor(Math.random()*number)
}

function getRandomListEntry(list) {
    let length = list.length;
    let random = randomNumber(length);
    return list[random]
}

function recipeTemplate(recipe) {
    return `<div class="recipe-container">
                <div class="image-container">
                    <img src="${recipe.image}" alt="${recipe.description}">
                </div>
                <div class="right-container">
                    <ul class="tag">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <div class="subtitle-rating">
                        <h2><a href="#">${recipe.name}</a></h2>
                        ${ratingTemplate(recipe.rating)}

                    </div>
                    <div class="description">
                        <p>${recipe.description}</p>
                    </div>
                </div>
            </div>`
}

console.log(getRandomListEntry(recipes))

function tagsTemplate(tags) {
    let html = "";
	for (let tag of tags) {
        html += `<li>${tag}</li>`
    }

    return html
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
        if (i <= rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        // else output an empty star
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    // after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    let div = document.querySelector("main");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let content = recipeTemplate(recipeList);
    // Set the HTML strings as the innerHTML of our output element.
    div.innerHTML += content;
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes(recipe);
    }
init();

// let searchInput = document.getElementById("search")
// let button = document.getElementById("searchButton")

// button.addEventListener('click', searchHandler);


// function searchHandler(event) {
//     event.preventDefault();

//     let searchText = searchInput.value;

//     console.log("User searched for:", searchText)

//     let filtered = filterFunction(searchText)

//     console.log(filtered)

// }

// function filterFunction(query) {
//     return recipes.filter(recipe => {
//         const _query = query.toLowerCase()
//         return (
//             recipe.name.toLowerCase().includes(_query) ||
//             recipe.description.toLowerCase().includes(_query) ||
//             recipe.recipeIngredient.some(item => item.toLowerCase().includes(_query)) ||
//             recipe.tags.some(item => item.toLowerCase().includes(_query))
//         )
//     })
// }

let searchInput = document.getElementById("search")
let button = document.getElementById("searchButton")

button.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault();
    let searchText = searchInput.value;
    console.log("User searched for:", searchText)
    
    // Get filtered results
    let filtered = filterFunction(searchText);
    
    // Sort the filtered results
    filtered.sort(compareFn);
    
    console.log(filtered)

    document.querySelector('main').innerHTML = " ";

    filtered.forEach(recipe => {
        renderRecipes(recipe)
    })
}

function filterFunction(query) {
    return recipes.filter(recipe => {
        const _query = query.toLowerCase()
        return (
            recipe.name.toLowerCase().includes(_query) ||
            recipe.description.toLowerCase().includes(_query) ||
            recipe.recipeIngredient.some(item => item.toLowerCase().includes(_query)) ||
            recipe.tags.some(item => item.toLowerCase().includes(_query))
        )
    })
}

// function compareFn(a,b) {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return -1;
//     } else if (a.toLowerCase() < b.toLowerCase()) {
//         return 1;
//     } else if (a.toLowerCase() === b.toLowerCase()) {
//         return 0;
//     }
// }

function compareFn(a, b) {
    // Convert to lowercase for case-insensitive comparison
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    
    if (nameA < nameB) {
        return -1;  // a should come before b
    } else if (nameA > nameB) {
        return 1;   // a should come after b
    } else {
        return 0;   // names are equal
    }
}


