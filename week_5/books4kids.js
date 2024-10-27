const articles = [
	{
		id: 1,
		title: 'Dream Bob',
		date: 'October 14, 2024',
		description:
			'A young boy finds himself trapped in his dreams. With the help of new friends he kills his nightmares and escapes back to the real world. Or did he?',
		imgSrc: 'dream_bob.webp',
		imgAlt: 'Book cover for Dream Bob',
        author: 'Mama',
		ages: '10-14',
		genre: 'Horror/Romance',
		rating: '⭐⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'The Adventures of John Schwartz, Adventurer!',
		date: 'February 5, 2024',
		description:
			'The Adventures of John Schwartz, Adventurer! follows the daring exploits of John Schwartz, a fearless frontiersman in the untamed Wild West. From chasing outlaws to uncovering hidden gold mines, he navigates danger and mystery at every turn. With his trusty horse and quick draw, John faces bandits and wilderness alike, determined to leave his mark on the frontier.',
		imgSrc:'John-Schwartz2.webp',
		imgAlt: 'Book cover for The Adventures of John Shwartz, Adventurer!',
        author: 'Mississippi',
		ages: '12-16',
		genre: 'Shakespearian Tragedy',
		rating: '⭐⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: 'The Disappearance of John Doe',
		date: 'September 6, 2019',
		description:
			'In the quiet town of Grey Pines, John Doe—a mysterious figure known to almost no one—vanishes without a trace. For 16-year-old Alice, what begins as a curious search for the missing man soon spirals into a dark and chilling adventure. As she uncovers eerie secrets hidden in the shadows, strange occurrences begin haunting her small town. The deeper Alice digs, the more dangerous the mystery becomes, leading her to question who—or what—John Doe really was.',
		imgSrc:'the-disappearance-of-john-doe.webp',
		imgAlt: 'Book cover for The Disappearance of John Doe',
        author: 'Hope Graves',
		ages: '14-17',
		genre: 'Mystery/Thriller',
		rating: '⭐⭐⭐⭐⭐'
	}
]

const outputElement = document.querySelector('#bigScroll');

function createArticles() {
    articles.forEach(item => {
        const article = document.createElement('article');

        article.className = 'book';

        const template = `
            <div class="descriptionBox">
                <p class="pubDate">${item.date}</p>
                <p class="genre">${item.genre}</p>
                <p class="author">${item.author}</p>
                <p class="ages">${item.ages}</p>
                <p class="rating">${item.rating}</p>
            </div>
            <div class="imageBox">
				<h2>${item.title}</h2>
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                <p class="description">${item.description}</p>
            </div>
        `;

		article.innerHTML = template;

		outputElement.appendChild(article);

    })
}

document.addEventListener('DOMContentLoaded', createArticles)