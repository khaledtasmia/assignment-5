const btn = document.getElementById("search-btn");
btn.addEventListener("click", function () {
    const input = document.getElementById("input-meal");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));
    document.getElementById("input-meal").value = '';

    const displayFoods = mealName => {
        const mealsDiv = document.getElementById("mealList");
        const ingredients = document.getElementById("ingredientsList");
        const allFoods = mealName.meals;
        if (allFoods) {
            allFoods.forEach(meals => {
                const mealDiv = document.createElement('div');
                const foodInfo = `
            <div onclick="ingredients('${meals.idMeal}')">
            <img src="${meals.strMealThumb}">
            <h3>${meals.strMeal}</h3>
            </div>
            `;

                mealDiv.innerHTML = foodInfo;
                mealsDiv.appendChild(mealDiv);
            });
        }
        else {
            const mealDiv = document.createElement('div');

            const foodInfo = `
        <div>
        <h4>We couldn't find your meal</h4>
        </div>
        `;
            mealDiv.innerHTML = foodInfo;
            mealsDiv.appendChild(mealDiv);
        }
    }
})

function ingredients(itemName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemName}`)
        .then(response => response.json())
        .then(data => {
            const ingredientsItem = data.meals;
            const ingredients = document.getElementById('ingredientsList');
            ingredientsItem.forEach(ingredientsInfo => {
                ingredients.innerHTML = `
            <div>
                <img class="ingredients_img"  src="${ingredientsInfo.strMealThumb}">
                <div>
                    <h2>${ingredientsInfo.strMeal}</h2>  
                    <h6><b>Ingredients :</b></h6>
                    <ul>
                        <li><span>${ingredientsInfo.strMeasure1}</span> <span>${ingredientsInfo.strIngredient1}</span></li>
                        <li><span ${ingredientsInfo.strMeasure2}</span> <span>${ingredientsInfo.strIngredient2}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure3}</span> <span>${ingredientsInfo.strIngredient3}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure4}</span> <span>${ingredientsInfo.strIngredient4}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure5}</span> <span>${ingredientsInfo.strIngredient5}</span> </li>
                        <li><span>${ingredientsInfo.strMeasure6}</span> <span>${ingredientsInfo.strIngredient6}</span> </li>  
                    </ul>
                </div>
            </div>   
        `;
            })
        })
}
// for (let i = 0; i < mealCollection.length; i++) {
//     const meal = mealCollection[i];
//     const mealDiv = document.createElement('div');

//     // const image = document.createElement('img');
//     // const mealName = document.createElement('h2');
//     // mealName.innerText = meal.strMeal;
//     // mealDiv.appendChild(img);
//     // mealDiv.appendChild(h2);
//     // mealsDiv.appendChild(mealDiv);

//     const mealInfo = `
//            <h2>${meal.strMeal}</h2>
//            <p>Lentil</p>
//         `
//     mealDiv.innerHTML = mealInfo;

// }
// }
// // const displayFoods = mealsCollection => {
// //     mealsCollection.forEach(foodItem => {
// //         const mealListDiv = document.getElementById("mealList");
// //         const foodDiv = document.createElement('div');
// //         foodDiv.innerHTML = `
// //             <div>
// //             <img onclick="${'displayIngredients()'}" id="food-images" class="image" src="${foodItem.strMealThumb}"
// //             <h2 id="meal-name" class="heading2">${foodItem.strMeal}</h2>
// //             </div>
// //             `;
// //         mealListDiv.appendChild(foodDiv);
// //     })

// //     function displayIngredients() {
// //         `
// //             <div>
// //             <img id="food-images" class="image" src="${foodItem.strMealThumb}"
// //             <h2 id="meal-name" class="heading2">${foodItem.strMeal}</h2>
// //             </div>
// //             <div>
// //             <h4>Ingredients</h4>
// //             <ul>
// //             <li>${foodItem.strIngredient1}</li>
// //             <li>${foodItem.strIngredient2}</li>
// //             <li>${foodItem.strIngredient3}</li>
// //             <li>${foodItem.strIngredient4}</li>
// //             <li>${foodItem.strIngredient5}</li>
// //             <li>${foodItem.strIngredient6}</li>
// //             </ul>
// //             </div>
// //             `;
// //     }
// //     const mealArray = mealList.meals;
// //     console.log(mealArray);
// //     for (let i = 0; i < mealList.length; i++) {
// //         const meal = mealList[i];
// //         // const mealDiv = document.createElement('div');
// //         const image = document.createElement('img');
// //         const heading = document.createElement('h3');
// //         heading.innerText = meal.strMeal;
// //         mealListDiv.appendChild(img);
// //         mealListDiv.appendChild(h3);
// //         // mealsDiv.appendChild(mealListDiv);
// //     }
// // }