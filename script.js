let search = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", show);




function show() {
    if (search) {
        search.classList.toggle("active"); // Remove the dot before "hide"
        search.focus();
    }
}



