let newli = document.querySelector(".list-unstyled")
const para = document.createElement("li");
para.textContent = "24/7 Phone support"
newli.append(para);

const row = document.querySelector(".row");
row.append(row.children[0]);

const proStorage = document.querySelector("#pro-plan .storage-amount")
const basicStorage = document.querySelector("#basic-plan .storage-amount")
basicStorage.textContent *= 1.5;
proStorage.textContent *=1.25;

const btnproblan = row.children[1].querySelector(".btn")
btnproblan.style.cssText=`
background: #0984e3;
color : #fff
`
btnproblan.textContent =" buy Now "