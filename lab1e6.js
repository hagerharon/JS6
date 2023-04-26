var umO=100;
var uma=9;
[umO,uma] = [uma,umO];
console.log(`The value of a after swapping: umO ${umO} uma ${uma}`);




var arr = [20,30,100,25,35];


console.log(Math.max(...arr));


console.log(Math.min(...arr));

var fruits = ["apple", "strawberry", "banana", "orange","mango"]
console.log(
    Array.prototype.every.call(fruits, (x) => typeof x === "string"));

    console.log(fruits.filter((el)=>el.startsWith("a")));
    console.log(fruits.filter((el)=>el.startsWith("b")) || fruits.filter((el)=>el.startsWith("s")));

    var myfavfruit = fruits.map(function(f,i){
                return "i like "+ f;
        
        })
        console.log(myfavfruit)

        myfavfruit.forEach(function(e,i){
            console.log(e);
        
        })
        
        

    
