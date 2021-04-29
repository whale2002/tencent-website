const headNav = document.querySelector(".header .header-nav .nav-list");
const headcore = document.querySelector(".header .header-nav");
const header = document.getElementsByClassName('header')[0];
const logo = document.getElementsByClassName('logo')[0];
const as = document.querySelectorAll('.header .header-nav .nav-list li a');
const lis = document.querySelectorAll('.header .header-nav .nav-list > li');
const mores = document.querySelectorAll('.header .header-nav .nav-list li .more-list');
const langs = document.querySelectorAll('.header .header-nav .lang a,i');


//鼠标移到顶部导航栏发生的事件，和滚轮向上滚动发生的事件
let headerChange = function(){
  logo.classList.add('logo_hover');
  as.forEach(element => {
    element.classList.add('head-color');
  });
  langs.forEach(item => {
    item.classList.add('head-color');
  });
}

let headerBack = function(){
  header.style.height = "0";
  logo.classList.remove('logo_hover');
  as.forEach(element => {
    element.classList.remove('head-color');
  });
  langs.forEach(item => {
    item.classList.remove('head-color');
  });
}


headNav.onmouseover = function() {
  header.style.height = "442px";
  header.style.backgroundColor = '#fff';
  headerChange();
}
header.onmouseout = function() {
  headerBack();
}

for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  element.addEventListener('mouseover',function(){
    mores[index].style.display = 'block';
  })
  element.addEventListener('mouseout',function(){
    mores[index].style.display = 'none';
  })
}

//监听滚轮事件
var scrollFunc = function (e) {
  if (e.wheelDelta) {
    if (e.wheelDelta > 0 ) {     //当鼠标滚轮向上滚动时
      headcore.style.display = 'block';
      header.style.height = '72px';
      header.classList.add('up');
      headerChange();
      if (window.scrollY == 0) {
        headcore.style.display = 'block';
        header.classList.remove('up');
        headerBack();
      }
    }
    else if (e.wheelDelta < 0) {     //当鼠标滚轮向下滚动时
      headcore.style.display = 'none';
      header.classList.remove('up');
      header.style.height = '0';
    }
  } 
}

window.addEventListener("wheel", scrollFunc)

