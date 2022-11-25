![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# HACETTEPE TOPLULUK
---

- This is a PostgreSQL Express React Node.js (PERN) Stack project.
- **Frontend**: React, **Backend**: Node.js, **Database**: PostgreSQL

![GitHub repo size](https://img.shields.io/github/repo-size/Berke0609/Topluluk?style=plastic)
![GitHub pull request](https://img.shields.io/github/issues-pr/Berke0609/Topluluk?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/Berke0609/Topluluk?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/Berke0609/Topluluk?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/Berke0609/Topluluk?style=plastic)


## Overview

### Backend
* PostgreSQL must be installed and running. Windows 11 64bit PostgreSQL 15 was used for this project.
* Postman can be used to test the backend before the frontend is ready.

### Frontend

* React deals with a user input field and displaying the value in a table. The user can edit and delete inputs.
* Javascript XLM (JSX) and HTML: At the heart of a website are HTML documents. Your web browser reads these documents and displays them as web pages on the screen of your computer or other electronic devices you use. During this process, browsers create a structure called Document Oriented Model (DOM) about how pages are arranged. Updating the DOM using JSX brings an incredible website performance boost and development efficiency.
(see. <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank"> JavaScript XML (JSX) </a>, <a href="https://reactjs.org/docs/fragments.html" target="_blank"> React Fragments </a>)

## Technologies - Backend

* <a href="https://www.postgresql.org/" target="_blank">PostgreSQL v15</a>
* <a href="https://expressjs.com/" target="_blank">Express.js middleware v4</a>
* <a href="https://nodejs.org/en/" target="_blank">Node.js v18</a>
* <a href="https://www.postman.com/" target="_blank">Postman API</a>  to simulate frontend

## Technologies - Frontend

* <a href="https://reactjs.org/" target="_blank">React framework v18</a>
* <a href="https://getbootstrap.com/" target="_blank">Bootstrap v5</a>

## Pre-Setup

* All necessary components must be downloaded.
* should have a basic knowledge of Javascript and React.
* This will also help you if you have knowledge of how the Restful API (CRUD app) works.

## Overview Diagram

![diagram](/docs/pern_stack_diagram.drawio.png)

## Build Our Server

* "server" folder is created.
* dependencies are downloaded  `nmp i express pg cors`
* "index.js" created
* "databased.sql" created - codes look better -
    * database ve tablolar oluşturulur
* In terminal under server folder thanks to commands`cd server` `touch index.js` and `node index`  server starts at `http://localhost:5000/`

### Connect Our Database and Server

* The PostgreSQL library is linked with the "db.js" script file. 
* Routes sections are written in "index.js" and CRUD processing capability is gained with query commands - POST, GET, PUT, DELETE etc. 

## Set Up the Client Side

* "Client" folder is created.
* Input, List and Edit components are created using Fragment, useState structures.
* It should be imported into "app.js".
* The site is run at the address of `http://localhost:3000/` with `cd client` `npm start` under the client folder in the terminal.

## Code Examples - Backend

```javascript
//ROUTES//

//Create a Club
app.post("/clubss", async(req,res) => {
    try {
        const { name } = req.body;
        const newClub = await pool.query(
            "INSERT INTO clubs (name) VALUES($1) RETURNING *",
        [name]
        );
        res.json(newClub.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
```

## Code Examples - Frontend 

```javascript
const InputClub = () => {

    const [name, setName] = useState("")
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {name};
            const response =await fetch("http://localhost:5000/clubss", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location ="/";
            
        } catch (err) {
            console.error(err.message)
            
        }
    }
```

## Screenshots

* Database
![database](/docs/database.png)
* Postman testing
![postman](/docs/postman_test.png)
* Console log
![Console](/docs/LOCALHOST3000.jpg)

## General Tools / References

* <a href="https://www.youtube.com/watch?v=ldYcgPKEZC8" target="_blank">PERN Stack Course - Postgres, Express, React, and Node</a>
* <a href="https://reactjs.org/docs/getting-started.html" target="_blank">React documentation</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify" target="_blank">JS-beautify for VS Code</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" target="_blank">ES7+ React/Redux/React-Native snippets</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier - Code formatter</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced" target="_blank">Markdown Preview Enhanced</a>

## Contact

* <a href="https://github.com/Berke0609" target="_blank">**Berke Aygören**</a> - [Gmail](mailto:berkeaygoren5@gmail.com)
* <a href="https://github.com/f-karakus" target="_blank">**Fevzican Karakuş**</a> - [Gmail](mailto:fevzican.karakus@gmail.com)
* <a href="https://github.com/cirpanrafet" target="_blank">**Rafet Çırpan**</a> - [Gmail](mailto:cirpanrafet@gmail.com)
