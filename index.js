function rohan() {
    let p = new Promise((resolve) => {
      //async hoga
      resolve("hi there");
    });
    return p;
  }
  
 async function result(){
    let ans= await rohan();
    console.log(ans);
 }
 result();