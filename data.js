//how to read files in nodejs with file system
const fs = require('fs');

//blocking or synchronous
// console.log('.....READ_FILE');
// const data = fs.readFileSync('./example.txt', 'utf-8'); //blocking way or synchronous
// console.log(data);
// console.log('....CREATE_FILE');

// const writeData = fs.writeFileSync('./book.txt', data);
// console.log('...FILE_CREATED');
// //read the data from book.txt and log it to the console
// const dataTwo = fs.readFileSync('./book.txt', 'utf-8');
// console.log(dataTwo);
// console.log('...DONE');

// console.log('this is number One');
// console.log('this is number Two');
// setTimeout(() => {
//   console.log('this is number Three');
// }, 6000);
// console.log('this is number Four');
// console.log('this is number Five');
// console.log('this is number Six');

//read you index.html file and log the value to the console using
// fsSync

///PROMISES

console.log('...READFILE');
// fs.readFile('./example.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   fs.writeFile('./new.txt', data, (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.readFile('./new.txt', 'utf-8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log(data);
//       fs.writeFile('./DONE.txt', 'I am with my fs', (err) => {
//         if (err) {
//           throw err;
//         }
//       });
//     });
//   });
// });

const readFilePromise = (fileLocation) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(fileLocation, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFilePromise = (fileLocation, fileData) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(fileLocation, fileData, (err) => {
      if (err) {
        reject(err);
      }
      resolve('...FILE CREATED SUCCESSFULLY...');
    });
  });
};

readFilePromise('./example.txt')
  .then((result) => {
    return result;
  })
  .then((result2) => {
    return writeFilePromise('./promise.txt', result2);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => {
    console.log(err);
  });

// async function MyFile(){}

// const MyFile = async () => {
//   try {
//     const fileOne = await readFilePromise('./example.txt');
//     const fileTwo = await writeFilePromise('./new3.txt', fileOne);
//     const fileThree = await readFilePromise('./book.txt');
//     console.log(fileTwo);
//     console.log(fileThree);
//   } catch (error) {
//     console.log(error);
//   }
// };

// MyFile();

const indexFile = fs.readFileSync('./public/index.html', 'utf-8');
console.log(indexFile);
