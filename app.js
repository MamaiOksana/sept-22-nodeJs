// --HW--

const fs = require('fs');
const path = require('path');

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












 // fs.mkdir(path.join(process.cwd(), 'H_W'), (err)=>{
 //    if (err) throw new Error()
 // })

// const homeWork = async () =>{
//     try {
//         const files = ['file1', 'file2', 'file3', 'file4', 'file5'];
//         const folders = ['folder1', 'folder2', 'folder3', 'folder4'];
//
//        const promises = folders.map(async (folder, index) => {
//            const foldersPath = path.join('H_M', folder)
//
//            await fs.mkdir(folder, {recursive: true});
//            await fs.writeFile(path.join((foldersPath, files[index]), 'Say HI!!!');
//         })
//         console.log(promises);
//
//            const await = await Promise.
//
//     }catch (e) {
// }}
//
//
//

// const work = async ()=> await fs.stat(path.join(process.cwd(), 'app.txt'))
// const isFile = work.isFile();
// console.log(work);
// console.log(isFile);















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