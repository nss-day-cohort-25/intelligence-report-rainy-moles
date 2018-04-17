const rainyMolesDatabase = {}

rainyMolesDatabase.summary = []
rainyMolesDatabase.newsFeed = []
rainyMolesDatabase.rapSheet = []
rainyMolesDatabase.financialInterests = []

rainyMolesDatabase.summary.push(
{
    status: "Very Dangerous",
    Name: "Edgar Valdez Villarreal",
    Image: "https://media.npr.org/assets/img/2010/09/09/barbie-f412f0a2b3f4b2e80abc94eafd36c843c3102048-s300-c85.jpg",
    CountryofOrigin: "United States",
    Location: "Mexico",
    KnownAlias: "La Barbie"
},

{
    Associates: [{
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
                 }]              
}
)  

rainyMolesDatabase.financialInterests.push({
    bankAccounts: [
        {
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
    }],
    businesses: [{
        bus1: "Drugs Drugs Drugs, Inc.",
        bus2: "I Heart Cocaine, LLC.",
        bus3: "Coke and Friends, LP."
    }],
    laundering: [{
        laund1: "Life Dry Cleaners",
        laund2: "Stitch and Co. Tailoring Company",
        laund3: "Drake Motel"
    }],
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
})
