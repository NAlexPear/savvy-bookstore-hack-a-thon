export default function Book(book) {
    return `<div class="book">
                <img class="cover" src="${book.pictureUrl}">
                <span class="title">${book.name}</span>
                <span class="author">${book.author}</span>
                <span class="price">${book.price}</span>
                <span class="blurb">${book.sellingPoints}</span>
              </div>`
}