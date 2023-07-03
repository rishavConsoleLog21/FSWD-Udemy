/* used in old version of node
const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     console.log('In the callback')
//     if(err) throw(err);
// })
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.css`)
fs.writeFileSync(`${folderName}/app.js`)
*/

const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch(e){
    console.log("SOMETHING WENT WRONG!!!!");
    console.log(e);
}