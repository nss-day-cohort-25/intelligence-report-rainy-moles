// const test = document.querySelector("#test")

const buildProfile = () => {

    const container =  document.createElement('section')
                   container.classList.add("suspect-home")
                  

    const dangerous = document.createElement("h1")
                   dangerous.classList.add("Danger")
                   dangerous.textContent = rainyMolesDatabase.summary.profile[0].Status
                   container.appendChild(dangerous)

     const name = document.createElement("h2")
                  name.classList.add("suspect-name")  
                  name.textContent = rainyMolesDatabase.summary.profile[0].Name
                  container.appendChild(name)      
                  
     const image = document.createElement("img")
                  image.classList.add("suspect-img")
                  image.src = rainyMolesDatabase.summary.profile[0].Image
                  container.appendChild(image)  

     const origin = document.createElement("h3")
                    origin.classList.add("country")
                    origin.innerHTML += "Country of Origin: <span class= 'Geo Danger'>" + rainyMolesDatabase.summary.profile[0].CountryofOrigin + '</span>'
                    container.appendChild(origin)

    const location = document.createElement("h3")
                     location.classList.add("country")
                     location.innerHTML += "Country Location: <span class= 'Geo Green'>" + rainyMolesDatabase.summary.profile[0].Location + '</span>'
                      container.appendChild(location)
                 
      const alias = document.createElement("h3")
                    alias.classList.add("country")
                    alias.textContent = "Know Alias: " + rainyMolesDatabase.summary.profile[0].KnownAlias
                    container.appendChild(alias)

      const description = document.createElement('p')
                          description.classList = "descr Aldrich"
                          description.textContent = rainyMolesDatabase.summary.profile[0].Description
                          container.appendChild(description)
                          document.querySelector("#test").appendChild(container)
}                          
buildProfile()

// ----------Known Associates Title Div-------------
const titleDiv = document.createElement("div")
titleDiv.classList = "associate-title associates"
const title = document.createElement("h2")
title.classList = "a-title Yrsa"
title.textContent = "Known Associates"
titleDiv.appendChild(title)
document.querySelector("#test").appendChild(titleDiv)

//----------------End---------------------


const buildAssociates = () => {

  const divHolder = document.createElement("div")
                  divHolder.classList = "associates"

  for (var i = 0; i < rainyMolesDatabase.summary.associates.length; i++) {

    const dropDownDiv = document.createElement("div")
                    dropDownDiv.classList = "dropdown"
                    divHolder.appendChild(dropDownDiv)

      const associateSpan = document.createElement("span")
      const associateImage = document.createElement("img")
          associateImage.classList = "img-size"
          associateImage.src = rainyMolesDatabase.summary.associates[i].Image
          associateSpan.appendChild(associateImage)
          dropDownDiv.appendChild(associateSpan)
         
      const contentDiv = document.createElement('div')
          contentDiv.classList = "dropdown-content"
          dropDownDiv.appendChild(contentDiv)   

      const contentHeader = document.createElement('h2')
             contentHeader.classList = "assoc-name Yrsa"
             contentHeader.textContent = rainyMolesDatabase.summary.associates[i].Name
             contentDiv.appendChild(contentHeader)
          
       const contentDescription = document.createElement('p')
              contentDescription.classList = "descr Aldrich"
              contentDescription.textContent = rainyMolesDatabase.summary.associates[i].Description
              contentDiv.appendChild(contentDescription)
          
             
  }
  document.querySelector("#test").appendChild(divHolder)
}
buildAssociates()