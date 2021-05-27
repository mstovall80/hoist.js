
var hello = 'world';                                 
console.log(hello);  
// the var is setting hello to world.

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// it wont call the test due to the no console.log.


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// it calls up the var because the print function was never called up



var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//  here is were the two console's were called. 
// the var on line 28, with the add on eat() function. which in turn called the secound console


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}

// as for the mean function, there is no paramaters nor variables called food int he function.
// var mean is setting its self to a function. inwhich wont happen due to the fact the it was a var.



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// first the console log was called before the variable
// then the secound the function was never called.


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

