export function convertImg(elementId) {
    if ($(`#${elementId}`).length > 0) {
      const file = document.getElementById(elementId).files[0];
      if (!file) {
        // alert('No file selected');
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


   export async function fetchData(api , requestOptions){
      let apiPath;
    switch(api){
      
      case "currency":
        apiPath = `https://api.currencyfreaks.com/v2.0/iptocurrency?from=gbp&amount=500&ip=182.186.18.9&apikey=2e639b05f01540cdb5bd7a5f7d488af7", ${requestOptions}`
        break;
      case "weatherForecast":
        apiPath = `http://api.weatherapi.com/v1/forecast.json?key=08e22e247bb14da1943191555251305&${requestOptions}&aqi=no&alerts=no`
        break;
      case "weatherCurrent":
        apiPath = `http://api.weatherapi.com/v1/current.json?key=08e22e247bb14da1943191555251305&${requestOptions}&aqi=no&alerts=no`
        break;
      let fetchResponse = await fetch(apiPath, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          
          }
      })
      let response = await fetchResponse.json();
      return response
  }

  }
  
  