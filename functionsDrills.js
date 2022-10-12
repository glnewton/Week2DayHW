/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

function sayHello(){
  console.log("hello world.")
}
sayHello();

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
const print = (message) => console.log(message)

print('test');

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

const printMessage = (message) => console.log(`Today's message is: ${message}`)
printMessage("Don't stop believing.")

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
const squareMe = a => a ** 2
 
console.log(squareMe(345))
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  const reverseMessage = (message) =>{
    let newMessage = message.split('').reverse('').join('');
    // newMessage.reverse();
    // newMessage.join();
    console.log(newMessage)
  }
  reverseMessage("ted")
  
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  const multiply = (a,b=a) => a*b
  
  console.log(multiply(5))
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  function makePerson(firstname, lastname) {
    let person = {
      firstname: firstname,
      lastname: lastname
    }
    console.log(person)
    return person
  }
  
  makePerson("James", "Madison")
  const zakk = makePerson('Zakk', 'F')
  const jimmy = makePerson('Jimmy', 'B')
  // const gary = makePerson('Gary', 'N')
  
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
  
//  ## See #7

  const gary = makePerson('Gary', 'N')

 
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
 
  const returnArray = (...strings) =>{
    let personArray = [];
    personArray.push(...strings)
    console.log(personArray)
    return personArray
  }
  
  returnArray("cat","dog", "bird")


  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code */
  let sum = 0

  const addToSum = (number) => {
    sum = sum + number
    console.log(`Sum is currently ${sum}`)
    return sum
  }
  addToSum(4)
  addToSum(45)
  addToSum(14)
  addToSum(47)
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  const sumOfNumbersInArray = (arrayOfNumbers) => {
    let sum = 0;
    for(i=0;i<arrayOfNumbers.length;i++){
      sum+=i
      console.log(`${sum}`)
    }
    console.log(`${sum}`)
    return sum
  }
   sumOfNumbersInArray([1,2,3,4,5,6,7,8,9,10])

  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  const stringToArrayOfWords = (string) => {
    arrayOfWords = string.split(" ")
    console.log(arrayOfWords)
    return arrayOfWords
  }

  stringToArrayOfWords("What's guys and gals?")

  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  /** Starter Code */
  const testFunc = ()=> {
    console.log("this works!")
  }

  testFunc();
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  function add(a, b) {
    return a + b
    
  }
  
  const additionFunc = (a, b, func) => {
    c = func(a,b);
    console.log(c)
  }

 additionFunc(2,4,add)
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */

const iOnlyPrintHelloWorld = () =>{
  return "hello world"
}

const outerFunction = (func) => {
  console.log("I am the outer function calling the inner function.")
  console.log("Inner function says: ")
  message = func();
  console.log(message)
}

outerFunction(iOnlyPrintHelloWorld)

  // allFacebookUsersEver = []

  // const  createUser = (first, last, age, email) => {
  //   let user = {
  //     firstname: first,
  //     lastname: last,
  //     age: age,
  //     email: email
  //   }
  //   allFacebookUsersEver.push(user)
  //   console.log(allFacebookUsersEver)
  //   console.log(`Created new user: ${user.firstname}`)
  //   return user
  // }

  // function updateUser(user){}

  // function deleteUser(user){}

  // function addFriend(user, friend){}

  // function deleteFriend(user, friend){

  //   let isFriendSuccessfullyDeleted = true

  //   if (isFriendSuccessfullyDeleted == true){
  //     console.log("Friend deleted")
  //     return updateUser(user)
  //   }
  // }
  // function sendMessage(message,otherUser){}

  // function makeVideoCall(user, ...otherUsers){

  // }

  // // createUser("Gary", "Newton", 31, "gary.newton@email.com")
  // // createUser("Mike", "Isratel", 45, "Mike.Isratel@email.com")
  // // createUser("Sally", "Brown", 29, "Sally.Brown@email.com")
  // // createUser("Yolis", "Rojas", 30, "Yolis.Rojas@email.com")
  // // createUser("Milena", "Newton", 26, "Milena.newton@email.com")
