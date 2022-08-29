let h1 = document.createElement("h1");
h1.textContent = " Hello word";
h1.classList.add("heading");
h1.id = "heading";
let image = document.createElement("img");
image.src =
  "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0";
document.getElementById("app").append(h1, image);
document.getElementById("app").after(image); 

 document.createElement(); // tạo thẻ 
document.createTextNode(); // tạo text
document.createAttribute(); // tạo giá trị thuộc tính  */

// tạo xong thì cần phải chèn vào cấy trúc html
// thông qua
//befort / after / append / prepend/
/*  image.insertAdjacentText(); // chèn dạng chuỗi 
 image.insertAdjacentElement(); // chèn node
 image.insertAdjacentHTML(); // chèn chuỗi html f
 */

// chỉ có duy nhất 1 node ở trên trang
// nếu node đã xuất hiện trong dom thì các
// phương thức chỉnh sữa chỉ sẽ thay đôi vị trí của node chứ không chèn node mới

// image.innerHTML  khi mà có sẵn cấy trúc html và k thay đổi / chỉnh sửa quá nhiều

// tạo các hàm , hàm này sẽ tạo 1 thẻ img
/* function creaimage(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
}
document
  .getElementById("app")
  .after(
    creaimage(
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
      "gái xinh "
    ),
    creaimage(
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
      "gái xinh "
    )
  ); */

const data = [
  {
    slug: "1",
    cover:
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
    title: "njladsa đạiad djđ djwdow",
    episode: "Kakkou no Iinazuke",
    view: "453 lượt xem ",
  },
  {
    slug: "1",
    cover:
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
    title: "njladsa đạiad djđ djwdow",
    episode: "Renmei Kuugun Koukuu Mahou Ongakutai Luminous Witches Tập 7 - Lý do của Mặt Trời ",
    view: "343 lượt xem ",
  },
  {
    slug: "1",
    cover:
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
    title: "njladsa đạiad djđ djwdow",
    episode: "Bảo Bối Chiến Thần - Onmyou Taisenki Tập 51 - Taikyoku của hy vọng ",
    view: "903 lượt xem ",
  },
  {
    slug: "1",
    cover:
      "https://tse2.mm.bing.net/th?id=OIP.RrlnmU-tsUZMf0SIDwnrZQHaE7&pid=Api&P=0",
    title: "njladsa đạiad djđ djwdow",
    episode: "Bảo Bối Chiến Thần - Onmyou Taisenki Tập 51 - Taikyoku của hy vọng ",
    view: "1323 lượt xem ",
  },
];


// tạo giao diện tĩnh trước 
// lắp ghép data và render giao diễn theo date 
// 

// dễ dùng innerHtml
// temlate string `` em huyền 
//chèn dữ liệu biểu thức dùng ${}

function createpicode(item){
    return `
    <div class="movie">
    <div class="movie-thumnail">
      <img
        src="${item.cover}"
        alt=""
      />
    </div>
    <div class="movie-decreption">
      <div class="movie-title">
         ${item.title}
      </div>

      <div class="movie-meta-info">
          <div class="episode-title">
             ${item.episode}
          </div>
          <div class="epospde-view">
              ${item.view}
          </div>
      </div>
    </div>
  </div>
    `;
}

// chuyển đổi dữ liệu thành html 
document.querySelector(".list-movie").innerHTML = data.map(createpicode)
.join("") ;

//event

function handclick(){
    alert(" ha jide djie");
}

// có 3 cách 
// cánh 1 gán qua thuộc tính của thẻ  html 
// 2 . gán thông qua thuộc tính dom 
/* window.onload = function(){
    console.log("trang đã tải xong ")
} */
// 3 gán thông qua phương thức 
const seclecbox = document.getElementById("select");
seclecbox.addEventListener("change" , function(){
    console.log(seclecbox.value);
});



/// tên sự kiện nhóm sự kiện
// sảy ra khi nào
// cách để gán trình sử lí cho sự kiện mà mình quan tâm 
// trình sử lí có thể nhận thêm vào eventObjects bao gồm các thông tin cụ thể hơn chi tiết hơn 
// về sự kieheb ( khác nhau tùy thuộc vao laoji sự kiện )
//5 : 1 số thành phàn có sẵn sự kiện mặc định có thể tắt qua evenobjes