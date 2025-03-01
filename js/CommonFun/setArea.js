function setArea(ans, name) {
  if (!isNaN(ans)) {
    const ulList = document.getElementById("areaList");
    const list = document.createElement("li");
    list.classList.add("list");
    list.innerText = `The area of ${name} is ${ans} cm2`
    ulList.appendChild(list);
  }
}
