function varTest() {
    var x = 'varInstance';

    if (true) {
        var x = 'varNewInstance'; // same variable!
        console.log(x); // 2
    }

    console.log(x); // 2
}
   
function letTest() {
    let y = 'letInstance';
    var x = 'varNewInstance in letTest() function and can be access anywhere in the file';

    if (true) {
        let y = 'letNewInstance'; // different variable
        console.log(y); // 2
    }
    
    console.log(y); // 1
    console.log(x); // 1
}

varTest();
letTest();



