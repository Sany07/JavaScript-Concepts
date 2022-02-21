
const btn = document.getElementById('btn-click')
const fInput = document.getElementById('input-id')
const show = document.querySelector('#name')
const showData = document.querySelector('#show')
const submitBtn = document.querySelector('#submit-click')
btn.addEventListener('click',function(){

    show.innerHTML = `<strong>I love JS</strong>`
    // document.querySelector('#name').className= 'mt-2'

})

btn.addEventListener('mouseover',function(){
    show.innerHTML = `I'm Mouce Over`
})

btn.addEventListener('mouseout',()=>{
    show.innerHTML = `I'm Mouce Out`

})


submitBtn.addEventListener('click',()=>{
    const data = fInput.value
    showData.append(data)
})