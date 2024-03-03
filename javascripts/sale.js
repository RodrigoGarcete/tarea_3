const idElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const products = {
    "products": [
        {
            "id": 1,
            "name": "オリジナルブレンド200g",
            "weight": 200,
            "price": 500
        },
        {
            "id": 2,
            "name": "オリジナルブレンド500g",
            "weight": 500,
            "price": 900
        },
        {
            "id": 3,
            "name": "スペシャルブレンド200g",
            "weight": 200,
            "price": 700
        },
        {
            "id": 4,
            "name": "スペシャルブレンド500g",
            "weight": 500,
            "price": 1200
        }
    ]
}

let purchases = [];


function add() {
    const id = idElement.value;
    const price = products.products.find(product => product.id == id).price;
    const name = products.products.find(product => product.id == id).name;
    const number = numberElement.value;
    
    let purchase = {
      price: parseInt(price),
      name: name,
      number: parseInt(number),
    };
  
    const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
    if(purchases.length < 1 || newPurchase === -1) {
      purchases.push(purchase)
    } else {
      purchases[newPurchase].number += purchase.number
    }
  
    window.alert(`${display()}\n小計${subtotal()}円`);
    idElement.value = "";
    numberElement.value = "";
  }

function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].name} ${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].name} ${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  window.alert(`${string} \n小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  idElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}