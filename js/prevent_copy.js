var html =  '<script type="text/javascript">'+
'    function showWarning() {'+
'      alert("무단 복제시 민형사상 처벌을 받을 수 있습니다.");'+
'    }'+
''+
'    function blockEvent(event) {'+
'      const blockedKeys = {'+
'        // Ctrl + P (페이지 인쇄)'+
'        80: "Ctrl-P",'+
'        // PrtScn (스크린샷)'+
'        44: "PrtScn",'+
'      }'+
'      if ( event.key === \'PrtSc\' || event.keyCode === 44) {'+
'        showWarning();'+
'        '+
'        event.preventDefault();'+
'        event.stopPropagation();'+
'        return false;'+
'      }'+
'      // Ctrl + P, PrtScn 방지'+
'      if ((event.ctrlKey && event.keyCode === 80) ) {'+
'        showWarning();'+
'        event.preventDefault();'+
'        event.stopPropagation();'+
'        return false;'+
'      }'+
'      if (event.type === "keyup" ) {'+
'        showWarning();'+
'        event.preventDefault();'+
'        event.stopPropagation();'+
'        return false;'+
'      }'+
'      // 마우스 우클릭 방지'+
'      if (event.button === 2) {'+
'        showWarning();'+
'        event.preventDefault();'+
'        event.stopPropagation();'+
'        return false;'+
'      }'+
'    '+
'      // 마우스 드래그 방지'+
'      if (event.type === "mousedown" && event.button === 0) {'+
'      document.addEventListener(\'mousemove\', preventDrag);'+
'      }'+
'      else if (event.type === "mouseup") {'+
'      document.removeEventListener(\'mousemove\', preventDrag);'+
'      }'+
'    }'+
''+
'    // 마우스 드래그 방지 함수'+
'    function preventDrag(event) {'+
'  '+
'    event.preventDefault();'+
'    return false;'+
'}'+
'      window.minimize = function() {'+
'        if (window.state) {'+
'          // The window is already minimized'+
'          return;'+
'        }'+
'      window.state = 1;'+
'      // Save the current window location and dimensions'+
'      window.savedLocation = [window.screenX, window.screenY];'+
'      window.savedSize = [window.outerWidth, window.outerHeight];'+
'  '+
'      // Move the window to the upper left corner of the screen'+
'      window.moveTo(0, 0);'+
'      // Resize the window to be as small as possible'+
'      window.resizeTo(0, 0);'+
'      };'+
'  '+
'  '+
'      // screen capture event'+
'      document.addEventListener(\'keyup\', function(event) {'+
'        if (event.key === \'PrtSc\' || event.keyCode === 44) {'+
'        minimize();'+
'        }'+
'      });'+
''+
'      document.addEventListener("contextmenu", blockEvent);'+
'      window.addEventListener("keydown", blockEvent);'+
'      document.addEventListener("mousedown", blockEvent);'+
'      document.addEventListener("mouseup", blockEvent);'+
'      document.addEventListener("keyup",blockEvent );'+
''+
'  </script>';
