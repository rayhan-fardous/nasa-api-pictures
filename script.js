// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultArray = [];

// Get 10 Images from Nasa API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultArray = await response.json();
    console.log(resultArray);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getNasaPictures();
