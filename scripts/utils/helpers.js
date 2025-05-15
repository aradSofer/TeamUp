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
        apiPath = `https://api.exchangerate.host/convert?access_key=bc44dd6151d5eaf16ec9c97cf9df48ee&${requestOptions}`
        break;
      case "weatherForecast":
        apiPath = `http://api.weatherapi.com/v1/forecast.json?key=08e22e247bb14da1943191555251305&${requestOptions}&aqi=no&alerts=no`
        break;
      case "weatherCurrent":
        apiPath = `http://api.weatherapi.com/v1/current.json?key=08e22e247bb14da1943191555251305&${requestOptions}&aqi=no&alerts=no`
        break;
      case "ipInfo":
        apiPath = 'https://ipinfo.io/json/?token=d0d75763f34b08'
        break;
      default:
        throw new Error("Invalid API name")
      }

      try {
        const fetchResponse = await fetch(apiPath, {
          method: "GET",
        });
    
        const response = await fetchResponse.json();
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  
  