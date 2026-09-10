/*
====================================

Muscle Journey V3

Nutrition Tracking System

Bulk Phase

====================================
*/



const Nutrition = {


/*

你的增肌目标

*/

dailyCalories:2800,


dailyProtein:130,









/*

获取今日数据

*/

getToday(){



let data =

DB.get(

"nutrition"

);




if(!data){



data={


date:

new Date()

.toLocaleDateString(),



calories:

0,



protein:

0



};



DB.save(

"nutrition",

data

);



}



return data;



},







/*

添加饮食

*/

addMeal(calories,protein){



let today =

this.getToday();





today.calories +=

Number(calories);



today.protein +=

Number(protein);






DB.save(

"nutrition",

today

);






updateNutritionUI();



},







/*

计算完成率

*/

getProgress(){



let today =

this.getToday();




return {



calorie:

Math.min(

today.calories /

this.dailyCalories *

100,

100

),




protein:

Math.min(

today.protein /

this.dailyProtein *

100,

100

)



};



}






};









/*

更新页面

*/

function updateNutritionUI(){



let progress =

Nutrition.getProgress();





let proteinBar =

document.getElementById(

"proteinBar"

);




let calorieBar =

document.getElementById(

"calorieBar"

);





if(proteinBar){


proteinBar.style.width=

progress.protein+"%";


}






if(calorieBar){


calorieBar.style.width=

progress.calorie+"%";


}




}









/*

快速添加示例

以后可以绑定按钮

*/

function addProteinMeal(){



Nutrition.addMeal(

500,

40

);



}



function addRiceMeal(){



Nutrition.addMeal(

700,

20

);



}









/*

初始化

*/

function initNutrition(){



updateNutritionUI();



}
