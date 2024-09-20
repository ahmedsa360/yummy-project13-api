// https://www.themealdb.com/api/json/v1/1/search.php?s=
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

let bar = document.getElementById('bar');
let nav = document.getElementById('main-nav');
let close = document.getElementById('close');
let rowdate = document.getElementById('row');
let header = document.getElementById('header')
let list;
let list1;
let list2;
let list3;
let list4;
let list5;
let list6;
let cartoona = "";
let cartoona1 = "";
let cartoona2 = "";
let cartoona3 = "";
let cartoona4 = "";
let cartoona5 = "";
let cartoona6 = "";
let cartoona7 = "";
let mealData = document.getElementById('mealData')
let catBeaf1 = document.getElementById('catMeal')
let categorisId = document.getElementById("categoris-id")
let getAreaId = document.getElementById("getArea")
let area = document.getElementById("area")
let getAreaCartoona = document.getElementById("getAreaCartoona")
let areaMeal = document.getElementById("areaMeal")
let Ingredients = document.getElementById("Ingredients")
let displayIngredientId = document.getElementById("displayIngredientId")







bar.addEventListener("click",function(){
   
 close.classList.replace("d-none" , "d-block")
 bar.classList.replace("d-block" , "d-none")
 close.style.cursor = 'pointer' 
 nav.style.left = "0"
})


// start app
async function getMeals(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    response = await response.json()
    list = response.meals
    
    displayMeals(list)
}
getMeals()

function displayMeals(arr){
    for(let i =0 ; i<arr.length; i++){
      
        cartoona += `
        <div class=" col-md-3">
        <div>
         <img onclick="displayMealsData(list)" class=" w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
        </div>
    </div>
        
        `;
    }
   rowdate.innerHTML = cartoona
}
// end start app


// start meals data
function displayMealsData(arr){
    for(let i =0; i < arr.length; i++){
         cartoona1+= `
         
         <div class=" col-lg-4 ">
         <div>
          <img class= "w-100" src="${arr[i].strMealThumb}" alt="">
          <p>${arr[i].strMeal}</p>
         </div>
      </div>
      <div class=" col-lg-8 ">
         <h4>Instructions</h4>
         <p>${arr[i].strInstructions}</p>
         <h3>Area : ${arr[i].strArea}</h3>
         <h3>Category : ${arr[i].strCategory}</h3>
         <h3>Tags : ${arr[i].strTags}</h3>
         
         <div class=" d-flex mt-3">
            <a href="${arr[i].strSource}" class=" bg-info p-3 text-white text-decoration-none">source</a>
            <a href="${arr[i].strYoutube}" class=" bg-danger p-3 text-white text-decoration-none">youtube</a>
         </div>
      </div>
         
         `
    }
    rowdate.classList.replace('d-flex' , 'd-none')
    mealData.innerHTML = cartoona1
}
// end mealdata

// start categoris

async function getcat(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    response = await response.json()
    list1 = response.categories
    
    
    displayCat(list1)
}


function displayCat(arr1){
    for(let i =0 ; i < arr1.length; i++){
        cartoona2+= `
    <div class=" col-3">
    <img onclick="catBeaf('${arr1[i].strCategory}')" src="${arr1[i].strCategoryThumb}" alt="">
    <h3 class= "text-white " id="filter">${arr1[i].strCategory}</h3>
    </div>
        `
    }
    rowdate.classList.replace('d-flex' , 'd-none')
    mealData.classList.replace('d-flex' , 'd-none')
    header.style.position= 'absolute'
    categorisId.innerHTML = cartoona2
    
}
cat.addEventListener('click',getcat)
// // end categoris

