//TO DO LIST 


const btns = document.getElementsByTagName('button') //this already turns it into an array 
console.log(btns)


//defaults 

//screen display input 
const screen = document.getElementById('numbers')

// const screen = function () {document.getElementById('numbers').textContent = screenDisplay}
// let screenDisplay = 0

let tempNo = ''
let screenInput = []


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

          // screenInput.push(tempNo)
          // console.log(screenInput)
          
          // screen()
          // 1: get input 1, 2, 3, 4,
          //2: appears on screen as 1234
          //3: 1234 grab to push
        }
        if (cell == 'CE'){
          tempNo = tempNo.slice(0, - 1);
          console.log(cell)
          screen.textContent = tempNo
        }

        if (cell == 'AC'){
          reset()
        }


      }
        
    })}

    function reset() {
      tempNo = ''
      screenInput = []
      screen.textContent = '0'
    }
    if (operator == '+') {
        result = number1 + number2;
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
    
