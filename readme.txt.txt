Étapes d’installation et de déploiement de l’application web

Prérequis :
1. Java 17 installé
2. Maven installé
3. Node.js et npm installés
4. IDE comme IntelliJ IDEA ou VSCode

1. Cloner le dépôt :
   git clone <URL_du_dépôt>

2. Backend - Spring Boot :
   a. Naviguer dans le répertoire du backend :
      cd chemin/vers/le/backend
   b. Configurer les propriétés de l’application dans src/main/resources/application.properties :
      spring.datasource.url=jdbc:h2:mem:testdb
      spring.datasource.driverClassName=org.h2.Driver
      spring.datasource.username=sa
      spring.datasource.password=password
      spring.h2.console.enabled=true
      spring.jpa.hibernate.ddl-auto=update
   c. Compiler et exécuter l’application Spring Boot :
      mvn clean install
      mvn spring-boot:run

3. Frontend - React :
   a. Naviguer dans le répertoire du frontend :
      cd chemin/vers/le/frontend
   b. Installer les dépendances :
      npm install
   c. Lancer l’application React :
      npm start

4. Accéder à l’application :
   a. Ouvrir un navigateur web et accéder à :
      http://localhost:5173

L’application devrait maintenant être fonctionnelle et accessible.
