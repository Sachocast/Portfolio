const data = {
    "english":
    {
        "title":"Portfolio of Sacha Castillejos",
        "navProjects":"Projects",
        "presentationSentence":"Sacha Castillejos student at MIAGE Nice Sophia Antipolis",
        "H2Projects":"Projects",
        "monsterAttack":"Monster Attack",
        "monsterAttackDescr":"This project was done in teams of 2 and was carried out during my first semester of BUT informatique. The aim of the project was to create a game in which the character must reach the exit by avoiding the monsters on a grid. The game was developed in C, using text files to determine the grid configuration and the main character's movements.",
        "repository":"Github repository",
        "pokemonDescr":"This project was carried out in a team of 2 during my second semester at BUT Informatique. The aim of this project was to create a Pokémon battle simulation between bots in Java. There are two types of bots: a random bot and a cautious bot.",
        "albumsWebSite":"Fake Album Sales Site",
        "albumsWebSiteDescr":"Project I did for my second year of BUT, consisting of making a fake album sales site in MVC using a database.",
        "SWFigurines":"Star Wars Figurines",
        "SWFigurinesDescr":"This project was carried out as part of my fourth semester at BUT informatique. The aim of the project was to create an Android application to act as a store. The project had to be done in Android Studio, in Java and using various technologies.",
        "IWWDescr": "This project was carried out in a team of 4, with the aim of reproducing the It's a Wonderful World board game in Java as part of a development project for the L3 MIAGE course at the Université Nice Côte d'Azur.",
        "currentProjects": "Current Projects",
        "threeGamesSite": "Site in html/css/js hosting 3 games",
        "gamesOnWeb2024": "Babylon.js games for Games On Web 2024"
    },
    "french":
    {
        "title":"Portfolio de Sacha Castillejos",
        "navProjects":"Projets",
        "presentationSentence":"Sacha Castillejos étudiant à la MIAGE de Nice Sophia Antipolis",
        "H2Projects":"Projets",
        "monsterAttack":"Attaque De Monstres",
        "monsterAttackDescr":"Ce projet a été fait en équipe de 2 et a été réalisé durant mon premier semestre de BUT informatique. Ce projet avait pour but la création d'un jeu où le personnage doit parvenir à la sortie en évitant les monstres sur une grille. Le jeu est développé en C, il se sert de fichiers texte pour déterminer la configuration de la grille ainsi que les déplacements du personnage principal.",
        "repository": "Dépôt github",
        "pokemonDescr": "Ce projet a été fait en équipe de 2 et a été réalisé lors de mon deuxième semestre de BUT Informatique. L'objectif de ce projet était de créer une simulation de combat Pokémon entre bots en Java. Il y a deux types de bots: un bot aléatoire et un bot prudent.",
        "albumsWebSite":"Faux Site De Vente D'Albums",
        "albumsWebSiteDescr":"Projet fait dans le cadre de ma deuxième année de BUT consistant à faire un faux site de vente d'albums en MVC et utilisant une base de données.",
        "SWFigurines": "Figurines Star Wars",
        "SWFigurinesDescr": "Ce projet a été réalisé dans le cadre de mon quatrième semestre de BUT informatique. L'objectif de ce projet était de créer une application Android faisant office de boutique. Le projet devait être fait avec Android Studio, en java et en utilisant diverses technologies.",
        "IWWDescr": "Ce projet a été fait en équipe de 4. Il avait pour but la reproduction du jeu de plateau It's a Wonderful World en Java dans le cadre d'un projet de développement tutoré en L3 MIAGE à l'Université Nice Côte d'azur.",
        "currentProjects": "Projets en cours",
        "threeGamesSite": "Site en html/css/js hébergeant 3 jeux",
        "gamesOnWeb2024": "Jeux en babylon.js pour le Games On Web 2024"
    }
};

const langSec = document.querySelector("#languageSection");
const buttons = document.querySelectorAll(".languageOption");
const textTitle = document.querySelector("#title");
const textNavProjects = document.querySelector("#navProjects");
const textPresentation = document.querySelector("#presentationSentence");
const textH2Projects = document.querySelector("#H2Projects");
const textMonsterAttack = document.querySelector("#monsterAttack");
const textMonsterAttackDescr = document.querySelector("#monsterAttackDescr");
const textRepositories = document.querySelectorAll(".repository");
const textPokemonDescr = document.querySelector("#pokemonDescr");
const textAlbumsWebSite = document.querySelector("#albumsWebSite");
const textAlbumsWebSiteDescr = document.querySelector("#albumsWebSiteDescr");
const textSWFigurines = document.querySelector("#SWFigurines");
const textSWFigurinesDescr = document.querySelector("#SWFigurinesDescr");
const textIWWDescr = document.querySelector("#IWWDescr");
const textCurrentProjects = document.querySelector("#currentProjects");
const text3GamesSite = document.querySelector("#threeGamesSite");
const textGamesOnWeb2024 = document.querySelector("#gamesOnWeb2024");


buttons.forEach(button => {
    button.addEventListener('click', () =>{
        langSec.querySelector(".active").classList.remove("active");
        button.classList.add("active");

        const attr = button.getAttribute("language");

        textTitle.textContent = data[attr].title;
        textNavProjects.textContent = data[attr].navProjects;
        textPresentation.textContent = data[attr].presentationSentence;
        textH2Projects.textContent = data[attr].H2Projects;
        textMonsterAttack.textContent = data[attr].monsterAttack;
        textMonsterAttackDescr.textContent = data[attr].monsterAttackDescr;
        textRepositories.forEach(repository =>{
            repository.textContent = data[attr].repository;
        });
        textPokemonDescr.textContent = data[attr].pokemonDescr;
        textAlbumsWebSite.textContent = data[attr].albumsWebSite;
        textAlbumsWebSiteDescr.textContent = data[attr].albumsWebSiteDescr;
        textSWFigurines.textContent = data[attr].SWFigurines;
        textSWFigurinesDescr.textContent = data[attr].SWFigurinesDescr;
        textIWWDescr.textContent = data[attr].IWWDescr;
        textCurrentProjects.textContent = data[attr].currentProjects;
        text3GamesSite.textContent = data[attr].threeGamesSite;
        textGamesOnWeb2024.textContent = data[attr].gamesOnWeb2024;
    });
});