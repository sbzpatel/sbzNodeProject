// There are 2 types of operations 1) Synchronized 2)Asynchronized Operations

// ################# Synchronized Operations #################

    // console.log("first operation executes...");

    // console.log("second operation executes...");

    // console.log("third operation executes...");

// ################# Synchronized Operations #################


// ################# Asynchronized Operations #################

    // setTimeout(() => {
    //     console.log("first operation executes..."); // runs third
    // },3000)

    // console.log("second operation executes..."); // runs first

    // console.log("third operation executes...");  // runs second

// ################# Asynchronized Operations #################


// ################# In some case Asynchronous goes wrong #################

    // var a = 20;
    // var b = 0;

    // setTimeout(() => {
    //     a = 30;
    // }, 3000);

    // console.log(a+b);

// ################# In some case Asynchronous goes wrong #################


// ################# How Nodejs Works (Call Stack, Node APIs, CallBack Queue) #################

    console.log("First operation executes...");         // first executes

    setTimeout(() => {
        console.log("Second operation executes...");    // fourth executes
    }, 3000);

    setTimeout(() => {
        console.log("Third operation executes...");     // third executes
    }, 0);

    console.log("Fourth operation executes...");        // second executes
    
// ################# How Nodejs Works (Call Stack, Node APIs, CallBack Queue) #################