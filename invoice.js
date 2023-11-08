

// variable for services
const services = [
  {
    id: 1,
    Mbps: "12Mbps",
    Price: 25000,
  },
  {
    id: 2,
    Mbps: "16Mbps",
    Price: 29000,
  },
  {
    id: 3,
    Mbps: "20Mbps",
    Price: 35000,
  },
  {
    id: 4,
    Mbps: "22Mbps",
    Price: 38000,
  },
];

// selector
const invoiceForm = document.querySelector("#invoiceForm");
const selectServices = document.querySelector("#selectServices");
const quantaty = document.querySelector("#quantaty");
const tBody = document.querySelector("#tBody");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const actualTotal = document.querySelector("#actualTotal");

// table ဆောက်ဖို့အတွက် fuction
const creatTr = (service, quantany) =>
{
    const tr = document.createElement("tr");
    const total = quantany * service.Price;
    tr.innerHTML = ` <td>${service.Mbps}</td>
                    <td class=" text-end">${quantaty.valueAsNumber}</td>
                    <td class=" text-end">${service.Price}</td>
                    <td class=" text-end service-total">${total}</td>`;
    return tr;
};

// Tax ရှာရန်
const findTax = (amount, percentage = 5) =>
{
    return amount * (percentage / 100)
};

// Total ရှာရန်
const findToal = () =>
{
    // const serviceTotal = document.querySelectorAll(".service-total")
    // let subTotal = 0;
    // serviceTotal.forEach((st) => (subTotal += parseFloat(st.innerText)));
    console.log(
      [...document.querySelectorAll(".service-total")].reduce(
        (pv, cv) => pv + parseFloat(cv.innerText),
        0
      )
    );
    // console.log(subTotal)
}

 
// services တွေကို loop ပတ်ပြီး option ဆောက်
services.forEach(service => selectServices.append(new Option(service.Mbps, service.id)));

// form ထဲက data တွေယူ
invoiceForm.addEventListener("submit", event =>
{
    event.preventDefault();
    // console.log(selectServices.value,
    //     // selectServices.options[selectServices.selectedIndex].innerText,
    //     quantaty.valueAsNumber,
    //     services.find(service => service.id == selectServices.value)
    // )

    // table ဆောက်
    const selectedService = services.find(service => service.id == selectServices.value )
    tBody.append(creatTr(selectedService,quantaty.valueAsNumber))
    // console.log(selectedService)

    findToal();

    // form ဖစ်မှ သုံးလို့ရ form ထဲက value တွေကိုရှင်း
    invoiceForm.reset();
});


