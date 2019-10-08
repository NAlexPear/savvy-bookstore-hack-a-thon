import {Header, Nav, Main, Footer} from "./components";

const state = {
  heading: "Sorry, I'm Booked.",
  links: [
    "books",
    "albums"
  ],
  books: [
    {
      id: 1,
      name: "Lasagna: A Retrospective",
      author: "Garfield",
      pictureUrl:
        "http://graphics8.nytimes.com/images/2015/10/15/   dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
      price: 24,
      sellingPoints: [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
      ]
    },
    {
      id: 2,
      name: "Jumping Rope for Dummies",
      author: "Probably Not Garfield",
      pictureUrl:"http://i.imgur.com/vk9W3gV.jpg",
      sellingPoints:
      ["Cats can't jump rope but DUMMIES can",
      "It may be dumb but it's a lot of fun",
    "A great entertainment for the kids/cats"],
      price: 500000
    }
    ]

};

function render(state = state){
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(state)}
  ${Main(state)}
  ${Footer(state)}
  `;
}

render(state);
