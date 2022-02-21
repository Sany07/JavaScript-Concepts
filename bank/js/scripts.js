
function getCurrentAmount(inputId){
    let inputValue = document.getElementById(inputId);
    return inputValue;

}

function getInputValueAndParseFlot(inputId){
    let inputValue = getCurrentAmount(inputId);
    floteAmount = parseFloat(inputValue.value);
    inputValue.value='';
    return floteAmount;
}

function addInputAmountToCard(cardId,amount){
    let card = getCurrentAmount(cardId);
    let oldAmount = parseFloat(card.innerText);
    let totalAmount = amount + oldAmount;
    card.innerText = totalAmount;

}
function addOrRemoveInputAmountToTotalCard(cardId,amount,isAdd){
    let card = getCurrentAmount(cardId);
    let oldAmount = parseFloat(card.innerText);
    if(isAdd){
        let totalAmount = oldAmount + amount ;
        card.innerText = totalAmount;
    }else{
        let totalAmount = oldAmount-amount ;
        card.innerText = totalAmount;

    }

}
document.getElementById('diposit-btn').addEventListener('click',function(){
    let dipositAmount = getInputValueAndParseFlot('diposit-input');
    if(dipositAmount>0){
        addInputAmountToCard('deposit',dipositAmount)
        addOrRemoveInputAmountToTotalCard('total-balance',dipositAmount,true)
    }else{
        alert('Check Amount')
    }

})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    let withdrawAmount = getInputValueAndParseFlot('withdraw-input');
    let currentTotalAmount = getCurrentAmount('total-balance').innerText;
    console.log(currentTotalAmount)
    if(withdrawAmount>0 && currentTotalAmount >= withdrawAmount){
        addInputAmountToCard('withdraw',withdrawAmount)
        addOrRemoveInputAmountToTotalCard('total-balance',withdrawAmount,false)
    }else{
        alert('Check Your Amount')
    }

})
