const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    }

];

// articles.forEach((article) => console.log(article.imgSrc));

// const showArticles = document.open(articles);

function displayArticles(articles)
{
    const leftDivContainer = document.getElementById("left-article-div");
    const rightDivContainer = document.getElementById("right-article-div");
    const main = document.querySelector("main");
    
    articles.forEach(article => {
        
        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;
        
        const leftArticleElement = document.createElement("div");
        leftArticleElement.className = ("left-article");

        const rightArticleElement = document.createElement("div");
        rightArticleElement.className = ("right-article");

        const dateElement = document.createElement("p");
        dateElement.textContent = article.date;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = article.description;

        const imgElement = document.createElement("img");
        imgElement.src = article.imgSrc;
        imgElement.alt = article.imgAlt;

        const agesElement = document.createElement("p");
        agesElement.textContent = article.ages;

        const genreElement = document.createElement("p");
        genreElement.textContent = article.genre;

        const starsElement = document.createElement("p");
        starsElement.textContent = article.stars;

        leftArticleElement.appendChild(dateElement);
        leftArticleElement.appendChild(agesElement);
        leftArticleElement.appendChild(genreElement);
        leftArticleElement.appendChild(starsElement);

        rightArticleElement.appendChild(titleElement);
        rightArticleElement.appendChild(imgElement);
        rightArticleElement.appendChild(descriptionElement);
        
        // leftDivContainer.appendChild(dateElement);
        // leftDivContainer.appendChild(agesElement);
        // leftDivContainer.appendChild(genreElement);
        // leftDivContainer.appendChild(starsElement);

        // rightDivContainer.appendChild(titleElement);
        // rightDivContainer.appendChild(imgElement);
        // rightDivContainer.appendChild(descriptionElement);

        main.appendChild(leftArticleElement);
        main.appendChild(rightArticleElement);
    });

}

displayArticles(articles);