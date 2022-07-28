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
//index 0
let operator, secondNun, result

console.log(typeof(tempNo))

//buttons.forEach(myFunction);
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
        let cell = e.target.textContent
        // ----------------------------------------------------------------------------------------------

        // The firstNun variable was placed outside the for loop and doesn't have the the value of 
        // screenInput yet so thats why it was returning NaN.
        let firstNun = Number(screenInput[0])
        console.log(cell)

        if (tempNo.length <= 14){
        if (!isNaN(cell) || cell === '.') {
          // Number(tempNo += cell)
          tempNo = tempNo + cell
          screen.textContent = tempNo
          // console.log(screenInput)
               // newNum = Number(entries[i + 1])
          // symbol = entries[i]
          // screen()
          // 1: get input 1, 2, 3, 4,
          //2: appears on screen as 1234
          //3:  for (let i = 1; i < entries.length; i++) {
          // newNum = Number(entries[i + 1])
          // symbol = entries[i]
          // 1234 grab to push
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

        switch (cell) {
          case 'x':
            screenInput.push(tempNo)
            screenInput.push('x')
            tempNo = ''
            break
          case '+':
            screenInput.push(tempNo)
            screenInput.push('+')
            tempNo = ''

            break
          case '-':
            screenInput.push(tempNo)
            screenInput.push('-')
            tempNo = ''

            break
          case '÷':
            screenInput.push(tempNo)
            screenInput.push('÷')
            tempNo = ''

            break
          case '%':
            screenInput.push(tempNo)
            screenInput.push('%')
            tempNo = ''

            break
        }
        
        if (cell === '=') {
         
          
          screenInput.push(tempNo)
        // ----------------------------------------------------------------------------------------------
          // The for loop here didn't have i declared. "let" was missing.
          for(let i = 1; i < screenInput.length; i++) {
            secondNun = Number(screenInput[i + 1])
            operator = screenInput[i]
         
                    // ----------------------------------------------------------------------------------------------
          // I console logged all these below to find out what was giving NaN and what was passsing through
        
            console.log("operator: " + operator + "firstNun: " +  firstNun + "secondNun: " + secondNun)

          

          switch (operator) {
            case 'x':
              result = firstNun*secondNun
              screen.textContent = result
              break
            case '+':
              result = firstNun+secondNun
              screen.textContent = result
              break
            case '-':
              result = firstNun-secondNun
              screen.textContent = result
              break
            case '÷':
              result = firstNun/secondNun
              screen.textContent = result
              break
            case '%':
              result = (firstNun/secondNun)*100
              screen.textContent = result
              break
          }
        } 
          
          //for each for refactoring          // const inputShit = ["apple", "orange", "cherry"];
          // inputShit.forEach(myFunction);
        
      }
    }  
    })}

    function reset() {
      tempNo = ''
      screenInput = []
      screen.textContent = '0'
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
    
