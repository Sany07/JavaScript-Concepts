
window.onload = () => {
	fetchData('cake')
};

const btn = document.querySelector('#search-btn')
let searchItem = document.getElementById('search-box')

btn.addEventListener('click',function(){
    let data  = searchItem.value;
    if(data!=''){
        let response =  fetchData(data);
    }
})

searchItem.addEventListener("keyup", function(event) {
    let data  = searchItem.value;

    if (event.key === 'Enter') {
        fetchData(data);
    }
  });


const fetchData = async (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

    const res = await fetch(url);
    const data = await res.json();
    displayResult(data.meals)

}

const displayResult = (meals)=>{
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    meals.map(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card">
          <img src="${meal.strMealThumb}" class="img-fluid card-img-top img" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
      </div>`;
    searchResult.append(div);
        
    });

}