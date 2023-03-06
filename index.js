function receivesAFunction (cb) {
    console.log(cb());
}

receivesAFunction(function () { return "This is just to pass the lab"});

function returnsANamedFunction(){
    const cb = function () {console.log("this is just to pass the lab")};
    return cb;
}

function returnsAnAnonymousFunction(){
    return function () { console.log("to pass test")};
}
