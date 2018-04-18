const test = document.querySelector("#test")

const buildProfile = () => {

    const container =  document.createElement('section')
                   container.classList.add("suspect-home")
                  

    const dangerous = document.createElement("h1")
                   dangerous.classList.add("Danger")
                   dangerous.textContent = rainyMolesDatabase.summary[0].Status
                   container.appendChild(dangerous)

     const name = document.createElement("h2")
                  name.classList.add("suspect-name")  
                  name.textContent = rainyMolesDatabase.summary[0].Name
                  container.appendChild(name)      
                  
     const image = document.createElement("img")
                  image.classList.add("suspect-img")
                  image.src = rainyMolesDatabase.summary[0].Image
                  container.appendChild(image)  

     const origin = document.createElement("h3")
                    origin.classList.add("country")
                    origin.innerHTML += "Country of Origin: <span class= 'Geo Danger'>" + rainyMolesDatabase.summary[0].CountryofOrigin + '</span>'
                    container.appendChild(origin)

    const location = document.createElement("h3")
                     location.classList.add("country")
                     location.innerHTML += "Country Location: <span class= 'Geo Green'>" + rainyMolesDatabase.summary[0].Location + '</span>'
                     container.appendChild(location)
                 
      const alias = document.createElement("h3")
                    alias.classList.add("country")
                    alias.textContent = "Know Alias: " + rainyMolesDatabase.summary[0].KnownAlias
                    container.appendChild(alias)

      const description = document.createElement('p')
                          description.classList = "descr Aldrich"
                          description.textContent = rainyMolesDatabase.summary[0].Description
                          container.appendChild(description)

                          document.querySelector("#test").appendChild(container)

// ----------Known Associates Title Div-------------
const titleDiv = document.createElement("div")
titleDiv.classList = "associate-title associates"
const title = document.createElement("h2")
title.classList = "a-title Yrsa"
title.textContent = "Known Associates"
titleDiv.appendChild(title)
document.querySelector("#test").appendChild(titleDiv)

//----------------End---------------------
const divHolder = document.createElement("div")
                  divHolder.classList = "associates"
//--
const dropDownDiv = document.createElement("div")
                    dropDownDiv.classList = "dropdown"
                    divHolder.appendChild(dropDownDiv)

   const associateSpan = document.createElement("span")
   const associateImage = document.createElement("img")
   associateImage.classList = "img-size"
   associateImage.src = rainyMolesDatabase.summary[1].Image 
   associateSpan.appendChild(associateImage)
   dropDownDiv.appendChild(associateSpan)

   const contentDiv = document.createElement('div')
                      contentDiv.classList = "dropdown-content"
                      dropDownDiv.appendChild(contentDiv)
    
    const contentHeader = document.createElement('h2')
                          contentHeader.classList = "assoc-name Yrsa"
                          contentHeader.textContent = rainyMolesDatabase.summary[1].Name
                          contentDiv.appendChild(contentHeader)

    const contentDescription = document.createElement('p')
                              contentDescription.classList = "descr Aldrich"
                              contentDescription.textContent = rainyMolesDatabase.summary[1].Description
                              contentDiv.appendChild(contentDescription)
// --
                    const dropDownDiv1 = document.createElement("div")
                    dropDownDiv1.classList = "dropdown"
                    divHolder.appendChild(dropDownDiv1)

   const associateSpan1 = document.createElement("span")
   const associateImage1 = document.createElement("img")
   associateImage1.classList = "img-size"
   associateImage1.src = rainyMolesDatabase.summary[2].Image 
   associateSpan1.appendChild(associateImage1)
   dropDownDiv1.appendChild(associateSpan1)

   const contentDiv1 = document.createElement('div')
                      contentDiv1.classList = "dropdown-content"
                      dropDownDiv1.appendChild(contentDiv1)
    
    const contentHeader1 = document.createElement('h2')
                          contentHeader1.classList = "assoc-name Yrsa"
                          contentHeader1.textContent = rainyMolesDatabase.summary[2].Name
                          contentDiv1.appendChild(contentHeader1)

    const contentDescription1 = document.createElement('p')
                              contentDescription1.classList = "descr Aldrich"
                              contentDescription1.textContent = rainyMolesDatabase.summary[2].Description
                              contentDiv1.appendChild(contentDescription1)
// ---

const dropDownDiv2 = document.createElement("div")
                    dropDownDiv2.classList = "dropdown"
                    divHolder.appendChild(dropDownDiv2)

   const associateSpan2 = document.createElement("span")
   const associateImage2 = document.createElement("img")
   associateImage2.classList = "img-size"
   associateImage2.src = rainyMolesDatabase.summary[3].Image 
   associateSpan2.appendChild(associateImage2)
   dropDownDiv2.appendChild(associateSpan2)

   const contentDiv2 = document.createElement('div')
                      contentDiv2.classList = "dropdown-content"
                      dropDownDiv2.appendChild(contentDiv2)
    
    const contentHeader2 = document.createElement('h2')
                          contentHeader2.classList = "assoc-name Yrsa"
                          contentHeader2.textContent = rainyMolesDatabase.summary[3].Name
                          contentDiv2.appendChild(contentHeader2)

    const contentDescription2 = document.createElement('p')
                              contentDescription2.classList = "descr Aldrich"
                              contentDescription2.textContent = rainyMolesDatabase.summary[3].Description
                              contentDiv2.appendChild(contentDescription2)

  document.querySelector("#test").appendChild(divHolder)
}
buildProfile()
                          




                      



  
  





    
     
     




//  for (let associate in rainyMolesDatabase.summary[1]) {
//        console.log("hello", associate)
//     const associateDiv = document.createElement("div")
//         associateDiv.classList = "dropdown"
                       
//     const associateSpan = document.createElement("span")
//     const associateImage = document.createElement("img")
//       associateImage.src = associate.Image 
//          associateSpan.appendChild(associateImage)

//                             associateSpan.classList = "img-size"
//                             associateDiv.appendChild(associateSpan)

//     const dropDownDiv = document.createElement('div')
//                         dropDownDiv.classList = "dropdown-content"
//                         associateDiv.appendChild(dropDownDiv)
    
//     const associateName = document.createElement("h2")
//                         associateName.classList = "ssoc-name Yrsa"
//                         associateName.textContent = associate.Name
//                         dropDownDiv.appendChild(associateName)
//     const associateDescription = document.createElement("p")
//                                 associateDescription.classList = "ssoc-name Yrsa"
//                                 associateDescription.textContent = associate.Description
//                                 dropDownDiv.appendChild(associateDescription)
//                                 associateDiv.appendChild(dropDownDiv)
//         containerTwo.appendChild(associateDiv)

