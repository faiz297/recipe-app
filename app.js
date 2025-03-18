const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipedetailscontent = document.querySelector('.recipe-container');
const recipecontainer = document.querySelector('.recipe-container');


const fetchRecipe = async (query) => {
    recipecontainer.innerHTML = "<h2>fetching recipes...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipecontainer.innerHTML = "";
    response.meals.forEach(meal =>{
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory}</span></p>

        `
        const button = document.createElement('button');
        button.textContent = "view recipe";
        recipeDiv.appendChild(button);
        recipecontainer.appendChild(recipeDiv);

        button.addEventListener('click',()=>{
            openRecipePopup(meal);
        })
       
        
    
    })
}

searchBtn.addEventListener('click',(e)=>{
    const searchInput = searchBox.value.trim();
    e.preventDefault();
    fetchRecipe(searchInput);
});
