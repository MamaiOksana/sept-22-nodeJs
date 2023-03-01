//////////// HW 2 /////////////////////

const fs2 = require('node:fs/promises');
const path2 = require('node:path');
const path = require("path");


const wolker = async () =>{
    try{
        const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
        const folders = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];

        for (const folder of folders) {
            await fs2.mkdir(path.join(('HW2'),folder), {recursive: true});
        }

        for (const file of files) {
            await fs2.writeFile(path.join(('HW2'), file), 'hello spring');
        }

        const filesAll = await fs2.readdir(path.join('HW2'));
        console.log(filesAll);

        for (const fileAll of filesAll) {
            const stat = await fs2.stat(path.join(('HW2')), fileAll);
            const isFile = stat.isFile();
            if (isFile){
                console.log( 'this is file: ', path.join(('HW2')), fileAll)
            } else {
                console.log( 'this is directory: ', path.join(('HW2')), fileAll)
            }
        }
    }catch (e) {
        console.error(e.message)
    }

}


wolker();






// --HW--

// const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(process.cwd(), 'HW'), (err)=>{
//     if (err) throw new Error()
// })

// fs.mkdir(path.join('HW', 'folder1'), (err)=>{
//     if (err) throw new Error()
// })

// fs.mkdir(path.join('HW', 'folder2'), (err)=>{
//     if (err) throw new Error()
// })
//
// fs.mkdir(path.join('HW', 'folder3'), (err)=>{
//     if (err) throw new Error()
// })
//
// fs.mkdir(path.join('HW', 'folder4'), (err)=>{
//     if (err) throw new Error()
// })
//
// fs.mkdir(path.join('HW', 'folder5'), (err)=>{
//     if (err) throw new Error()
// })


//
// fs.writeFile(path.join('HW', 'file1.txt'), 'Hello from Okten !!!', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('HW', 'file2.txt'), 'Hello from Okten !!!', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('HW', 'file3.txt'), 'Hello from Okten !!!', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('HW', 'file4.txt'), 'Hello from Okten !!!', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('HW', 'file5.txt'), 'Hello from Okten !!!', (err)=>{
//     if (err) throw new Error()
// })

 // fs.readdir(path.join('HW'),{withFileTypes: true}, (err, data)=>{
 //     if (err) console.log(err.message);
 //     console.log(data)
 // })

// fs.stat(path.join('HW'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//    console.log(stats.isFile())
// })

// fs.stat(path.join('HW','folder1'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })

// fs.readdir(path.join('HW', 'folder2'),{withFileTypes: true}, (err, data)=>{
//         if (err) console.log(err.message);
//        console.log(data)
//      })
//
//
// fs.readdir(path.join('HW', 'folder3'),{withFileTypes: true}, (err, data)=>{
//     if (err) console.log(err.message);
//     console.log(data)
// })

// fs.readdir(path.join('HW', 'folder4'),{withFileTypes: true}, (err, data)=>{
//     if (err) console.log(err.message);
//     console.log(data)
// })


// fs.readdir(path.join('HW', 'folder5'),{withFileTypes: true}, (err, data)=>{
//     if (err) console.log(err.message);
//     console.log(data)
// })


// fs.stat(path.join('HW','file1.txt'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })
//
//     fs.stat(path.join('HW','file2.txt'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })
//
//  fs.stat(path.join('HW','file3.txt'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })
//
//
//    fs.stat(path.join('HW','file4.txt'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })
//
//  fs.stat(path.join('HW','file5.txt'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })
//
// //
// // fs.stat(path.join('HW','file2.txt'), (err, stats)=>{
// //     if (err) throw new Error();
// //     console.log(stats.isDirectory());
// //     console.log(stats.isFile())
// // })









//-- CLASS WORK_--
// -- MODULES --

// const {sayHello} = require('./helper');
//
// sayHello();

// -- GLOBAL VARIABLES --

// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());

// console.log(process);

// --PATH --

// const path = require('path');
//
// const joinedPath = path.join(__dirname,'test', 'test.js');
// console.log(joinedPath);

// const normalizedPath = path.normalize('///test////test2//test.txt');
// console.log(normalizedPath);
//
// const resolved = path.resolve('test', 'test.js');
// console.log(resolved);

// -- OS --

//const os = require('os');
//console.log(os.arch());
// console.log(os.cpus());

// -- FS --
// const fs = require('fs');
// const path = require('path');

// fs.writeFile(path.join('test','text3.txt'), 'hello from Okten', (err)=>{
//     if (err) throw new Error(err.message)
// })


// fs.readFile(path.join(__dirname,'test','text.txt', (err, data) => {
//     if (err) throw new Error();
//     console.log(data);
// }))

// fs.appendFile(path.join('test', 'text2.txt'), '\nHello again', (err)=>{
//     if (err) throw new Error()
// })

// fs.truncate(path.join('test', 'text2.txt'), (err)=>{
//     if (err) throw new Error();
// })

// fs.unlink(path.join('test', 'text2.txt'), (err)=>{
//     if (err) throw new Error();
// })
//
// fs.stat(path.join('test'), (err, stats)=>{
//     if (err) throw new Error();
//     console.log(stats.isDirectory());
//     console.log(stats.isFile())
// })

// fs.mkdir(path.join('test', 'test2'), (err)=>{
//     if (err) throw new Error();
// })

// fs.readdir(path.join('test'),{withFileTypes: true}, (err, data)=>{
//     if (err) throw new Error();
//     data.forEach(file =>{
//         console.log(file.isFile());
//     })
// })