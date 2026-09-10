/*
====================================

Muscle Journey V3

Workout System

====================================
*/



const Workout = {



/*

完成一次训练

奖励：

XP +50

训练次数 +1

训练容量 +1200

*/

complete(){



let xp =

DB.get("xp")

||

0;



let workouts =

DB.get("workouts")

||

0;



let streak =

DB.get("streak")

||

0;



let volume =

DB.get("volume")

||

0;





xp += 50;


workouts += 1;


streak = this.calculateStreak();



volume += 1200;





DB.save(

"xp",

xp

);



DB.save(

"workouts",

workouts

);



DB.save(

"streak",

streak

);



DB.save(

"volume",

volume

);






// 保存训练日期


let history =

DB.get("workoutHistory")

||

[];





history.push({


date:

new Date()

.toLocaleDateString(),



type:

"哑铃增肌训练",



volume:

1200



});





DB.save(

"workoutHistory",

history

);






// 更新页面


refreshDashboard();



// 检查成就


checkAchievement();




// 提示


showWorkoutToast();



},







/*

计算连续训练

*/

calculateStreak(){



let history =

DB.get("workoutHistory")

||

[];




if(history.length===0){

return 1;

}



let today =

new Date()

.toLocaleDateString();




let last =

history[history.length-1]

.date;



if(today===last){


return DB.get("streak") || 1;


}



return (

DB.get("streak")

||

0

)

+1;



}






};









/*

按钮调用函数

*/

function completeWorkout(){



Workout.complete();



}









/*

训练完成提示

*/

function showWorkoutToast(){



let toast =

document.createElement(

"div"

);





toast.innerHTML=

`

🔥 训练完成

<br>

+50 XP

`;





toast.style.position=

"fixed";



toast.style.bottom=

"100px";



toast.style.left=

"50%";



toast.style.transform=

"translateX(-50%)";



toast.style.background=

"#007aff";



toast.style.color=

"white";



toast.style.padding=

"15px 25px";



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


},2000);



}
