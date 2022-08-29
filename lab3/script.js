const form = document.querySelector("form")
const amount = document.querySelector(".amount")
const guest = document.querySelector(".guest")
const Quanlity = document.querySelector(".Quanlity")
const tip = document.querySelector(".tip")

form.onsubmit = function(e){
    e.preventDefault();
tip.textContent = (amount.value * Quanlity.value) / guest.value ;
}