/*
====================================

Muscle Journey V3

Weight Growth System

64kg → 75kg

====================================
*/


const WeightSystem = {


startWeight:64,


goalWeight:75,







/*

保存体重

*/

save(weight){



if(!weight || weight<=0){


alert(

"请输入正确体重"

);


return;


}





let history =

DB.get(

"weightHistory"

)

||

[];







history.push({


date:

new Date()

.toLocaleDateString(),



weight:

Number(weight)



});







DB.save(

"weightHistory",

history

);







// 更新当前体重

DB.save(

"currentWeight",

Number(weight)

);






refreshDashboard();



renderWeightHistory();




},







/*

获取最新体重

*/

getCurrent(){



let weight =

DB.get(

"currentWeight"

);



return weight ||

this.startWeight;



},







/*

计算距离目标

*/

getProgress(){



let current =

this.getCurrent();




let progress =



(

current -

this.startWeight

)

/

(

this.goalWeight -

this.startWeight

)

*

100;



return Math.min(

Math.max(

progress,

0

),

100

);



}







};









/*

按钮调用

*/

function saveWeight(){



let input =

document.getElementById(

"weightInput"

);





WeightSystem.save(

input.value

);





input.value="";



}









/*

显示历史

*/

function renderWeightHistory(){



let box =

document.getElementById(

"weightHistory"

);





if(!box){

return;

}




let history =

DB.get(

"weightHistory"

)

||

[];





if(history.length===0){


box.innerHTML=

"暂无记录";


return;


}







let html="";





history

.slice()

.reverse()

.slice(0,7)

.forEach(item=>{



html +=


`

<div class="weight-item">


📅 ${item.date}


&nbsp;&nbsp;


⚖️ ${item.weight} kg


</div>


`;



});





box.innerHTML=html;



}









/*

初始化体重

*/

function initWeight(){



let current =

WeightSystem.getCurrent();





let element =

document.getElementById(

"currentWeight"

);





if(element){


element.innerText=

current.toFixed(1);



}






let remain =

document.getElementById(

"remainWeight"

);





if(remain){


remain.innerText=

(

WeightSystem.goalWeight

-

current

)

.toFixed(1);



}





let progress =

document.getElementById(

"goalProgress"

);





if(progress){


progress.style.width=

WeightSystem.getProgress()

+"%";


}



renderWeightHistory();



}
