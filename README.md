# 🥇Studi Kasus Membuat Aplikasi HayWord dengan FB Messenger, Wit.ai dan React JS


## 🖐Pendahuluan

Halo kawan-kawan, pada kesempatan kali ini saya akan berbagi tutorial cara membuat aplikasi HayLingo versi mini (HayWord) dengan FB messenger, Wit.ai (NLP) dan React JS. Sebelumnya HayLingo meraih juara 1 lomba hackathon facebook messenger 2020 dengan menawarkan fitur HayBot, HayFriend, dan HayWord. Di studi kasus kali ini kita akan berfokus membuat HayWord yaitu fitur untuk membantu pengguna memperkaya kosa kata bahasa inggrisnya dengan gamifikasi tebak kata dengan berbagai macam petunjuk yang diberikan seperti sinonim, jenis kata dan definisi serta fitur translate. 

berikut ini tampilan aplikasi yang akan kita buat :

#### Mengapa Harus Buat Aplikasi di Facebook Messenger ?
👨‍👨‍👦‍👦 Digunakan oleh 1,3 Milyar pengguna global dan diperkirakan 2,4 Milyar pada 2021

📣 Marketing melalui FB Messenger 70%  (Open Rate) lebih besar daripada email marketing 

📥 Menjadi platform messaging teratas di US dengan jumlah unduh bulanan sebesar 2 juta unduhan

