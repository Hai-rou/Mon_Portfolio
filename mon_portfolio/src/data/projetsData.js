
export const projectsData = [
    {
        id: 'argent-bank',
        title: 'Projet Argent Bank',
        image: "/assets/argentBankLogo.webp", 
        url: 'https://github.com/Hai-rou/Argent-Bank',
        className: 'Bank-btn',
        description: 'Application bancaire React avec authentification JWT',
        information: 'Création d\'une application bancaire sécurisée utilisant React pour le front-end et une API REST pour le back-end. Implémentation de l\'authentification JWT, gestion des états avec Redux, et création d\'une interface utilisateur responsive.',
        objectives: [
            'Possibilité pour l\'utilisateur de visiter la page d\'accueil.',
            'Implémenter une authentification sécurisée avec JWT.',
            'Possibilité pour l\'utilisateur de se connecter au système (et pouvoir gérer des erreurs si l\'username ou mdp sont incorrects).',
            'Possibilité pour l\'utilisateur de consulter son solde et ses transactions.',
            'Possibilité pour l\'utilisateur de se déconnecter du système.',
            'L\'utilisateur ne doit voir les informations relatives à son propre profil qu\'après s\'être connecté avec succès.',
        ],
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        status: 'Projet : Terminé',
        duration: '3 mois'
    },
    {
        id: '724-events',
        title: '724 Events',
        image: "/assets/724.webp",
        url: 'https://github.com/Hai-rou/Projet_9-Debuggez-une-application-React.js',
        className: 'events-btn',
        description: 'Débogage et optimisation d\'une application React d\'événements',
        information: 'Analyse et correction des bugs dans une application React existante. Optimisation des performances, amélioration de l\'accessibilité et refactorisation du code pour une meilleure maintenabilité.',
        objectives: [
            'Corriger les bugs signalés dans l\'application.',
            'Optimiser les performances de l\'application.',
        ],
        technologies: ['React', 'JavaScript', 'SASS', 'Jest'],
        status: 'Projet : Terminé',
        duration: '2 mois'
    },
    {
        id: 'sophie-bluel',
        title: 'Sophie Bluel',
        image: "/assets/sophie.webp",
        url: 'https://github.com/Hai-rou/Projet_6',
        className: 'sophie-btn',
        description: 'Site portfolio d\'architecte avec interface d\'administration',
        information: 'Développement d\'un site web pour un architecte avec une interface d\'administration permettant de gérer les projets et le contenu. Utilisation de HTML, CSS et JavaScript pour créer une expérience utilisateur engageante et responsive.',
        objectives: [
            'Créer une interface utilisateur responsive et attrayante.',
            'Création de la page de présentation des travaux de l\'architecte',
            'Création de la page de connexion de l\'administrateur du site (le client)',
            'Création de la modale permettant d\'uploader de nouveaux médias dans la galerie',
            'Création de la gestion des erreurs de saisie dans le formulaire de connexion',
            'Création du système d\'authentification et de gestion de session',
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'API REST'],
        status: 'Projet : Terminé',
        duration: '2 mois'
    },
    {
        id: 'nina-carducci',
        title: 'Nina Carducci',
        image: "/assets/nina.webp",
        url: 'https://github.com/Hai-rou/Projet_8-Nina_Carducci',
        className: 'nina-btn',
        description: 'Optimisation SEO et performance d\'un site de photographe',
        information: 'Optimisation du référencement naturel (SEO) et des performances d\'un site web existant. Amélioration du temps de chargement, de l\'accessibilité et de la visibilité sur les moteurs de recherche.',
        objectives: [
            'Améliorer le SEO du site web.',
            'Optimiser les performances et le temps de chargement.',
            'Améliorer l\'accessibilité du site.',
            'Réaliser un audit avec Lighthouse et corriger les problèmes identifiés.',
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'SEO', 'Lighthouse'],
        status: 'Projet : Terminé',
        duration: '1 mois'
    }
];