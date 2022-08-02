
let formComponent = function () {
    return`
<form>
    <input id="nameInput" type="text" placeholder="Enter your name...."/>

</form>`
};

let displayComponent = function () {
    return `
          <p id="name-display">Your Name</p>
      ;`
  };

  let contentComponent = function (first, second) {
    return `
          <section class="first">${first}</section>
          <section class="second">${second}</section>
      ;`
  };


function loadEvent() {
    console.log('page is loaded');
    let root= document.getElementById(`root`);
    root.insertAdjacentHTML("beforeend",formComponent)
    let inputElement = document.querySelector(`input[type="text"]`)
    inputElement.addEventListener("input",function (event){
        let value = event.target.value;
        console.log(value)
    })
}




window.addEventListener("load", loadEvent);
