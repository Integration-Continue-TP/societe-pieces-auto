# Sujet

Une société de ventes de pièces détachées automobiles utilise un logiciel pour lister les coûts de production de chacun de ses 1300 articles (3-TIER interne exploité en client lourd, API avec données extractibles depuis le LAN) Elle a besoin d'afficher des prix différenciés pour chacun de ses clients en fonction des contrats cadres. Il y a 25 clients répartis en 5 contrats cadres pouvant évoluer chacun margeant de 5% à 25%, de nouveaux sont potentiellement à venir. Votre groupe devra développer le logiciel front/back/BDD (très simple et sans design) pour lister les produits et coûts de fabrication. Une API pour authentifier les clients et leur présenter les prix d'achat en fonction de leur contrat cadre. (pour les produits, vous pouvez créer une dizaine d'entrées en dur dans la BDD. Idem pour les 5 contrats cadre) Pour toutes les étapes de l'exercice : Conserver dans un référentiel standard tous les résultats des tests auto avec leur impact si non validés ou validé (docs, exports IHM tests auto et/ou screenshots clairs) Langage : Java

## IC0

Définir un PO et un Scrum Master par groupe (d'autres rôles Agile peuvent être pris par les apprenants si le groupe le souhaite), cadrage organisationnel de l'équipe, définition des User Story+Sprints avec fonctionnalités et affectation du backlog technique aux membres de l'équipe, conception simple du logiciel (modélisation MCD, choix pour la partie Front+API). Consolider le tout dans un document que vous intégrerez dans un répertoire Doc de votre repository partagé ==> validation avec Yoann

## IC1

Développer les tests automatisés pour vérifier la cohérence des prix du front par rapport aux valeurs en base de données Creation d'un API simple pour exposer les données en JSON

## IC2

Développer l'API et ses tests automatisés pour valider les données présentées à chaque client + refaire un IC1 pour s'assurer qu'il n'y a pas de regression Creation des 5 règles de marges pour les contrats cadres + affichage prix d'achat par groupe de clients (prix = prix de production + marge + TVA)

---

Consolider tous les résultats des tests (intermédiaires et finaux) dans un document contenant les screenshots des rapports, à minima pour chaque passage d'un Sprint à un autre. Chaque membre du groupe doit proposer au moins un plan d'action (alimentant le backlog) pour un bug trouvé par les tests (avec résultats des tests KO puis OK après correction).

# Liens

- Trello: Faire une demande en envoyant un mail à [aurelien.riche@epsi.fr](mailto:aurelien.riche@epsi.fr) avec votre adresse mail associée à votre compte Trello
- Google Drive: Faire une demande en envoyant un mail à [aurelien.riche@epsi.fr](mailto:aurelien.riche@epsi.fr) avec votre adresse mail associée à votre compte Google 
