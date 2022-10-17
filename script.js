const resultContainer = document.querySelector(".container");

const getData = async () => {
  const dataUrl = "http://api.airvisual.com/v2/nearest_city?key=";
  const apiKey = "08b93a03-976e-457b-95b9-7ad3e79428cc";
  const response = await fetch(dataUrl + apiKey);
  const {
    data: {
      city,
      current: {
        pollution: { aqius },
        weather: { ic },
      },
    },
  } = await response.json();

  return { city, pollution: aqius, weather: ic };
};

//user input

const userSubmission = async (e) => {
  e.preventDefault();

  const name = e.target.elements["name"].value;

  console.log(name);
  const { city, pollution, weather } = await getData();
  console.log(city, pollution, weather);
  console.log("Hello " + name);

  createCard({ name, city, pollution, weather });
};

const createCard = ({ name, city, pollution, weather }) => {
  const header = document.querySelector(".result-container");
  header.innerHTML = "";
  const resultBox = document.createElement("div");
  resultBox.classList.add("result");
  header.appendChild(resultBox);
  // header.insertAdjacentElement("afterend", resultBox);
  resultBox.innerHTML = `<p>Hello ${name}! Here your results: <br> ${city} <br> ${pollution} <br> ${weather}`;
};

const main = async () => {
  const nameButton = document.querySelector("#name");
  const startButton = document.querySelector("#start");
  const form = document.querySelector("form");

  form.addEventListener("submit", userSubmission);
};

main();
