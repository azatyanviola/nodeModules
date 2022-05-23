import assert  from "assert";
import { myltiply} from "./second.js";
import os from "os";
import path from "path";
import url from "url";

    //** Asser module */
    // const expected = 15;
    // const result = (3, 5);
    // assert.equal(result, expected);

    // const expected2 = add(1,2);  
    // assert( expected === 4, 'one plus two is three');  

    //**Error module */
    // console.error(new Error('Hello! This is a new error.')); 

     //    const name = 'John';  
    //    console.warn(`Don't mess with me ${name}! Don't mess with me!`); 


    // Throws with a ReferenceError because b is undefined  
    //  try {  
    //    const a = 1;  
    //    const c = a + b;  
    // } catch (err) {  
    //    console.log(err);  //ReferenceError: b is not defined
    // }  

    //**OS module */
    // console.log("os.freemem(): \n",os.freemem());  
    // console.log("os.homedir(): \n",os.homedir());  
    // console.log("os.hostname(): \n",os.hostname());  
    // console.log("os.endianness(): \n",os.endianness());  
    // console.log("os.loadavg(): \n",os.loadavg());  
    // console.log("os.platform(): \n",os.platform());  
    // console.log("os.release(): \n",os.release());  
    // console.log("os.tmpdir(): \n",os.tmpdir());  
    // console.log("os.totalmem(): \n",os.totalmem());  
    // console.log("os.type(): \n",os.type());  
    // console.log("os.uptime(): \n",os.uptime());  

     //**Path module */
    //console.log(path.resolve());

    // const currentDir = path.resolve();
    // const myPath = path.join(currentDir, "index.js");

    // //console.log(myPath);

    // const pathObj = path.parse(myPath);
    // console.log(pathObj);


   //**Timer module */

//    setInterval(function() {  
//     console.log("setInterval: Hi! 1 millisecond completed!..");   
//    }, 1000);  

  //  let i =0;  
  //  console.log(i);  
  //  setInterval(() => {  
  //    i++;  
  //    console.log(i);  
  //  }, 1000);  

  //**URL module */
  const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  const q = url.parse(adr, true);
  console.log(q.host); // 'localhost:8080'
  console.log(q.pathname); // '/default.htm'
  console.log(q.search); // '?year=2017&month=february'

  const qdata = q.query;
  console.log(qdata.month);
