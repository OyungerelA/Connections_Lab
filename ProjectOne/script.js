window.addEventListener('load', ()=>{
    // get the div that will contain the dish list
    let recipeList = document.getElementById('recipe-list');
    // calling the function to display the dishes depending on the ingredient entered by user
    showDishList();
    // when a dish is clicked within the dish list, show its recipe
    recipeList.addEventListener('click', showRecipe);
})

// function for displaying the dish list
function showDishList(){
    let recipeListContainer = document.getElementById('recipe-list');
    // the search bar/input box where the user inputs the ingredient
    let inputBox = document.getElementById('search-txt');
    // the container where the dish list will be displayed
    let resultPage = document.getElementById('container2');

    // when the user inputs an ingredient
    inputBox.addEventListener('change', (e)=>{
        // capturing the ingredient entered
        let input = e.target.value;
        // making the container holding the dish list visible
        resultPage.style.display = 'block';
        // resetting the value of the search bar to empty so that the user won't have to delete the previous value to search again
        inputBox.value = '';

        // fetching the data using the ingredient entered
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
        .then((response) => response.json())
        .then((data) => {
            // saving the data meal data
            recipeList = data.meals;
            // variable that will be used to hold the html code storing the name and image of each dish
            let html = '';
            // if the input the user entered is valid
            if (recipeList){
                // getting the number of dishes with the given ingredient
                numRecipe = recipeList.length;
                // iterating over all the dishes
                for (let i=0; i<numRecipe; i++){
                    // adding to the html variable a div for every dish that will hold each dish' name and image
                    // adding a data-id with the id of the dish so that the individual dish can be identified when the user clicks on the dish list
                    html += `
                    <div class="recipe-item item${i}" data-id=${recipeList[i].idMeal}>
                        <div class="recipe-img" data-id=${recipeList[i].idMeal}>
                            <img src="${recipeList[i].strMealThumb}" alt="" data-id=${recipeList[i].idMeal}>
                        </div>
                        <div class="recipe-name" data-id=${recipeList[i].idMeal}>
                            <h3 data-id=${recipeList[i].idMeal}>${recipeList[i].strMeal}</h3>
                        </div>
                    </div>
                    `;
                }
            }
            // if the recipeList/meal data on based on the ingredient is null, meaning that the input is invalid
            else{
                // show an error message 
                html += `
                <div class="errorMsg">
                    <p>No Recipe Found 🤔</p>
                </div>
                `;
            }
            // set the html variable holding all the divs to be the innerHTML of the dish list container
            recipeListContainer.innerHTML = html;
            // increase the font size of the error message
            recipeListContainer.style.fontSize = '1.5rem';
        })
    })
}

// function for displaying individual dish information
function showRecipe(e){
    // capture the container holding the individual dish information
    let infoBox = document.getElementById('recipe-item-info');
    // get the data-id of the dish that is clicked on by the user
    let dishID = e.target.parentElement.parentElement.dataset.id;
    // fetch the recipe information using the id of the dish
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishID}`)
    .then((response) => response.json())
    .then((data) => {
        // similar to the previous function, creating an html variable that will hold the html code that will show the information of the dish
        let html = '';
        html += `
        <div class="recipe-item-box">
            <button type="button" class="close-recipe-btn" id="close-recipe-btn">x</button> 
            <h2 class="recipe-item-name">${data.meals[0].strMeal}</h2>
            <img src="${data.meals[0].strMealThumb}" class="img" alt="">
            <div class="recipe-item-origin">
                <h4>Origin: ${data.meals[0].strArea}</h4>
            </div>
            <div class="recipe-item-instructions">
                <p>${data.meals[0].strInstructions}
                </p>
            </div>
            <div class="recipe-item-video">
                <a href='${data.meals[0].strYoutube}' target="_blank">Watch how it is made and learn</a>
            </div>
        </div>
        `;
        // set the innerHTML of the recipe information box to be the html variable
        infoBox.innerHTML = html;
        // make the recipe info box visible
        infoBox.style.display = 'block';

        // capture the close-button used for closing the recipe box
        let closeButton = document.getElementById('close-recipe-btn');
        // when the button is clicked, make the recipe info box back to hidden
        closeButton.addEventListener('click', ()=>{
            infoBox.style.display = 'none';
        })
    })
}
