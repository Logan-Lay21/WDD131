const outputElement = document.querySelector('#biScroll');

function createdArticles() {
    articles.forEach(item => {
        const article = document.createElement('article');

        articles.className = 'book';

        const template = `
            <div class="descriptionBox">
                <p class="pubDate">Date Published: ${item.date}</p>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="author">Author: ${item.genre}</p>
                <p class="ages">Ages: ${item.ages}</p>
                <p class="rating">rating: ${item.rating}</p>
            </div>
            <div class="imageBox">

            </div>
        `;

    })
}










const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
        author: 'Author',
		ages: '10-14',
		genre: 'Fantasy',
		rating: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
        author: 'Author',
		ages: '12-16',
		genre: 'Fantasy',
		rating: '⭐⭐⭐⭐'
	}
]