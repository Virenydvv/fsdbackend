const fs=require('fs');

// const read=()=>{
//     fs.readFile("./data.txt","utf-8",(err,data)=>{
//         if(err)
//             console.log(err)
//         else
//             console.log(data)
//     });
// }

// const write=()=>{
//     const data="hg8f86";
//     fs.writeFileSync("./data.txt",data);
// }
// const write=()=>{
//     const data="hg86";
//     fs.writeFile("./data.txt",data,"utf-8",(err)=>{
//         if(err)
//             console.log(err)
//         else
//             console.log("writen")
//     });
// }
const append=()=>{
    const data="ndsaifjasdfo";
    fs.appendFile("./data.txt",data,"utf-8",(err)=>{
        if(err)
            console.log(err)
        else
            console.log("writen")
    });
}
console.log("after reading")
// write();
append();
// read();
console.log("before reading")