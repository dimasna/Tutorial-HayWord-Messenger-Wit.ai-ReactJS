# 🥇Case Study for Making HayWord App Powered by FB Messenger, Wit.ai and ReactJS


## 🖐Introduction

Hello buddies, on this occasion, I will share how to create a mini version of the HayLingo application (HayWord) with FB messenger, Wit.ai (NLP), and React JS. Previously, HayLingo won 1st place in the 2020 Facebook messenger hackathon by offering HayBot, HayFriend, and HayWord features. In this case study, we will assess, making HayWord a feature to help users enrich their English words by gamification of guessing words with various kinds of clues, such as synonyms, word types, definitions, and translation features. 


#### Why You Should Create Applications on Facebook Messenger ?
👨‍👨‍👦‍👦 Used by 1.3 Billion global users and an estimated 2.4 Billion by 2021.

📣 Marketing through FB Messenger is 70% (Open Rate) greater than email marketing. 

📥 It is the top messaging platform in the US with monthly downloads of 2 million downloads

[Sumber](https://review42.com/facebook-messenger-statistics/)


#### What are we going to learn
- FB Messenger (create a chatbot application, implement the messenger extension webview, quick replies, generic templates, Get Started Button, Greeting Text)
- Wit.ai (create user intentions, entities, training, integration to the messenger)
- ReactJS (Messenger integration, creating React components, state, and props)
- Firebase (Messenger integration, creating and updating user data)
- API integration (Translate API, WordsAPI)

#### Things to prepare
 ☑ Facebook account to login to [FB developer](https://developers.facebook.com/), [Wit.ai](https://wit.ai/), [Glitch](https://glitch.com/), [RapidAPI](https://rapidapi.com/)
 
 ☑ [Firebase Account](https://firebase.google.com/)
 
 ☑ Computer/Laptop
 
 ☑ Internet Connection
 
 

## 📃Table of Contents

<!--ts-->
   * [Introduction](#introduction)
      * [Why You Should Create Applications on Facebook Messenger ?](#why-you-should-create-application-on-facebook-messenger)
      * [What are we going to learn](#what-are-we-going-to-learn)
      * [Things to prepare](#things-to-prepare)
   * [Table of Contents](#table-of-contents)
   * [Installation](#installation)
      * [Set Up Webhook](#set-up-webhook)
      * [Set Up FB App](#set-up-fb-app)
      * [Webhook Integration with FB App](#webhook-integration-with-fb-app)
   * [Welcome Screen](#welcome-screen)
      * [Set Get Started Button](#set-get-started-button)
      * [Set Greeting Text](#set-greeting-text)
      * [Saving Welcome Screen Setting](#saving-welcome-screnn=setting)
   * [Make Profile Settings](#make-profile-settings)
      * [Connecting Firebase with Applications](#connecting-firebase-with-applications)
      * [Creating a User Table in Firebase](#creating-a-user-table-in-firebase)
      * [Creating a Webview to Get User Data with ReactJS](#creating-a-webview-to-get-user-data-with-reactjs)
      * [Saving Data to Firebase](#saving-data-to-firebase)
      * [Creating a Webview Url Button](#creating-a-webview-url-button)
   * [Make Translate Feature](#make-translate-feature)
      * [Creating user intent, entity and train utterance with Wit.ai](#creating-user-intent,-entity-and-train-utterance-with-With.ai)
      * [Connecting Wit.ai with FB Messenger](#connecting-wit.ai-with-fb-messenger)
      * [Using the Translate API](#using-the-translate-api)
   * [Make HayWord Feature](#make-hayword-feature)
      * [Creating HayWord Menu With Generic Templates](#creating-hayword-menu-with-generic-templates)
      * [Using the WordsAPI](#using-the-wordsapi)
      * [Provide Hints and Check User Answers](#provide-hints-and-check-user-answers)
   * [Closing](#closing)
      
<!--te-->



## ⚙Installation

#### Set Up Webhook

This time we will use the Glitch server, if you want to use your own server, you can download the source code from this repository in the section `quickstart` [Here](https://github.com/dimasna/Tutorial-HayWord-Messenger-Wit.ai-ReactJS/tree/main/Source%20Code).

to get the webhook url on Glitch :
1. Click Remix on Glitch below (to copy the initial code) [source : fb messenger quick-start](https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start)
  
   [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/quickstartchatbot)
 
2. Click the "Remix to Edit" button, don't forget to sign in so that the project is saved in your glitch account.
   <details>
     <summary>Show Details</summary>
 
    ![remix to edit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603074774/glitch_remix_mdnfyv.png "remix to edit")
    
   </details>  
3. Click 'Share' button > live app > copy.
   <details>
     <summary>Show Details</summary>
 
     ![copy app url](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603134345/get_url_app_w17azv.png "copy url app")
   </details>  
4. webhook url :
    `https://<COPIED_URL>/webhook`
    > in this case the url of the webhook is : `https://hayword.glitch.me/webhook`

#### Set Up FB App

After getting the webhook url, we will be connected to the Facebook application as follows:
1. Go to [facebok developer app](https://developers.facebook.com/apps/) page, *make sure you are logged in with a facebook account.
2. Click 'Create App' button > select Manage Business Integration.
   <details>
     <summary>Show Details</summary>
 
    ![create app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198175/create_app_gwu1ni.png "create app")
   </details>
3. Fill in the application details > Click 'Create App ID'.
    <details>
     <summary>Show Details</summary>
 
    ![fill in app details](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198691/isi_form_z9iecr.png "fill in app details")
    </details>
4. After successfully creating the App ID, the app dashboard page (HayWord) will appear. On the dashboard, click the Set Up button in the Messenger section.
   <details>
    <summary>Show Details</summary>
 
    ![setup messenger](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603199142/set_up_messenger_i8kdzf.png "setup messenger")
   </details>
5. Click 'Create New Page' button to create a new page that will be linked to our application.
   <details>
     <summary>Show Details</summary>
 
    ![create new page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214062/new_page_gfme2b.png "create new page")
   </details>
6. Fill in the information about the page created and click the 'create page' button.
    <details>
     <summary>Show Details</summary>
 
    ![informasi page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214544/detail_page_iosmuy.png "informasi page")
     </details>
7. After successfully creating the page, then return to the dashboard application and click the 'add or remove page' button.
     <details>
     <summary>Show Details</summary>
 
    ![add or remove page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214928/add_remove_page_vbip8w.png "add or remove page")
      </details>
8. Select the page that we created earlier, then click 'next'.
      <details>
     <summary>Show Details</summary>
 
    ![select page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215211/pilih_page_z1ivyu.png "select page")
       </details>
9. Then click the 'done' button.
       <details>
     <summary>Show Details</summary>
 
    ![done button](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215209/hak_akses_conversation_kjcbcb.png "done button")
      </details>
10. If successful, the page that we have linked with the application will appear.
        <details>
     <summary>Show Details</summary>
 
    ![page appear](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603216217/terhubung_halaman_ejb5ny.jpg "page appear")
    </details>
 #### Webhook Integration with FB App
 
 to integrate the webhook with the FB application, the steps are as follows:
 1. Click the 'Generate Page Access Token' button to authenticate the request to the messenger.
    <details>
      <summary>Show Details</summary>

     ![page access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217293/generate_access_token_ehfnbf.png "page access token")


    </details>
   
 2. Click 'I Understand' checkbox  > copy access token > done.
    <details>
      <summary>Show Details</summary>

    ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217591/access_token_zhjj4l.png "access token")
    </details>
 3. Create a PAGE_ACCESS_TOKEN variable in the .env file in a glitch, then copy the token previously obtained to that variable.
    <details>
      <summary>Show Details</summary>

    ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248148/variabel_token_lvw2r3.png "access token")
     </details>
 4. Next, create a VERIFY_TOKEN webhook variable and fill the variable with what you want in the .env file to verify the webhook in the fb application.
     <details>
      <summary>Show Details</summary>

    ![verify token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248693/verify_token_zeepj3.png "verify token")
      </details>
 5. Then add the webhook url in the application dashboard, click the 'Add Callback Url' button.
      <details>
      <summary>Show Details</summary>

    ![tambah url webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603250861/add_callback_url_fbi1hf.png "tambah url webhook")
       </details>
 6. Fill in the webhook url and token that we have create before, then click the 'Verify and Save' button.
       <details>
      <summary>Show Details</summary>

    ![verify webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603251168/verify_webhook_zdq0h1.png "verify webhook")
        </details>
 7.After successfully verifying, click on the 'Add Subscriptions' button to subscribe the messenger service we will use.
        <details>
      <summary>Show Details</summary>

    ![add subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260345/add_subs_pqey8q.png "add subs")
         </details>
 8. Select `messages` and` messaging_postbacks`, then Click the 'Save' button.
    <details>
      <summary>Show Details</summary>

    ![save subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260344/save_subscription_y2gqzi.png "save subs")
    </details>

 ## 🎉Welcome Screen
 
 The welcome screen is the display when the user first chats with our fb page, we will set a greeting text and get started button.
 
 <p align="center">
 
 <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.4,c_scale,bo_4px_solid_grey/v1603309069/welcome_screen_result_qwk21e.png">
  
 </p>
 
 #### Set Get Started Button
 1. Open the setWelcomeScreen.js file on a glitch, replace `<postback_payload>` with whatever words you want. example here is the word `MULAI`.
    <details>
      <summary>Show Details</summary>

    ![set postback get started button](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603306751/get_started_postback_rijuet.png "set postback get started button")
    </details>
 
 #### Set Greeting Text
 1. Open the setWelcomeScreen.js file on a glitch, change it according to the location of the user and the greeting text to be conveyed.
   ```javascript
   let request_body = {
    "greeting": [
    {
      "locale":"default", // greeting text will be based on the user's location outside the location we specify (default)
      "text":"Selamat Datang di HayWord !" 
    }, {
      "locale":"en_US", // This text greeting will be displayed if the user is from US.
      "text":"Welcome to HayWord"
    }
      ]
  }
   ```
 #### Saving Welcome Screen Setting  
 after we set the 'Get Started' button and the 'Greeting' text, next is to save it in the following way :
 
 1. On the glitch page, click the 'tools' button> select 'Terminal'.
    <details>
      <summary>Show Details</summary>

    ![open terminal](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603308150/open_terminal_oyz7zf.png "open terminal")
    </details>
 2. In the terminal type 'node setWelcomeScreen.js'> press Enter on the keyboard. When successful, the response `Get Started Button Sent!` And `Greeting Text Sent!` Will appear.
     <details>
      <summary>Show Details</summary>

    ![run setWelcomeScreen.js](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603308661/run_setWelcomeScreen.js_rgcg7e.png "setWelcomeScreen.js")
    </details>
 
 ## 👨‍💼Make Profile Settings
 <p align="center">
 
 <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603575202/IMG_4373_ft5fkx.jpg">
  
 </p>
 in this flow we will retrieve the user's native language information for the purposes of the translate feature.
 
 
 
 #### Connecting Firebase with Applications
 before we retrieve user information, we must first create a database where the information is stored and here we will use firebase as the database.
 
 1. Go to [console firebase](https://console.firebase.google.com/) page, make sure you are logged in with a google account.
 2. Click 'Create a Project' button.
    <details>
      <summary>Show Details</summary>

    ![create firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603344422/create_project_firebase_muq6bw.png "create firebase project")
    </details>
 3. Fill in the project data as you wish, and don't forget to check 'I accept the Firebase terms', then click 'continue'.
    <details>
      <summary>Show Details</summary>

    ![fill in firebase project data](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603344533/isi_data_project_firebase_tqszlc.png "fill in firebase project data")
    </details>
 4. In step 2 disable 'Enable Google Analytics for this project' because you don't need it for this project, then click 'Continue'.
    <details>
      <summary>Show Details</summary>

    ![step 2 firebase project](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603345137/step_2_create_firebase_project_nsxtf7.png "step 2 firebase project")
    </details>
 5. After the project is successfully created> click 'Continue' button.
    <details>
      <summary>Show Details</summary>

    ![firebase project was created](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603345339/project_berhasil_dibuat_txwtmj.png "firebase project was created")
    </details>
 6. Click the '</>' button on 'add an app to get started'.
    <details>
    <summary>Show Details</summary>

    ![add app to firebase](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387257/add_app_fx4x3a.png "add app to firebase")
    </details>
 7. Fill in the application name> click the 'Register app' button.
    <details>
    <summary>Show Details</summary>

    ![add nickname app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387396/isi_nama_app_vlhekf.png "add nickname app")
    </details>
 8. Buat variabel `API_KEY` `AUTH_DOMAIN` `PROJECT_ID` pada file .env dalam glitch dan isi sesuai dengan value yang didapat di firebase sdk.
    <details>
      <summary>Show Details</summary>

    ![firebase sdkl](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392369/set_apikey_firebase_pvjd4t.png "firebase sdk")
    ![set variable firebase](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392368/add_variabel_firebase_g7elo8.png "set variable firebase")
    </details>
  9. Setelah itu, kembali ke halaman console firebase > pilih menu 'Develop' > Cloud Firestore > klik tombol 'Create Database'.
     <details>
      <summary>Show Details</summary>

     ![create database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387722/create_database_jmdhfx.png "create database")
     </details>
  10. Pada rules kita pilih 'Test Mode' > klik tombol 'Next'.
  11. Pada location biarkan secara default > klik tombol 'Enable'.
      <details>
      <summary>Show Details</summary>

      ![location database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603388043/cloud_firestore_location_axigbn.png "location database")
      </details>
  
  #### Creating a User Table in Firebase
  1. Pada sidebar kiri firebase, pilih menu Develop > Cloud Firestore > klik tombol 'Start Collection'.
     <details>
      <summary>Show Details</summary>

      ![create table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603453591/create_table_rekvc2.png "create table")
      </details>
  2. Isi nama collection (table) dengan 'users' > klik 'next'.
     <details>
      <summary>Show Details</summary>

      ![add name to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_name_to_table_suu312.png "add name to table")
      </details>
  3. Klik 'Auto ID' > isi field `1. Field = id , Type = string | 2. Field = language , Type = string` dan biarkan value kosong > klik 'Save'.
      <details>
      <summary>Show Details</summary>

      ![add field to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_field_to_table_aj8ktn.png "add field to table")
      </details>
   
   #### Creating a Webview to Get User Data with ReactJS
   
   
   kita akan membuat webview untuk menampilkan form pilihan bahasa pengguna dengan React js.
   
   1. Menambahak variabel `APP_ID` pada .env, untuk mendapatkan app id dari aplikasi kita bisa dilihat di dashboard aplikasi facebook developer.
      <details>
      <summary>Show Details</summary>

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
      <summary>Show Details</summary>

      ![set profile route](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513313/set_profile_route_mydjcb.png "set profile route")
      </details>
   3. Membuat file `setProfile.ejs` di folder views, biar lebih gampang cukup duplikasi dari file `example.ejs` (klik kanan pada file) lalu ubah namanya menjadi 'setProfile.ejs'.
      <details>
      <summary>Show Details</summary>

      ![duplicate ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603476492/duplicate_file_example.ejs_svomu9.png "duplicate ejs file")
      </details>
   4. Edit bagian `<script src="/src/example.js"></script>` pada file views/setProfile.ejs menjadi :
            
      ```html
         <script src="/src/setProfile.js"></script> //load react component dari file setProfile.js
      ```
      <details>
      <summary>Show Details</summary>

      ![edit ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477605/edit_setProfile.ejs_gumwzw.png "edit ejs file")
      </details>
   5. Buat file `setProfile.js` di folder src sebagai react component yang akan di load di file `setProfile.ejs`. biar lebih gampang cukup duplikasi dari file `example.js` (klik kanan pada file) lalu ubah namanya menjadi 'setProfile.js'.
      <details>
      <summary>Show Details</summary>

      ![duplicate js file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477464/duplicate_file_example.js_bdk9v6.png "duplicate js file")
      </details>
   6. Membuat variabel language yang didapat dari firebase dengan menggunakan `window.language` didalam file `setProfile.ejs`.
      ```javascript
      window.language = '<%= lang %>'
      ```
      <details>
      <summary>Show Details</summary>

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
      <summary>Show Details</summary>

      ![whitelist domain](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603569197/whitelist_domain_ifgh1i.png "whitelist domain")
      </details>
   
      
        
   #### Saving Data to Firebase 
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
      
   #### Creating a Webview Url Button
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
      <summary>Show Details</summary>

   ![button url (https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603574549/buton_web_url_arbvok.png "button url ")
   </details>
   
   ## 🈸Make Translate Feature
   <p align="center">
 
   <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603629434/translate_feature_uwtxia.jpg">

   </p>
   kali ini kita akan membuat fitur translate dalam chat dengan menerjemahkan kata yang dimaksud (intent) user menggunakan NLP Wit.ai.
   
   #### Creating user intent, entity and train utterance with Wit.ai
   1. Buka halaman [Apps Wit.ai](https://wit.ai/apps), pastikan sudah login menggunakan akun facebook.
   2. Buat projek aplikasi wit.ai
      <details>
      <summary>Show Details</summary>

      ![create wit.ai app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603597940/create_witai_app_vmp3yg.png "create wit.ai app")
      </details>
   3. Masukkan utterance `Translate <contoh kata/kalimat>` misal 'Translate community' > buat intent 'translate'.
      <details>
      <summary>Show Details</summary>

      ![create utterance and intent](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598178/create_utterance_and_intent_goesao.png "create utterance and intent")
      </details>
   4. Membuat entity kata yang akan diterjemahkan dengan cara blok kata `Community` > pilih `wit/phrase_to_translate`.
      <details>
      <summary>Show Details</summary>

      ![make an entity](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598522/make_an_entity_rhsssl.png "make an entity")
      </details>
   5. Klik tombol 'Train and Validate' untuk melatih dan validasi utterance,intent dan entity yang kita masukkan.
      <details>
      <summary>Show Details</summary>

      ![train_and_validate](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598641/train_and_validate_p3sj3m.png "train_and_validate")
      </details>
   6. Latih terus aplikasi wit.ai kita dengan memasukkan berbagai macam kemungkinan utterance yang digunakan pengguna untuk menerjemahkan.
      <details>
      <summary>Show Details</summary>

      ![train_again](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598864/train_again_w9cdj4.png "train_again")
      ![utterances](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603599136/utterances_hspjzy.png "utterances")
      </details>
      
   #### Connecting Wit.ai with FB Messenger
   setelah kita melatih aplikasi wit.ai selanjutnya kita hubungkan dengan aplikasi di fb messenger kita.
   
   1. Buka halaman dashboard aplikasi facebook developer yang telah kita buat > masuk ke 'Messenger Setting' > pada bagian Built-In NLP pilih halaman aplikasi.
      <details>
      <summary>Show Details</summary>

      ![connect_to_wit.ai](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600163/connect_to_wit.ai_laucxq.png "connect_to_wit.ai")
      </details>
   2. Pada 'Default Language Model' pilih `Custom Model`.
      <details>
      <summary>Show Details</summary>

      ![custom_model](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/custom_model_f6tbok.png "custom_model")
      </details>
   3. Klik tombil 'Link to existing Wit App'.
      <details>
      <summary>Show Details</summary>

      ![Link_to_existing_wit_app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/Link_to_existing_wit_app_kczrzx.png "Link_to_existing_wit_app")
      </details>
   4. Masukkan server access token app wit.ai yang didapat di halaman setting aplikasi wit.ai.
      <details>
      <summary>Show Details</summary>

      ![get_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601057/get_server_access_token_wit_vugxgh.png "get_server_access_token_wit")
      ![add_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601213/add_server_access_token_wit_gnpt2x.png "add_server_access_token_wit")
       </details>
   5. Setelah berhasil terhubung, setiap pesan pengguna yang masuk ke aplikasi kita akan terproses melalui wit.ai dan akan mengirimkan object nlp kedalam request webhook seperti berikut :
      ```JSON
      //console.log(received_message.nlp.entitites)
      {"intent":[{"confidence":0.99694817127169,"value":"translate"}],"phrase_to_translate":[{"suggested":true,"confidence":0.91449405248263,"value":"home","type":"value"}]}
      ```
      
   
   #### Using the Translate API
   sekarang kita akan menggunakan API 'Just Translated' yang ada di RapidAPI untuk menerjemahkan kata yang diinputkan user di chat.
      
   1. Buka halaman [Just Translated RapidAPI](https://rapidapi.com/lebedev.str/api/just-translated/endpoints), pastikan sudah login.
   2. Klik tombol 'Subscribe to Test'.
      <details>
      <summary>Show Details</summary>

      ![subscribe_translate_api](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607762/subscribe_translate_api_c7lkrv.png "subscribe_translate_api")
      </details>
   3. Pilih Plan 'Basic'.
      <details>
      <summary>Show Details</summary>

      ![select_just_translated_api_plan](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607869/select_just_translated_api_plan_tt3zfm.png "select_just_translated_api_plan")
      </details>
   4. Buat variabel `RAPID_API_KEY` pada file .env, dan isi variabel tersebut dengan api key yang ada di Just Translated RapidAPI.
      <details>
      <summary>Show Details</summary>

      ![get_translate_api_key](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603608286/get_translate_api_key_b1vtaw.png "get_translate_api_key")
      </details>
   5. Salin contoh code yang disediakan RapidAPI, dibagian kanan pilih bahasa pemrograman Node.js > Request.
      <details>
      <summary>Show Details</summary>

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
      <summary>Show Details</summary>

      ![translate_function](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603618369/translate_function_xd1kly.png "translate_function")
      </details>
   7. Untuk memanggil fungsi translate dibutuhkan parameter teks dan language (bahasa pengguna), supaya tidak terjadi banyak request get data pengguna di firebase, maka buatlah variabel global language `var language`, lalu isi variabel tersebut pada saat pengguna menambahkan dengan `language = docSnapshot.data().language` dan memperbarui datanya dengan `language = req.body.lang`.
       
      <details>
       <summary>Show Details</summary>

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
   ## 🕹 Make HayWord Feature
   kali ini kita akan membuat fitur HayWord dengan menggamifikasi pengguna untuk menebak kata berdasarkan petunjuk definisi, sinonim dan jenis kata.
   
   #### Creating HayWord Menu With Generic Templates
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
      <summary>Show Details</summary>

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
       <summary>Show Details</summary>

      ![add_instructions](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603633291/add_instructions_g853du.png "add_instructions")
      </details>
   3. Menampilkan template menu dari menuPayload ketika pengguna mengetikkan `menu` di messenger pada fungsi handleMessage.
   
      ```javascript
      else if(received_message.text.toLowerCase() == 'menu'){
      callSendAPI(sender_psid, menuPayload)
      }
      ```
      <details>
      <summary>Show Details</summary>

      ![menu_Instruction](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603633897/menu_Instruction_sqpjri.png "menu_Instruction")
      </details>
      
   #### Using the WordsAPI
   sekarang kita akan menggunakan API 'WordsAPI' yang ada di RapidAPI untuk menerjemahkan kata yang diinputkan user di chat.
      
   1. Buka halaman [WordsAPI RapidAPI](https://rapidapi.com/dpventures/api/wordsapi/endpoints), pastikan sudah login.
   2. Sama seperti langkah penggunaan Just Translated API, subscribe to test > pilih basic plan.
   3. Salin contoh code yang disediakan RapidAPI, dibagian kanan pilih bahasa pemrograman Node.js > Request.
      <details>
      <summary>Show Details</summary>

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
      <summary>Show Details</summary>

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
  #### Provide Hints and Check User Answers
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
  ## 🤞[Closing]
  Selamat telah menyelesaikan tutorial cara membuat aplikasi HayWord dengan FB Messenger, Wit.ai dan React JS. Untuk final code aplikasi messenger dan wit.ai bisa didapatkan di repositori ini.
  
  Code Inspiration : 
  https://github.com/fbsamples/messenger-platform-samples by developers.facebook.com
  Facebook Messenger Documentation
  Wit.ai Documentation
  ReactJS Documentation
  Firebase Documentation
