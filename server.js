const app = require('./app.js');
const chalk = require('chalk');
const PORT = 3000 || process.env.PORT;
console.log(chalk.green("Ruuningggg"));
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`);
})