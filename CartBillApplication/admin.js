var name = window.localStorage.getItem("email");
var count = 0;
var refTObill = document.getElementById("myTable");
var qty = 1;
var totalPrice = 0;
var refTOmyTable = document.getElementById("mytable");
var a = [];

// if (name === null) {
//   alert("Login First.");
//   window.location.href = "Login.html";
// }
if (window.localStorage.getItem("email") === null) {
  alert("Login First.");
  window.location.href = "Login.html";
}

document.getElementById("divName").innerHTML = `<h1>User Name - ${name}</h1>`;

function logout() {
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("password");
  window.location.href = "Login.html";
}

function addQty(flagQty, uniqueId) {
  var price = 0;
  //console.log(flagQty + " " + uniqueId);
  var refPrice = document.getElementById("price" + uniqueId);
  var refFixPrice = document.getElementById("fixPrice" + uniqueId);
  var qtyRef = document.getElementById("qty" + uniqueId);
  var newQty = qtyRef.innerText.split(" ")[0];
  if (flagQty) {
    newQty++;
    // console.log(refPrice.innerText.toString());
    price = newQty * parseInt(refFixPrice.innerText.toString());
    // console.log(price);
  } else {
    newQty--;
    if (newQty <= 0) {
      refPrice.parentElement.parentElement.remove();
      calcuateTotalPrice();
    }
    price = newQty * parseInt(refFixPrice.innerText.toString());
  }
  qtyRef.innerHTML = `${newQty} <button onclick="addQty(${true},${uniqueId})">+</button>/<button onclick="addQty(${false},${uniqueId})">-</button>`;
  refPrice.innerHTML = `${price}`;
  calcuateTotalPrice();
}

function remove(args) {
  var s = parseInt(args.target.parentNode.parentNode.children[0].innerText[0]);
  a.push(s);
  args.target.parentElement.parentElement.remove();

  calcuateTotalPrice();
}

function addToCart(id) {
  console.log(refTObill.childElementCount);
  count++;
  Fetch("GET", "http://127.0.0.1:5501/data.json").then((reply) => {
    reply.forEach((element) => {
      if (element.id == id) {
        var eachFoodMenu = `
    <tr>
      <td>${count}</td>
      <td>${element.name}</td>
       
      <td id="qty${count}" >${qty} <button onclick="addQty(${true},${count})">+</button>/<button onclick="addQty(${false}, ${count})">-</button>
      </td>
      <td id="fixPrice${count}">${element.price}</td>
      <td id="price${count}">${element.price} </td>
      <td>
        <button onclick="remove(event)">Remove</button>
      </td>
    </tr>
  `;

        refTObill.innerHTML += eachFoodMenu;
        calcuateTotalPrice();
      }
    });
  });
}

function calcuateTotalPrice() {
  totalPrice = 0;
  for (var i = 1; i < refTObill.childElementCount; i++) {
    if (!a.includes(i)) {
      totalPrice += parseInt(
        document.getElementById("price" + i).innerText.toString()
      );
      //  console.log(totalPrice);
      document.getElementById("totalprice").innerHTML = `${totalPrice}`;
    }
  }
}

Fetch("GET", "http://127.0.0.1:5501/data.json").then((reply) => {
  reply.forEach((element) => {
    var eachFoodMenu = `
    <tr>
      <td>${element.id}</td>
      <td>
        <img src="${element.image}" />
      </td>
      <td>${element.name}</td>
      <td>${element.price}</td>
      <td>
        <button onclick="addToCart(${element.id})">Add to Cart</button>
      </td>
    </tr>
  `;

    refTOmyTable.innerHTML += eachFoodMenu;
  });
});
