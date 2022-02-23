const btn = document.querySelector('#search-btn')
let searchItem = document.getElementById('search-box')

btn.addEventListener('click',function(){

    let data  = searchItem.value;
    let response =  fetchData(data);


})

const fetchData = async (data) => {
    alert(data)
}