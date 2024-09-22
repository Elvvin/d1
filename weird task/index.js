// const box1 = document.getElementById("box1");
// const box2 = document.getElementById("box2");
// const box3 = document.getElementById("box3");
// const box4 = document.getElementById("box4");

// box1.addEventListener("click", function () {
//     box2.style.backgroundColor="blue"
//     box2.innerText="Click Me"
//     box3.innerText=""
//     box4.innerText=""
//     box1.innerText=""
//     box1.style.backgroundColor="aliceblue"
//     box3.style.backgroundColor="aliceblue"
//     box4.style.backgroundColor="aliceblue"
// })

// box2.addEventListener("click", function () {
//     box3.style.backgroundColor="red"
//     box3.innerText="Click Me"
//     box2.innerText=""
//     box4.innerText=""
//     box1.innerText=""
//     box2.style.backgroundColor="aliceblue"
//     box1.style.backgroundColor="aliceblue"
//     box4.style.backgroundColor="aliceblue"
// })

// box3.addEventListener("click", function () {
//     box4.style.backgroundColor="green"
//     box4.innerText="Click Me"
//     box1.innerText=""
//     box2.innerText=""
//     box3.innerText=""
//     box3.style.backgroundColor="aliceblue"
//     box2.style.backgroundColor="aliceblue"
//     box1.style.backgroundColor="aliceblue"
// })

// box4.addEventListener("click", function () {
//     box1.style.backgroundColor="yellow"
//     box1.innerText="Click Me"
//     box2.innerText=""
//     box3.innerText=""
//     box4.innerText=""
//     box2.style.backgroundColor="aliceblue"
//     box3.style.backgroundColor="aliceblue"
//     box4.style.backgroundColor="aliceblue"
// })

const boxes = document.querySelectorAll(".box");

const colors = ["blue", "red", "green", "yellow"];

boxes.forEach((box, index) => {
    box.addEventListener("click", function () {
        boxes.forEach((b) => {
            b.style.backgroundColor = "aliceblue";
            b.innerText = "";
            b.style.borderRadius = "0"
            b.style.width = "200px"
            b.style.height = "200px"
        });
        const nextBox = boxes[(index + 1) % boxes.length];
        nextBox.style.backgroundColor = colors[index];
        nextBox.innerText = "Click Me";
        nextBox.style.transition = "0.5s linear"
        nextBox.style.borderRadius = "150px"
        nextBox.style.width = "300px"
        nextBox.style.height = "300px"
        nextBox.style.lineHeight = "290px"
    });
});