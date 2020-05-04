//
//
//__1__ Now you will import DATA from the data.js file.
//
//
//
import { data } from "./data.js";
//
// STRINGIFY will make it into JSON
// PARSE will convert it to normal object again
//
//__2__ So in the next line you have to reconvert the DATA of the data.js file, into an OBJECT again.
let parsedData = JSON.parse(data);
console.log(parsedData);
//
//
//
// _5__
const section = document.querySelector("#bread");
//
//
//
//
// __3__---------------------------------------------
//
//Here you use a forEach because you have an ARRAY of OBJECTS.
// The console log used inside of it , is just to see if everything is working well.
//
parsedData.forEach((obj) => {
  //   console.log(obj);
  //With the line below i save myself a lot of time, if i dont use it, i will have to write obj.image, 
  //obj.ingredients etc, so here i just write it one time for all the variables(in this line) and that's all.
  //
  //
  let { id, title, ingredients, image } = obj;
  //   console.log(id);
  //   this console log will show you the number for each ID
  //
  //
  //  __4__ This ID is coming from the object
  //   In the line below you can use append child or innerHtml etc, but to economize time, i will use the backtick.
  //
  //start by declaring a variable:
  //
  let card = `
        <div id=${id}>
                
                <h2> ${title} </h2>
                <img src=${image} alt=${title}>
                <h6> ${ingredients} </h6>
   
        </div> `;
  //
  // _6__
  //   Every loop it will keep the old value and will add to it
  section.innerHTML += card;
  //
  //
});
// -------------------------------------------------
