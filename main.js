const btnCall = document.querySelector('.m_nav_icon');
const mMenu = document.querySelector(".m_nav_item");

//btnCall에 click 이벤트 연결
btnCall.addEventListener('click', e => {
    mMenu.classList.toggle("on");
    btnCall.classList.toggle("on");
});
// 브라우저 리사이즈 시
window.addEventListener("resize", e => {
    let wid = window.innerWidth;
    // console.log(wid);
    if(wid >= 1200) mMenu.classList.remove("on");
});