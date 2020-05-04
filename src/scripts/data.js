const recipes = [
  {
    id: 1,
    title: "Sourdough",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg",
  },
  {
    id: 2,
    title: "Baguettes",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
  },
  {
    id: 3,
    title: "Sliced bread",
    ingredients: ["water", "flour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA",
  },
  // {
  //   id: 3,
  //   title: "Sliced bread",
  //   ingredients: ["water", "flour"],
  //   image:
  //     "./img/bg.jpeg",
  // },
];

let data = JSON.stringify(recipes);
// In this line i transform the content of the recipes, its transformed in a way i can export it, with the next line that is : export { data };, what i want to export ?
//the content of data which is recipes.
export { data };
//
//
// After the last export line, go to the main js file, and import/ so to connect this data with the main JS file
