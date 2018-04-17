
const RainyMolesDatabase = {};
RainyMolesDatabase.rapsheet = [];

RainyMolesDatabase.rapsheet.push(
{
        id: "alleged-crimes",
        heading: "Alleged Crimes and History",
        image: "cartelHeads.jpg",
        imageId: "cartelImage",
        content: 
        ["First arrest came at the age of nineteen in Texas. Charged with criminally negligent homicide for running over a middle school counselor with his truck.",
        "Arrested for drunken driving and public drunkenness.",
        "Soon after indicted on charges of distributing marijuana and fled to Mexico to avoid capture in high school.",
        "Became leader of Los Negros which orchestrated kidnappings and recruited operatives, including corrupt police officers, military personnel and federal agents",
        "Supplied tractor trailer trucks full of cocaine from Mexico to the Eastern United States on behalf of the Sinaloa and Beltran-Leyva cartels.",
        "Established the Arturo Beltran Leyva (ABL) drug trafficking organization. Reresponsible for the procurement of arms and ammunitions from the United States. Responsible for the trafficking of illicit drugs, including cocaine, marijuana, heroin, and methamphetamine. Reportedly responsible for kidnapping, torture, murder, and various other acts of violence against numerous men, women, and children in Mexico. The organization is connected with the assassinations of numerous Mexican law enforcement officials.",
        "He also led the Fuerzas Armadas de Arturo, a group of assassins responsible for a majority of the killings committed by the drug trafficking organization."]
    },
{
        id: "convictions",
        heading: "Convictions and Indictments",
        content: 
        ["Indicted in the Northern District of Georgia on June 11, 2010, with conspiring to import and distribute cocaine.",
        "Indicted for conspiring to launder money by transporting drug money from the United States into Mexico.",
        "Indicted in the Eastern District of Louisiana on narcotics-related charge."]
    },

{
        id: "prisons",
        heading: "Time Served",
        content: 
        ["Arrested in 2010 in Mexico where he served in federal prison.",
        "Extradited to Atlanta in 2015 where he currently is serving a life sentence."]
    },

{
        id: "victims",
        heading: "Known Victims",
        image: "salvador.jpg",
        imageId: "salvador",
        content: 
        ["The morning of January 25, 2010, the football player Salvador Cabañas was wounded by a gunshot to the head. Through the recording of a CCTV camera José Jorge Balderas Garza, aka. 'JJ', was identified as his attacker. According to his own statements Valdez-Villarreal himself was the person who gave 'JJ' shelter to protect him from the police, by placing him in one of his safe houses, this was because of the friendship they have."]
    }
);



const fragment = document.createDocumentFragment();

const buildRapSheet = function(){
    for(let i=0;i<RainyMolesDatabase.rapsheet.length;i++){
        const section = document.createElement("section");
        section.id = RainyMolesDatabase.rapsheet[i].id;
        const hComponent = document.createElement("h1");
        hComponent.classList = "rap-h1";
        hComponent.textContent = RainyMolesDatabase.rapsheet[i].heading;
        const list = document.createElement("ul");
            for(let j=0; j<RainyMolesDatabase.rapsheet[i].content.length;j++){
                const listItem = document.createElement("li");
                listItem.textContent = RainyMolesDatabase.rapsheet[i].content[j];
                list.appendChild(listItem);
            }
        section.appendChild(hComponent);
        section.appendChild(list);
        fragment.appendChild(section);
        if(RainyMolesDatabase.rapsheet[i].id == "alleged-crimes" || RainyMolesDatabase.rapsheet[i].id == "victims"){
            const image = document.createElement("img");
            image.id =RainyMolesDatabase.rapsheet[i].imageId;
            image.src = RainyMolesDatabase.rapsheet[i].image;
            fragment.appendChild(image);
        }
    }
}
// console.log(RainyMolesDatabase.rapsheet);

buildRapSheet();
document.querySelector("#rap-sheet").appendChild(fragment);

