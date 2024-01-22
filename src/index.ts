console.log("Ds-Algo");


const array = new Array(100).fill("Ajjay");

function findAjay(arr: string[]) {
    let t0 = performance.now();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Ajjay') {
            console.log("found");
        }
    }
    let t1 = performance.now();
    console.log("Time taken for the program is ", t1 - t0, " MS");
}

findAjay(array)