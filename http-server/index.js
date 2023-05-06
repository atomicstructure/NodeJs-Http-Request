import  http  from 'http'
const PORT = 3000
const server = http.createServer((req, res)=>{
 if (req.url === '/friends' || req.url === '/'){
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({
    id: 1,
    fName: 'Oluwafemi',
    lName: 'Ogundare',
    age: 37,
    nationality: "Nigerian",
    occupation: "Software Engineer",
  }));
 }else if (req.url === '/messages'){
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.write('<html>')
  res.write('<body>')
  res.write('<h1> Hello, this is the message part which I am testing</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end()
 }else{
  res.writeHead(404, {
    'Content-Type': 'text/html',
  })
  
  res.end()
 }
});
server.listen(PORT, () =>{
  console.log(`Server listening on Port ${PORT}`);
})
