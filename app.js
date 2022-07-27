//TO DO LIST 
// - - - - - - - - - - - - - 
// Get operator function working
// Make sure clear doesn't delete remaining Zero
// Decimal point gets overwritten
// YA DONE (>._.)>~<(._.<)


const btns = document.getElementsByTagName('button') //this already turns it into an array 
console.log(btns)


//defaults 

//screen display input 
const screen = document.getElementById('numbers')

// const screen = function () {document.getElementById('numbers').textContent = screenDisplay}
// let screenDisplay = 0

let tempNo = ''
let screenInput = []
let result

console.log(typeof(tempNo))

//buttons.forEach(myFunction);
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        let cell = e.target.textContent
        console.log(cell)

        if (tempNo.length <= 14){
        if (!isNaN(cell) || cell === '.') {
          // Number(tempNo += cell)
          tempNo = Number(tempNo) + cell
          screen.textContent = tempNo
          // console.log(screenInput)
          
          // screen()
          // 1: get input 1, 2, 3, 4,
          //2: appears on screen as 1234
          //3: 1234 grab to push
        }
          // clear needs to not delete the last 0
        if (cell == 'CE'){
          tempNo = tempNo.slice(0, - 1);
          console.log(cell)
          screen.textContent = tempNo
        }

        if (cell == 'AC'){
          reset()
        }

        if (cell == '=') {
          let operator = screenInput[1]
          let firstNun = screenInput[0]
          let secondNun = screenInput[2]
        }

        else if (operator == '-') {
          result = number1 - number2;
        }
        else if (operator == '*') {
            result = number1 * number2;
        }
        else {
            result = number1 / number2;
        }
      }
        
    })}

    function reset() {
      tempNo = ''
      screenInput = []
      screen.textContent = '0'
    }

    // logically get input 
    // input needs to be stored
    // operator needs to be triggered
    // second input needs to be made and stored
    // equals function needs to calculate all the above together

    // if (operator == '+') {
    //     screenInput.push(tempNo)
    //     result = number1 + number2;
    // }
    // if(operator == '='){
     
    // }
    


//array for pushing inputs into before calling function to calc operator
    // inputArr = []

    //insert code to push it into array

    //for the function 
    // for i in inputArr 
    
    //function call the relevant operator function 
    // inputArr[i]+=i
    

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // take the operator input
// //   const operator = prompt('Enter operator ( either +, -, * or / ): ');

//   // take the operand input
//   const number1 = parseFloat(prompt('Enter first number: '));
//   const number2 = parseFloat(prompt('Enter second number: '));

  // let result;

  // // using if...else if... else

  













    // demo function
    //  function testingfunction(){
    //     screenDisplay= 60 
    // screen()
    // }
    // testingfunction()
    
