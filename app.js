const iceCream = [{
  name: 'caramel',
  quantity: 0,
  price: 4
}, {
  name: 'unicorn',
  quantity: 0,
  price: 4
}, {
  name: 'strawberry',
  quantity: 0,
  price: 3
},
{
  name: 'vanilla',
  quantity: 0,
  price: 3
}, {
  name: 'cookies',
  quantity: 0,
  price: 4
}, {
  name: 'ube',
  quantity: 0,
  price: 4
}]

const toppings = [{
  name: 'sprinkles',
  quantity: 0,
  price: 2
}, {
  name: 'gummy bears',
  quantity: 0,
  price: 3
}, {
  name: 'almonds',
  quantity: 0,
  price: 2
}]

const containers = [{
  name: 'waffle cone',
  quantity: 0,
  price: 2
}, {
  name: 'cup',
  quantity: 0,
  price: 1
}, {
  name: 'sprinkle cone',
  quantity: 0,
  price: 3
}]



function addContainer(container) {
  let newContainer = containers.find(con => con.name == container)
  newContainer.quantity++

  drawAll()
}

function addTopping(topping) {
  let newTopping = toppings.find(top => top.name == topping)
  newTopping.quantity++

  drawAll()
}

function addIcecream(cream) {
  let newIceCream = iceCream.find(ice => ice.name == cream)
  newIceCream.quantity++

  drawAll()
}


function drawAll() {
  let thingName = ''
  let quantity = ''
  let cost = ''
  let total = ''


  containers.forEach(con => {
    if (con.quantity) {
      quantity += `<h3>${con.quantity}</h3>`
      thingName += `<h3>${con.name}</h3>`
      cost += `<h3>$${con.price}</h3>`
      total += `<h3>$${con.quantity * con.price}</h3>`
    }

  })

  toppings.forEach(top => {
    if (top.quantity) {
      quantity += `<h3>${top.quantity}</h3>`
      thingName += `<h3>${top.name}</h3>`
      cost += `<h3>$${top.price}</h3>`
      total += `<h3>$${top.quantity * top.price}</h3>`
    }
  })

  iceCream.forEach(ice => {
    if (ice.quantity) {
      quantity += `<h3>${ice.quantity}</h3>`
      thingName += `<h3>${ice.name}</h3>`
      cost += `<h3>$${ice.price}</h3>`
      total += `<h3>$${ice.quantity * ice.price}</h3>`
    }
  })



  console.log(allTotal)

  document.getElementById('itemName').innerHTML = thingName
  document.getElementById('itemQuantity').innerHTML = quantity
  document.getElementById('itemCost').innerHTML = cost
  document.getElementById('itemTotal').innerHTML = total


}


function drawTotal() {
  let allTotal = ''
  let topTotal = ''
  let conTotal = ''
  let iceTotal = ''
  containers.forEach(con => {
    if (con.quantity)
      conTotal += con.price
  })

}


// function drawTopping() {
//   let thingName = ''
//   let quantity = ''
//   let cost = ''
//   let total = ''



//   document.getElementById('icecreamName').innerHTML = thingName
//   document.getElementById('icecreamQuantity').innerHTML = quantity
//   document.getElementById('icecreamCost').innerHTML = cost
//   document.getElementById('icecreamTotal').innerHTML = total


// }








