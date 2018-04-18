const financialRef = document.querySelector("#financial")

const fragment = document.createDocumentFragment()

const financialDomBuilder = () => {

const headingTitle = document.createElement("article")
headingTitle.classList.add("flex-span")
financialRef.appendChild(headingTitle)

const row = document.createElement("article")
row.classList.add("flex-span")
financialRef.appendChild(row)

const baContainer = document.createElement("span")
baContainer.classList.add("hl-ba")
row.appendChild(baContainer)

const ocContainer = document.createElement("span")
ocContainer.classList.add("hl-oc")
row.appendChild(ocContainer)

const laundContainer = document.createElement("span")
laundContainer.classList.add("hl-laund")
row.appendChild(laundContainer)

const headingTitle2 = document.createElement("article")
headingTitle2.classList.add("flex-span")
financialRef.appendChild(headingTitle2)

const row2 = document.createElement("article")
row2.classList.add("flex-span")
financialRef.appendChild(row2)


const h1baPolitican = document.createElement("h1")
    h1baPolitican.textContent = "Financial Interest"
    h1baPolitican.classList.add("hl-h1")
    headingTitle.appendChild(h1baPolitican)

    const h2blacklist = document.createElement("h3")
    h2blacklist.textContent = "Blackmailed List"
    h2blacklist.classList.add("hl-h2")
    headingTitle2.appendChild(h2blacklist)

    const h2ba = document.createElement("h4")
    h2ba.textContent = "Bank Accounts"
    h2ba.classList.add("hl-h4")
    baContainer.appendChild(h2ba)

    const h2oc = document.createElement("h4")
    h2oc.textContent = "Businesses"
    h2oc.classList.add("hl-h4")
    ocContainer.appendChild(h2oc)

    const h2laund = document.createElement("h4")
    h2laund.textContent = "Laundering Businesses"
    h2laund.classList.add("hl-h4")
    laundContainer.appendChild(h2laund)

for (let i = 0; i < rainyMolesDatabase.financialInterests.bankAccounts.length; i++) {
    const currentAccount = rainyMolesDatabase.financialInterests.bankAccounts[i]
    // const baContainer = document.createElement("span")
    const linkContainer = document.createElement("p")
    const accountLink = document.createElement("a")
    accountLink.classList.add("hl-link")
    accountLink.textContent = currentAccount.name
    accountLink.href = currentAccount.link
    linkContainer.appendChild(accountLink)
    baContainer.appendChild(linkContainer)
    //container.appendChild(baContainer)
}

for (let i = 0; i < rainyMolesDatabase.financialInterests.ownedCompanies.length; i++) {
    const currentAccount = rainyMolesDatabase.financialInterests.ownedCompanies[i]
    const accountCompanies = document.createElement("p")
    accountCompanies.classList.add("hl-p")
    accountCompanies.textContent = currentAccount.name
    ocContainer.appendChild(accountCompanies)
}

for (let i = 0; i < rainyMolesDatabase.financialInterests.launderingBussiness.length; i++) {
    const currentAccount = rainyMolesDatabase.financialInterests.launderingBussiness[i]
    const launderingContainer = document.createElement("hl-span")
    const accountLaundering = document.createElement("p")
    accountLaundering.classList.add("hl-p")
    accountLaundering.textContent = currentAccount.name
    launderingContainer.appendChild(accountLaundering)
    laundContainer.appendChild(launderingContainer)
}

for (let i = 0; i < rainyMolesDatabase.financialInterests.blackmailedPolitician.length; i++) {
    const currentAccount = rainyMolesDatabase.financialInterests.blackmailedPolitician[i]
    const blackmailedContainer = document.createElement("span")
    blackmailedContainer.classList.add("hl-span")
    const imgBlackmailed = document.createElement("img")
    imgBlackmailed.classList.add("hl-img")
    imgBlackmailed.src = currentAccount.img
    blackmailedContainer.appendChild(imgBlackmailed)

    const headingBlackmailed = document.createElement("h2")
    headingBlackmailed.classList.add("hl-h2")
    headingBlackmailed.textContent = currentAccount.name
    blackmailedContainer.appendChild(headingBlackmailed)
    row2.appendChild(blackmailedContainer)

    const titleBlackmailed = document.createElement("p")
    titleBlackmailed.classList.add("hl-p")
    titleBlackmailed.textContent = currentAccount.title
    blackmailedContainer.appendChild(titleBlackmailed)
    row2.appendChild(blackmailedContainer)

    const descriptionBlackmailed = document.createElement("p")
    descriptionBlackmailed.classList.add("hl-p")
    descriptionBlackmailed.textContent = currentAccount.description
    blackmailedContainer.appendChild(descriptionBlackmailed)
    row2.appendChild(blackmailedContainer)


}

}

financialDomBuilder()