function result(N) {
    var arr = [];
    var n = 0;
    for(var i=1; i<=N; i++){
        if(i%2===0 && i%3===0 && i%5===0) {
            n = "yu-gi-oh";
        } else if(i%2===0 && i%3===0) {
            n = "yu-gi";
        } else if(i%2===0 && i%5===0) {
            n = "yu-oh";
        } else if(i%3===0 && i%5===0) {
            n = "gi-oh";
        } else if(i%2===0) {
            n = "yu";
        } else if(i%3===0) {
            n = "gi";
        } else if(i%5===0) {
            n = "oh";
        }  else {
            n = i;
        }
        arr.push(n);
    }
    console.log(arr);
}
result(100);
result(75);