//Using a recursive function
let factorial = 1;
const factorialFinderRecursive = (n) =>{
    if(n === 0) return 1;
    factorial *= n*factorialFinderRecursive(n-1);
    return factorial;
}
// factorialFinderRecursive(4);
// console.log(factorial);



//Using a while loop
const factorialFinderLoop = (n) =>{
    let i = 1;
    while (i <= n) {
        factorial *=  i;
        i++;
    }
    return factorial;
}
factorialFinderLoop(4);
console.log(factorial);