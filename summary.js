const test = document.querySelector("#test")

const buildSummary = () => {

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



                          
// -----------------------
const titleDiv = document.createElement("div")
              titleDiv.classList = "associate-title"
const title = document.createElement("h2")
              title.classList = "a-title Yrsa"
              titleDiv.appendChild(title)
document.querySelector("#test").appendChild(titleDiv)

//-------------------------------------


 const containerTwo = document.createElement('div')
                      containerTwo.classList = "associates"
                      



  }
  document.querySelector("#test").appendChild(containerTwo)
}




buildSummary()    
     
     




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

