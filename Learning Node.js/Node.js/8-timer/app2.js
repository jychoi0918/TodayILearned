// console.log('code1');


// setTimeout(()=>{
//     console.log('setTimeout 0');
// },0);

// console.log('code2');
// setTimeout(()=>{
//     console.log('setTimmediate');

// });

// console.log('code3');

// process.nextTick(()=>{
//     console.log('process nextTick');
// })


// // -------------------------------------
console.log('code1');
console.time('timeout');

setTimeout(()=>{
    console.log('setTimeout 0');
    console.timeEnd('timeout')
},0);