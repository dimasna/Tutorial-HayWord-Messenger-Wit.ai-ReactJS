# 🥇Studi Kasus Membuat Aplikasi HayLingo Versi Mini dengan FB Messenger, Wit.ai dan React JS


## Pendahuluan

Halo kawan-kawan, pada kesempatan kali ini saya akan berbagi tutorial cara membuat aplikasi HayLingo versi mini dengan FB messenger, Wit.ai (NLP) dan React JS. Sebelumnya HayLingo meraih juara 1 lomba hackathon facebook messenger 2020 dengan menawarkan fitur HayBot, HayFriend, dan HayWord. Di studi kasus kali ini kita akan berfokus membuat HayWord yaitu fitur untuk membantu pengguna memperkaya kosa kata bahasa inggrisnya dengan gamifikasi tebak kata dengan berbagai macam petunjuk yang diberikan seperti sinonim, jenis kata dan definisi. 

berikut ini tampilan aplikasi yang akan kita buat :

#### Mengapa Harus Buat Aplikasi di Facebook Messenger ?

#### Arsitektur Aplikasi yang akan dibuat

#### Hal-hal yang harus dipersiapkan
 ☑ Akun Facebook untuk login di FB developer (https://developers.facebook.com/) dan Wit.ai (https://wit.ai/)
 
 ☑ Akun RapidAPI (https://rapidapi.com/)
 
 ☑ Akun Firebase (https://firebase.google.com/)
 
 

## 📃Daftar Isi

<!--ts-->
   * [Pendahuluan](#pendahuluan)
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
