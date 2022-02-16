window.addEventListener('load', ()=>{
    let inputBox = document.getElementById('input-text');
    inputBox.addEventListener('change', (e)=>{
        let input = e.target.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        
        let recipe = data.meals;
        console.log(recipe.length);

        for (let i=0; i<recipe.length; i++){
            let mealName = document.createElement('p');
            let mealImg = document.createElement("img");

            mealName.innerHTML = recipe[i].strMeal;
            mealImg.src = recipe[i].strMealThumb;

            let container = document.getElementById('container-box');
            container.appendChild(mealName);
            container.appendChild(mealImg);
        }
    })
    })
})
