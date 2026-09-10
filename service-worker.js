/*
====================================

Muscle Journey V3

Service Worker

Offline Engine

====================================
*/


const CACHE_NAME =

"muscle-journey-v3";






const CACHE_FILES = [



"./",


"./index.html",



"./css/style.css",





"./js/storage.js",


"./js/workout.js",


"./js/weight.js",


"./js/nutrition.js",


"./js/achievement.js",


"./js/app.js",





"./data/workout-plan.json",


"./data/achievements.json",





"./manifest.json"



];










/*

安装阶段

缓存文件

*/

self.addEventListener(

"install",

event=>{


event.waitUntil(



caches.open(

CACHE_NAME

)

.then(cache=>{


return cache.addAll(

CACHE_FILES

);


})



);



});









/*

激活阶段

清理旧缓存

*/

self.addEventListener(

"activate",

event=>{


event.waitUntil(



caches.keys()

.then(keys=>{


return Promise.all(


keys.map(key=>{


if(

key!==CACHE_NAME

){


return caches.delete(key);


}



})


);



})



);



});











/*

请求拦截

优先读取缓存

*/

self.addEventListener(

"fetch",

event=>{


event.respondWith(



caches.match(

event.request

)

.then(response=>{


return response || fetch(

event.request

);



})



);



});
