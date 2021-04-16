const nums = document.getElementsByClassName("num");
const syms = document.getElementsByClassName("sym");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const display = document.getElementById("screen-text");


function displayContent(e) {
    if (display.textContent.length <= 8) {
        display.textContent += e.target.textContent;
    }
}

clear.addEventListener("click", () => display.textContent = "");

equal.addEventListener("click", () => {
    display.textContent = Math.round(eval(display.textContent.replace("X", "*"))*10000000)/10000000;
});

del.addEventListener("click", () => display.textContent = display.textContent.slice(0, display.textContent.length - 1));

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", displayContent);
}

for (let i = 0; i < syms.length; i++) {
    syms[i].addEventListener("click", displayContent);
}