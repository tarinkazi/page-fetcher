const request = require('request');
const fs = require('fs');

const content = '';

//const domain = process.argv[2]
//const urlName = `http://${domain}/`
let urlName = process.argv[2];
console.log(urlName);

const filPath = '../page-fetcher/index.html';

  request(urlName, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  

  fs.writeFile(filPath, body, err => {
    if (err) {
      console.error(err)
      return
    } else{
        console.log(`Downloaded and saved ${body.length} bytes to ${filPath}`);
      }
});


})
