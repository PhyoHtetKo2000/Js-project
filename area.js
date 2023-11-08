const stroe = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const records = document.getElementById("records");

calculate.onclick = () =>
{
    area = width.valueAsnumber * breadth.valueAsnumber;
    result.innerText = `w:${width.value} * h:${breadth.value} is ${area} sqft`;
    width.value= breadth.value = null;
};


clear.onclick = () => (result.innerText = null);

stroe.onclick = () =>
{
    records.innerHTML += `<li>${result.innerText}</li>`
    result.innerText = null
};
