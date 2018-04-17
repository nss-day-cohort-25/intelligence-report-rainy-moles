const test = document.querySelector("#test")

const buildSummary = () => {

    const container =  document.createElement('section')
                   container.classList.add("suspect-home")
                   test.appendChild(container)

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
                          description.classList.add("descr Aldrich")
                          description.textContent = rainyMolesDatabase.summary[0].Description
                          container.appendChild(description)
}


buildSummary()    
     
     
