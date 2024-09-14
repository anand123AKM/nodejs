const data = {
  name: "Jason",
  age: 30,
  location: "New York",
};

const jasondata = JSON.stringify(data);
fs.writeFile("data1.json", jasondata, (err) => {
  console.log("File is created");
});
