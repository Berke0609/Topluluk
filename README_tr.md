![alt text](https://www.freelogovectors.net/wp-content/uploads/2020/07/hacettepe-universitesi-logo-768x178.png)
# HACETTEPE TOPLULUK
---

- Bu bir PostgreSQL Express React Node.js (PERN) Stack projesidir.
- **Frontend**: React, **Backend**: Node.js, **Database**: PostgreSQL

![GitHub repo size](https://img.shields.io/github/repo-size/Berke0609/Topluluk?style=plastic)
![GitHub pull request](https://img.shields.io/github/issues-pr/Berke0609/Topluluk?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/Berke0609/Topluluk?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/Berke0609/Topluluk?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/Berke0609/Topluluk?style=plastic)


## Genel Bakış

### Backend
* PostgreSQL yüklenmiş ve çalışır olmalıdır. Bu proje için Windows 11 64bit PostgreSQL 15 kullanıldı.
* Postman, API'leri test etmeye ve değiştirmeye yönelik bir API(Uygulama Programlama Arayüzü) geliştirme platformudur.

### Frontend

* React bir kullanıcı girdi alanı ve değerin tabloda gösterilmesiyle ilgilenir. Kullanıcı girdiler üzerinde düzenleme yapabilir.
* Javascript XLM (JSX) ve HTML: Bir web sitesinin merkezinde HTML dökümanları vardır. Web tarayıcınız bu dökümanları okur ve bilgisayarınızın veya kullandığınız diğer elektronik cihazların ekranına web sayfaları olarak yansıtır. Bu işlem esnasında tarayıcılar Document Oriented Model (DOM) adında, sayfaların nasıl düzenlendiği ile ilgili bir yapı oluşturur. JSX kullanarak DOM’u güncellemek inanılmaz bir web sitesi performans artışı ve geliştirme verimliliğini beraberinde getirir.
(Bkz. <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank"> JavaScript XML (JSX) </a>, <a href="https://reactjs.org/docs/fragments.html" target="_blank"> React Fragments </a>)

## Teknolojiler - Backend

* <a href="https://www.postgresql.org/" target="_blank" rel="noopener"><span>PostgreSQL v15</span> </a> - Veritabanı yönetimi için
* <a href="https://expressjs.com/" target="_blank">Express.js middleware v4</a> - Node.js ile RESTful API'ler oluşturmak için
* <a href="https://nodejs.org/en/" target="_blank">Node.js v18</a> - Server tarafını oluşturmak için
* <a href="https://www.postman.com/" target="_blank">Postman API</a> - Frontend simulasyonu için

## Teknolojiler - Frontend

* <a href="https://reactjs.org/" target="_blank">React framework v18</a> - Kullanıcı arayüzleri oluşturmak için
* <a href="https://getbootstrap.com/" target="_blank">Bootstrap v5</a> - Web sayfası tasarımlarını geliştirmek için

## Ön kurulum

* Gerekli tüm bileşenler indirilmelidir.
* Javascript ve React ile ilgili temel bir bilgiye sahip olunmalıdır.
* Restful API (CRUD yapısı) nasıl çalıştığına dair bilgi sahibi olursanız bu size ayrıca yardımcı olur.

## Genel Bakış Diyagramı

![diagram](/docs/pern_stack_diagramv2.drawio.png)

## Server Kurulumu

* "server" klasörü oluşturulur. (bkz. [server](/server))
* Bağımlılıklarımız indirilir.  `npm i express pg cors`
    * Express, Node.js tabanlı bir web uygulama sunucu çatısıdır.
    * `pg` Node.js için engellenmeyen PostgreSQL istemcisidir.
    * Cors ise web uygulamasının farklı kaynaklardan HTTP istekleri gelmesine izin verir. 
* "index.js" oluşturulur. (bkz. [index.js](/server/index.js))
* "database.sql" oluşturulur (bkz. [database](/server/database.sql))
    * Veritabanı ve tabloların kaynak kodlarını içerir.
* Terminalde server klasörü altında `cd server` `touch index.js` ve `node index` komutları sayesinde `http://localhost:5000/` adresinde başlatılır.

### Database ile Server Bağlantısı

* PostgreSQL kütüphanesi "db.js" script dosyası ile bağlanır. (bkz. [db.js](/server/db.js))
    * Bu kısımda veritabanı bilgileri tanımlanır.
* "index.js" içinde Routes kısımları yazılarak sorgu komutlarıyla CRUD işlem yeteneği kazandırılır - POST, GET, PUT, DELETE etc. 

## Client Kurulumu

* "Client" klasörü oluşturulur. (bkz. (bkz. [Client](/client))
* Fragment, useState yapıları kullanılarak Input, List ve Edit component'leri oluşturulur.
    * Fragmentler, Dom'a ekstra düğüm eklemeden bir alt elemanlar listesini gruplandırmanıza izin verir.
    * useState fonksiyonu size herhangi bir sınıf oluşturmadan state ve diğer React özelliklerini kullanmanıza izin verir.
* Oluşturulan component'ler "App.js" içine import edilmelidir. (bkz. (bkz. [App.js](/client/src/App.js))
* Terminalde client klasörü altında `cd client` `npm start`ile `http://localhost:3000/` adresinde site çalıştırılır.

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
* Database
![database](/docs/database.png)
* Postman test aşaması
![postman](/docs/postman_test.png)
* Console log
![Console](/docs/LOCALHOST3000.jpg)

## Genel Araçlar / Referanslar

* <a href="https://www.youtube.com/watch?v=ldYcgPKEZC8" target="_blank">PERN Stack Course - Postgres, Express, React, and Node</a>
* <a href="https://reactjs.org/docs/getting-started.html" target="_blank">React documentation</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify" target="_blank">JS-beautify for VS Code</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" target="_blank">ES7+ React/Redux/React-Native snippets</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier - Code formatter</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced" target="_blank">Markdown Preview Enhanced</a>

## İletişim

* <a href="https://github.com/Berke0609" target="_blank">**Berke Aygören**</a> - [Gmail](mailto:berkeaygoren5@gmail.com)
* <a href="https://github.com/f-karakus" target="_blank">**Fevzican Karakuş**</a> - [Gmail](mailto:fevzican.karakus@gmail.com)
* <a href="https://github.com/cirpanrafet" target="_blank">**Rafet ÇIRPAN**</a> - [Gmail](mailto:cirpanrafet@gmail.com)
