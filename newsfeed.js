const newsFeedRef = document.querySelector("#newsfeed");
const rainyMolesDB = JSON.parse(localStorage.getItem("rainyMolesDatabase"));


const newsDomBuilder = function() {

    // Creating block element
    let row = document.createElement('div');
    row.classList.add('newsRow');

    newsFeedRef.appendChild(row);
    row = document.createElement('article');

    rainyMolesDB.newsFeed.forEach(function (newsObj) {

        let newsDiv = document.createElement('div');
        newsDiv.classList.add('articlediv');
        
        // img
        let newsImg = document.createElement('img');
        newsImg.classList.add('jsimage');
        newsImg.setAttribute('src', newsObj.Image);
        newsDiv.appendChild(newsImg);
        
        // news article website
        let jsnewsArticle = document.createElement('a');
        jsnewsArticle.classList.add('newsarticle');
        jsnewsArticle.setAttribute('href', newsObj.Article);
        newsDiv.appendChild(jsnewsArticle);

        // description
        let jsArticleDescription = document.createElement('h4');
        jsArticleDescription.classList.add('align');
        jsArticleDescription.textContent = newsObj.Description;
        jsnewsArticle.appendChild(jsArticleDescription);

        // news article website
        let ulDiv = document.createElement('div');
        ulDiv.classList.add('article-container');
        newsDiv.appendChild(ulDiv);

        // UL 
        let ulNews = document.createElement('ul');
        ulNews.classList.add('ulnews');
        newsDiv.appendChild(ulNews);
        
        // Make array of field names to be created as list items
        let liDataFields = ['Rate', 'Date', 'Location', 'Event', 'Victims', 'Witnesses', 'Law_Enforcement']; 
        
        // Loop over the list of field names and create a list item for each
        liDataFields.forEach(function(fieldName) {
            //LI Rate
            let li = document.createElement('li');
            
            if (fieldName === 'Rate') {
                li.classList.add('green');
            }
            
            li.textContent = fieldName + ": " + newsObj[fieldName];
            ulNews.appendChild(li);
        });
        newsDiv.appendChild(ulNews);
        

        newsFeedRef.appendChild(newsDiv);

    });
}


newsDomBuilder();
