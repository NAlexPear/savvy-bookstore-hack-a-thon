export default function Book(){
     return `
<div class= "book" id = ${book.id}>


<h3>${book.name} </h3>
<h4> ${book.author} </h4>
<img src = "${book.pictureURL}" alt= "">
<h5>${book.price}</h5>
<h4>${book.sellingPoints} </h4>
</div>
`;
}


