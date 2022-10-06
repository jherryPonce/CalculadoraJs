
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(item => {
    item.onclick = () => {
        if (item.id=="clear" || (display.innerText == "" && item.id == "equal")) {
            display.innerText="";
        } else if(item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1)
        }else if(display.innerText != "" && item.id == "equal"){
                display.innerText = eval(display.innerText)
        }else{
            display.innerText+= item.id;
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");


themeToggleBtn.onclick = () => {
    //classList.toggle("nombre de la calse")de esta manera se activay desactiva de manera alternada la clase que se indica
  calculator.classList.toggle("dark"); 
  themeToggleBtn.classList.toggle("active");
 
};
