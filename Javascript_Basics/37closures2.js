function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}

x()(); // this will print 100 as it invokes the returned function y