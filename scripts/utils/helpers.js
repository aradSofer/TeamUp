export function convertImg(elementId) {
    if ($(`#${elementId}`).length > 0) {
      const file = document.getElementById(elementId).files[0];
      if (!file) {
        alert('No file selected');
        return;
      } else {
        return new Promise((res) => {
          const reader = new FileReader();
          reader.onloadend = function () {
            const base64 = reader.result;
            res(base64);
          };
          reader.readAsDataURL(file);
        });
      }
    } 
  }
  