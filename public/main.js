M.AutoInit();

document.addEventListener('DOMContentLoaded' function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


let closeButton = document.querySelector(".close-button")
let flashPanel = document.querySelector(".flash")

closeButton.addEventListener("click", event => {
  event.preventDefault()

  flashPanel.classList.add("hide")
})