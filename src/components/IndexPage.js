import React from 'react';
import Swal from 'sweetalert2';

const awal = () => {
  Swal.fire({
    title: 'Haii Amalia..',
    text: 'Sebelum mulai, gimana kabarnya hari ini? semoga sehat selalu yaa..',
    icon: 'info',
    confirmButtonText: 'Lanjut',
  }).then(function () {
    Swal.fire({
      title: 'Eummm',
      text: 'Sebelumnya, aku mau minta maaf kalau pernah bikin kamu sakit hati, pernah bikin kamu merasa ga nyaman, selalu bikin kamu overthink, selalu kelihatan cuek, selalu kelihatan ga perhatian',
      confirmButtonText: 'Lanjut',
    }).then(function () {
      Swal.fire({
        title: 'Tapii',
        text: 'Sebenernya aku selalu perhatiin kamu dari jauh kok, aku kadang keliatan cuek karena aku takut kalau aku bakal bikin kamu ngerasa ga nyaman karena sikapku, tapi tenang aja aku bakal tetep selalu perhatiin kamu dari jauh kok dan aku juga minta maaf banget atas kejadian hari jumat kemarin yaa, semoga kejadian kaya gitu ga keulang lagi, sekali lagi maaf ya..',
        confirmButtonText: 'Lanjut',
      }).then(function () {
        Swal.fire({
          title: 'Dan juga',
          text: 'Aku mau ucapin terimakasih yang sebesar besarnya, terimakasih karena kamu telah hadir di hidup aku, terimakasih karena kamu udah buat hari hari ku yang biasa aja jadi hari hari yang spesial karena adanya kamu, terimakasih karena kamu udah mau dengerin curhatan aku yang kekanak kanakan ini, terimakasih karena kamu udah bener bener buat aku jadi semangat lagi dan mengurungkan niat ku buat nyerah, terimakasih atas segalanya, terimakasih banyak..',
          confirmButtonText: 'Lanjut',
        }).then(function () {
          Swal.fire({
            title: 'Oh iya',
            text: 'Semangat terus ya, jangan pernah ada pikiran buat nyerah, jangan pernah punya pikiran kalau kamu sendirian, inget semua orang orang dan temen temen yang bakal selalu ada buat kamu di saat apapun, dan juga ada aku yang akan selalu ada di sini kalau misal kamu butuh temen curhat, kamu butuh temen ngobrol, kamu butuh temen buat cerita, jangan terlalu sering insecure karena ur more than just perfect for me..',
            confirmButtonText: 'Lanjut',
          }).then(function () {
            Swal.fire({
              title: 'Dan yang terakhir',
              html: 'Jangan lupa jaga kesehatan ya, jangan sering begadang, jangan sering makan makanan yang pedes, pola makan nya di jaga jangan sampai telat makan, jangan terlalu kecapekan dan juga jangan terlalu memikirkan sesuatu yang bisa bikin kamu pusing secara berlebihan dan jangan lupa untuk selalu bahagia. I will always love u.. <br /> -Iqbal',
              confirmButtonText: 'Terimakasih..',
            });
          });
        });
      });
    });
  });
};

const dua = () => {
  Swal.fire({
    title: 'Haii',
    text: 'Sebelum mulai, gimana kabarnya hari ini? semoga sehat selalu yaa..',
    confirmButtonText: 'Lanjut',
  });
};

const perkumpulan = () => {
  awal.then(dua());
};

function IndexPage() {
  return awal();
}

export default IndexPage;
