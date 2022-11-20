async function selectFolder() {
  // 사용자 입력값 가져오기
  const firstStartNumber = document.querySelector("#first-start-number").value;
  const fisrtFinishNumber = document.querySelector("#first-finish-number").value;
  const firstFixedValue = document.querySelector("#first-fixed-value").value;

  const secondStartNumber = document.querySelector("#second-start-number").value;
  const secondFinishNumber = document.querySelector("#second-finish-number").value;
  const secondFixedValue = document.querySelector("#second-fixed-value").value;

  const thirdStartNumber = document.querySelector("#third-start-number").value;
  const thirdFinishNumber = document.querySelector("#third-finish-number").value;
  const thirdFixedValue = document.querySelector("#third-fixed-value").value;

  // 선택 값 숫자로 치환
  const fsn = parseInt(firstStartNumber);
  const ffn = parseInt(fisrtFinishNumber);
  const ssn = parseInt(secondStartNumber);
  const sfn = parseInt(secondFinishNumber);
  const tsn = parseInt(thirdStartNumber);
  const tfn = parseInt(thirdFinishNumber);

  //숫자가 아니면 리턴
  if (
    isNaN(fsn) || isNaN(ffn) ||
    isNaN(ssn) || isNaN(sfn) ||
    isNaN(tsn) || isNaN(tfn)
  ){
    alert("숫자가 아닙니다.");
    return;
  }

  // 숫자 크기 확인
  if (fsn > ffn || ssn > sfn || tsn > tfn) {
    alert("숫자 범위를 제대로 설정해주세요");
    return;
  }

  //폴더들을 생성할 루트 지정
  const dirHandle = await window.showDirectoryPicker();
  
  try {
    for (let i = fsn; i <= ffn; i++) {
      // 첫 번째 루트 폴더 생성
      const firstCreate = await dirHandle.getDirectoryHandle(i + firstFixedValue, {create: true,});

      // 두 번째 루트 폴더 생성
      for (let j = ssn; j <= sfn; j++) {
        const secondCreate = await firstCreate.getDirectoryHandle(j + secondFixedValue, {create: true,});

        // 세 번째 루트 폴더 생성
        for (let k = tsn; k <= tfn; k++) {
          const thirdCreate = secondCreate.getDirectoryHandle(k + thirdFixedValue, {create: true,});
        }
      }
    }
    alert("파일이 정상적으로 생성되었습니다!");
  } catch (err) {
    alert("파일 생성 과정 중 오류가 발생했습니다.");
    console.error(err);
  }
}
