/*
====================================

Muscle Journey V3

Local Storage Database

====================================
*/


const DB = {


/*

保存数据

example:

DB.save(
"xp",
100
)

*/

save(key,value){


localStorage.setItem(

key,

JSON.stringify(value)

);


},







/*

读取数据

example:

DB.get("xp")

*/

get(key){


const data =

localStorage.getItem(key);



if(!data){

return null;

}



return JSON.parse(data);



},







/*

删除数据

*/

remove(key){


localStorage.removeItem(key);


},







/*

清空全部数据

*/

clear(){


localStorage.clear();


},







/*

检查数据是否存在

*/

has(key){


return localStorage.getItem(key)!==null;


},







/*

导出全部数据

以后可以做备份功能

*/

export(){


let data={};



Object.keys(localStorage)

.forEach(key=>{


data[key]=

JSON.parse(

localStorage.getItem(key)

);


});



return data;



},







/*

导入数据

*/

import(data){



Object.keys(data)

.forEach(key=>{


localStorage.setItem(

key,

JSON.stringify(data[key])

);


});


}



};
