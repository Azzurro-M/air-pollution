const getData = async () => {
  const dataUrl = "http://api.airvisual.com/v2/states?country=China&key=";
  const apiKey = "08b93a03-976e-457b-95b9-7ad3e79428cc";
  const response = await fetch(dataUrl + apiKey);
  const data = await response.json();

  // If(response.status !== 200) {

  //  throw new Error("cannot get the data");

  return data;
};

getData();
getData().then((data) => console.log(data));
getData().catch((err) => console.log(err));
