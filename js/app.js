/*
====================================

Muscle Journey V3

Application Core

====================================
*/






/*

等级系统

规则：

500 XP = 升一级

*/

function calculateLevel(){



let xp =

DB.get("xp")

||

0;





return Math.floor(

xp / 500

)

+

1;



}









/*

刷新首页数据

*/

function refreshDashboard(){





// XP


let xp =

DB.get("xp")

||

0;



let xpElement =

document.getElementById(

"xp"

);



if(xpElement){



xpElement.innerText=

xp;



}







// 等级


let levelElement =

document.getElementById(

"level"

);



if(levelElement){



levelElement.innerText=

calculateLevel();



}









// 训练次数


let workoutElement =

document.getElementById(

"workouts"

);




if(workoutElement){



workoutElement.innerText=

DB.get("workouts")

||

0;



}









// 连续训练


let streakElement =

document.getElementById(

"streak"

);




if(streakElement){



streakElement.innerText=

DB.get("streak")

||

0;



}









// 当前体重


let weightElement =

document.getElementById(

"currentWeight"

);



let currentWeight =

DB.get(

"currentWeight"

)

||

64;



if(weightElement){



weightElement.innerText=

Number(

currentWeight

)

.toFixed(1);



}









// 目标进度


let progress =



(

currentWeight

-

64

)

/

(

75

-

64

)

*

100;





progress = Math.min(

Math.max(

progress,

0

),

100

);







let progressBar =

document.getElementById(

"goalProgress"

);





if(progressBar){



progressBar.style.width=

progress+"%";



}






// 剩余重量


let remain =

document.getElementById(

"remainWeight"

);



if(remain){



remain.innerText=

Math.max(

75-currentWeight,

0

)

.toFixed(1);



}






}









/*

初始化App

*/

function initApp(){



refreshDashboard();



initWeight();



initNutrition();



renderAchievements();



}








/*

页面加载

*/

window.addEventListener(

"load",

()=>{


initApp();



});
