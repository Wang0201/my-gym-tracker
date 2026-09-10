// ======================
// Local Storage 数据中心
// ======================


const DB = {


save(key,value){

localStorage.setItem(

key,

JSON.stringify(value)

)

},



get(key){


const data =
localStorage.getItem(key);



return data ?

JSON.parse(data)

:

null;


},



remove(key){

localStorage.removeItem(key);

}



};
