
const fs = require('node:fs/promises');
const path = require('node:path');

//const dbPath =

   const reader =  async ()=>{
        const buffer =  await fs.readFile(path.join(process.cwd(), 'dataBase', 'users.json'));
          const data = buffer.toString();
          return  data ? JSON.parse(data) : [];
    };


const writer =  async ()=>{
    const buffer =  await fs.writeFile(path.join(process.cwd(), 'dataBase', 'users.json'));
    const data = buffer.toString();
    return  data ? JSON.parse(data) : [];
};

module.exports = {
    reader,
    writer,
};