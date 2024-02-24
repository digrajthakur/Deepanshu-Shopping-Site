let price = document.querySelector("#price");
let price1 = document.querySelector("#price-1");
let price2 = document.querySelector("#price-2");
let price3 = document.querySelector("#price-3");
let price4 = document.querySelector("#price-4");
let icon = document.querySelector("#icon")

function myFunction(){
  let element = document.body;
  element.classList.toggle("dark-mode")
}


let order = 0;
price.addEventListener("click", function () {
  if (order == 0) {
    (price.innerHTML = "Placed Successfully"),
      alert("Your order placed successfully");
    order = 1;
    price.style.color = "white";
  } else {
    (price.innerHTML = "Placed Successfully"),
      alert("Your order cancelled successfully ");
    price.innerHTML = "$29.00";
    price.style.color = "white";
    order = 0;
  }
});
// order-1
let order1 = 0;
price1.addEventListener("click", function () {
  if (order1 == 0) {
    (price1.innerHTML = "Placed Successfully"),
      alert("Your order placed successfully");
    order1 = 1;
    price1.style.color = "white";
  } else {
    (price1.innerHTML = "Placed Successfully"),
      alert("Your order cancelled successfully ");
    price1.innerHTML = "$18.00";
    price1.style.color = "white";
    order1 = 0;
  }
});

// order-2

let order2 = 0;
price2.addEventListener("click", function () {
  if (order2 == 0) {
    price2.innerHTML = "Placed Successfully",
      alert("Your order placed successfully");
      order2 = 1
      price2.style.color = 'white'
  }else{
    price2.innerHTML = "Placed Successfully",
    alert("Your order cancelled successfully ");
    price2.innerHTML = "$32.00"
    price2.style.color = 'white'
    order2=0
  }
});
// order-3
let order3 = 0;
price3.addEventListener("click", function () {
  if (order3 == 0) {
    price3.innerHTML = "Placed Successfully",
      alert("Your order placed successfully");
      order3 = 1
      price3.style.color = 'white'
  }else{
    price3.innerHTML = "Placed Successfully",
    alert("Your order cancelled successfully ");
    price3.innerHTML = "$22.00"
    price3.style.color = 'white'
    order3=0
  }
});
// order-4
let order4 = 0;
price4.addEventListener("click", function () {
  if (order4 == 0) {
    price4.innerHTML = "Placed Successfully",
      alert("Your order placed successfully");
      order4 = 1
      price4.style.color = 'white'
  }else{
    price4.innerHTML = "Placed Successfully",
    alert("Your order cancelled successfully ");
    price4.innerHTML = "$26.00"
    price4.style.color = 'white'
    order4=0
  }
});
