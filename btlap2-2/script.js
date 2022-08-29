// Cho mảng chứa danh sách các loại quả
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
// let newli = document.createElement("li");
// newli.innerText = fruitList[0];
// document.querySelector(".fruit-list").append(newli);

function creatli(e) {
  const linew = document.createElement("li");
  linew.textContent = e;
  return linew;
}
document
  .querySelector(".fruit-list")
  .append(creatli(fruitList[0]),
  creatli(fruitList[1])
  ,
  creatli(fruitList[2])
  ,
  creatli(fruitList[3])
  ,
  creatli(fruitList[4])
  ,
  creatli(fruitList[5])
  ,
  creatli(fruitList[6])
  );
  
