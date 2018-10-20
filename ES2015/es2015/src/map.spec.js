import { assert, expect, should } from 'chai';
import { TextIndexer } from './map';

describe("Map Tests", () => {
    it("TextIndexer class test", (done) => {
        let indexer = new TextIndexer();
        indexer.indexText(words);
        let est = indexer.getWeight('est');
        let trump = indexer.getWeight('trump');
        let termine = indexer.getWeight('terminé');

        assert(est === 7, `The word 'est' occurs 7 times. Not ${est}`);
        assert(trump === 1, `The word 'trump' occurs 1 times. Not ${trump}`);
        assert(termine === 3, `The word 'terminé' occurs 3 times. Not ${termine}`);
        done();
    }) 
});

let words = `
A Doubs, riche commune d'un peu plus de 2 000 habitants proche de Pontarlier (Doubs) et de la frontière suisse, un bâtiment tout neuf, au bord de la route principale, vient d'être terminé. Un énorme projet privé de près de 2 M€ initié par des pharmaciens de la région. Cette grande maison médicale de 320 m 2 sur deux niveaux est destinée à abriter cinq cabinets médicaux pour des médecins. Mais alors que tout est terminé, aucun généraliste n'a seulement posé sa candidature pour s'installer dans ces locaux parfaitement adaptés.
Face à ce constat, la demande a été réduite à deux médecins. Sans plus de succès. Ce cas extrême illustre la désertification médicale dans cette zone proche de la Suisse. On estime qu'un généraliste français qui passe la frontière pour travailler voit ses revenus doubler. « C'est très inquiétant, confirme le maire de Doubs, Régis Marceau. On voit les gens venir prendre leur rendez-vous à la mairie en attendant qu'un généraliste s'installe. » Si les médecins locaux passent la frontière suisse, les promoteurs du projet envisagent d'attirer des médecins roumains ou d'autres nationalités pour utiliser cette maison médicale.
`;

words += `
e Père Noël est une ordure. Un Santa Claus slovaque a terminé sa tournée au poste de police, ainsi que le Diable et l'Ange, ses soeurs pour l'état civil, pour avoir volé de l'argent et des bijoux à une nonagénaire.
L'homme en manteau rouge, accompagné de ses assistantes costumées et de son fils de trois ans, avait frappé à la porte de la vieille dame de 91 ans dans la ville de Skalica pour lui présenter ses voeux, a raconté une porte-parole de la police.
Des bijoux sous l'aile de l'Ange
L'hôtesse leur a donné cinq euros, puis le Père Noël lui a demandé une tasse de thé pour l'enfant. Quand elle avait le dos tourné, l'Ange a mis sous son aile des bijoux et 45 euros. Ils seraient partis tranquillement si un voisin n'avait pas passé la tête dans la porte et appelé la police.
Deux membres du groupe avaient déjà été condamnés dans le passé, mais le Diable avait un casier vierge.
`;

words += `
C'est ce qui s'appelle être populaire... Une invitation vidéo à la fête anniversaire des 15 ans d'une jeune Mexicaine postée sur les réseaux sociaux est devenue virale et plus d'un million de personnes ont indiqué vouloir y assister.

« Bonjour, comment ça va ? Nous vous invitons le 26 décembre aux 15 ans de notre fille, Rubi Ibarra Garcia, dans la localité de La Joya », indique dans une vidéo postée sur Facebook. Le père de la jeune fille, Crescencio Ibarra, coiffé d'un chapeau de cow-boy, au côté de son épouse et de la désormais fameuse Rubi, y énumère les noms des groupes de musiciens qui joueront ce soir-là. Il annonce aussi qu'une course de chevaux aura lieu permettant de décrocher un prix d'environ 500 dollars.
VIDEO. Les 15 ans de Rubi
L'adolescente angoisse
Mercredi, plus d'1,2 million de personnes indiquaient sur le réseau social vouloir assister à l'événement qui se tiendra dans un village de 200 habitants, près de San Luis Potosi (nord), tandis que plus de 300 000 se disaient intéressées. Notre intention était « d'inviter nos amis, les gens de la région à travers un média local mais c'est devenu incontrôlable », a regretté sur la chaîne TV Azteca, Anaelda Garcia, la mère de Rubi.
Le phénomène a aussi déclenché de nombreux commentaires et messages humoristiques d'internautes, tandis que des fausses publications parodiaient les réponses d'hommes politiques et artistes confirmant leur présence à l'« événement ».
 Suivre
 Lolz @fabianarcinie
Just got to rubis xv
02:41 - 5 Déc 2016
La jeune fille a vécu avec angoisse ce déferlement de messages, craignant que la fête soit menacée, selon ses parents. « Pendant deux jours, elle a été triste, c'est une enfant, elle est jeune, mais ça va mieux maintenant », a indiqué son père à TV Azteca.
30% de réduction sur des billets d'avion
La mère a raconté que le détournement qui l'avait le plus amusée suggérait que Donald Trump et le président mexicain Enrique Peña Nieto étaient tombés d'accord « pour que les immigrés clandestins (vivant aux Etats-Unis) puissent assister aux 15 ans de Rubi » et retourner ensuite sans encombre de l'autre côté de la frontière.
Surfant sur le phénomène, la compagnie aérienne mexicaine Interjet a même lancé une promotion sur Twitter pour assister à l'événement avec le slogan suivant: « Tu vas aux 15 ans de Rubi ? Nous t'offrons jusqu'à 30% de réduction sur ton vol vers San Luis Potosi ».
Voir l'image sur Twitter
Voir l'image sur Twitter
 Suivre
 Interjet ✔ @interjet
¡Asiste al evento del año y regresa con el premio a casa! 🐐 http://bit.ly/2gVKqmG 
22:27 - 5 Déc 2016
568 568 Retweets   761 761 j'aime
Partout en Amérique latine, l'anniversaire des 15 ans appelé « quinceañera » (quinzième année) donne lieu pour les jeunes filles à des fêtes souvent somptueuses dans lesquelles des familles même modestes dépensent des sommes considérables.
`;

words += `
Dans un message laconique, l'Audois qui s'était fait connaître pour ses interviews surréalistes à Bugarach en 2012, a annoncé sa candidature.
Le «messie» est à la rescousse ! Sylvain Durif, alias «Merlin l'enchanteur» ou le « Christ cosmique », s'est déclaré mardi «candidat aux élections présidentielles» (sic) de 2017 dans une vidéo largement relayée sur les réseaux sociaux. Il faut dire que l'huluberlu, révélé au grand public il y a quatre ans du côté de Bugarach (Aude), où il expliquait au premier micro venu comment il comptait échapper à l'apocalypse, est devenu une véritable star de la Toile .
Sa vidéo de candidature, courte et plus sobre qu'à l'accoutumée, a été postée mardi sur son compte Facebook et sa page Youtube. En l'absence de programme, il faut pour l'heure s'en remettre à une interview donnée l'hiver dernier à l'Indépendant de Narbonne, dans laquelle il se disait soucieux d'apporter «la paix sur terre et dans le cosmos». Impossible de savoir comment celui qui se prétend «dernier roi de France» et «dernier pape» compte y arriver, ni comment il réunira les 500 signatures.
`