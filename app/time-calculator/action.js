const onloads = () => {
let hour = [];
let minutes = [];
let cFlag = false;
let resultHour = 0;
let resultMintues = 0;

const timeInput = document.querySelector("#time-input");
console.log(timeInput);
timeInput.addEventListener("keydown", (event) => {
  console.log(`누른 키코드 ${event.keyCode}`);
  if (event.keyCode >= 96 && event.keyCode <= 105) {
    const temp = event.keyCode - 96;
    if (cFlag == false) {
      hour.push(temp);
    } else {
      minutes.push(temp);
    }
  }
  if (event.keyCode == 110) {
    cFlag = true;
     
    let a = parseInt(hour.join(""));
    if(!a){
      a = 0;
    }
    resultHour += a;
  }

  if (event.keyCode == 107 || event.keyCode == 13) {
    cFlag = false;
    let a = parseInt(minutes.join(""));
    if(!a){
      a = 0;
    }
    resultMintues += a;
    if(resultMintues >=6){
      resultMintues -= 6;
      resultHour += 1;
    }
    const showTime = document.querySelector("#show-time");
    showTime.innerText = `총 합 : ${resultHour} 시간 ${resultMintues}0 분`;
    hour = [];
    minutes = [];
    timeInput.value = ``;

    const showWeek = document.querySelector("#show-weekAverage");
    const tempResult = (resultHour*60 + resultMintues*10) / 7;
    const weekHour = Math.floor(tempResult/60);
    const weekMinute = Math.round(tempResult%60);
    showWeek.innerHTML = `주 평균 : ${weekHour} 시간 ${weekMinute}분`;

    const showMonth = document.querySelector("#show-monthAverage");
    const tempResult1 = (resultHour*60 + resultMintues*10) /28;
    const monthHour = Math.floor(tempResult1/60);
    const monthMinute = Math.round(tempResult1%60);
    const tempResult2 = (resultHour*60 + resultMintues*10) /35;
    const monthHour1 = Math.floor(tempResult2/60);
    const monthMinute1 = Math.round(tempResult2%60);
    showMonth.innerHTML = `4주 평균 : ${monthHour} 시간 ${monthMinute}분
                          <br/>5주 평균 : ${monthHour1} 시간 ${monthMinute1}분`;
    
    
  }
});
}

window.onload = ()=>{
  onloads();
}