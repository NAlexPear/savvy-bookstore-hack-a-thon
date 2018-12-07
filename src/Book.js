function buildBook(sellingPoints){
    var list = '';

    for(let i = 0; i < sellingPoints.length; i++){
        list += `
          <li> 
            ${sellingPoints[i]}
          </li>
        `;
    }
    
    return list;
}

export default function Book(book){
    return `
      <div class= "book" id = ${book.id}>
      <h3>${book.name} </h3>
      <h4> ${book.author} </h4>
      <h5>${book.price}</h5>
      <ul>
          ${buildBook(book.sellingPoints)}
      </ul>
      <img src = "${book.pictureUrl}" alt= "">
      </div>
    `;
}


