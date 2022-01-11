function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    return function receives() {
        return "Tony";
    }
}

function returnsAnAnonymousFunction() {
    return function () {
         ;
    }
}