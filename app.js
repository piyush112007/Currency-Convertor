console.log("Hello World!");

const populate = async (value, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_7Zuo6DGNBSyPCLuaVTcHPzDt41XNcoadoxGgWgEg&base_currency=" +
    currency;
  let response = await fetch(url);
  let rjson = await response.json();
  document.querySelector(".output").style.display = "block";
  for (key of Object.keys(rjson["data"])) {
    myStr += `<tr>
      <td>${key}</td>
      <td>${rjson["data"][key]["code"]}</td>
      <td>${rjson["data"][key]["value"] * value}</td>
      </tr>`;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};
btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  btn.innerHTML = "Recalculate";
  btn.style.width = "178px";
  const value = parseInt(
    document.querySelector("input[name ='quantity']").value
  );
  const currency = document.querySelector("select[name ='currency']").value;
  populate(value, currency);
});

const tableBody = document.querySelector("tbody");
