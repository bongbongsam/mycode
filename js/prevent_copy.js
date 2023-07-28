function showAlert() {
  if (document.querySelector("#alertContainer .alert")) {
    // 이미 경고 알림 창이 존재하는 경우에는 추가적으로 생성하지 않음
    return;
  }
 // 경고 메시지를 보여주기 위해 div 요소를 생성
 var alertDiv = document.createElement("div");
 alertDiv.className = "alert alert-danger alert-dismissible fade show";
 alertDiv.setAttribute("role", "alert");

 // "strong" 태그를 생성하여 강조 텍스트를 추가
 var strongTag = document.createElement("strong");
 strongTag.textContent = "!무단복제금지!";
 alertDiv.appendChild(strongTag);

 // 경고 내용을 추가
 var message = document.createTextNode("  비정상적인 활동이 감지되었습니다. ");
 alertDiv.appendChild(message);
 
 // "button" 요소를 생성하여 경고 메시지 닫기 버튼을 추가
 var closeButton = document.createElement("button");
 closeButton.type = "button";
 closeButton.className = "btn-close";
 closeButton.setAttribute("data-bs-dismiss", "alert");
 closeButton.setAttribute("aria-label", "Close");
 alertDiv.appendChild(closeButton);

 // 경고 메시지를 페이지에 삽입   
 var alertContainer = document.getElementById("alertContainer");
     alertContainer.appendChild(alertDiv);
     
 closeButton.addEventListener("click", function () {
   restoreIframeContent(); // Call the restoreIframeContent function when the exit button is clicked
     });
}
// make the frame invisible
function noframe() {
  var iframe = document.getElementById("myIframe");
  iframe.src = "";
}
// make the frame visible again
function restoreIframeContent() {
  var iframe = document.getElementById("myIframe");
  iframe.src = "swiper.html";
}


function blockEvent(event) {
   // keyup
  if (event.key == 'PrintScreen' || event.code == 'PrintScreen') {
    noframe();
    showAlert();
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  // print keydown Controlp
  if (event.ctrlKey && (event.key == 'p' || event.key == 'P' || event.keycode == '80' )) {
    noframe();
    showAlert();
    event.preventDefault();
    event.stopPropagation();
    return false;
  }


}

document.addEventListener("keyup", blockEvent);
document.addEventListener("keydown", blockEvent);
