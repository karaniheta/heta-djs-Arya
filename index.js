// document.getElementById("count-el").innerText=5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0
console.log("save-el")
function increament()
{
     count=count+1
     countEl.innerText=count
     console.log(count)
}
function save(){
      let countStr = count + "-"
      saveEl.innerText += countStr 
      count.textContent = 0
      count=0
}