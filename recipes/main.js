import recipes from "./recipes.mjs";

function random(num)
{
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list)
{
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `
    <img class="recipe-img" src="${recipe.image}" alt="image of food item">
    <div class="recipe-content">
        ${tagsTemplate(recipe.tags)}
        <h2 class="recipe-name">${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe-desc">${recipe.description}</p>
    </div>`;
}
            
function tagsTemplate(tags) {
    let html = '';

    for (let tag of tags) {
       html += `<h2 class="recipe-tag">${tag}</h2>\n`;
    }
    return html;
}
    
function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars
    >`;
    for (let i = 1; i <= 5; i++){

        if (i <= rating){
            html += '<span aria-hidden="true" class="icon-star">⭐</span>\n';
            }
            else {
                html += '<span aria-hidden="true" class="icon-star-empty">☆</span>\n'
            }
        };
    html += `</span>`;
    return html;
}


function renderRecipes(recipeList) {
    const recipeOutput = document.querySelector(".recipe-result");
    const recipeHTML = Array.isArray(recipeList)
        ? recipeList.map(recipeTemplate).join("")
        : recipeTemplate(recipeList);
    recipeOutput.innerHTML = recipeHTML;
}


function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes(recipe);
}

const searchButton = document.querySelector('#submitButton');
const searchInput = document.querySelector('#searchbar');


searchButton.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault(); // Prevent form submission
    const query = searchInput.value.toLowerCase(); // Get input and convert to lowercase
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}
init();