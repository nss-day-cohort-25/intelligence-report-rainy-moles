const rainyMolesDatabase = {}

rainyMolesDatabase.summary = []
rainyMolesDatabase.newsFeed = []
rainyMolesDatabase.rapSheet = []
rainyMolesDatabase.financialInterests = []

rainyMolesDatabase.summary.push(
    {
        Status: "Very Dangerous",
        Name: "Edgar Valdez Villarreal",
        Image: "https://media.npr.org/assets/img/2010/09/09/barbie-f412f0a2b3f4b2e80abc94eafd36c843c3102048-s300-c85.jpg",
        CountryofOrigin: "United States",
        Location: "Mexico",
        KnownAlias: "La Barbie",
        Description: "Edgar Valdez Villarreal also known as La Barbie, is a Mexican American suspected drug lord and leader of the Beltrán Leyva Cartel, a criminal group based in Sinaloa. Edgar is currently on the run after breaking out of United States Federal Extradition holding facility in Mexico City."
    
    },
        
         
    
    
     {
      Image: "https://s.hdnux.com/photos/04/52/43/1222889/3/920x920.jpg",
      Name: "Gerardo Alvarez-Vazquez",
      Description: "A Mexican drug trafficker who worked for the Beltrán-Leyva Cartel and then for Édgar Valdez Villarreal's criminal organization known as Los Negros. In 2008, the United States offered a 2 million dollar reward for his capture."
     },
    
     {
      Image: "http://thehill.com/sites/default/files/styles/thumb_small_article/public/blogs/bushgeorgew_120714getty.jpg?itok=6Xq7fdkZ",
      Name: "George W. Bush",
      Description: "Former Republican President, his ties with Edgar stem from his private passion for good old fashioned grade A chronic, the way it was back when. As Edgar headed into harder drugs with higher profit margins, his political connections started to vanish."
     },
    
     {
      Image: "https://i1.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/1441750516_AP_090312065379-1024x801.jpg",
      Name: "Joaquín Guzmán",
      Description: "In the past few years, Guzman has risen to become one of the most notorious drug lords in Mexico. Head of the Sinoloa Cartel, named off of the Mexican Pacific coast the State of Sinoloa where the Cartel was originally formed."
      }            
    
)


rainyMolesDatabase.financialInterests = {
    bankAccounts: [{
            name: "Bank of America",
            link: "https://www.bankofamerica.com/"
        },
        {
            name: "Charles Schwab",
            link: "https://www.schwab.com/"
        },
        {
            name: "Fidelity",
            link: "https://www.fidelity.com/"
        }
    ]
}, 
{
    businesses: ["Drugs Drugs Drugs, Inc.", "I Heart Cocaine, LLC.", "Coke and Friends, LP."]
}, {
    laundering: ["Life Dry Cleaners", "Stitch and Co. Tailoring Company", "Drake Motel" ]
    }
{
    blackmail: [{
            img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chuck_Rosenberg.jpg",
            name: "Chuck Rosenberg",
            title: "DEA Director",
            description: "Blackmailed with information he was hiding from his wife."
        },
        {
            img: "http://www.wbcalaredo.org/wp-content/uploads/2015/08/pete_saenz.jpeg",
            name: "Pete Saenz",
            title: "Mayor of Laredo, TX",
            description: "Blackmailed with all of his lies to the governor."
        },
        {
            img: "https://gov.texas.gov/uploads/images/general/2015-GovernorAbbott-Portrait.jpg",
            name: "Greg Abbott",
            title: "Governor of Texas",
            description: "Blackmailed with his own drug use."
        }
    ]
}

rainyMolesDatabase.newsFeed.push(
    {
    Image: 'img/bodybag.jpg',
    Article: 'https://www.dailynews.com/2010/08/23/4-decapitated-bodies-hung-from-bridge-in-mexico/',
    Description: '4 decapitated bodies hung from bridge in Mexico',
    Rate: '8.9',
    Date: 'Auguest 28, 2017',
    Location: 'US & Mexico',
    Event: 'Decapitation',
    Victims: '4',
    Witnesses: '0',
    Law_Enforcement: 'Cuernavaca Police',
},
{
    Image: 'img/la-barbie.jpg',
    Article: 'https://www.nytimes.com/2010/09/09/us/09barbie.html',
    Description: 'U.S. Student Became Mexican Drug Kingpin',
    Rate: '9.5',
    Date: 'September 8, 2010',
    Location: 'Laredo, TX',
    Event: 'Capture of Valdez',
    Victims: '0',
    Witnesses: '100',
    Law_Enforcement: 'Mexican Police',
},
{
    Image: 'img/house.jpeg',
    Article: 'https://www.cnn.com/2012/01/15/world/mexico-drug-war-essay/index.html',
    Description: 'The Mexico drug war: Bodies for billions',
    Rate: '7.6',
    Date: 'January 20, 2012',
    Location: 'US & Mexico',
    Event: 'Drug War',
    Victims: '48,000',
    Witnesses: '0',
    Law_Enforcement: 'US & Mexico',
},
{
    Image: 'img/bagged_cocaine.jpg',
    Article: 'https://www.rollingstone.com/culture/news/an-american-drug-lord-in-acapulco-20110825',
    Description: 'An American Drug Lord in Acapulc',
    Rate: '9.2',
    Date: 'August 25, 2011',
    Location: 'Acapulco, Mexic',
    Event: 'Mexican Cartels takies Acapulco',
    Victims: '7',
    Witnesses: '30',
    Law_Enforcement: 'None',
},
{
    Image: 'img/crimescenetape.jpg',
    Article: 'https://en.wikipedia.org/wiki/Edgar_Valdez_Villarreal',
    Description: 'Edgar Valdez Villarreal Wiki Page',
    Rate: '8.3',
    Date: 'January 3, 2016',
    Location: 'LA',
    Event: 'Background',
    Victims: '23',
    Witnesses: '0',
    Law_Enforcement: 'None',
},
{
    Image: 'img/mug-shot.jpg',
    Article: 'http://articles.latimes.com/2005/jun/10/world/fg-chief10',
    Description: 'Mexican Police Chief Is Killed on His First Day',
    Rate: '7.2',
    Date: 'June 10, 2015',
    Location: 'Mexico City',
    Event: 'Mexican Police Chief Killed on First Day',
    Victims: '1',
    Witnesses: '0',
    Law_Enforcement: 'Mexican Police',
})




localStorage.setItem("rainyMolesDatabase", JSON.stringify(rainyMolesDatabase))