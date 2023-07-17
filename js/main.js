/* 방법1 */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


function test() {
    $("#test_obj").css("color", "#db0d36");
}


const numberOneToZero = (number) => (number > 1 ? 1 : number > 0 ? number : 0);

const sectionFirst = document.querySelector('#section_first');
const background = document.querySelector('#background');
const animatedTitle = document.querySelector('.animated_title');
const animatedDesc1 = document.querySelector('.animated_desc1');
const animatedDesc2 = document.querySelector('.animated_desc2');
const animatedDesc3 = document.querySelector('.animated_desc3');

const startTopOffset = 100;
const delayDesc = 150;
const maxScaleBackground = 0.58;
const maxDarkenBackground = 0.58;
const firstDarkenBackground = 0.3;

window.addEventListener('scroll', () => {
  // 스크롤 기준점
  const scroll = window.pageYOffset * 1;

  // 탑 오프셋
  const topTitle = animatedTitle.offsetTop;
  const topDesc1 = animatedDesc1.offsetTop;
  const topDesc2 = animatedDesc2.offsetTop;
  const topDesc3 = animatedDesc3.offsetTop;

  // 섹션 변수
  const heightSectionFirst = sectionFirst.offsetHeight;
  const pixelUnderFirstSection = heightSectionFirst - scroll;

  const isNeedFirstSectionOpacityOff = pixelUnderFirstSection < 0;
  const firstSectionOpacity =
    (200 + pixelUnderFirstSection) / 200 > 0
      ? (200 + pixelUnderFirstSection) / 200
      : 0;

  // 텍스트 불투명도 인자
  const argOpacityTitle = (topTitle + startTopOffset - scroll) / 120;
  const argOpacityDesc1 =
    -(topDesc1 + startTopOffset + delayDesc - scroll) / 120;
  const argOpacityDesc2 =
    -(topDesc2 + startTopOffset + delayDesc - scroll) / 120;
  const argOpacityDesc3 =
    -(topDesc3 + startTopOffset + delayDesc - scroll) / 120;

  // 배경 크기, 어둡기 인자
  const ratioBackground =
    1 - numberOneToZero(-((scroll - heightSectionFirst) / heightSectionFirst));
  const scaleUpSize = ratioBackground * maxScaleBackground;
  const darkenSize =
    firstDarkenBackground + ratioBackground * maxDarkenBackground;

  const backgroundScale = 1 + scaleUpSize;
  const backgroundDarken = 1 - darkenSize;

  sectionFirst.style =`
    opacity: ${isNeedFirstSectionOpacityOff ? firstSectionOpacity : 1};
  `;
  animatedTitle.style =`
    opacity: ${numberOneToZero(argOpacityTitle)};
  `;
  animatedDesc1.style =`
    opacity: ${numberOneToZero(argOpacityDesc1)};
    transform: translateY(${20 - numberOneToZero(argOpacityDesc1) * 20}px);
  `;
  animatedDesc2.style =`
    opacity: ${numberOneToZero(argOpacityDesc2)};
    transform: translateY(${20 - numberOneToZero(argOpacityDesc2) * 20}px);
  `;
  animatedDesc3.style =`
    opacity: ${numberOneToZero(argOpacityDesc3)};
    transform: translateY(${20 - numberOneToZero(argOpacityDesc3) * 20}px);
  `;
  background.style =`
    transform: scale(${backgroundScale});
    filter: brightness(${backgroundDarken});
  `;
});



function agreeCheck(frm){
  if (frm.checkButton.disabled==true)
  frm.checkButton.disabled=false
  else
  frm.checkButton.disabled=true
}

$(function(){
  $('.animate').scrolla({
      mobile: true,  //모바일버전시 활성화
      once: true //스크롤시 딱 한번만 하고 싶을 땐 true
  });
  });