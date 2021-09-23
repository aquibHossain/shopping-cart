function quantity(operator,input,amount,value)
{ 
    const inputText=document.getElementById(input)
    let inputValue=inputText.value
    if(operator==true)
    {    
        inputValue=parseInt(inputText.value) + 1   
    }
    else if(inputValue>0)
    {    
        inputValue=parseInt(inputText.value) - 1
    }
   inputText.value=inputValue  

//    price Update 
  const price= document.getElementById(amount)
  price.innerText=value * parseInt(inputValue)
 
}
function call(input) {
    const inputText=document.getElementById(input)
   let inputValue=inputText.value
   return inputValue
}

function calculate() {
    const totalPhone=parseInt(call("phone-input-text")) *1219
    const totalCase=parseInt(call("caseinput")*59) 
    const subTotal=totalCase+totalPhone
    const tax=subTotal*.05
    const grandTotal=subTotal+tax
    document.getElementById("subtotal").innerText= subTotal
    document.getElementById("tax").innerText=tax.toFixed(2)
    document.getElementById("grand-total").innerText= grandTotal
}
document.getElementById("phone-plus-button").addEventListener("click",function(){
    quantity(true,"phone-input-text","phone-price",1219);
    calculate()
})

document.getElementById("phone-minus-button").addEventListener("click",function(){
    quantity(false,"phone-input-text","phone-price",1219);
    calculate()
})
document.getElementById("case-plus-button").addEventListener("click",function(){
    quantity(true,"caseinput","caseprice",59);
    calculate()

})

document.getElementById("case-minus-button").addEventListener("click",function(){
    quantity(false,"caseinput","caseprice",59);
    calculate()
})