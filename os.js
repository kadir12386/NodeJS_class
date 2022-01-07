const { appendFile } = require("fs");
const os = require("os"); //inbulit package
console.log("Free memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("version", os.version());
console.log("Processor", os.cpus());

// app.get("/movies",(resquest,response)=>{
//     response.send(movies);
// })

// app.get("/movies/:id",(resquest,response)=>{
//     console.log(resquest.params);
//     const { id } = resquest.params;
//     console.log(id);
//     const res = movies.filter((el) => el.id === id);
//     response.send(res);
// })
