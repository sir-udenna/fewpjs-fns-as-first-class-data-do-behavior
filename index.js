/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  // console.log(time)
  let t = parseInt(time,10)
  if (t > 17){
    return 'Good Evening'
  }else if(t > 12 && t < 17){
    return 'Good Afternoon'
  }else{
    return 'Good Morning'
  }
}

function displayMessage(string){
  let text = document.querySelector('#greeting')
  text.innerText = string
}
