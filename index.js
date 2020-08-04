// Your code here

let dodger =document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4"

// current cordinates at the center = (180,0)
// these are relative to the black box that the smaller one is being held in

dodger.style.bottom = "0px"

// document.addEventListener("keydown", function(e){
//     if (e.key === "ArrowLeft"){
//         // the key pressed returns as either arrowleft/ right/up etcet
//         let leftNumbers = dodger.style.left.replace('px', "");
//         // replace takes 2 arguments (searchValue, "replacement")
//         // leftNumbers returns you a string removing px 
       
//         let left = parseInt(leftNumbers, 10);
//         //  parseInt converts to a integer
//         dodger.style.left = `${left-10}px`;
//         // when event occurs the "div" dodger now has the "coordinates" of "left" (changing the css/attr.left)
//     }
// })

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    // as long as leftpx is larger than 0 keep moving
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

document.addEventListener("keydown", function(e){
    console.log(e.key)
    if (e.key === "ArrowLeft"){ 
        // calls the function that actually moves it moves it
        moveDodgerLeft();
    }else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
    console.log(right)
    if (right < 360) {
        dodger.style.left = `${right + 10}px`
    }
}
