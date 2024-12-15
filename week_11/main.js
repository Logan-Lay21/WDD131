import sets from './sets.mjs';

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getRandomListEntry(list, usedIndexes) {
    let random;
    do {
        random = randomNumber(list.length);
    } while (usedIndexes.has(random)); // Ensure no duplicates
    usedIndexes.add(random); // Mark this index as used
    return list[random];
}

function setTemplate(set) {
    return `<div class="lego-set-container">
                <div class="image-container">
                    <img src="${set.image}" alt="${set.name}">
                </div>
                <div class="info-container">
                    <h2><a href="${set.url}" target="_blank">${set.name}</a></h2>
                    <p>Pieces: ${set.pieces}</p>
                    <p>Minifigures: ${set.minifigCount}</p>
                    <p>Item Number: ${set.item}</p>
                    <p>Age Range: ${set.age}</p>
                    <ul class="tags"> ${tagsTemplate(set.tags)}</ul>
                    <p>${set.description}</p>
                    ${ratingTemplate(set.rating)}
                </div>
            </div>`;
}

function tagsTemplate(tags) {
    let html = "";
    for (let tag of tags) {
        html += `<li>${tag}</li>`;
    }
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function renderSets(setList) {
    let div = document.querySelector("main"); // Ensure this points to the right container
    let content = setTemplate(setList);
    div.innerHTML += content;
}

function init() {
    const usedIndexes = new Set(); // Track used indexes to avoid duplicates
    const set1 = getRandomListEntry(sets, usedIndexes);
    const set2 = getRandomListEntry(sets, usedIndexes);
    const set3 = getRandomListEntry(sets, usedIndexes);
    const set4 = getRandomListEntry(sets, usedIndexes);
    const set5 = getRandomListEntry(sets, usedIndexes);
    // const set6 = getRandomListEntry(sets, usedIndexes);
    // const set7 = getRandomListEntry(sets, usedIndexes);

    // Render 2 unique LEGO sets
    // renderSets(set7);
    // renderSets(set6);
    renderSets(set5);
    renderSets(set4);
    renderSets(set3);
    renderSets(set2);
    renderSets(set1);

}

init();

let searchInput = document.getElementById("search")
let button = document.getElementById("searchButton")

button.addEventListener('click', searchHandler);

button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    searchHandler();
});

// Event listener for Enter key
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default enter key behavior
        searchHandler();
    }
});

function searchHandler() {
    let searchText = searchInput.value;
    console.log("User searched for:", searchText)
    
    // Get filtered results
    let filtered = filterFunction(searchText);
    
    // Sort the filtered results
    filtered.sort(compareFn);
    
    console.log(filtered)

    document.querySelector('main').innerHTML = " ";

    filtered.forEach(set => {
        renderSets(set)
    })
}
// console.log("worky?")
function filterFunction(query) {
    return sets.filter(set => {
        const _query = query.toLowerCase()
        return (
            set.name.toLowerCase().includes(_query) ||
            set.description.toLowerCase().includes(_query) ||
            set.age.toLowerCase().includes(_query) ||
            set.tags.some(item => item.toLowerCase().includes(_query))
        )
    })
}

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


