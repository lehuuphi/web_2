const heading = "Thầy giáo Ba đẹp trai";
const avatar = "https://i.imgur.com/2rP9dFO.png";
const profile = "https://twitter.com/banx9x";

//1
document.title = heading;
//2
document.querySelector(".heading").innerHTML = heading;
//3
document.querySelector(".avatar").src = avatar;
//4
document.querySelector(".profile").href = profile;
//5
document.querySelector("ul li").textContent = "code application";
//6
document.querySelector("ul li:Last-child").textContent = "Sleep";
//7
document.querySelector(".clock").textContent;
let times = new Date();
var timess =
  " Bây giờ là " +
  times.getHours() +
  ":" +
  times.getMinutes() +
  ":" +
  times.getSeconds();
var date =
  "ngày " +
  times.getDate() +
  "-" +
  (times.getMonth() + 1) +
  "-" +
  times.getFullYear();
let today = timess + " " + date;
document.querySelector(".clock").textContent = today;
//8
let y = document.querySelector(".bio").textContent.toLocaleLowerCase();
let count = y.split("ba").length - 1;
console.log(count);
document.querySelector(".num-of-words").textContent = count;
// 9 10
let tableRef = document.querySelector(".list-students");
let newRow = tableRef.insertRow(-1);
let newCell = newRow.insertCell(0);
let newText = document.createTextNode("Thầy giáo Ba siêu cấp đẹp trai");
newCell.appendChild(newText);
