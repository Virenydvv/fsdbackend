const fs = require('fs');

fs.mkdir('mkdir', (err) => {
    if (err) {
        console.log(err); 
    } else {
        console.log("Directory created successfully");
    }
});
