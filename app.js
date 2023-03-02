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

let allTotal = 0

function drawAll() {
  //NOTE - making your variable an empty string when you want it to be a number can cause problems when using math functions. MAKE SURE TO SET TO 0 INSTEAD!!!
  let thingName = ''
  let quantity = ''
  let cost = ''
  let total = ''
  let topTotal = 0
  let conTotal = 0
  let iceTotal = 0
  let newTotal = ''

  //NOTE - making separate functions for each array set created an issue where they override each other. placing them all in the same draw function fixed this issue. This probably would not have been a problem if they were innerHTML ing to separate containers but because they are all going into the same <div>'s the draw function reset the contents of the divs everytime a different function was called to it.
  containers.forEach(con => {
    if (con.quantity) {
      quantity += `<h3>${con.quantity}</h3>`
      thingName += `<h3>${con.name}</h3>`
      cost += `<h3>$${con.price}</h3>`
      total += `<h3>$${con.quantity * con.price}</h3>`
      conTotal += con.quantity * con.price
    }

  })

  toppings.forEach(top => {
    if (top.quantity) {
      quantity += `<h3>${top.quantity}</h3>`
      thingName += `<h3>${top.name}</h3>`
      cost += `<h3>$${top.price}</h3>`
      total += `<h3>$${top.quantity * top.price}</h3>`
      topTotal += top.quantity * top.price
    }
  })

  iceCream.forEach(ice => {
    if (ice.quantity) {
      quantity += `<h3>${ice.quantity}</h3>`
      thingName += `<h3>${ice.name}</h3>`
      cost += `<h3>$${ice.price}</h3>`
      total += `<h3>$${ice.quantity * ice.price}</h3>`
      iceTotal += ice.quantity * ice.price
    }
  })

  allTotal = iceTotal + conTotal + topTotal

  newTotal += `<h3>Cart Total: $${allTotal}</h3>`
  document.getElementById('allTotal').innerHTML = newTotal
  document.getElementById('itemName').innerHTML = thingName
  document.getElementById('itemQuantity').innerHTML = quantity
  document.getElementById('itemCost').innerHTML = cost
  document.getElementById('itemTotal').innerHTML = total

  // drawTotal()
}


//NOTE - failed attempt at trying to get a total. This caused weird math issues.

// function drawTotal() {
//   let allTotal = 0
//   let topTotal = 0
//   let conTotal = 0
//   let iceTotal = 0

//   containers.forEach(con => {
//     if (con.quantity)
//       conTotal = con.price * con.quantity
//   })
//   toppings.forEach(top => {
//     if (top.quantity)
//       topTotal = top.price * top.quantity
//   })
//   iceCream.forEach(ice => {
//     if (ice.quantity)
//       iceTotal = ice.price * ice.quantity
//   })

//   allTotal = topTotal + conTotal + iceTotal
//   console.log(allTotal)
// }








