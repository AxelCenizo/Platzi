for(var i = 1; i < 100; i++) {
    if(esDivisible(i, 3)) {
        document.write("<b>Fizz</b>");
    }
    if(esDivisible(i, 5)) {
        document.write("<b>Buzz</b>");
    }
    if(!esDivisible(i, 3) && !esDivisible(i, 5)) {
        document.write(i);
    }
    document.write("<br>");
}

function esDivisible(dividendo, divisor) {
    if(dividendo % divisor == 0) {
        return true;
    }
    else {
        return false;
    }
}