let newobj={
    "name":"hello",
    "roll no": 1
}
console.log(newobj.name)
function test(value){
    let a= 5;
     if (true){
        let a=2
        console.log(a)
     }
console.log(a)
    }
    test();
    function test(value){
        var a= 56;
         if (true){
            var a=2
            console.log(a, 'this is a')
         }
    console.log(a,"this is global")
        }
        test();
        function callMyGf(){
            return 'I love you'
        }
    function call(callMyGf){
        return callMyGf()
    }
    var a = 5
    var i = 6
    let newarr = [ 1,2,3,4,5,6,7,8,9,10]
    console.log(newarr.length,'this is the length')
    newarr.forEach((a,i)=>{
        console.log(a,i)
    }) 
    let newwarr = [ 1,2,3,4,5,6,7,8,9,10]
    console.log(newarr.length,'this is the length')
    newarr.forEach(()=>{
        console.log(a,i)
    }) 
                       // filter 
                       let filterData = newarr.filter(item => item !== 4);
                       console.log(filterData,'fiter dara');
                       console.log(newarr,"orginal array data")
                       
   