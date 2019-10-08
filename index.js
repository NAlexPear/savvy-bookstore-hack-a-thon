/**
 * We are using ES Modules - import/export.
 * This index.js is reaching into the index.js that's inside of components.
 *
 * Furthermore, we are using OBJECT DESTRUCTURING.
 * This just means that we already know that the 'components index' will be EXPORTING out an
 *  OBJECT LITERAL, and we already know what the 🔑s are going to be.
 * The braces will 'pull apart' the VALUES associated with these 🔑s - in this case,
 * functional components, and store them as the VARIABLES, `Header, `Nav`, Main`, etc.
 */
import { Header, Nav, Main, Footer } from "./components";
// console.log(`Header is: ${Header}`);

// import * as notDestructuredObject from "./components";
// console.log(notDestructuredObject);
// console.log(`Header is inside of ${notDestructuredObject}. Here's it's value: ${notDestructuredObject.Header}`);

/**
 * STATE is nothing more than an OBJECT LITERAL that has a bunch of PROPERTIES (AKA 'props')
 * that describe...the current 'state' of our app and what each property's value is.
 *
 * This is the information that the FUNCTIONAL COMPONENTS need to do do their job.
 * For example,'Header' needs to use `state.heading` to render properly.
 */
const state = {
  heading: "Sorry, I'm Booked.",
  links: ["books", "albums"],
  books: [
    {
      id: 1,
      title: "Lasagna: A Retrospective",
      author: "Garfield",
      pictureUrl:
        "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
      price: 24,
      sellingPoints: [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
    },
    {
      id: 2,
      title: "Jumping Rope for Dummies",
      author: "Probably Not Garfield",
      pictureUrl: "http://i.imgur.com/vk9W3gV.jpg",
      sellingPoints: [
        "Cats can't jump rope but DUMMIES can",
        "It may be dumb but it's a lot of fun",
        "A great entertainment for the kids/cats"
      ],
      price: 500000
    }
  ]
};

function render(st = state) {
  // Each FUNCTIONAL COMPONENT needs to be INVOKED and may or may not use any STATE information.
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer(st)}
  `;
}

render();

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  const data = event.target.elements;

  const newBook = {
    index: state.books.length + 1,
    title: data[0].value,
    author: data[1].value,
    pictureURL: data[2].value,
    price: data[3].value,

    // TODO: Add selling points.
    sellingPoints: []
  };

  state.books.push(newBook);

  render();
});
