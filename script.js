const checkbox = document.querySelector("#check");
const portfolio = document.querySelector("#dropdown");
const plus = document.querySelector("#plus");
const drop = document.querySelector("#drop");
const contact = document.querySelector("#contact");
let deWidth = document.querySelector("body").offsetWidth;

checkbox.addEventListener("click", function () {
  document.body.classList.toggle("scroll-now");
  drop.classList.remove("show");
  contact.classList.remove("contact");
});

if (deWidth <= 480) {
  portfolio.addEventListener("click", function () {
    contact.classList.add("contact");
    drop.classList.add("show");
  });
  plus.setAttribute("class", "fa fa-plus");
}

if (deWidth > 480) {
  let footer =  document.querySelector('#footer');
  footer.setAttribute("class", "no-show");

  let notify = document.querySelector('#notification');
  notify.setAttribute('class', 'no-show');
  console.log(notify);

  let item = document.querySelector(".menu-items").children;
  let innerItem = document.querySelector("#drop").children;
  
  for (let i = 0; i < item.length; i++) {
    let item1 = item[i].children[0].children[0];
    item1.setAttribute("class", "");  
    let innerItem1 = innerItem[i].children[0].children[0];
    innerItem1.setAttribute("class", "");

  }
  }
