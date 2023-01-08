let buttons = document.getElementsByTagName('span');
let value = document.getElementById('value');


for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function() {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == "Clear") {
      value.innerHTML = "";
      } else {
        if (value.innerHTML.length > 13) {
        return;
        }
        value.innerHTML += this.innerHTML;
      }
      }
    });
}

let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

toggleBtn.onclick = function(){
  body.classList.toggle('dark');
  
}

// if (['/', '*', '+', '-', '.'].includes(value.innerHTML[value.innerHTML.length - 1])) {
//   return;
//   }