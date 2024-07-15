// document.getElementById("count-el").innerText=5
let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0
function increament()
{
     count=count+1
     countEl.innerText=count
     console.log(count)
}