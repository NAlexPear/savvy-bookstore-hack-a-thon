export default function Book(book){
    return `
    <div class="book">
      <img class="cover" src="${book.image}">
      <span class="title">${book.title}</span>
      <span class="author">${book.creator}</span>
      <span class="price">$${book.price.toFixed(2)}</span>
      <span class="blurb">${book.selling_points}</span>
    </div>
  `;
}