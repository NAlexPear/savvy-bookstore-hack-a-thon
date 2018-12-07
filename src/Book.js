function buildBook(book) {
     var list = '';
     for (let i = 0; i < book.sellingPoints.length; i++) {
          list += `
          <li> 
          ${book.sellingPoints[i]}
          </li>
          `;
     }
     return list;
}

export default function Book(book) {
     return `
<div class= "book" id = ${book.id}>

<ul>
${buildBook(book[book.sellingPoints].book)}
</ul>
<h3>${book.name} </h3>
<h4> ${book.author} </h4>
<h5>${book.price}</h5>
<img src = "${book.pictureUrl}" alt= "">
</div>
`;
}


