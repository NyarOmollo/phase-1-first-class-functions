function receivesAFunction(thing) {
    return thing();
}
receivesAFunction(function(){return "I have received the function"});

function returnsANamedFunction() {
    return function x(){
        console.log("No matter how complex you seem now i will master you");
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This returns anonymous function");
    }
}
returnsAnAnonymousFunction();