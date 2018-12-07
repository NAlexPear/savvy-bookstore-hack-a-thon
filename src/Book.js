export default function Book(book) {
     return `
<div class= "book" id = ${book.id}>
     <h3>${book.name} </h3>
     <h4> ${book.author} </h4>
     <img src = "${book.pictureUrl}" alt= "">
     <h4>${book[book.sellingPoints]}</h4>
     <h5>${book.price}</h5>
</div>
`;
}


