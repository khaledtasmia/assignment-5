const searchMeals = () => {
    const searchText = document.getElementById("input-field").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = foods => {
    const foodContainer = document.getElementById("food-container");
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'row my-3 p-3';
        foodDiv.innerHTML = `
              <div class="col-md-3">
                <img onclick="getIngredients('${food.idMeal}')" class="image-name" src="${food.strMealThumb}">
                <h3 class="heading">${food.strMeal}</p>
              </div>
    `;
        foodContainer.appendChild(foodDiv);
    })
}

const getIngredients = (mealItems) => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=${mealItems}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const ingredientsItem = data.meals;
            const ingredientsDetails = document.getElementById("ingredient-element");
            ingredientsItem.forEach(ingredientsInfo => {
                ingredientsDetails.innerHTML = `
                <div> 
                    <h4>Ingredients :</h4>
                    <ul>
                        <li>${ingredientsInfo.strIngredient1}</li>
                        <li>${ingredientsInfo.strIngredient2}</li>
                        <li>${ingredientsInfo.strIngredient3}</li>
                        <li>${ingredientsInfo.strIngredient4}</li>
                        <li>${ingredientsInfo.strIngredient5}</li>
                        <li>${ingredientsInfo.strIngredient6}</li>
                        
                </div>
               `;
            })
        })
}