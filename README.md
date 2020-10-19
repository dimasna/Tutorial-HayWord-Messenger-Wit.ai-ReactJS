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
   
    

