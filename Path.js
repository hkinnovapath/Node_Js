// console.log(__dirname );
// console.log(__filename );

const pt=require('path')

// console.log(pt.join(__dirname,'/hello'));
const filePath = '/path/to/myfile.txt';
// console.log(pt.extname(filePath));
// console.log(pt.basename(filePath));
// console.log(pt.dirname(filePath));
console.log(pt.parse(filePath));
