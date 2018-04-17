const newsFeedRef = document.querySelector("newsPage")


const newsDomBuilder = (function(newsObj) {

    // Creating block element
    let row = document.createElement('div');
        row.classList.add = 'newsRow';

        newsFeedRef.appendChild(row)
        row = document.createElement('article')

        rainyMolesDatabase.newsFeed.forEach();

    let newsDiv = document.createElement('div');
    newsDiv.classList.add('articlediv');

    // img
    let newsImg = document.createElement('img');
    newsImg.classList.add('jsimage');
    newsImg.src = newsObj.image;
    newsDiv.appendChild(newsImg);

    // news article website
    let jsnewsArticle = document.createElement('a');
    jsnewsArticle.setAttribute('newsarticle');
    jsnewsArticle.setAttribute('href');
    newsDiv.appendChild(newsObj.article);

    // description
    let jsArticleDescription = document.createElement('h4');
    jsArticleDescription.classList.add('align');
    jsArticleDescription.textContent = articlediv.description;
    newsDiv.appendChild(jsArticleDescription);

    // news article website
    let ulDiv = document.createElement('div');
    ulDiv.classList.add('article-container');
    newsDiv.appendChild(ulDiv);

    let ulNews = document.createElement('ul');

        let liRate = document.createElement('li');
    
}

console.log('hello world')
