var testData = 10;
var testBool = false;
console.log(testData);
test = () => {
    console.log(testData);
    testData = 12;
    console.log(testData);
    
    var testData = 9;// undefined
    console.log(testData);
    testData = 14;
    testData = 13;
    console.log(testData);
    console.log("-----------------");

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log("i: " + i);
        }, i * 1000);
    }

    if (testBool) {
        console.log("this is true");
    } else {
        console.log("this is false");
    }
}




// #region Javascript Hoisting
testJSHoisting = () =>{
    console.log("Test Javascript Hoisting");
    console.log("Test Hoisting 1");
    testJSHoisting1();
    console.log("Test Hoisting 2");
    testJSHoisting21();
    console.log("Test Hoisting 3");
    testJSHoisting22();
    console.log("Test Hoisting 4");
    testJSHoisting23();
    console.log("Test Hoisting 5");
    testJSHoisting31();
    console.log("Test Hoisting 6");
    testJSHoisting32();
}

testJSHoisting1 = () => {
    var x = 1;
    console.log(x);
}
testJSHoisting21 = () => {
    console.log(y);
    var y = 2;
    console.log(y);
}
testJSHoisting22 = () => {
    var y;
    console.log(y);
    y = 2;
    console.log(y);
}
testJSHoisting23 = () => {
    var y = 2;
    console.log(y);
}
testJSHoisting31 = () => {
    var testData = 20;
    console.log(testData);
}
testJSHoisting32 = () => {
    console.log(testData);
    var testData = 20;
    console.log(testData);
}

//testJSHoisting();
// #endregion