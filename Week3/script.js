window.addEventListener('load', ()=>{
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let apps = data.apps;

        for (let i=0; i<apps.length; i++){
            let listItem = document.createElement('li');

            listItem.innerHTML = apps[i].name + ' has ' + apps[i].user_num + ' users where ' + apps[i].user_by_age[0] + ' percent of 18-24 year olds, ' + apps[i].user_by_age[1] + ' percent of 25-29 year olds, ' + apps[i].user_by_age[2] + ' percent of 30-49 year olds, ' + apps[i].user_by_age[3] + ' percent of 50-64 year olds, ' + apps[i].user_by_age[4] + ' percent of 65 and above year olds use the app.';

            let list = document.getElementById('list');
            list.appendChild(listItem);

            console.log(listItem);
            
        }
    })
})