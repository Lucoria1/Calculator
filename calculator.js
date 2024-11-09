window.onload =() => {
    
Array.from(document.querySelectorAll(".btn")).map((event) => {
    event.addEventListener("click", () => {
        console.log("click")
    })
})


}