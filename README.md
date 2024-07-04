# Daily Journal Web Application

## Description
Daily Journal is a web application that allows users to manage their daily journal entries. Users can create, edit, and delete their journal entries. The application is built using Spring Boot for the backend and React for the frontend.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Java 17
- Maven
- Node.js and npm
- An IDE such as IntelliJ IDEA or VSCode

## Installation and Deployment

### 1. Clone the repository
Clone the repository using the following command:
\`\`\`sh
git clone <URL_of_the_repository>
\`\`\`

### 2. Backend - Spring Boot

#### a. Navigate to the backend directory
Change to the backend directory:
\`\`\`sh
cd path/to/backend
\`\`\`

#### b. Configure application properties
Edit the \`src/main/resources/application.properties\` file to configure the database connection:
\`\`\`properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
\`\`\`

#### c. Build and run the Spring Boot application
Build and run the backend application using Maven:
\`\`\`sh
mvn clean install
mvn spring-boot:run
\`\`\`

### 3. Frontend - React

#### a. Navigate to the frontend directory
Change to the frontend directory:
\`\`\`sh
cd path/to/frontend
\`\`\`

#### b. Install dependencies
Install the necessary npm dependencies:
\`\`\`sh
npm install
\`\`\`

#### c. Start the React application
Start the frontend application:
\`\`\`sh
npm start
\`\`\`

### 4. Access the application
Open your web browser and navigate to:
\`\`\`
http://localhost:5173
\`\`\`

## Features
- **Create Journal Entries**: Users can create new journal entries.
- **Edit Journal Entries**: Users can edit their existing journal entries.
- **Delete Journal Entries**: Users can delete their journal entries.
- **List Journal Entries**: Users can view a list of all their journal entries.

## Technologies Used
- **Backend**: Spring Boot, H2 Database
- **Frontend**: React, Axios, CSS Modules

## Project Structure

### Backend
The backend code is located in the \`backend\` directory. Key files include:
- \`src/main/java/com/example/dailyjournal\`: Java source files for the application
- \`src/main/resources/application.properties\`: Configuration file for the application

### Frontend
The frontend code is located in the \`frontend\` directory. Key files include:
- \`src/components\`: React components
- \`src/pages\`: Page components
- \`src/App.jsx\`: Main React application component

## Author
TACHALTE OTMANE - MICDA ITLEARNING


