// let newobj={
//     "name":"hello",
//     "roll no": 1
// }
// console.log(newobj.name)
// function test(value){
//     let a= 5;
//      if (true){
//         let a=2
//         console.log(a)
//      }
// console.log(a)
//     }
//     test();
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
    let newarr = [ 1,2,3,4,5,6,7,8,9,10]
    console.log(newarr.length,'this is the length')
    newarr.forEach((a,i)=>{
        console.log(a,i)

    }) 