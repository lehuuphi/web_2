let target = document.getElementsByTagName("p")[0];
//1
let arrayString = target.textContent.split(" ");
let result = arrayString.map((e) => {
  if (e.length > 8) {
    return `<span style="background-color:yellow "> ${e}</span>`;
  } else {
    return e;
  }
});
target.innerHTML = result.join(" ");
//2
let link = document.createElement("a");
link.href = "https:facebook.com";
link.target = "_blank";
link.textContent = "facebook";
target.parentNode.append(link);

var htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
const targetqdq = target.textContent.replace(htmlRegexG, "");
//3
const count = arrayString?.reduce((sum, e) => {
  if (e.trim()) {
    return sum + 1;
  } else {
    return sum;
  }
}, 0);
let countElement = document.createElement("div");
countElement.textContent = `Số từ ${count}`;
target.parentNode.append(countElement);

//4
let p = document.querySelector("p")
p.innerHTML = p.innerHTML.replaceAll("?" ," 😂")
p.innerHTML = p.innerHTML.replaceAll("!" ," 🙄")