// start filter categoris
async function catBeaf(arr1){
    let response3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${arr1}`)
    response3 = await response3.json()
    list2 = response3.meals
   displayCatMeal(list2)
}

function displayCatMeal(arr3){
  for(let i =0; i < arr3.length; i++){
    cartoona3+= `
    <div class="  col-lg-2 col-md-6 col-sm-12">
    <img class=" w-100" src="${arr3[i].strMealThumb}" alt="">
 </div>

    `
  }
  categorisId.classList.replace('d-flex','d-none')
  catBeaf1.innerHTML = cartoona3
}

// end filter categoris

// start get area
async function getArea(){
    let response4 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    response4 = await response4.json()
    list3 = response4.meals 
     displayArea(list3)
     
}

function displayArea(arr4){
  for(let i=0; i< arr4.length; i++){
     cartoona4+= `
     
     <div onclick="getAreaMeal('${arr4[i].strArea}')" class=" col-lg-3 col-md-6 col-12">
     <i class="fa-solid fa-house-laptop fs-1"></i>
     <h5>${arr4[i].strArea}</h5>
    </div>
     
     `
  }
  rowdate.classList.replace('d-flex' , 'd-none')
  mealData.classList.replace('d-flex','d-none')
  getAreaCartoona.innerHTML = cartoona4
}
// end get area

// start getAreaMeal
async function getAreaMeal(areaMeal){
    let response5 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaMeal}`)
    response5 = await response5.json()
    list4 = response5.meals
    displayAreaMeal(list4)
}
function displayAreaMeal(arr5){
    for(let i = 0; i < arr5.length; i++){
   cartoona5+= `
   <div class=" col-lg-3 col-sm6 col-12">
   <img class=" w-100" src="${arr5[i].strMealThumb}" alt="">
   <h3 class=" text-white" >${arr5[i].strMeal}</h3>
 </div>
   `
    }
 getAreaCartoona.classList.replace('d-flex','d-none')
 rowdate.classList.replace('d-flex','d-none')
 mealData.classList.replace('d-flex','d-none')
 categorisId.classList.replace('d-flex','d-none')
 catBeaf1.classList.replace('d-flex','d-none')
 areaMeal.innerHTML = cartoona5

}
// end  getAreaMeal

// start getIngredients
async function getIngredients(){
    let response6 = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response6 = await response6.json()
    list5 = response6.meals
    displayIngredient(list5)

}

function displayIngredient(arr5){
   for(let i =0 ; i< 20; i++){
       cartoona6+= `
       <div class=" col-lg-3 col-sm-6 col-12 overflow-hidden">
              <i onclick="getIngredientsMeal()" class="fa-solid fa-drumstick-bite "></i>
               <h3>${arr5[i].strIngredient}</h3>
               <p class=" w-100">${arr5[i].strDescription}</p>
        </div>

       `
   }
   getAreaCartoona.classList.replace('d-flex','d-none')
 rowdate.classList.replace('d-flex','d-none')
 mealData.classList.replace('d-flex','d-none')
 categorisId.classList.replace('d-flex','d-none')
 catBeaf1.classList.replace('d-flex','d-none')
   displayIngredientId.innerHTML = cartoona6
}

// end getIngredients

// start getIngredientsMeal
async function getIngredientsMeal(){
    let response7 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    response7 = await response7.json()
    list6 = response7.meals
    displayIngredientsMeal(list6)
}
function displayIngredientsMeal(arr6){
    for(let i = 0; i < arr6.length; i++){
       cartoona7+= `
       <div class=" col-lg-3 col-md-6 col-12">
       <img class=" w-100" src="${arr6[i].strMealThumb}" alt="">
       <h3>${arr6[i].strMeals}</h3>
     </div>
       
       `
    }
    getAreaCartoona.classList.replace('d-flex','d-none')
    rowdate.classList.replace('d-flex','d-none')
    mealData.classList.replace('d-flex','d-none')
    categorisId.classList.replace('d-flex','d-none')
    catBeaf1.classList.replace('d-flex','d-none')
displayIngredientId.innerHTML = cartoona7
}

// end getIngredientsMeal
