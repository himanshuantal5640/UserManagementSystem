const app = require('./app.js');
const PORT = 3000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`);
})