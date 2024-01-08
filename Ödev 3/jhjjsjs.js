for (let i = 0; i < 5; i++) {
    console.log(i);
}



let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


for (let i = 0; i < n; i++) {
    console.log(i)
}
//Yukarıdaki kod n defa alışır. Time complexity O(n)'dir.


let i = 0
while (i < n) {
    console.log(i)
    i++
}
//Yukarıdaki kod n defa çalışır. Time complexity O(n)'dir.


let i = 0
do {
    console.log(i)
    i++
} while (i < n)
//Yukarıdaki kod n defa çalışır. Time complexity O(n)'dir.


// Big O Notation: O(1)
function exampleWithForLoop() {
    for (let i = 0; i < 3; i++) {
        console.log("Hello");
    }
}


// Big O Notation: O(1)
function exampleWithWhileLoop() {
    let counter = 0;
    while (counter < 3) {
        console.log("Hello");
        counter++;
    }
}


// Big O Notation: O(1)
function exampleWithDoWhileLoop() {
    let counter = 0;
    do {
        console.log("Hello");
        counter++;
    } while (counter < 3);
}


