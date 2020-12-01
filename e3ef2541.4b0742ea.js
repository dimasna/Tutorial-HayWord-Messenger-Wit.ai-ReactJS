(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(l,".").concat(m)]||b[m]||d[m]||r;return a?i.a.createElement(u,c(c({ref:t},o),{},{components:a})):i.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(103)),l={id:"b4",title:"\ud83c\ude38Creating Translate Feature",slug:"/translate-feature"},c={unversionedId:"b4",id:"b4",isDocsHomePage:!1,title:"\ud83c\ude38Creating Translate Feature",description:"translatefeatur",source:"@site/docs\\b4.md",slug:"/translate-feature",permalink:"/docs/translate-feature",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/b4.md",version:"current",sidebar:"someSidebar",previous:{title:"\ud83d\udc68\u200d\ud83d\udcbcCreating Profile Settings",permalink:"/docs/profile-setting"},next:{title:"\ud83d\udd79Creating HayWord Feature",permalink:"/docs/hayword-feature"}},s=[{value:"Creating user intent, entity and train utterance with Wit.ai",id:"creating-user-intent-entity-and-train-utterance-with-witai",children:[]},{value:"Connecting Wit.ai with FB Messenger",id:"connecting-witai-with-fb-messenger",children:[]},{value:"Using the Translate API",id:"using-the-translate-api",children:[]}],o={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/w_0.3,c_scale,bo_4px_solid_grey/v1603629434/translate_feature_uwtxia.jpg",alt:"translate_featur",title:"translate_featur"}))),Object(r.b)("p",null,"   This time we will create the translate feature in the chat by translating the intended word (intent) by the user using NLP Wit.ai."),Object(r.b)("h2",{id:"creating-user-intent-entity-and-train-utterance-with-witai"},"Creating user intent, entity and train utterance with Wit.ai"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wit.ai/apps"}),"Apps Wit.ai")," page, make sure you have login in using a facebook account.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a wit.ai application project"),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603597940/create_witai_app_vmp3yg.png",alt:"create wit.ai app",title:"create wit.ai app"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"add utterance ",Object(r.b)("inlineCode",{parentName:"p"},"Translate <example word / sentence>")," for example 'Translate community'> create 'translate' intent."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598178/create_utterance_and_intent_goesao.png",alt:"create utterance and intent",title:"create utterance and intent"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create word entities to be translated by block word ",Object(r.b)("inlineCode",{parentName:"p"},"Community"),"> select",Object(r.b)("inlineCode",{parentName:"p"}," wit/ phrase_to_translate"),"."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598522/make_an_entity_rhsssl.png",alt:"make an entity",title:"make an entity"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click the 'Train and Validate' button to train and validate the utterances, intents, and entities that we add."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598641/train_and_validate_p3sj3m.png",alt:"train_and_validate",title:"train_and_validate"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Continue to train our wit.ai application by entering the various possible utterances that the user uses to translate."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603598864/train_again_w9cdj4.png",alt:"train_again",title:"train_again"})),"\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603599136/utterances_hspjzy.png",alt:"utterances",title:"utterances"})))))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"What is NLP? Why wit.ai?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Natural Language Processing (NLP) allows you to understand the meaning of a user input. You may need it as a stand-alone layer to parse text or speech into structure data. You will also need NLP to build a conversational app to understand the user query and extract meaningful information out of it. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wit.ai/docs/recipes"}),"source")),Object(r.b)("p",{parentName:"div"},"We use wit.ai because we don't need code to connect it with our app. we can connect it through Fb app developer page that I explain in the next section and it's easy to define intent, entities, and train utterance in wit.ai. "))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"What are intent, entity, and utterance? ")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"intent is what your end-user wants to perform, for example, is translate a word."),Object(r.b)("li",{parentName:"ul"},"entity is data that we get from end-user utterance, for example, translate developer. the entity is developer."),Object(r.b)("li",{parentName:"ul"},"utterance is what the user says, for example, are translate developer, what is developer, translate community.")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The more utterances you validate for each intent, the better it will work. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wit.ai/docs/recipes"}),"source")))),Object(r.b)("h2",{id:"connecting-witai-with-fb-messenger"},"Connecting Wit.ai with FB Messenger"),Object(r.b)("p",null,"   after we train the wit.ai application, then we connect it with the application on our fb messenger."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the facebook developer dashboard page that we have created> go to 'Messenger Settings' > in the Built-in NLP section select the application page."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600163/connect_to_wit.ai_laucxq.png",alt:"connect_to_wit.ai",title:"connect_to_wit.ai"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the 'Default Language Model' select 'Custom Model`."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/custom_model_f6tbok.png",alt:"custom_model",title:"custom_model"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click 'Link to existing Wit App' button."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603600727/Link_to_existing_wit_app_kczrzx.png",alt:"Link_to_existing_wit_app",title:"Link_to_existing_wit_app"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enter the wit.ai app server access token obtained on the wit.ai application settings page."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601057/get_server_access_token_wit_vugxgh.png",alt:"get_server_access_token_wit",title:"get_server_access_token_wit"})),"\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603601213/add_server_access_token_wit_gnpt2x.png",alt:"add_server_access_token_wit",title:"add_server_access_token_wit"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After successfully connecting, every user message that enters our application will be processed through wit.ai and will send the nlp object into the webhook request as follows :"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JSON"}),'//console.log(received_message.nlp.entitites)\n{"intent":[{"confidence":0.99694817127169,"value":"translate"}],"phrase_to_translate":[{"suggested":true,"confidence":0.91449405248263,"value":"home","type":"value"}]}\n')))),Object(r.b)("h2",{id:"using-the-translate-api"},"Using the Translate API"),Object(r.b)("p",null,"   now we will use the API 'Just Translated' in RapidAPI to translate the words that users enter in the chat."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://rapidapi.com/lebedev.str/api/just-translated/endpoints"}),"Just Translated RapidAPI")," page, pastikan sudah login.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click 'Subscribe to Test' button."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607762/subscribe_translate_api_c7lkrv.png",alt:"subscribe_translate_api",title:"subscribe_translate_api"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select 'Basic' Plan."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603607869/select_just_translated_api_plan_tt3zfm.png",alt:"select_just_translated_api_plan",title:"select_just_translated_api_plan"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a variable ",Object(r.b)("inlineCode",{parentName:"p"},"RAPID_API_KEY")," in the .env file, and fill it with the api key in Just Translated RapidAPI."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603608286/get_translate_api_key_b1vtaw.png",alt:"get_translate_api_key",title:"get_translate_api_key"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the sample code provided by RapidAPI, on the right, select the programming language Node.js > Request."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603611125/select_program_lang_vdwja2.png",alt:"select_program_lang",title:"select_program_lang"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"translate (text, lang)")," function from the previously copied code to translate the word in the app.js file and edit it like this."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'async function translate(text, lang) {\n  return new Promise((resolve, reject) => {\n    var options = {\n      method: "GET",\n      url: "https://just-translated.p.rapidapi.com/",\n      qs: { text: text, lang_from: "en", lang_to: lang },\n      headers: {\n        "x-rapidapi-host": "just-translated.p.rapidapi.com",\n        "x-rapidapi-key": process.env.RAPID_API_KEY,\n        useQueryString: true\n      }\n    };\n\n    request(options, function(error, response, body) {\n      if (error) reject(error);\n      let res = JSON.parse(body);\n\n      resolve(res.text[0]);\n    });\n  });\n}\n')),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603618369/translate_function_xd1kly.png",alt:"translate_function",title:"translate_function"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To call the translate function, text and language parameters are needed, so that there are not many requests to get user data in firebase, then create a global language variable ",Object(r.b)("inlineCode",{parentName:"p"},"var language"),", then fill in these variables when the user adds with ",Object(r.b)("inlineCode",{parentName:"p"},"language = docSnapshot.data () .language")," and updating its data with ",Object(r.b)("inlineCode",{parentName:"p"},"language = req.body.lang"),"."),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Details"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621556/var_lang_h3etrc.png",alt:"var_lang",title:"var_lang"}))),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603621728/assign_language_variable_gzywcr.png",alt:"assign_language_variable",title:"assign_language_variable"}))),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603622016/update_language_variable_ptlrsy.png",alt:"update_language_variable",title:"update_language_variable"}))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Updated the ",Object(r.b)("inlineCode",{parentName:"p"},"handleMessage")," function to call the translate function when nlp (wit.ai) confidence intent",Object(r.b)("inlineCode",{parentName:"p"}," translate")," and entity ",Object(r.b)("inlineCode",{parentName:"p"},"phrase_to_translate"),"> 0.8."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'   async function handleMessage(sender_psid, received_message) {\n   let response;\n\n   // check when message contains text\n   if (received_message.text) {\n     //create variables from the object passed nlp wit.ai\n     const objNlp = received_message.nlp.entities;\n\n     //Checks whether there is an intent translate with a confidence greater than 0.8, as well as a confidence entity phrase_to_translate\n     if (\n       objNlp.intent &&\n       objNlp.intent[0].value == "translate" &&\n       objNlp.intent[0].confidence > 0.8 &&\n       objNlp.phrase_to_translate[0].confidence > 0.8\n     ) {\n       //check whether the language variable is filled, otherwise it will retrieve data from Firebase\n      language = language ? language : await db.doc(`users/${sender_psid}`).get().then(docSnapshot => {\n       if (docSnapshot.exists) {\n\n                return docSnapshot.data().language\n         }});\n       //call translate function\n       let tr = await translate(objNlp.phrase_to_translate[0].value, language);\n       //update the response variable with the result from the translate function\n       response = {\n         text: tr\n       };\n     }\n   }\n\n   // send response to user\n   callSendAPI(sender_psid, response);\n      }\n')))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"What is API?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Application Programming Interface (API) is like a way to access a service or method between apps. For example, Hayword app doesn't create a translate service because it's complicated but uses a third-party service to translate (Just Translate API) through API."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Find more APIs on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://rapidapi.com"}),"RapidAPI")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.programmableweb.com/"}),"ProgrammableWeb")))))}p.isMDXComponent=!0}}]);