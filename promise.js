//  function name() {
//     // await console.log(res);//res promise
//     const response = true
//     if (!response) {
        
//         try {
//             console.log("true condition");
            
//         } catch (error) {
//         console.log("error",error);
        
//         }
//     } else {
//         console.log("error2");
        
//     }
    
// }

// name()

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("promise created...");
//         resolve()
//     },1000)
// })
// promiseOne.then((res)=>{
//     console.log("done..");
// })


// const promisetwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      console.log("date is created");
//      resolve({
//       date: Date(),
//       name: "shubham",
//       address: "haryana",
//       id: [1,2,3,4,5] 
//      })
//     },1000)
// })

// promisetwo.then(function (data) {
//     console.log(data.id[3]);
// })


// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         const condition = true
//         if (condition) {
            
//             resolve({
//                       date: Date(),
//                       name: "shubham",
//                       address: "haryana",
//                       id: [1,2,3,4,5] 
//                      })
//         }else{
//             reject(function(){
//                 console.log("error");
                
//             })
//         }
//                 },1000)
// })
// .then( function(data) {
//     try {
//         console.log(`the ${data.name} data is fetched`);
//         return data
//     } catch (error) {
//         console.log("ERROR",error);
        
//     }
// })
// .then(async function(){
//     console.log(`the user data is this `,user);
// })
// .catch(function(){
//     console.log("promise can not resolved..");
// })
// .finally(
//     function(){
//         console.log("promise consumed..");
        
//     }
// )

const data = fetch("https://api.github.com/users/sk-technic")

data.then(
     function(res) {
        try {
            console.log("data is fetched..");
            console.log(res);
            
        } catch (error) {
            console.log("error: ",error);
            
        }
    }
).catch(
    function(error){
        console.log("error:",error);
    }
)
.finally(function(){
    console.log("execution is completed.");
    
})