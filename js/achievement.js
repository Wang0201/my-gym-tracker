/*
====================================

Muscle Journey V3

Achievement System

====================================
*/



const Achievements = [



{


id:"first_workout",


title:"🔥 初次燃烧",


desc:"完成第一次训练",



check(){

return (

DB.get("workouts")

>=1

);


}



},






{


id:"seven_days",


title:"⚡ 七日坚持",


desc:"连续训练7天",



check(){

return (

DB.get("streak")

>=7

);


}



},







{


id:"thirty_workouts",


title:"💪 训练达人",


desc:"完成30次训练",



check(){

return (

DB.get("workouts")

>=30

);


}



},







{


id:"volume_master",


title:"🏋️ 力量积累",


desc:"累计训练容量超过30000kg",



check(){


return (

DB.get("volume")

>=30000

);


}



},







{


id:"70kg",


title:"🚀 进入增肌阶段",


desc:"体重达到70kg",



check(){



let history =

DB.get(

"weightHistory"

)

||

[];




return history.some(

item=>

item.weight>=70

);



}



},







{


id:"75kg",


title:"👑 75kg完成",


desc:"达到最终目标体重",



check(){



let history =

DB.get(

"weightHistory"

)

||

[];




return history.some(

item=>

item.weight>=75

);



}



}



];











/*

检查成就

*/

function checkAchievement(){



let unlocked =

DB.get(

"achievements"

)

||

[];






Achievements.forEach(item=>{



if(

item.check()

&&

!

unlocked.includes(item.id)

){



unlocked.push(

item.id

);




showAchievementToast(

item.title

);



}



});







DB.save(

"achievements",

unlocked

);



renderAchievements();



}









/*

显示成就

*/

function renderAchievements(){



let box =

document.getElementById(

"achievementList"

);





if(!box){

return;

}





let unlocked =

DB.get(

"achievements"

)

||

[];




let html="";







Achievements.forEach(item=>{



if(

unlocked.includes(

item.id

)

){



html +=

`

<div class="badge">

${item.title}

</div>

`;



}

else{



html +=

`

<div class="badge"

style="opacity:.35">

🔒

${item.title}

</div>

`;



}



});






box.innerHTML=

html;



}









/*

弹窗奖励

*/

function showAchievementToast(title){



let toast=

document.createElement(

"div"

);



toast.innerHTML=

`

🏆 成就解锁

<br>

${title}

`;





toast.style.position=

"fixed";



toast.style.bottom=

"120px";



toast.style.left=

"50%";



toast.style.transform=

"translateX(-50%)";



toast.style.background=

"#ff9500";



toast.style.color=

"white";



toast.style.padding=

"16px 25px";



toast.style.borderRadius=

"30px";



toast.style.fontWeight=

"700";



toast.style.zIndex=

"999";




document.body.appendChild(

toast

);





setTimeout(()=>{


toast.remove();


},2500);



}
