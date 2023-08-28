let products = {
  data: 
    [
    {
      name: 'Product 1',
      category: 'Electronics',
      price: 799.99,
      available: true,
    },
    {
      name: 'Product 2',
      category: 'Books',
      price: 19.99,
      available: true,
    },
    {
      name: 'Product 3',
      category: 'Home&Kitchen',
      price: 49.99,
      available: false,
    },
    {
      name: 'Product 4',
      category: 'Toys&Games',
      price: 29.99,
      available: true,
    },
    {
      name: 'Product 5',
      category: 'Electronics',
      price: 599.99,
      available: true,
    },
    {
      name: 'Product 6',
      category: 'Books',
      price: 9.99,
      available: true,
    },
  ] ,
}
  ;

//  showing the product data on browser

  for (let i of products.data) {

//Creating  Card where product should shown
     
    let card = document.createElement("div");

    card.classList.add("card", i.category ,"hide");
// creating container on card
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = "Name - "  + i.name.toUpperCase();
    container.appendChild(name);


    // category

let category = document.createElement("h4");
category.classList.add("product-category");
category.innerText =  "Category - " + i.category.toUpperCase();
container.appendChild(category);

    //price
    let price = document.createElement("h6");
    price.innerText = "$ - " + i.price;
    container.appendChild(price);

// availabilty
let available = document.createElement("h4");
available.innerText = "avaibablity :- " + i.available;
container.appendChild(available)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }

  // showing product on  page end here...

// creating onclick function when user click parameter passed from button (Parameter same as category)

function filterProduct (value){
  //Button class code
    let buttons = document.querySelectorAll(".button-value")
    
    buttons.forEach(btn =>{
        if(value.toUpperCase() == btn.innerText.toUpperCase()){
            btn.classList.add("active")
        }else{
            btn.classList.remove("active");
        }
    });

//select all cards 

    let elements = document.querySelectorAll(".card");
//loop through all cards
    elements.forEach((element) => {
    
      if (value == "all") {
        element.classList.remove("hide");
      } else {


        if (element.classList.contains(value)) {


          element.classList.remove("hide");
        } else {

          element.classList.add("hide");
        }
      }
    });
}



// search logic for seaching by product name only

document.getElementById("search").addEventListener
("click",() =>{
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);


  elements.forEach((element,index) => {
    if(element.innerText.includes(searchInput.toUpperCase())){

// displaying card

cards[index].classList.remove("hide")


    } else {
      cards[index].classList.add("hide")
    }
  })


})











// showing all product on ui on load intially
window.onload = () => {
  filterProduct("all");
};