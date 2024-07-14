const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Tuning 3th response</h1>');
} else if (req.url==="/tunings"){
    res.end('<h1>Rocket</h1> <br> <h1>Platina</h1> <br> <h1>Aidal</h1> <br> <h1>Nikki</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5003;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});
