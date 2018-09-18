export default function Book(book){
    return `
    <div class="book">
      <img class="cover" src="${book.image}">
      <span class="title">${book.title}</span>
      <span class="author">${book.creator}</span>
      <span class="price">$${book.price.toFixed(2)}</span>
      <span class="blurb">${book.selling_points}</span>
      <span class="delete"><a href="" id="${book.id}" title="Delete this item"><i class="fas fa-trash-alt"></i></a></span>
    </div>
  `;
}