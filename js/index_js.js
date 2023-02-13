document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  /* 헤더 마우스 이벤트 */
  header.addEventListener("mouseover", function () {
    this.classList.add("bgChange");
  });
  header.addEventListener("mouseout", function () {
    this.classList.remove("bgChange");
  });

  /* contents01 숫자카운팅 */
  window.scroll = function () {
    let target = document.querySelector(".contents01");
    if ($(this).scrollTop() == target.offset().top) {
      con01Count();
    }
  };

  function con01Count() {
    const ballCount01 = document.querySelector(".num_box01 > .con01_count01");
    const ballCount02 = document.querySelector(".num_box01 .con01_count02");
    const driverCount01 = document.querySelector(".num_box02 > .con01_count01");
    const driverCount02 = document.querySelector(".num_box02 .con01_count02");
    const hybridsCount01 = document.querySelector(
      ".num_box03 > .con01_count01"
    );
    const hybridsCount02 = document.querySelector(".num_box03 .con01_count02");
    const utilityironCount01 = document.querySelector(
      ".num_box04 > .con01_count01"
    );
    const utilityironCount02 = document.querySelector(
      ".num_box04 .con01_count02"
    );
    const ironCount01 = document.querySelector(".num_box05 > .con01_count01");
    const ironCount02 = document.querySelector(".num_box05 .con01_count02");
    const wedgesCount01 = document.querySelector(".num_box06 > .con01_count01");
    const wedgesCount02 = document.querySelector(".num_box06 .con01_count02");

    let count1 = 0;
    let count1sub = 0;
    let count2 = 0;
    let count2sub = 0;
    let count3 = 0;
    let count3sub = 0;
    let count4 = 0;
    let count4sub = 0;
    let count5 = 0;
    let count5sub = 0;
    let count6 = 0;
    let count6sub = 0;

    let ballCounting01 = setInterval(function () {
      if (count1 == 78) {
        clearInterval(ballCounting01);
        return false;
      }
      count1 += 1;
      ballCount01.innerHTML = count1;
    }, 20);
    let ballCounting02 = setInterval(function () {
      if (count1sub == 10) {
        clearInterval(ballCounting02);
        return false;
      }
      count1sub += 1;
      ballCount02.innerHTML = count1sub;
    }, 100);

    let driverCounting01 = setInterval(function () {
      if (count2 == 31) {
        clearInterval(driverCounting01);
        return false;
      }
      count2 += 1;
      driverCount01.innerHTML = count2;
    }, 20);
    let driverCounting02 = setInterval(function () {
      if (count2sub == 22) {
        clearInterval(driverCounting02);
        return false;
      }
      count2sub += 1;
      driverCount02.innerHTML = count2sub;
    }, 100);

    let hybridsCounting01 = setInterval(function () {
      if (count3 == 35) {
        clearInterval(hybridsCounting01);
        return false;
      }
      count3 += 1;
      hybridsCount01.innerHTML = count3;
    }, 20);
    let hybridsCounting02 = setInterval(function () {
      if (count3sub == 20) {
        clearInterval(hybridsCounting02);
        return false;
      }
      count3sub += 1;
      hybridsCount02.innerHTML = count3sub;
    }, 100);

    let utilityironCounting01 = setInterval(function () {
      if (count4 == 49) {
        clearInterval(utilityironCounting01);
        return false;
      }
      count4 += 1;
      utilityironCount01.innerHTML = count4;
    }, 20);
    let utilityironCounting02 = setInterval(function () {
      if (count4sub == 17) {
        clearInterval(utilityironCounting02);
        return false;
      }
      count4sub += 1;
      utilityironCount02.innerHTML = count4sub;
    }, 100);

    let ironCounting01 = setInterval(function () {
      if (count5 == 29) {
        clearInterval(ironCounting01);
        return false;
      }
      count5 += 1;
      ironCount01.innerHTML = count5;
    }, 20);
    let ironCounting02 = setInterval(function () {
      if (count5sub == 15) {
        clearInterval(ironCounting02);
        return false;
      }
      count5sub += 1;
      ironCount02.innerHTML = count5sub;
    }, 100);

    let wedgesCounting01 = setInterval(function () {
      if (count6 == 55) {
        clearInterval(wedgesCounting01);
        return false;
      }
      count6 += 1;
      wedgesCount01.innerHTML = count6;
    }, 20);
    let wedgesCounting02 = setInterval(function () {
      if (count6sub == 11) {
        clearInterval(wedgesCounting02);
        return false;
      }
      count6sub += 1;
      wedgesCount02.innerHTML = count6sub;
    }, 100);
  }

  /* contents02 */
});
