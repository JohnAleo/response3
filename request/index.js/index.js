const http = require ("http");
const server=http.createServer((req, res)=>{
console.log(req)});

const PORT=  process.env.PORT || 5003;
server.listen(PORT, ()=>{
    console.log("Service on porting", PORT)
}
)