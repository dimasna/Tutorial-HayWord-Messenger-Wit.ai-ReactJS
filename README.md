# 🥇Studi Kasus Membuat Aplikasi HayLingo Versi Mini dengan FB Messenger, Wit.ai dan React JS


## 🖐Pendahuluan

Halo kawan-kawan, pada kesempatan kali ini saya akan berbagi tutorial cara membuat aplikasi HayLingo versi mini dengan FB messenger, Wit.ai (NLP) dan React JS. Sebelumnya HayLingo meraih juara 1 lomba hackathon facebook messenger 2020 dengan menawarkan fitur HayBot, HayFriend, dan HayWord. Di studi kasus kali ini kita akan berfokus membuat HayWord yaitu fitur untuk membantu pengguna memperkaya kosa kata bahasa inggrisnya dengan gamifikasi tebak kata dengan berbagai macam petunjuk yang diberikan seperti sinonim, jenis kata dan definisi. 

berikut ini tampilan aplikasi yang akan kita buat :

#### Mengapa Harus Buat Aplikasi di Facebook Messenger ?
👨‍👨‍👦‍👦 Digunakan oleh 1,3 Milyar pengguna global dan diperkirakan 2,4 Milyar pada 2021

📣 Marketing melalui FB Messenger 70%  (Open Rate) lebih besar daripada email marketing 

📥 Menjadi platform messaging teratas di US dengan jumlah unduh bulanan sebesar 2 juta unduhan

[Sumber](https://review42.com/facebook-messenger-statistics/)


#### Arsitektur Aplikasi yang akan dibuat

#### Hal-hal yang harus dipersiapkan
 ☑ Akun Facebook untuk login di FB developer (https://developers.facebook.com/), Wit.ai (https://wit.ai/), Glitch (https://glitch.com/), RapidAPI (https://rapidapi.com/)
 
 ☑ Akun Firebase (https://firebase.google.com/)
 
 ☑ Komputer/Laptop
 
 ☑ Koneksi Internet
 
 

## 📃Daftar Isi

<!--ts-->
   * [Pendahuluan](#🖐pendahuluan)
      * [Mengapa Buat App di Facebook Messenger ?](#mengapa-harus-buat-aplikasi-di-facebook-messenger-)
      * [Alur Aplikasi yang akan dibuat](#arsitektur-aplikasi-yang-akan-dibuat)
      * [Apa yang akan kamu pelajari](#arsitektur-aplikasi-yang-akan-dibuat)
      * [Hal yang harus dipersiapkan](#hal-hal-yang-harus-dipersiapkan)
   * [Daftar Isi](#📃daftar-isi)
   * [Instalasi](#⚙instalasi)
      * [Mengatur Webhook](#mengatur-webhook)
      * [Mengatur FB App](#mengatur-fb-app)
      * [Integrasi Webhook dengan FB App](#integrasi-webhook-dengan-fb-app)
   * [Welcome Screen](#usage)
      * [Mengatur Tombol Get Started](#mengatur-tombol-get-started)
      * [Mengatur Teks Greeting](#mengatur-teks-greeting)
      * [Menyimpan Pengaturan Welcome Screen](#menyimpan-pengaturan-welcome-screnn)
   * [Alur Setting Profile](#tests)
      * [Membuat Webview untuk Mendapatkan Data Pengguna dengan ReactJS](#stdin)
      * [Menyimpan Data ke Firebase](#stdin)
   * [Alur Fitur Translate](#dependency)
      * [Mengatur Intent Pengguna dengan Wit.ai](#stdin)
      * [Menggunakan API Wit.ai](#stdin)
      * [Menggunakan API Translate](#stdin)
      * [Membuat Fungsi Translate](#stdin)
   * [Alur Fitur HayWord](#dependency)
      * [Membuat Menu HayWord](#stdin)
      * [Menggunakan API WordAPI](#stdin)
      * [Merubah Format Teks Jawaban Seperti Hangman](#stdin)
      * [Memberikan Petunjuk untuk Jawaban](#arsitektur-aplikasi-yang-akan-dibuat)
      * [Memeriksa Jawaban Pengguna](#stdin)
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
 
 ![welcome screen](https://res.cloudinary.com/dzrwauiut/image/upload/w_0.5,c_scale,bo_4px_solid_grey/v1603309069/welcome_screen_result_qwk21e.png "welcome screen")
 
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
 
 
 
