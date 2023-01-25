import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  const headlineWrapper = document.createElement("div");
  const authorWrapper = document.createElement("div");
  const imageContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorNameWrapper = document.createElement("span");

  headlineWrapper.textContent = article.headline;
  img.src = article.authorPhoto;
  authorNameWrapper.textContent = `By ${article.authorName}`;

  card.classList.add("card");
  headlineWrapper.classList.add("headline");
  authorWrapper.classList.add("author");
  imageContainer.classList.add("img-container");

  card.appendChild(headlineWrapper);
  card.appendChild(authorWrapper);
  authorWrapper.appendChild(imageContainer);
  imageContainer.appendChild(img);
  authorWrapper.appendChild(authorNameWrapper);

  return card;
  card.addEventListener("click", () => {
    console.log("headline");
  });
};

const cardAppender = (selector) => {
  console.log("working");

  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
