# 🥇Case Study for Making HayWord App Powered by FB Messenger, Wit.ai and ReactJS


## 🖐Introduction

Hello buddies, on this occasion, I will share how to create a mini version of the HayLingo application (HayWord) with FB messenger, Wit.ai (NLP), and React JS. Previously, HayLingo won 1st place in the 2020 Facebook messenger hackathon by offering HayBot, HayFriend, and HayWord features. In this case study, we will assess, making HayWord a feature to help users enrich their English words by gamification of guessing words with various kinds of clues, such as synonyms, word types, definitions, and translation features. 


#### Why You Should Create Applications on Facebook Messenger ?
👨‍👨‍👦‍👦 Used by 1.3 Billion global users and an estimated 2.4 Billion by 2021.

📣 Marketing through FB Messenger is 70% (Open Rate) greater than email marketing. 

📥 It is the top messaging platform in the US with monthly downloads of 2 million downloads

[Source](https://review42.com/facebook-messenger-statistics/)


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
      * [Why You Should Create Applications on Facebook Messenger ?](#why-you-should-create-applications-on-facebook-messenger-)
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
      * [Saving Welcome Screen Setting](#saving-welcome-screen-setting)
   * [Make Profile Settings](#make-profile-settings)
      * [Connecting Firebase with Applications](#connecting-firebase-with-applications)
      * [Creating a User Table in Firebase](#creating-a-user-table-in-firebase)
      * [Creating a Webview to Get User Data with ReactJS](#creating-a-webview-to-get-user-data-with-reactjs)
      * [Saving Data to Firebase](#saving-data-to-firebase)
      * [Creating a Webview Url Button](#creating-a-webview-url-button)
   * [Make Translate Feature](#make-translate-feature)
      * [Creating user intent, entity and train utterance with Wit.ai](#creating-user-intent-entity-and-train-utterance-with-witai)
      * [Connecting Wit.ai with FB Messenger](#connecting-witai-with-fb-messenger)
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
1. Click Remix on Glitch below (to copy the initial code)
  
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
 7. After successfully verifying, click on the 'Add Subscriptions' button to subscribe the messenger service we will use.
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
 8. Create ʻAPI_KEY` ʻAUTH_DOMAIN` `PROJECT_ID` variable in the .env file in the glitch and fill it according to the value obtained in firebase sdk.
    <details>
      <summary>Show Details</summary>

    ![firebase sdkl](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392369/set_apikey_firebase_pvjd4t.png "firebase sdk")
    ![set variable firebase](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603392368/add_variabel_firebase_g7elo8.png "set variable firebase")
    </details>
  9. After that, return to the firebase console page > select the 'Develop' menu> Cloud Firestore > click the 'Create Database' button.
     <details>
      <summary>Show Details</summary>

     ![create database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603387722/create_database_jmdhfx.png "create database")
     </details>
  10. In rules we select 'Test Mode'> click the 'Next' button.
  11. In the location, leave it by default > click the 'Enable' button.
      <details>
      <summary>Show Details</summary>

      ![location database](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603388043/cloud_firestore_location_axigbn.png "location database")
      </details>
  
  #### Creating a User Table in Firebase
  1. On the left sidebar of firebase, select the 'Develop' menu> Cloud Firestore> click the 'Start Collection' button.
     <details>
      <summary>Show Details</summary>

      ![create table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603453591/create_table_rekvc2.png "create table")
      </details>
  2. Fill in the name of the collection (table) with 'users'> click 'next'.
     <details>
      <summary>Show Details</summary>

      ![add name to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_name_to_table_suu312.png "add name to table")
      </details>
  3. Click 'Auto ID'> fill in the field `1. Field = id, Type = string | 2. Field = language, Type = string` and leave the value blank> click 'Save'.
      <details>
      <summary>Show Details</summary>

      ![add field to table](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603456448/add_field_to_table_aj8ktn.png "add field to table")
      </details>
   
   #### Creating a Webview to Get User Data with ReactJS
   
   
   we will create a webview to display the user language choice form with React js.
   
   1. Add the `APP_ID` variable in .env, to get the app id of our application, you can see it on the facebook developer application dashboard.
      <details>
      <summary>Show Details</summary>

      ![get app id](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513718/app_id_xlqaxn.png "get app id")
      ![set app id variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603513718/add_app_id_valiable_jjiohs.png "set app id variable")
      </details>
    
   2. Create the get `/ setProfile` route in app.js.
      ```javascript
         //set route with param userID
         app.get('/setProfile/:userID', (req, res, next) => { 
           db.doc(`users/${req.params.userID}`).get().then((docSnapshot) => {
           //check whether the user data is already in firebase
            if(docSnapshot.exists){
            //sends the setProfile.ejs file in the views and data folder of the app id, title and language
               res.render('setProfile',{appId: APP_ID, title: 'Setting Profile', lang: docSnapshot.data().language});
            //if not, it will enter user data into firebase
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
   3. Create a `setProfile.ejs` file in the views folder, so it's easier just to duplicate the ʻexample.ejs` file (right click on the file) then rename it to 'setProfile.ejs'.
      <details>
      <summary>Show Details</summary>

      ![duplicate ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603476492/duplicate_file_example.ejs_svomu9.png "duplicate ejs file")
      </details>
   4. Edit the `<script src =" /src/example.js "> </script>` section of the views /setProfile.ejs file to be :
            
      ```html
         <script src="/src/setProfile.js"></script> //load react component from setProfile.js file
      ```
      <details>
      <summary>Show Details</summary>

      ![edit ejs file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477605/edit_setProfile.ejs_gumwzw.png "edit ejs file")
      </details>
   5. Create a `setProfile.js` file in the src folder as a react component which will be loaded in the` setProfile.ejs` file. so it's easier just duplicate the file `example.js` (right click on the file) then rename it to 'setProfile.js'.
      <details>
      <summary>Show Details</summary>

      ![duplicate js file](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603477464/duplicate_file_example.js_bdk9v6.png "duplicate js file")
      </details>
   6. Create a language variable obtained from firebase using `window.language` in the ` setProfile.ejs` file.
      ```javascript
      window.language = '<%= lang %>'
      ```
      <details>
      <summary>Show Details</summary>

      ![add wondow lang variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603555076/lang_window_variable_psx7k4.png "add wondow lang variable")
      </details>
   7. Create the react form component in the `setProfile.js` file.
      ```javascript
      'use strict';

        const e = React.createElement;
        //create a select input form component
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
        //create a 'Save' component button
        class Button extends React.Component {
          constructor(props) {
            super(props);


             this.submit = this.submit.bind(this);
          }
          //create submit function to update profile
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
        //layout components for input form and the 'Save' button
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
   8. whitelist the domain so that the webview we create can be accessed on messenger by:
      open the facebook page (FB page)> page settings> advanced messaging> enter the url of the app to the whitelist domain
      <details>
      <summary>Show Details</summary>

      ![whitelist domain](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603569197/whitelist_domain_ifgh1i.png "whitelist domain")
      </details>
   
      
        
   #### Saving Data to Firebase 
   1. Create the post `/ setProfile` route to store updated user profile data to firebase.
      ```javascript
      app.post('/setProfile', (req, res) => { 
      //update user data (language) to firebase
         db.doc(`users/${req.body.id}`).update({
        language: `${req.body.lang}`
      }).then(function() {
      //sends a message to the user that the data has been saved successfully
      callSendAPI(req.body.id, {
        text: 'Your Profile has Updated' })
        res.status(200).end()
      });
               }
            );
      ```
      
   #### Creating a Webview Url Button
   Now we are going to make our application reply to the message with the webview url button template when the user first interacts with our application (Get Started Button), previously we have set the postback for Get Started is 'MULAI'.
   
   1. Make a condition if there is a message with the postback 'MULAI', then we will reply with the webview url button template.
      ```javascript
         //function for postback type message management
         function handlePostback(sender_psid, received_postback) {
  
              let response;
             // get payload postback
             let payload = received_postback.payload;
             //check whether the postback payload is the same as 'MULAI' (user clicks the Get Started Button)
           if(payload === 'MULAI'){
           
           //provide a response template button
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
             // send a message with the response that we created above
             callSendAPI(sender_psid, response);
           }
        ```
      <details>
         <summary>Show Details</summary>

      ![button url](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603574549/buton_web_url_arbvok.png "button url ")
      </details>
   
   ## 🈸Make Translate Feature
   <p align="center">
 
   <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603629434/translate_feature_uwtxia.jpg">

   </p>
   this time we will create the translate feature in the chat by translating the intended word (intent) by the user using NLP Wit.ai.
   
   #### Creating user intent, entity and train utterance with Wit.ai
   1. Go to [Apps Wit.ai](https://wit.ai/apps) page, make sure you are logged in using a facebook account.
   2. Create a wit.ai application project
      <details>
      <summary>Show Details</summary>

      ![create wit.ai app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603597940/create_witai_app_vmp3yg.png "create wit.ai app")
      </details>
   3. add utterance `Translate <example word / sentence>` for example 'Translate community'> create 'translate' intent.
      <details>
      <summary>Show Details</summary>

      ![create utterance and intent](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598178/create_utterance_and_intent_goesao.png "create utterance and intent")
      </details>
   4. Create word entities to be translated by block word `Community`> select` wit/ phrase_to_translate`.
      <details>
      <summary>Show Details</summary>

      ![make an entity](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598522/make_an_entity_rhsssl.png "make an entity")
      </details>
   5. Click the 'Train and Validate' button to train and validate the utterances, intents and entities that we add.
      <details>
      <summary>Show Details</summary>

      ![train_and_validate](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598641/train_and_validate_p3sj3m.png "train_and_validate")
      </details>
   6. Continue to train our wit.ai application by entering the various possible utterances that the user uses to translate.
      <details>
      <summary>Show Details</summary>

      ![train_again](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598864/train_again_w9cdj4.png "train_again")
      ![utterances](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603599136/utterances_hspjzy.png "utterances")
      </details>
      
   #### Connecting Wit.ai with FB Messenger
   after we train the wit.ai application then we connect it with the application on our fb messenger.
   
   1. Open the facebook developer dashboard page that we have created> go to 'Messenger Settings' > in the Built-in NLP section select the application page.
      <details>
      <summary>Show Details</summary>

      ![connect_to_wit.ai](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600163/connect_to_wit.ai_laucxq.png "connect_to_wit.ai")
      </details>
   2. In the 'Default Language Model' select 'Custom Model`.
      <details>
      <summary>Show Details</summary>

      ![custom_model](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/custom_model_f6tbok.png "custom_model")
      </details>
   3. Click 'Link to existing Wit App' button.
      <details>
      <summary>Show Details</summary>

      ![Link_to_existing_wit_app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/Link_to_existing_wit_app_kczrzx.png "Link_to_existing_wit_app")
      </details>
   4. Enter the wit.ai app server access token obtained on the wit.ai application settings page.
      <details>
      <summary>Show Details</summary>

      ![get_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601057/get_server_access_token_wit_vugxgh.png "get_server_access_token_wit")
      ![add_server_access_token_wit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601213/add_server_access_token_wit_gnpt2x.png "add_server_access_token_wit")
       </details>
   5. After successfully connecting, every user message that enters our application will be processed through wit.ai and will send the nlp object into the webhook request as follows :
      ```JSON
      //console.log(received_message.nlp.entitites)
      {"intent":[{"confidence":0.99694817127169,"value":"translate"}],"phrase_to_translate":[{"suggested":true,"confidence":0.91449405248263,"value":"home","type":"value"}]}
      ```
      
   
   #### Using the Translate API
   now we will use the API 'Just Translated' in RapidAPI to translate the words that users enter in the chat.
      
   1. Go to [Just Translated RapidAPI](https://rapidapi.com/lebedev.str/api/just-translated/endpoints) page, pastikan sudah login.
   2. Click 'Subscribe to Test' button.
      <details>
      <summary>Show Details</summary>

      ![subscribe_translate_api](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607762/subscribe_translate_api_c7lkrv.png "subscribe_translate_api")
      </details>
   3. Select 'Basic' Plan.
      <details>
      <summary>Show Details</summary>

      ![select_just_translated_api_plan](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607869/select_just_translated_api_plan_tt3zfm.png "select_just_translated_api_plan")
      </details>
   4. Create a variable `RAPID_API_KEY` in the .env file, and fill it with the api key in Just Translated RapidAPI.
      <details>
      <summary>Show Details</summary>

      ![get_translate_api_key](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603608286/get_translate_api_key_b1vtaw.png "get_translate_api_key")
      </details>
   5. Copy the sample code provided by RapidAPI, on the right, select the programming language Node.js > Request.
      <details>
      <summary>Show Details</summary>

      ![select_program_lang](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603611125/select_program_lang_vdwja2.png "select_program_lang")
      </details>
   6. Create a `translate (text, lang)` function from the previously copied code to translate the word in the app.js file and edit it like this.
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
   7. To call the translate function, text and language parameters are needed, so that there are not many requests to get user data in firebase, then create a global language variable `var language`, then fill in these variables when the user adds with `language = docSnapshot.data () .language` and updating its data with `language = req.body.lang`.
       
      <details>
       <summary>Show Details</summary>

      ![var_lang](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621556/var_lang_h3etrc.png "var_lang")
      
      ![assign_language_variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621728/assign_language_variable_gzywcr.png "assign_language_variable")
      
      ![update_language_variable](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603622016/update_language_variable_ptlrsy.png "update_language_variable")
      </details>
   
   8. Updated the `handleMessage` function to call the translate function when nlp (wit.ai) confidence intent` translate` and entity `phrase_to_translate`> 0.8.
      ```javascript
         async function handleMessage(sender_psid, received_message) {
         let response;

         // check when message contains text
         if (received_message.text) {
           //create variables from the object passed nlp wit.ai
           const objNlp = received_message.nlp.entities;

           //Checks whether there is an intent translate with a confidence greater than 0.8, as well as a confidence entity phrase_to_translate
           if (
             objNlp.intent &&
             objNlp.intent[0].value == "translate" &&
             objNlp.intent[0].confidence > 0.8 &&
             objNlp.phrase_to_translate[0].confidence > 0.8
           ) {
             //check whether the language variable is filled, otherwise it will retrieve data from Firebase
            language = language ? language : await db.doc(`users/${sender_psid}`).get().then(docSnapshot => {
             if (docSnapshot.exists) {

                      return docSnapshot.data().language
               }});
             //call translate function
             let tr = await translate(objNlp.phrase_to_translate[0].value, language);
             //update the response variable with the result from the translate function
             response = {
               text: tr
             };
           }
         }

         // send response to user
         callSendAPI(sender_psid, response);
            }
        ```
   ## 🕹Make HayWord Feature
   this time we will create a HayWord feature by attracting users to guess the word based on definitions, synonyms and word types.
   
   #### Creating HayWord Menu With Generic Templates
   <p align="center">
 
   <img src="https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603634150/menu_hayword_p2pimc.jpg">

   </p>
   
   1. Create a `menuPayload` variable for the menu template with type Generic.
   
      ```javascript
           let menuPayload = {
           attachment:{
           type:"template",
           payload:{
             template_type:"generic",
             elements:[
                {
                 title:"HayWord",  
                 image_url:"https://res.cloudinary.com/dzrwauiut/image/upload/v1603631463/HayWord_qj0hzv.png", //thumbnail image
                 subtitle:"enrich your vocabulary through a fun way", 
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
      
   2. Add menu instructions when the user is done saving their profile.
   
      ```javascript
      //when the user saves the profile
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
              //add instructions to use menus and translate to users
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
   3. Displays the menu template from menuPayload when the user types `menu` in messenger in the handleMessage function.
   
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
   Now we will use the API 'WordsAPI' in RapidAPI to translate the words that users input in the chat.
      
   1. Go to [WordsAPI RapidAPI](https://rapidapi.com/dpventures/api/wordsapi/endpoints) page, make sure you are logged in.
   2. Just like the steps for using Just Translated API, subscribe to the test > choose the basic plan.
   3. Copy the sample code provided by RapidAPI, on the right, select the programming language Node.js > Request.
      <details>
      <summary>Show Details</summary>

      ![copy_wordsapi_code](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603643999/copy_wordsapi_code_n12hax.png "copy_wordsapi_code")
      </details>
   4. Create a `getWord ()` function in the app.js file from the code previously copied to get the word the user will guess.
   
      ```javascript
      function getWord() {
           return new Promise((resolve, reject) => {
             var options = {
               method: 'GET',
               url: 'https://wordsapiv1.p.rapidapi.com/words/',
               qs: {
               //take the word randomly
                 random: 'true',
                 //at least 4 letters of the word selected
                 lettersMin: '4',
                 //the maximum word selected is 8 letters
                 lettersMax: '8',
                 //word generality level of at least 4.05 and a maximum of 8.03
                 frequencyMin: '4.05',
                 frequencyMax: '8.03',
                 //words have definite, word types, synonyms attributes
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
               //returns the value of the guessed word, definition, word type, and synonym
               resolve([word, def, wordType, synonym])
             });
           })
         }
      ```
   5. Create the `var modeHayWord; var word; var def; var wordType; var synonym; var censored; var featureHayWord = []; `globally.
      <details>
      <summary>Show Details</summary>

      ![variabel_hayword](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603653616/variabel_hayword_mwyvoo.png "variabel_hayword")
      </details>
   6. Create a `PLAY_HAYWORD` postback response to the handlePostback() function to call the getWord() function.
      ```javascript
      //check if the payload is the same as PLAY_HAYWORD
          else if(payload === 'PLAY_HAYWORD'){
          //set the modeHayWord variable to true
              modeHayWord = true;
              //call getWord function
               getWord().then(data => {
               //assigns a value to the variable according to the data obtained from the getWord function
                  word = data[0];
                  def = data[1];
                  wordType = data[2];
                  synonym = data[3];
                //make word formatting visible at the beginning and end of letters eg F_ _ _ _ _ _ K (FACEBOOK)
                  var regex = /(?<!^).(?!$)/g;
                   censored = word.replace(regex, ' _ ')
                  
                //create response quick replies as instructions for the user to guess the word
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
  now we are going to provide the hint to the user and check the user's answer whether it is right or wrong.
  
  1. Updated the handleMessage() function to add hint responses and answer results.
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
          //check if the user is in a HayWord session
          if(modeHayWord){
          // give the user hints
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
              //check the user's answer whether it is correct or not
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
  ## 🤞Closing
  Congratulations on completing the tutorial on how to create a HayWord application with FB Messenger, Wit.ai and React JS. The final code for messenger and wit.ai applications can be found in this repository.
  
  Code Inspiration :
  
  - https://github.com/fbsamples/messenger-platform-samples by developers.facebook.com  
  - Facebook Messenger Documentation  
  - Wit.ai Documentation
  - ReactJS Documentation  
  - Firebase Documentation
