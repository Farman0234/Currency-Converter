let Base_Url =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_mxnbpWE3NhmQkROg9lJ7cJaa5KGykSypsc16Gjhr";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode; // Showing currency code in uppercase
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click" , async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value ="1"
  }
  // console.log(formCurr , toCurr)
  const URL= `${Base_Url}/${formCurr.value.toLowerCase()}.json`
  let   response = await fetch(URL);
  console.log(response)
  let data = response.json
  // let rate = data [toCurr.value.toLowerCase()]
  // console.log(rate)
})