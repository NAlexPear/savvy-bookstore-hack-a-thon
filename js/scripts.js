/* globals $ */
/* eslint-disable vars-on-top, no-console */
$.ajax( "https://api.savvycoders.com/albums" ).then( console.log );
$.ajax( "https://api.savvycoders.com/books" ).then( console.log );

var content = document.querySelector( "#content" );
var books = [
    {
        "id": 1,
        "title": "How Not to Scare Kids",
        "creator": "Iceberg Slim",
        "image": "http://cdn3.momsxyz.com/2015/04/image001.jpg",
        "price": 10,
        "selling_points": [
            "Hiding In The closet.",
            "Never Ask a 2yr old for tissue.",
            "Be A Friend Before A Parent." ]
    },
    {
        "id": 2,
        "title": "Apples to Oranges",
        "creator": "Farmer Fred",
        "image": "http://strongautomotive.com/wp-content/uploads/2014/11/Apple-Orange-2.jpg",
        "price": 8,
        "selling_points": [
            "Home Grown Food.",
            "Processed Food.",
            "Chitterlings vs. Veggies." ]
    },
    {
        "id": 3,
        "title": "Queens and Kings",
        "creator": "Shaka Zulu",
        "image": "https://i.pinimg.com/originals/a6/f6/f8/a6f6f872fc9ba5cd80d37971b15e7a1c.jpg",
        "price": 115,
        "selling_points": [
            "Killing a Tiger With a Twig.",
            "How to Rule a Nation.",
            "Wearing the Crown." ]
    }
];

var albums = [
    {
        "id": 1,
        "title": "Houses of the Holy",
        "creator": "Led Zeppelin",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg/220px-Led_Zeppelin_-_Houses_of_the_Holy.jpg",
        "price": 20,
        "selling_points": [
            "Over the Hills and Far Away/Dancing Days",
            "D'yer Mak'er/The Crunge",
            "Released	in 28 March 1973"
        ]
    },
    {
        "id": 2,
        "title": "Broke and Famous",
        "creator": "Dormtainment",
        "image": "https://direct.rhapsody.com/imageserver/images/Alb.69185622/500x500.jpg",
        "price": 3.99,
        "selling_points": [
            "@$$ On the Internet [Explicit]",
            "Ballin Ona Budget [Explicit]",
            "Elephant D-Ck (Bonus Track) [Explicit]"
        ]
    },
    {
        "id": 3,
        "title": "Hippie High",
        "creator": "Josie Hill",
        "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/field-of-flowers-jessica-t-hamilton.jpg",
        "price": 11.99,
        "selling_points": [
            "Rolling in the daisies",
            "High on life",
            "Pass it, my friend"
        ]
    }
];


function createProductCard( product ){
    var sellingPointsList = product
        .selling_points
        .map( ( point ) => `<li>${point}</point>` )
        .join( "" );

    return `
      <div>
        <div class='title'>
          <header>
            <h1>
              ${product.title}
            </h1>
          </header>
        </div>
        <div class='author'>
          <h2>
            ${product.creator}
          </h2>
        </div>
        <div class='image'>
          <img src='${product.image}' alt=''>
        </div>
        <ul class='price'>
          <li>
            Price: $${product.price}.00
          </li>
        </ul>
        <div class='selling_points'>
          <ul>
            ${sellingPointsList}
          </ul>
        </div>
      </div>
    `;
}

content.innerHTML += albums.map( createProductCard ).join( "" ) + books.map( createProductCard ).join( "" );

document
    .getElementById( "booksLink" )
    .addEventListener(
        "click",
        ( event )  => {
            event.preventDefault();

            console.log( books );
        }
    );


document
    .getElementById( "albumsLink" )
    .addEventListener(
        "click",
        ( event ) => {
            event.preventDefault();

            console.log( albums );
        }
    );

document
    .querySelector( "#booksLink" )
    .addEventListener( "click",
        function bookFilter(){
            content.innerHTML = books.map( createProductCard ).join( "" );
        }
    );

document
    .querySelector( "#albumsLink" )
    .addEventListener( "click",
        function albumsFilter(){
            content.innerHTML = albums.map( createProductCard ).join( "" );
        }
    );

document
    .querySelector( "form" )
    .addEventListener( "submit", ( event ) => {
        var inputs = Array.from( event.target.elements );
        var newProduct = {
            "selling_points": []
        };

        event.preventDefault();
        inputs.forEach( ( input ) => {
            if( input.name === "selling_points" ){
                newProduct.selling_points.push( input.value );
            }
            else{
                newProduct[input.name] = input.value;
            }
        } );

        if( newProduct.type === "book" ){
            books.push( newProduct );
        }
        else{
            albums.push( newProduct );
        }

        document.querySelector( "#content" ).innerHTML += createProductCard( newProduct );
        $.ajax( `https://api.savvycoders.com/${newProduct.type}s`,{
            "method": "post",
            "contentType": "application/json",
            "data": JSON.stringify( newProduct )
        } );

        content.innerHTML += createProductCard( newProduct );
    } );
