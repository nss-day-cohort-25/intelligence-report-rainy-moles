const newsFeedRef = document.querySelector("newsPage")


const newsDomBuilder = () => {

    // Creating block element
    let row = document.createElement('div');
        row.classList.add = 'newsRow';

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
    newsDiv.appendChild(jsnewsArticle);

    // description
    let jsArticleDescription = document.createElement('div');
    jsArticleDescription.classList.add('align');
    
}

