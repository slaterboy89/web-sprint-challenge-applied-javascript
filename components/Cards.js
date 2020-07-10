// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
import axios from 'axios'
const topics = document.querySelector('.topics')

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    const articles = res.data.articles;
    for (let obj in articles) {
      articles[obj].forEach((item) => {
    cardMaker(item);
      });
    }
  })
  .catch((err) => console.log(err));
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
const cards = document.querySelector('.cards-container')
function cardMaker(userData){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const myImage = document.createElement('div')
    const myImageSrc = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    myImage.classList.add('img-container')

    myImageSrc.src = `${userData.authorPhoto}`
    headline.textContent = userData.headline
    authorName.textContent = `By ${userData.authorName}`

    cards.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(myImage)
    myImage.appendChild(myImageSrc)
    author.appendChild(authorName)
    
    cards.addEventListener('click', (event) => {
        console.log(userData.headline)
    })
    console.log(authorName)
   
}

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.