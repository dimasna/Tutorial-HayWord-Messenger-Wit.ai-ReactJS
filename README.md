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
      * [Mengatur Teks Greeting](#stdin)
      * [Mengatur Tombol Get Started](#local-files)
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
    ![gambar remix to edit](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603074774/glitch_remix_mdnfyv.png "remix to edit")
    
3. Klik tombol share > live app > copy
    ![copy app url](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603134345/get_url_app_w17azv.png "copy url app")

4. webhook url :
    `https://<URL_YANG_KAMU_COPY>/webhook`
    > dikasus ini url webhooknya adalah  : `https://hayword.glitch.me/webhook`

#### Mengatur FB App

Setelah mendapatkan url webhook, kita akan menghubungkanya dengan Facebook App sebagai berikut :
1. Buka halaman [facebok developer app](https://developers.facebook.com/apps/), *pastikan sudah login dengan akun facebook.
2. klik tombol Create App > pilih Manage Business Integration.
    ![create app](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198175/create_app_gwu1ni.png "create app")
3. Isi detail aplikasi > klik Create App ID.
    ![isi detail aplikasi](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603198691/isi_form_z9iecr.png "isi detail aplikasi")
4. Setelah berhasil membuat App ID, akan tampil halaman dashboard app yang dibuat (HayWord). Pada dashboard tersebut klik tombol Set Up dibagian Messenger.
    ![setup messenger](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603199142/set_up_messenger_i8kdzf.png "setup messenger")
5. Klik Create New Page untuk membuat halaman baru yang akan terhubung dengan aplikasi kita
    ![create new page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214062/new_page_gfme2b.png "create new page")
6. Isi informasi mengenai halaman yang dibuat dan klik tombol create page
    ![informasi page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214544/detail_page_iosmuy.png "informasi page")
7. Setelah berhasil membuat halaman, lalu kembali ke dashboard app dan klik tombol add or remove pages
    ![add or remove page](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603214928/add_remove_page_vbip8w.png "add or remove page")
8. Pilih halaman yang telah kita buat tadi, kemudian klik next 
    ![pilih halaman](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215211/pilih_page_z1ivyu.png "pilih halaman")
9. Lalu klik tombol done
    ![tombol done](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603215209/hak_akses_conversation_kjcbcb.png "add or tombol done")
10. Jika berhasil, maka akan tampil halaman yang telah kita hubungkan dengan app
    ![tampil halaman](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603216217/terhubung_halaman_ejb5ny.jpg "tampil halaman")
    
 #### Integrasi Webhook dengan FB App
 
 untuk mengintegrasikan webhook dengan FB App langkah-langkahnya sebagai berikut :
1. Klik Tombol Generate Page Access Token untuk mengotentikasi request ke messenger
   ![page access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217293/generate_access_token_ehfnbf.png "page access token")
2. Klik Checkbox I Understand > copy access token > done
   ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603217591/access_token_zhjj4l.png "access token")
3. Buat variabel PAGE_ACCESS_TOKEN pada file .env dalam glitch, lalu salin token yang sebelumnya didapat ke variabel tersebut.
   ![access token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248148/variabel_token_lvw2r3.png "access token")
4. Selanjutnya buat variabel webhook VERIFY_TOKEN dan isi variabel dengan apa yang kamu mau pada file .env untuk memverifikasi webhook di fb app.
   ![verify token](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603248693/verify_token_zeepj3.png "verify token")
5. Kemudian tambahkan url webhook di dalam dashboard aplikasi, klik tombol 'Add Callback Url'
   ![tambah url webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603250861/add_callback_url_fbi1hf.png "tambah url webhook")
6. Isi url webhook dan token yang telah kita atur sebelumnya, lalu klik tombol 'Verify and Save'
   ![verify webhook](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603251168/verify_webhook_zdq0h1.png "verify webhook")
7. Setelah berhasil memverifikasi, klik tombol 'Add Subscriptions' untuk berlangganan service messenger yang akan kita gunakan
   ![add subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260345/add_subs_pqey8q.png "add subs")
8. Setelah berhasil memverifikasi, klik tombol 'Add Subscriptions' untuk berlangganan service messenger yang akan kita gunakan
   ![add subs](https://res.cloudinary.com/dzrwauiut/image/upload/bo_4px_solid_grey/v1603260345/add_subs_pqey8q.png "add subs")


   
