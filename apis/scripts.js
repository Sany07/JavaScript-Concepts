const singlePost =() =>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response =>  response.json())
    .then(data => displayData(data))
}
singlePost()

const displayData = (data)=>{
    const ul = document.getElementById('data')
    data.map((data)=>{    
        console.log('data', data.title);    
        const li = document.createElement('li');
        li.innerHTML = `${data.title}`
        ul.appendChild(li);
    })
}