let search = document.querySelector(".input");
let btn = document.querySelector(".btn");
let outer = document.querySelector(".search");
btn.addEventListener("click", show);



 
function show() {
    if (search && outer) {
        search.classList.toggle("hide"); // Remove the dot before "hide"
        search.focus();
		outer.classList.toggle("active"); 
    }
}



