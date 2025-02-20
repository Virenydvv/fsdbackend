const fs = require('fs');
fs.rmdir("mydir",(err)=>{
    if(err)
        console.log("Err",err);
    console.log("directory deleted succes");
});