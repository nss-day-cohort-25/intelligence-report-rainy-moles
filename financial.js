const financialRef = document.querySelector("#financial")

const fragment = document.createDocumentFragment()

const financialData = rainyMolesDatabase.financialInterests;

console.log(financialData);

const financialDomBuilder = () => {

//create block element that will hold sections being printed
let row = document.createElement("div")
row.className = "financialRow"

financialRef.appendChild(row)
row = document.createElement("div")
row.className = "financialRow"

//create span within row div   
for (a in financialData.banksAccounts[i]) {
const bankAccount = document.createElement("p")
bankAccount.classList = "bankAccount"
bankAccount.textContent = `${financialData.bankAccounts[i]}`
financialRef.appendChild(bankAccount)
}


const baUl = document.createElement("span")
for (a in currentItem.bankAccounts[i]) {
    const baItems = document.createElement("li")
    baItems.classList = "bankItems"
    baItems.textContent = currentItem.bankAccounts[i][a]
    baItems.appendChild(baUl)
    financialRef.appendChild(baItems)
}




}

financialDomBuilder();