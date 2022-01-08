const url =
  "https://api.nasa.gov/planetary/apod?weEtlPIvbtWbuhQAeoH2N310ctI5Gct9ys7oGAs8";

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`);
    const data = await response.json();
    console.log("NASA APOD data", data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  document.getElementById("explanation").textContent = data.explanation;
};

fetchNASAData();
