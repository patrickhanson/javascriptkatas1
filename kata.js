const kata1Output = document.getElementById("output-1");
for(let i = 1; i <= 20; i++) {
    let result = String(i);
    kata1Output.innerHTML += result + "\n";
    console.log("Kata 1:", result);
}

const kata2Output = document.getElementById("output-2");
for(let i = 2; i <= 20; i = i + 2) {
    let result = String(i);
    kata2Output.innerHTML += result + "\n";
    console.log("Kata 2:", result);
}

const kata3Output = document.getElementById("output-3");
for(let i = 1; i <= 20; i = i + 2) {
    let result = String(i);
    kata3Output.innerHTML += result + "\n";
    console.log("Kata 3:", result);
}

const kata4Output = document.getElementById("output-4");
for(let i = 5; i <= 100; i = i + 5) {
    let result = String(i);
    kata4Output.innerHTML += result + "\n";
    console.log("Kata 4:", result);
}

const kata5Output = document.getElementById("output-5");
for(let i = 1, x = 1; i < 100; x++) {
    let result = String(i);
    i = x * x;
    kata5Output.innerHTML += result + "\n";
    console.log("Kata 5:", result);
}

const kata6Output = document.getElementById("output-6");
for(let i = 20; i >= 1; i--) {
    let result = String(i);
    kata6Output.innerHTML += result + "\n";
    console.log("Kata 6:", result);
}

const kata7Output = document.getElementById("output-7");
for(let i = 20; i >= 2; i = i - 2) {
    let result = String(i);
    kata7Output.innerHTML += result + "\n";
    console.log("Kata 7:", result);
} 

const kata8Output = document.getElementById("output-8");
for(let i = 19; i >= 0; i = i - 2) {
    let result = String(i);
    kata8Output.innerHTML += result + "\n";
    console.log("Kata 8:", result);
}

const kata9Output = document.getElementById("output-9");
for(let i = 100; i >= 5; i = i - 5) {
    let result = String(i);
    kata9Output.innerHTML += result + "\n";
    console.log("Kata 9:", result);
}

const kata10Output = document.getElementById("output-10");
for(let i = 100, y = 9; i > 0; y--) {
    let result = String(i);
    i = y * y;
    kata10Output.innerHTML += result + "\n";
    console.log("Kata 10:", result);
}