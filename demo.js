//this is what is happening behind the scenes during .forEach()
// let forEach = (arr, callback) => {
//     for(i=0; i<arr.length; i++ ){
//         callback(arr[i])
//     }
// }

// let arr = [1,2,3,4,5,6]

// forEach(arr, (element) => {
//     console.log(element)
// })

// arr.forEach((element) => console.log(element, index))

//this is what is happening behind the scenes during .map()

// let map = (arr, callback) => {
//     let results = []
//     for (let i = 0; i < arr.length; i++){
//         results.push(callback(arr[i]))
//     }
//     return results
// }

// map(arr, (element) => {
//     return element * 2
// })

// console.log(map())

// let mappedArr = map(arr, (element, index) => {
//  element * index
// }
//  )



// let stringArr = [`Apples`, `Bananas`, `kiwi`, `Oranges`]

// let filteredArr = stringArr.filter((element, index, arr) => {
//     return element.length > 5               //this will evaluate to be either true or false 
// })

// console.log(filteredArr)


var users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gmail.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@yahoo.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ]

  users.forEach((user) => {
    // console.log(`${user.name} has the email address of ${user.email} `)
    user.nameId = user.id + user.name //you can create whatever field you want and push stuff into it 
  })
    
  console.log(users)

  let emailList = users.map((user) => {
    return user.email
  })

  console.log(emailList)

  let gmailUsers = users.filter((users) =>{
    users.email.includes(`gmail`)

  })

  console.log(gmailUsers)

/////////////////////////////////
//data and example for .reduce()

  const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

let myTotal = dogProducts.reduce((acc, curr) => {  
    console.log(acc)
    return acc + curr.basePrice
} ,0) //numerical value for what our acc will be at the start 

console.log(myTotal)

//this starts at value zero which on 1st loop acts as acc and adds curr which in this case will be 13.99 
//2nd loop acc = 13.99 and curr will be 6 which will add these two togethr etc 


//Chaining 
let myCatTotal = catProducts.filter((element)=>{
    return element.displayPrice < 20
}).reduce((acc, curr)=>{
    return curr.displayPrice + acc
},0)

console.log(myCatTotal)


//the most basic breakdown of call back and functions 

let five = (x,y)=>{
    return x+y
}

let ten = (cb)=>{
    return cb(2,3) + 5
}

console.log(ten(five))