[Sumber](https://review42.com/facebook-messenger-statistics/)


#### Apa yang akan kita pelajari
- FB Messenger (membuat aplikasi chatbot, implementasi messenger extension webview, quick replies, generic template)
- Wit.ai (membuat intent, entity, training, integrasi ke messenger)
- ReactJS (integrasi messenger, membuat react komponen, state dan props)
- Firebase (integrasi messenger, membuat dan mengupdate data pengguna)
- Integrasi API ( Translate API, WordsAPI)

#### Hal-hal yang harus dipersiapkan
 ☑ Akun Facebook untuk login di [FB developer](https://developers.facebook.com/), [Wit.ai](https://wit.ai/), [Glitch](https://glitch.com/), [RapidAPI](https://rapidapi.com/)
 
 ☑ Akun [Firebase](https://firebase.google.com/)
 
 ☑ Komputer/Laptop
 
 ☑ Koneksi Internet
 
 

## 📃Daftar Isi

<!--ts-->
   * [Pendahuluan](#pendahuluan)
      * [Mengapa Buat App di Facebook Messenger ?](#mengapa-harus-buat-aplikasi-di-facebook-messenger-)
      * [Apa yang akan kita pelajari](#apa-yang-akan-kita-pelajari)
      * [Hal yang harus dipersiapkan](#hal-hal-yang-harus-dipersiapkan)
   * [Daftar Isi](#daftar-isi)
   * [Instalasi](#instalasi)
      * [Mengatur Webhook](#mengatur-webhook)
      * [Mengatur FB App](#mengatur-fb-app)
      * [Integrasi Webhook dengan FB App](#integrasi-webhook-dengan-fb-app)
   * [Welcome Screen](#welcome-screen)
      * [Mengatur Tombol Get Started](#mengatur-tombol-get-started)
      * [Mengatur Teks Greeting](#mengatur-teks-greeting)
      * [Menyimpan Pengaturan Welcome Screen](#menyimpan-pengaturan-welcome-screnn)
   * [Alur Setting Profile](#alur-setting-profile)
      * [Menghubungkan Firebase dengan Aplikasi](#menghubungkan-firebase-dengan-aplikasi)
      * [Membuat Tabel Pengguna di Firebase](#membuat-tabel-pengguna-di-firebase)
      * [Membuat Webview untuk Mendapatkan Data Pengguna dengan ReactJS](#membuat-webview-untuk-mendapatkan-data-pengguna-dengan-reactjs)
      * [Menyimpan Data ke Firebase](#menyimpan-data-ke-firebase)
      * [Membuat Tombol Url Webview](#membuat-tombol-url-webview)
   * [Alur Fitur Translate](#alur-fitur-translate)
      * [Mengatur Intent Pengguna dengan Wit.ai](#mengatur-intent-pengguna-dengan-wit.ai)
      * [Menghubungkan Wit.ai dengan FB Messenger](#menghubungkan-wit.ai-dengan-fb-messenger)
      * [Menggunakan API Translate](#menggunakan-api-translate)
   * [Alur Fitur HayWord](#alur-fitur-hayword)
      * [Membuat Menu HayWord Dengan Template Generic](#membuat-menu-hayword-dengan-template-generic)
      * [Menggunakan API WordsAPI](#menggunakan-api-wordsapi)
      * [Memberikan Petunjuk dan Memeriksa Jawaban Pengguna](#memberikan-petunjuk-dan-memeriksa-jawaban-pengguna)
      
<!--te-->



## ⚙Instalasi

#### Mengatur Webhook

Kali ini kita akan menggunakan server Glitch, kalau kawan-kawan ingin menggunakan server sendiri bisa download source code dari repo facebook [disini](https://github.com/fbsamples/messenger-platform-samples/tree/master/quick-start).

untuk mendapatkan url webhook di Glitch :
1. Klik Remix on Glitch di bawah ini (untuk menyalin kodingan awal) [sumber : fb messenger quick-start](https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start)
  
   [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/quickstartchatbot)
 
2. Klik tombol "Remix to Edit",  jangan lupa untuk Sign In agar project tersimpan di akun glitchmu.
   <details>
     <summary>Lihat Gambar</summary>
 
    ![gambar remix to edit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603074774/glitch_remix_mdnfyv.png "remix to edit")
    
   </details>  
3. Klik tombol share > live app > copy.
   <details>
     <summary>Lihat Gambar</summary>
 
     ![copy app url](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603134345/get_url_app_w17azv.png "copy url app")
   </details>  
4. webhook url :
    `https://<URL_YANG_KAMU_COPY>/webhook`
    > dikasus ini url webhooknya adalah  : `https://hayword.glitch.me/webhook`

#### Mengatur FB App

Setelah mendapatkan url webhook, kita akan menghubungkanya dengan Facebook App sebagai berikut :
1. Buka halaman [facebok developer app](https://developers.facebook.com/apps/), *pastikan sudah login dengan akun facebook.
2. klik tombol Create App > pilih Manage Business Integration.
   <details>
     <summary>Lihat Gambar</summary>
 
    ![create app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198175/create_app_gwu1ni.png "create app")
   </details>
3. Isi detail aplikasi > klik Create App ID.
    <details>
     <summary>Lihat Gambar</summary>
 
    ![isi detail aplikasi](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198691/isi_form_z9iecr.png "isi detail aplikasi")
    </details>
4. Setelah berhasil membuat App ID, akan tampil halaman dashboard app yang dibuat (HayWord). Pada dashboard tersebut klik tombol Set Up dibagian Messenger.
   <details>
    <summary>Lihat Gambar</summary>
 
    ![setup messenger](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603199142/set_up_messenger_i8kdzf.png "setup messenger")
   </details>
5. Klik Create New Page untuk membuat halaman baru yang akan terhubung dengan aplikasi kita.
   <details>
     <summary>Lihat Gambar</summary>
 
    ![create new page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214062/new_page_gfme2b.png "create new page")
   </details>
6. Isi informasi mengenai halaman yang dibuat dan klik tombol 'create page'.
    <details>
     <summary>Lihat Gambar</summary>
 
    ![informasi page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214544/detail_page_iosmuy.png "informasi page")
     </details>
7. Setelah berhasil membuat halaman, lalu kembali ke dashboard app dan klik tombol 'add or remove pages'.
     <details>
     <summary>Lihat Gambar</summary>
 
    ![add or remove page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214928/add_remove_page_vbip8w.png "add or remove page")
      </details>
8. Pilih halaman yang telah kita buat tadi, kemudian klik 'next'.
      <details>
     <summary>Lihat Gambar</summary>
 
    ![pilih halaman](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215211/pilih_page_z1ivyu.png "pilih halaman")
       </details>
9. Lalu klik tombol 'done'.
       <details>
     <summary>Lihat Gambar</summary>
 
    ![tombol done](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215209/hak_akses_conversation_kjcbcb.png "add or tombol done")
      </details>
10. Jika berhasil, maka akan tampil halaman yang telah kita hubungkan dengan app.
        <details>
     <summary>Lihat Gambar</summary>
 
    ![tampil halaman](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603216217/terhubung_halaman_ejb5ny.jpg "tampil halaman")
    </details>
 #### Integrasi Webhook dengan FB App
 
 untuk mengintegrasikan webhook dengan FB App langkah-langkahnya sebagai berikut :
 1. Klik Tombol Generate Page Access Token untuk mengotentikasi request ke messenger.
    <details>
      <summary>Lihat Gambar</summary>

     ![page access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217293/generate_access_token_ehfnbf.png "page access token")


    </details>
   
 2. Klik Checkbox I Understand > copy access token > done.
    <details>
      <summary>Lihat Gambar</summary>

    ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217591/access_token_zhjj4l.png "access token")
    </details>
 3. Buat variabel PAGE_ACCESS_TOKEN pada file .env dalam glitch, lalu salin token yang sebelumnya didapat ke variabel tersebut.
    <details>
      <summary>Lihat Gambar</summary>

    ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248148/variabel_token_lvw2r3.png "access token")
     </details>
 4. Selanjutnya buat variabel webhook VERIFY_TOKEN dan isi variabel dengan apa yang kamu mau pada file .env untuk memverifikasi webhook di fb app.
     <details>
      <summary>Lihat Gambar</summary>

    ![verify token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248693/verify_token_zeepj3.png "verify token")
      </details>
 5. Kemudian tambahkan url webhook di dalam dashboard aplikasi, klik tombol 'Add Callback Url'.
      <details>
      <summary>Lihat Gambar</summary>

    ![tambah url webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603250861/add_callback_url_fbi1hf.png "tambah url webhook")
       </details>
 6. Isi url webhook dan token yang telah kita atur sebelumnya, lalu klik tombol 'Verify and Save'.
       <details>
      <summary>Lihat Gambar</summary>

    ![verify webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603251168/verify_webhook_zdq0h1.png "verify webhook")
        </details>
 7. Setelah berhasil memverifikasi, klik tombol 'Add Subscriptions' untuk berlangganan service messenger yang akan kita gunakan.
        <details>
      <summary>Lihat Gambar</summary>

    ![add subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260345/add_subs_pqey8q.png "add subs")
         </details>
 8. Pilih messages dan messaging_postbacks,lalu Klik Tombol 'Save'.
    <details>
      <summary>Lihat Gambar</summary>

    ![save subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260344/save_subscription_y2gqzi.png "save subs")
    </details>

 ## 🎉Welcome Screen
 
 welcome screen adalah tampilan ketika pengguna pertama kali chat dengan fb page kita, kita akan mengatur get started button dan greeting text.
 
 <p align="center">
 
 <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.4,c_scale,bo_4px_solid_grey/v1603309069/welcome_screen_result_qwk21e.png">
  
 </p>
 
 #### Mengatur Tombol Get Started
 1. Buka file setWelcomeScreen.js pada glitch, pada baris ke-8 ganti `<postback_payload>` dengan kata apa saja yang diinginkan. contoh disini adalah kata `MULAI`.
    <details>
      <summary>Lihat Gambar</summary>

    ![set postback get started button](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603306751/get_started_postback_rijuet.png "set postback get started button")
    </details>
 
 #### Mengatur Teks Greeting
 1. Buka file setWelcomeScreen.js pada glitch, pada baris ke 33-39, ubah sesuai dengan lokasi penargetan pengguna dan teks greeting yang ingin disampaikan.
   ```javascript
   let request_body = {
    "greeting": [
    {
      "locale":"default", // teks greeting akan ditampilkan berdasarkan lokasi pengguna diluar lokasi yang kita tentukan (default)
      "text":"Selamat Datang di HayWord !" 
    }, {
      "locale":"en_US", // teks greeting ini akan ditampilkan jika pengguna dari US.
      "text":"Welcome to HayWord"
    }
      ]
  }
   ```
 #### Menyimpan Pengaturan Welcome Screen  
 setelah kita mengatur tombol 'Get Started' dan Teks 'Greeting' selanjutnya adalah menyimpanya dengan cara sebagai berikut :
 
 1. Pada halaman glitch, klik tombol 'tools'>pilih 'Terminal'.
    <details>
      <summary>Lihat Gambar</summary>

    ![open terminal](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603308150/open_terminal_oyz7zf.png "open terminal")
    </details>
 2. Di terminal ketik 'node setWelcomeScreen.js' > tekan Enter pada keyboard. Ketika berhasil akan muncul respon `Get Started Button Sent!` dan `Greeting Text Sent!`
     <details>
      <summary>Lihat Gambar</summary>

    ![run setWelcomeScreen.js](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603308661/run_setWelcomeScreen.js_rgcg7e.png "setWelcomeScreen.js")
    </details>
 
 ## 👨‍💼Alur Setting Profile
 <p align="center">
 
 <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603575202/IMG_4373_ft5fkx.jpg">
  
 </p>
 di alur ini kita akan mengambil informasi bahasa asli pengguna untuk keperluan fitur translate. 
 
 
 
 #### Menghubungkan Firebase dengan Aplikasi
 sebelum kita mengambil informasi pengguna, terlebih dahulu kita harus membuat database tempat penyimpanan informasi tersebut dan disini kita akan menggunakan firebase sebagai   databasenya.
 
 1. Buka halaman [console firebase](https://console.firebase.google.com/), pastikan sudah login dengan akun google
 2. Klik tombol 'Create a Project'.
    <details>
      <summary>Lihat Gambar</summary>

    ![create firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603344422/create_project_firebase_muq6bw.png "create firebase project")
    </details>
 3. Isi data project sesuai yang kamu inginkan, dan jangan lupa centang 'I accept the Firebase terms', lalu klik 'continue'.
    <details>
      <summary>Lihat Gambar</summary>

    ![isi data firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603344533/isi_data_project_firebase_tqszlc.png "isi data firebase project")
    </details>
 4. Pada step 2 disable 'Enable Google Analytics for this project' karena untuk project ini tidak membutuhkanya, lalu klik 'Continue'.
    <details>
      <summary>Lihat Gambar</summary>

    ![step 2 firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603345137/step_2_create_firebase_project_nsxtf7.png "step 2 firebase project")
    </details>
 5. Setelah project berhasil dibuat > klik 'Continue'.
    <details>
      <summary>Lihat Gambar</summary>

    ![step 2 firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603345339/project_berhasil_dibuat_txwtmj.png "step 2 firebase project")
    </details>
 6. Klik tombol '</>' pada add an app to get started.
    <details>
    <summary>Lihat Gambar</summary>

    ![add app to firebase](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387257/add_app_fx4x3a.png "add app to firebase")
    </details>
 7. Isi nama aplikasi > klik tombol 'Register app'.
    <details>
    <summary>Lihat Gambar</summary>

    ![add nickname app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387396/isi_nama_app_vlhekf.png "add nickname app")
    </details>
 8. Buat variabel `API_KEY` `AUTH_DOMAIN` `PROJECT_ID` pada file .env dalam glitch dan isi sesuai dengan value yang didapat di firebase sdk.
    <details>
      <summary>Lihat Gambar</summary>

    ![firebase sdkl](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392369/set_apikey_firebase_pvjd4t.png "firebase sdk")
    ![set variable firebase](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392368/add_variabel_firebase_g7elo8.png "set variable firebase")
    </details>
  9. Setelah itu, kembali ke halaman console firebase > pilih menu 'Develop' > Cloud Firestore > klik tombol 'Create Database'.
     <details>
      <summary>Lihat Gambar</summary>

     ![create database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387722/create_database_jmdhfx.png "create database")
     </details>
  10. Pada rules kita pilih 'Test Mode' > klik tombol 'Next'.
  11. Pada location biarkan secara default > klik tombol 'Enable'.
      <details>
      <summary>Lihat Gambar</summary>

      ![location database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603388043/cloud_firestore_location_axigbn.png "location database")
      </details>
  
  #### Membuat Tabel Pengguna di Firebase
  1. Pada sidebar kiri firebase, pilih menu Develop > Cloud Firestore > klik tombol 'Start Collection'.
     <details>
      <summary>Lihat Gambar</summary>

      ![create table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603453591/create_table_rekvc2.png "create table")
      </details>
  2. Isi nama collection (table) dengan 'users' > klik 'next'.
     <details>
      <summary>Lihat Gambar</summary>

      ![add name to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_name_to_table_suu312.png "add name to table")
      </details>
  3. Klik 'Auto ID' > isi field `1. Field = id , Type = string | 2. Field = language , Type = string` dan biarkan value kosong > klik 'Save'.
      <details>
      <summary>Lihat Gambar</summary>

      ![add field to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_field_to_table_aj8ktn.png "add field to table")
      </details>
   
   #### Membuat Webview untuk Mendapatkan Data Pengguna dengan ReactJS
   
   
   kita akan membuat webview untuk menampilkan form pilihan bahasa pengguna dengan React js.
   
   1. Menambahak variabel `APP_ID` pada .env, untuk mendapatkan app id dari aplikasi kita bisa dilihat di dashboard aplikasi facebook developer.
      <details>
      <summary>Lihat Gambar</summary>

      ![get app id](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513718/app_id_xlqaxn.png "get app id")
      ![set app id variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513718/add_app_id_valiable_jjiohs.png "set app id variable")
      </details>
    
   2. Membuat route get `/setProfile` pada app.js.
      ```javascript
         //set route dengan param userID
         app.get('/setProfile/:userID', (req, res, next) => { 
           db.doc(`users/${req.params.userID}`).get().then((docSnapshot) => {
           //mengeck apakah data user telah ada di firebase
            if(docSnapshot.exists){
            //mengirimkan file setProfile.ejs yang ada di folder views dan data app id , title dan language
               res.render('setProfile',{appId: APP_ID, title: 'Setting Profile', lang: docSnapshot.data().language});
            //jika tidak ada, maka akan memasukkan data user ke firebase
            }else{
                        db.collection("users").doc(`${req.params.userID}`).set({
                id: req.params.userID,
                language: "-"
               
            })
            .then(function() {
                res.render('setProfile',{appId: APP_ID, title: 'Setting Profile', lang:'-'});
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            }
         });
         }
      });
      ```
      <details>
      <summary>Lihat Gambar</summary>

      ![set profile route](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513313/set_profile_route_mydjcb.png "set profile route")
      </details>
   3. Membuat file `setProfile.ejs` di folder views, biar lebih gampang cukup duplikasi dari file `example.ejs` (klik kanan pada file) lalu ubah namanya menjadi 'setProfile.ejs'.
      <details>
      <summary>Lihat Gambar</summary>

      ![duplicate ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603476492/duplicate_file_example.ejs_svomu9.png "duplicate ejs file")
      </details>
   4. Edit bagian `<script src="/src/example.js"></script>` pada file views/setProfile.ejs menjadi :
            
      ```html
         <script src="/src/setProfile.js"></script> //load react component dari file setProfile.js
      ```
      <details>
      <summary>Lihat Gambar</summary>

      ![edit ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477605/edit_setProfile.ejs_gumwzw.png "edit ejs file")
      </details>
   5. Buat file `setProfile.js` di folder src sebagai react component yang akan di load di file `setProfile.ejs`. biar lebih gampang cukup duplikasi dari file `example.js` (klik kanan pada file) lalu ubah namanya menjadi 'setProfile.js'.
      <details>
      <summary>Lihat Gambar</summary>

      ![duplicate js file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477464/duplicate_file_example.js_bdk9v6.png "duplicate js file")
      </details>
   6. Membuat variabel language yang didapat dari firebase dengan menggunakan `window.language` didalam file `setProfile.ejs`.
      ```javascript
      window.language = '<%= lang %>'
      ```
      <details>
      <summary>Lihat Gambar</summary>

      ![add wondow lang variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603555076/lang_window_variable_psx7k4.png "add wondow lang variable")
      </details>
   7. Membuat react komponen form pada file `setProfile.js`.
      ```javascript
      'use strict';

        const e = React.createElement;
        //membuat komponen form input select
        function FormInput(props) {
          return (
              React.createElement("select", { className: "form-control",onChange: props.handlerLang, value: props.lang , style: { flexGrow: "1", marginTop: '1em'} },
                 React.createElement("option", { value: '-' }, "-"),
                 React.createElement("option", { value: 'id' }, "Indonesia"),
                 React.createElement("option", { value: 'hi' }, "India"),
                 React.createElement("option", { value: 'th' }, "Thailand"),
                 React.createElement("option", { value: 'en' }, "United States")
              )
            )
        }
        //membuat komponen button 'Save'
        class Button extends React.Component {
          constructor(props) {
            super(props);


             this.submit = this.submit.bind(this);
          }
          //membuat fungsi submit untuk update profile
          submit () {
            fetch('https://hayword.glitch.me/setProfile', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id: window.psid, lang: this.props.lang}),
        }).then(res => console.log(res))
          }

          render() {

            return e(
              'button',
              { style:{ marginTop: '1em', width: '100%'},className: "btn btn-primary",onClick: ()=> this.submit },'Save'
            );
          }
        }
        //komponen layout untuk forminput dan button 'Save'
        class SelectLang extends React.Component {
          constructor(props) {
            super(props);
            this.state = { lang: window.language };
            this.handlerLang = this.handlerLang.bind(this);
          }

          handlerLang (e){
            this.setState({
              lang: e.target.value
            })
          }

          render() {

            return e(
              'div',
              { style: {display: "flex", flexDirection: "column", alignItems: "center",width: "100%"}, className: "container-fluid" },

                  React.createElement(FormInput, {lang: this.state.lang,handlerLang: this.handlerLang},null),
                  React.createElement(Button, {lang: this.state.lang},null)    
            );
          }
        }

        const dom = document.querySelector('#component');
        ReactDOM.render(e(SelectLang), dom);
        ```
   8. whitelist domain agar webview yang kita buat dapat diakses di messenger dengan cara:
      buka halaman facebook (FB page) > page settings > advanced messaging > masukkan url app ke whitelist domain
      <details>
      <summary>Lihat Gambar</summary>

      ![whitelist domain](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603569197/whitelist_domain_ifgh1i.png "whitelist domain")
      </details>
   
      
        
   #### Menyimpan Data ke Firebase 
   1. Membuat route post `/setProfile` untuk menyimpan data profile pengguna yang telah diperbari ke firebase.
      ```javascript
      app.post('/setProfile', (req, res) => { 
      //update data pengguna  (language) ke firebase
         db.doc(`users/${req.body.id}`).update({
        language: `${req.body.lang}`
      }).then(function() {
      //mengirim pesan ke pengguna bahwa data telah berhasil disimpan
      callSendAPI(req.body.id, {
        text: 'Your Profile has Updated' })
        res.status(200).end()
      });
               }
            );
      ```
      
   #### Membuat Tombol Url Webview
   sekarang kita akan membuat aplikasi kita membalas pesan dengan template button url webview ketika pengguna pertama kali berinteraksi dengan aplikasi kita (Get Started Button), sebelumnya kita telah mengatur postback untuk Get Started adalah 'MULAI'.
   
   1. Membuat kondisi jika ada pesan dengan postback 'MULAI'  maka akan kita balas dengan template button url webview.
      ```javascript
         //fungsi untuk manajemen pesan tipe postback
         function handlePostback(sender_psid, received_postback) {
  
              let response;
             // mendapatkan payload postback
             let payload = received_postback.payload;
             //mengecek apakah payload postback sama dengan 'MULAI' ( pengguna klik tombol Get Started Button )
           if(payload === 'MULAI'){
           
           //memberikan response template button 
               response = {
                   attachment: {
                       type: "template",
                       payload: {
                           template_type: "button",
                           text: "Hello, welcome to HayWord. please set your profile before access our features",
                           buttons: [{
                               type: "web_url",
                               url: "https://hayword.glitch.me/setProfile/"+sender_psid,
                               title: "Set Profile",
                               webview_height_ratio: "compact",
                               messenger_extensions: true
                           }]
                       }
                   }
               }
             }
             // mengirimkan pesan dengan respon yang telah kita buat diatas
             callSendAPI(sender_psid, response);
           }
        ```
   <details>
      <summary>Lihat Gambar</summary>

   ![button url (https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603574549/buton_web_url_arbvok.png "button url ")
   </details>
   
   ## 🈸Alur Fitur Translate
   <p align="center">
 
   <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603629434/translate_feature_uwtxia.jpg">

   </p>
   kali ini kita akan membuat fitur translate dalam chat dengan menerjemahkan kata yang dimaksud (intent) user menggunakan NLP Wit.ai.
   
   #### Mengatur Intent Pengguna dengan Wit.ai
   1. Buka halaman [Apps Wit.ai](https://wit.ai/apps), pastikan sudah login menggunakan akun facebook.
   2. Buat projek aplikasi wit.ai
      <details>
      <summary>Lihat Gambar</summary>

      ![create wit.ai app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603597940/create_witai_app_vmp3yg.png "create wit.ai app")
      </details>
   3. Masukkan utterance `Translate <contoh kata/kalimat>` misal 'Translate community' > buat intent 'translate'.
      <details>
      <summary>Lihat Gambar</summary>

      ![create utterance and intent](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598178/create_utterance_and_intent_goesao.png "create utterance and intent")
      </details>
   4. Membuat entity kata yang akan diterjemahkan dengan cara blok kata `Community` > pilih `wit/phrase_to_translate`.
      <details>
      <summary>Lihat Gambar</summary>

      ![make an entity](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598522/make_an_entity_rhsssl.png "make an entity")
      </details>
   5. Klik tombol 'Train and Validate' untuk melatih dan validasi utterance,intent dan entity yang kita masukkan.
      <details>
      <summary>Lihat Gambar</summary>

      ![train_and_validate](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598641/train_and_validate_p3sj3m.png "train_and_validate")
      </details>
   6. Latih terus aplikasi wit.ai kita dengan memasukkan berbagai macam kemungkinan utterance yang digunakan pengguna untuk menerjemahkan.
      <details>
      <summary>Lihat Gambar</summary>

      ![train_again](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598864/train_again_w9cdj4.png "train_again")
      ![utterances](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603599136/utterances_hspjzy.png "utterances")
      </details>
      
   #### Menghubungkan Wit.ai dengan FB Messenger
   setelah kita melatih aplikasi wit.ai selanjutnya kita hubungkan dengan aplikasi di fb messenger kita.
   
   1. Buka halaman dashboard aplikasi facebook developer yang telah kita buat > masuk ke 'Messenger Setting' > pada bagian Built-In NLP pilih halaman aplikasi.
      <details>
      <summary>Lihat Gambar</summary>

      ![connect_to_wit.ai](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600163/connect_to_wit.ai_laucxq.png "connect_to_wit.ai")
      </details>
   2. Pada 'Default Language Model' pilih `Custom Model`.
      <details>
      <summary>Lihat Gambar</summary>

      ![custom_model](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/custom_model_f6tbok.png "custom_model")
      </details>
   3. Klik tombil 'Link to existing Wit App'.
      <details>
      <summary>Lihat Gambar</summary>

      ![Link_to_existing_wit_app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/Link_to_existing_wit_app_kczrzx.png "Link_to_existing_wit_app")
      </details>
   4. Masukkan server access token app wit.ai yang didapat di halaman setting aplikasi wit.ai.
      <details>
      <summary>Lihat Gambar</summary>

      ![get_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601057/get_server_access_token_wit_vugxgh.png "get_server_access_token_wit")
      ![add_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601213/add_server_access_token_wit_gnpt2x.png "add_server_access_token_wit")
       </details>
   5. Setelah berhasil terhubung, setiap pesan pengguna yang masuk ke aplikasi kita akan terproses melalui wit.ai dan akan mengirimkan object nlp kedalam request webhook seperti berikut :
      ```JSON
      //console.log(received_message.nlp.entitites)
      {"intent":[{"confidence":0.99694817127169,"value":"translate"}],"phrase_to_translate":[{"suggested":true,"confidence":0.91449405248263,"value":"home","type":"value"}]}
      ```
      
   
   #### Menggunakan API Translate
   sekarang kita akan menggunakan API 'Just Translated' yang ada di RapidAPI untuk menerjemahkan kata yang diinputkan user di chat.
      
   1. Buka halaman [Just Translated RapidAPI](https://rapidapi.com/lebedev.str/api/just-translated/endpoints), pastikan sudah login.
   2. Klik tombol 'Subscribe to Test'.
      <details>
      <summary>Lihat Gambar</summary>

      ![subscribe_translate_api](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607762/subscribe_translate_api_c7lkrv.png "subscribe_translate_api")
      </details>
   3. Pilih Plan 'Basic'.
      <details>
      <summary>Lihat Gambar</summary>

      ![select_just_translated_api_plan](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607869/select_just_translated_api_plan_tt3zfm.png "select_just_translated_api_plan")
      </details>
   4. Buat variabel `RAPID_API_KEY` pada file .env, dan isi variabel tersebut dengan api key yang ada di Just Translated RapidAPI.
      <details>
      <summary>Lihat Gambar</summary>

      ![get_translate_api_key](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603608286/get_translate_api_key_b1vtaw.png "get_translate_api_key")
      </details>
   5. Salin contoh code yang disediakan RapidAPI, dibagian kanan pilih bahasa pemrograman Node.js > Request.
      <details>
      <summary>Lihat Gambar</summary>

      ![select_program_lang](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603611125/select_program_lang_vdwja2.png "select_program_lang")
      </details>
   6. Buat fungsi `translate(text, lang)` dari code yang disalin sebelumnya untuk menerjemahkan kata dalam file app.js dan edit seperi berikut.
      ```javascript
      async function translate(text, lang) {
        return new Promise((resolve, reject) => {
          var options = {
            method: "GET",
            url: "https://just-translated.p.rapidapi.com/",
            qs: { text: text, lang_from: "en", lang_to: lang },
            headers: {
              "x-rapidapi-host": "just-translated.p.rapidapi.com",
              "x-rapidapi-key": process.env.RAPID_API_KEY,
              useQueryString: true
            }
          };

          request(options, function(error, response, body) {
            if (error) reject(error);
            let res = JSON.parse(body);

            resolve(res.text[0]);
          });
        });
      }
      ```
      <details>
      <summary>Lihat Gambar</summary>

      ![translate_function](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603618369/translate_function_xd1kly.png "translate_function")
      </details>
   7. Untuk memanggil fungsi translate dibutuhkan parameter teks dan language (bahasa pengguna), supaya tidak terjadi banyak request get data pengguna di firebase, maka buatlah variabel global language `var language`, lalu isi variabel tersebut pada saat pengguna menambahkan dengan `language = docSnapshot.data().language` dan memperbarui datanya dengan `language = req.body.lang`.
       
      <details>
       <summary>Lihat Gambar</summary>

      ![var_lang](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621556/var_lang_h3etrc.png "var_lang")
      
      ![assign_language_variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621728/assign_language_variable_gzywcr.png "assign_language_variable")
      
      ![update_language_variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603622016/update_language_variable_ptlrsy.png "update_language_variable")
      </details>
   
   8. Memperbarui fungsi `handleMessage` untuk memanggil fungsi translate ketika nlp(wit.ai) confidence intent `translate` dan entity `phrase_to_translate` > 0.8.
      ```javascript
         async function handleMessage(sender_psid, received_message) {
         let response;

         // mengecek ketika message mengandung teks
         if (received_message.text) {
           //membuat variabel dari objek yang dikirimkan nlp wit.ai
           const objNlp = received_message.nlp.entities;

           //mengecek apakah terdapat intent translate dengan confidence lebih dari 0.8, begitu juga dengan confidence entity phrase_to_translate
           if (
             objNlp.intent &&
             objNlp.intent[0].value == "translate" &&
             objNlp.intent[0].confidence > 0.8 &&
             objNlp.phrase_to_translate[0].confidence > 0.8
           ) {
             //cek apakah variabel language sudah terisi, kalau belum akan mengambil data dari firebase
            language = language ? language : await db.doc(`users/${sender_psid}`).get().then(docSnapshot => {
             if (docSnapshot.exists) {

                      return docSnapshot.data().language
               }});
             //memanggil fungsi translate
             let tr = await translate(objNlp.phrase_to_translate[0].value, language);
             //memperbarui variabel response dengan hasil dari fungsi translate
             response = {
               text: tr
             };
           }
         }

         // mengirim respon ke pengguna
         callSendAPI(sender_psid, response);
            }
        ```
   ## 🕹 Alur Fitur HayWord
   kali ini kita akan membuat fitur HayWord dengan menggamifikasi pengguna untuk menebak kata berdasarkan petunjuk definisi, sinonim dan jenis kata.
   
   #### Membuat Menu HayWord dengan Template Generic
   <p align="center">
 
   <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603634150/menu_hayword_p2pimc.jpg">

   </p>
   
   1. Buat variabel `menuPayload` untuk template menu dengan tipe Generic.
   
      ```javascript
           let menuPayload = {
           attachment:{
           type:"template",
           payload:{
             template_type:"generic",
             elements:[
                {
                 title:"HayWord", //judul 
                 image_url:"https://res.cloudinary.com/dzrwauiut/image/upload/v1603631463/HayWord_qj0hzv.png", //image thumbnail
                 subtitle:"enrich your vocabulary through a fun way", //sub judul
                 buttons:[
                   {
                     type:"postback",
                     title:"🕹 Play",
                     payload:"PLAY_HAYWORD" //postback
                   }              
                 ]      
               }
             ]
           }
         }
        }
       ```
      <details>
      <summary>Lihat Gambar</summary>

      ![menuPayload](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603632844/menuPayload_ttgukv.png "menuPayload")
      </details>
      
   2. Tambahkan intruksi menu ketika pengguna selesai menyimpan profilenya.
   
      ```javascript
      //ketika pengguna menyimpan profile
       app.post("/setProfile", (req, res) => {
        console.log(req.body);
        db.doc(`users/${req.body.id}`)
          .update({
            language: `${req.body.lang}`
          })
          .then(function() {
            language = req.body.lang
            callSendAPI(req.body.id, {
              text: 'Your Profile has Updated' }
              //menambahkan intruksi penggunaan menu dan translate kepada pengguna
              .then(()=>{
              callSendAPI(req.body.id, {
              text: 'Type "menu" for accessing our feature or type "Translate <Word or Sentence that you want to translate to your language>"' } )
            })

            res.status(200).end();
           });
       });
       
       ```
       <details>
       <summary>Lihat Gambar</summary>

      ![add_instructions](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603633291/add_instructions_g853du.png "add_instructions")
      </details>
   3. Menampilkan template menu dari menuPayload ketika pengguna mengetikkan `menu` di messenger pada fungsi handleMessage.
   
      ```javascript
      else if(received_message.text.toLowerCase() == 'menu'){
      callSendAPI(sender_psid, menuPayload)
      }
      ```
      <details>
      <summary>Lihat Gambar</summary>

      ![menu_Instruction](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603633897/menu_Instruction_sqpjri.png "menu_Instruction")
      </details>
      
   #### Menggunakan API WordsAPI
   sekarang kita akan menggunakan API 'WordsAPI' yang ada di RapidAPI untuk menerjemahkan kata yang diinputkan user di chat.
      
   1. Buka halaman [WordsAPI RapidAPI](https://rapidapi.com/dpventures/api/wordsapi/endpoints), pastikan sudah login.
   2. Sama seperti langkah penggunaan Just Translated API, subscribe to test > pilih basic plan.
   3. Salin contoh code yang disediakan RapidAPI, dibagian kanan pilih bahasa pemrograman Node.js > Request.
      <details>
      <summary>Lihat Gambar</summary>

      ![copy_wordsapi_code](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603643999/copy_wordsapi_code_n12hax.png "copy_wordsapi_code")
      </details>
   4. Buat fungsi `getWord()` dalam file app.js, dari code yang disalin sebelumnya untuk mendapatkan kata yang akan ditebak pengguna.
   
      ```javascript
      function getWord() {
           return new Promise((resolve, reject) => {
             var options = {
               method: 'GET',
               url: 'https://wordsapiv1.p.rapidapi.com/words/',
               qs: {
               //mengambil kata secara random
                 random: 'true',
                 //minimal kata yang dipilih 4 huruf
                 lettersMin: '4',
                 //maksimal kata yang dipilih 8 huruf
                 lettersMax: '8',
                 //tingkat keumuman kata minimal 4.05 dan maksimal 8.03
                 frequencyMin: '4.05',
                 frequencyMax: '8.03',
                 //kata memiliki atribut definis,jenis kata,sinonim
                 hasDetails: 'definitions,partofspeech,synonyms'
               },
               headers: {
                 'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
                 'x-rapidapi-key': process.env.RAPID_API_KEY,
                 useQueryString: true
               }
             };
             request(options, function (error, response, body) {
               if (error) reject(error);
               const bodyParse = JSON.parse(body)
               console.log(bodyParse);
               const word = bodyParse.word;
               const def = bodyParse.results[0].definition || '';
               const wordType = bodyParse.results[0].partOfSpeech || '';
               const synonym = bodyParse.results[0].synonyms || '';
               //mengembalikan nilai dari kata yang ditebak, definis, jenis kata, dan sinonim
               resolve([word, def, wordType, synonym])
             });
           })
         }
      ```
   5. Membuat variabel `var modeHayWord; var word; var def; var wordType; var synonym; var censored; var featureHayWord=[];` secara global.
      <details>
      <summary>Lihat Gambar</summary>

      ![variabel_haywor](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603653616/variabel_hayword_mwyvoo.png "variabel_haywor")
      </details>
   6. Membuat respon postback `PLAY_HAYWORD` pada fungsi handlePostback() untuk memanggil fungsi getWord().
      ```javascript
      //cek jika payload sama dengan PLAY_HAYWORD
          else if(payload === 'PLAY_HAYWORD'){
          //set variable modeHayWord menjadi true
              modeHayWord = true;
              //memanggil fungsi getWord
               getWord().then(data => {
               //memberikan nilai pada variabel sesuai dengan data yang didapat dari fungsi getWord
                  word = data[0];
                  def = data[1];
                  wordType = data[2];
                  synonym = data[3];
                //membuat format kata menjadi terlihat di awal dan akhir hurug misal F_ _ _ _ _ _ K (FACEBOOK)
                  var regex = /(?<!^).(?!$)/g;
                   censored = word.replace(regex, ' _ ')
                  
                //membuat response quick replies sebagai petunjuk pengguna untuk menebak kata
                 if (wordType != '') {
                    featureHayWord.push({
                      content_type: "text",
                      title: "Type of Word",
                      payload: "WORD_TYPE",
                    })
                  }
                  if (def != '') {
                    featureHayWord.push({
                      content_type: "text",
                      title: "Definition",
                      payload: "DEFINITION",
                    })
                  }
                  if (synonym != '') {
                    featureHayWord.push({
                      content_type: "text",
                      title: "Synonym",
                      payload: "SYNONYM",
                    })
                  }
                  featureHayWord.push({
                    content_type: "text",
                      title: "🥺 Surrender",
                      payload: "SURR",
                  })

                 response = {text: censored, quick_replies: featureHayWord}
                 return callSendAPI(sender_psid, response, "RESPONSE");
               })
            }
       ```
  #### Memberikan Petunjuk dan Memeriksa Jawaban Pengguna
  sekarang kita akan memberikan petunjuk kepada pengguna dan memeriksa jawaban pengguna apakah benar atau salah.
  
  1. Memperbarui fungsi handleMessage() untuk menambahkan respon petunjuk dan hasil jawaban.
     ```javascript
        async function handleMessage(sender_psid, received_message) {
        let response;

        // Checks if the message contains text
        if (received_message.text) {
          // Create the payload for a basic text message, which
          // will be added to the body of our request to the Send API
          console.log(received_message.nlp.entities);
          const objNlp = received_message.nlp.entities;

          if (
            objNlp.intent &&
            objNlp.intent[0].value == "translate" &&
            objNlp.intent[0].confidence > 0.8 &&
            objNlp.phrase_to_translate[0].confidence > 0.8
          ) {
            language = language
              ? language
              : await db
                  .doc(`users/${sender_psid}`)
                  .get()
                  .then(docSnapshot => {
                    if (docSnapshot.exists) {
                      console.log("language from here");
                      return docSnapshot.data().language;
                    }
                  });

            let tr = await translate(objNlp.phrase_to_translate[0].value, language);

            response = {
              text: tr
            };
            return callSendAPI(sender_psid, response);
          }
          else if(received_message.text.toLowerCase() == 'menu'){
            response = menuPayload
            return callSendAPI(sender_psid, response);
          }
          //mengecek apakah pengguna sedang dalam sesi HayWord
          if(modeHayWord){
              if(received_message.quick_reply){
                if(received_message.quick_reply.payload == 'WORD_TYPE'){
                  response = {text: wordType}
                }
                else if(received_message.quick_reply.payload == 'DEFINITION'){
                  response = {text: def}
                }else if (received_message.quick_reply.payload == "SYNONYM") {
                  response = { text: synonym };
                }else if (received_message.quick_reply.payload == "SURR") {
                 featureHayWord = []
                 return callSendAPI(sender_psid, { text: "the Answer is "+word }).then(() =>
                   callSendAPI(sender_psid, {text: 'don\'t give up 💪'})
                 );
               }
                return callSendAPI(sender_psid, response);
              }
              else if(received_message.text){
              //mengeck jawaban pengguna apakah benar atau salah
                if(received_message.text.toLowerCase()== word){
                  modeHayWord = false;
                  featureHayWord = []
                   response = { text: 'Right Answer '}
                  return callSendAPI(sender_psid, response);
                }
                else{
                response = {text: censored, quick_replies: featureHayWord}
                return callSendAPI(sender_psid, {text: 'Wrong Answer'}).then(()=> callSendAPI(sender_psid,response,"RESPONSE"))

                  }
                  }
              }
            }



          }
          ```
