function bookCardsBuilder(books) {
  console.log(books);
  let cardsHTML = "";

  for (let i = 0; i < books.length; i++) {
    cardsHTML += `<div class="card">
    <figure>
        <img src=${books[i].pictureUrl} alt="dummies">
        <figcaption>"${books[i].title}"</figcaption>
    </figure>
    <p>Author: Probably Not ${books[i].author}</p>
    <ul>
      <li>Lasagna is delicious.</li>
    </ul>
    <p>This book sells for the low low price of ${books[i].price}. It is one of a kind, and will never been seen on the shelf.</p>
  </div>`;
  }

  console.log(cardsHTML);
  return cardsHTML;
}

function form() {
  return `
  <form action="#">
      <!-- Title -->
      <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
      </div>

      <!-- Author -->
      <div>
      <label for="author">Author</label>
      <input type="text" name="author" id="author">
      </div>

      <!-- URL -->
      <div>
      <label for="url">URL for Picture</label>
      <input type="text" name="url" id="url">
      </div>
      <!-- Price -->
      <div>
      <label for="price">Price</label>
      <input type="number" name="price" id="price">
      </div>

      <!-- Text Area -->
      <div>
      <label for="text-area">Enter Tags</label>
      <textarea rows="10" cols="30" id="text-area"></textarea>
      </div>

      <!-- Submit Button -->

      <input type="submit" value="Add Book">
    </form>
    `;
}

export default function(st) {
  return `<main>
  ${bookCardsBuilder(st.books)}
  ${form()}
</main>`;
}
