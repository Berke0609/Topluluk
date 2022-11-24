![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# HACETTEPE TOPLULUK
---

- PostgreSQL Express React Node.js (PERN) Stack projesidir.
- **Frontend**: React, **Backend**: Node.js, **Database**: PostgreSQL

![GitHub repo size](https://img.shields.io/github/repo-size/Berke0609/Topluluk?style=plastic)
![GitHub pull request](https://img.shields.io/github/issues-pr/Berke0609/Topluluk?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/Berke0609/Topluluk?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/Berke0609/Topluluk?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/Berke0609/Topluluk?style=plastic)


## Genel Bakış

### Backend
* PostgreSQL yüklenmiş ve çalışır olmalıdır. Bu proje için Windows 11 64bit PostgreSQL 15 kullanıldı.
* Postman frontend hazır edilmeden önce backend'i test etmek için kullanılabilir.

### Frontend

* React bir kullanıcı girdi alanı ve değerin tabloda gösterilmesiyle ilgilenir. Kullanıcı girdiler üzerinde düzenleme yapabilir.
* Javascript XLM (JSX) ve HTML: Bir web sitesinin merkezinde HTML dökümanları vardır. Web tarayıcınız bu dökümanları okur ve bilgisayarınızın veya kullandığınız diğer elektronik cihazların ekranına web sayfaları olarak yansıtır. Bu işlem esnasında tarayıcılar Document Oriented Model (DOM) adında, sayfaların nasıl düzenlendiği ile ilgili bir yapı oluşturur. JSX kullanarak DOM’u güncellemek inanılmaz bir web sitesi performans artışı ve geliştirme verimliliğini beraberinde getirir.
(Bkn. [JavaScript XML (JSX)](https://reactjs.org/docs/introducing-jsx.html), [React Fragments](https://reactjs.org/docs/fragments.html))

## Teknolojiler - Backend

* [PostgreSQL v15](https://www.postgresql.org/)
* [Express.js middleware v4](https://expressjs.com/)
* [Node.js v18](https://nodejs.org/en/)
* [Postman API](https://www.postman.com/downloads/) to simulate frontend

## Teknolojiler - Frontend

* [React framework v18](https://reactjs.org/)
* [Bootstrap v5](https://getbootstrap.com/)

## Ön kurulum

* Gerekli tüm bileşenler indirilir
* Javascript ve React ile ilgili temel bir bilgiye sahip olunmalı
* Restful API (CRUD yapısı) nasıl çalıştığına dair bilgi sahibi olursanız bu size ayrıca yardımcı olur

## Genel Bakış Diyagramı

![diagram](/docs/pern_stack_diagram.drawio.png)

## Server Kurulumu

* "server" klasörü oluşturulur.
* Bağımlılıklarımız indirilir  `nmp i express pg cors`
* index.js oluşturulur
* "databased.sql" oluşturulur - kodlar daha iyi görünür
** database ve tablolar oluşturulur
* Terminalde server klasörü altında `touch index.js` ve `node index` komutları sayesinde `http://localhost:5000/` adresinde başlatılır

### Database ile Server Bağlantısı

* PostgreSQL kütüphanesi "db.js" script dosyası ile bağlanır. 
* "index.js içinde Routes kısımları yazılarak sorgu komutlarıyla CRUD işlem yeteneği kazandırılır - POST, GET, PUT, DELETE etc. 

## Client Kurulumu

* "Client" klasörü oluşturulur
* Fragment, useState yapıları kullanılarak Input, List ve Edit component'leri oluşturulur.
* App.js içine import edilmelidir.
* Terminalde client klasörü altında `npm start`ile `http://localhost:3000/` adresinde site çalıştırılır.

## Örnek Kod - Backend

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

## Örnek Kod - Frontend 

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

## Ekran Görüntüleri
![database](/docs/database.png)
![postman](/docs/postman_test.png)
![Console](/docs/LOCALHOST3000.jpg)

## Genel Araçlar / Referanslar

*[PERN Stack Course - Postgres, Express, React, and Node](https://www.youtube.com/watch?v=ldYcgPKEZC8)
* [React documentation](https://reactjs.org/docs/getting-started.html)
* [js-beautify for VS Code](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
* [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## İletişim

* [Berke Aygören](https://github.com/Berke0609) - [Gmail](berkeaygoren5@gmail)
* [Fevzican Karakuş](https://github.com/f-karakus) - [Gmail](fevzican.karakus@gmail.com)
* [Rafet Çırpan](https://github.com/cirpanrafet) - [Gmail](cirpanrafet@gmail.com)

