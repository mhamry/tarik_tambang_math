const gambar = document.querySelector(".gambar img");

// Audio
const soundBenar = new Audio("sound/benar.mp3");
const soundSalah = new Audio("sound/salah.mp3");
const soundMenang = new Audio("sound/winner.mp3");
const soundSuporter = new Audio("sound/supporter.mp3");

let posisi = 0;

// 20 pertanyaan Tim A
const pertanyaanA = [
  // =========================
  // PENJUMLAHAN
  // =========================
  { t: "32 + 27 =", j: "59" },
  { t: "45 + 23 =", j: "68" },
  { t: "56 + 18 =", j: "74" },
  { t: "67 + 25 =", j: "92" },
  { t: "78 + 16 =", j: "94" },

  // =========================
  // PENGURANGAN
  // =========================

  { t: "48 - 25 =", j: "23" },
  { t: "57 - 34 =", j: "23" },
  { t: "69 - 27 =", j: "42" },
  { t: "85 - 36 =", j: "49" },
  { t: "96 - 45 =", j: "51" },

  // =========================
  // PERKALIAN
  // =========================

  { t: "9 x 5 =", j: "45" },
  { t: "4 x 8 =", j: "32" },
  { t: "6 x 9 =", j: "54" },
  { t: "7 x 7 =", j: "49" },
  { t: "8 x 8 =", j: "64" },

  // =========================
  // PEMBAGIAN
  // =========================

  { t: "72 : 8 =", j: "9" },
  { t: "45 : 5 =", j: "9" },
  { t: "54 : 6 =", j: "9" },
  { t: "49 : 7 =", j: "7" },
  { t: "64 : 8 =", j: "8" },
];

// 20 pertanyaan Tim B
const pertanyaanB = [
  // =========================
  // PENJUMLAHAN
  // =========================
  { t: "32 + 27 =", j: "59" },
  { t: "45 + 23 =", j: "68" },
  { t: "56 + 18 =", j: "74" },
  { t: "67 + 25 =", j: "92" },
  { t: "78 + 16 =", j: "94" },

  // =========================
  // PENGURANGAN
  // =========================

  { t: "48 - 25 =", j: "23" },
  { t: "57 - 34 =", j: "23" },
  { t: "69 - 27 =", j: "42" },
  { t: "85 - 36 =", j: "49" },
  { t: "96 - 45 =", j: "51" },

  // =========================
  // PERKALIAN
  // =========================

  { t: "9 x 5 =", j: "45" },
  { t: "4 x 8 =", j: "32" },
  { t: "6 x 9 =", j: "54" },
  { t: "7 x 7 =", j: "49" },
  { t: "8 x 8 =", j: "64" },

  // =========================
  // PEMBAGIAN
  // =========================

  { t: "72 : 8 =", j: "9" },
  { t: "45 : 5 =", j: "9" },
  { t: "54 : 6 =", j: "9" },
  { t: "49 : 7 =", j: "7" },
  { t: "64 : 8 =", j: "8" },
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(pertanyaanA);
shuffle(pertanyaanB);

let indexA = 0;
let indexB = 0;

// Tampilkan pertanyaan pertama
document.getElementById("pertanyaanA").textContent = pertanyaanA[indexA].t;
document.getElementById("pertanyaanB").textContent = pertanyaanB[indexB].t;

// ==================================================
//                 JAWAB TIM A
// ==================================================
const jawabA = document.querySelector(".jawabA");
jawabA.onclick = () => {
  const inputA = document.getElementById("jawabanA").value.toLowerCase().trim();
  document.getElementById("jawabanA").value = "";

  if (inputA === pertanyaanA[indexA].j) {
    posisi -= 2;
    gambar.style.transform = `translateX(${posisi}%)`;
    soundBenar.play();
  } else {
    soundSalah.play();
  }

  indexA++;

  if (indexA >= pertanyaanA.length) {
    alert("Pertanyaan Tim A habis!");
    return;
  }

  document.getElementById("pertanyaanA").textContent = pertanyaanA[indexA].t;

  setTimeout(() => {
    cekPemenang();
  }, 1000);
};

// ==================================================
//                 JAWAB TIM B
// ==================================================
const jawabB = document.querySelector(".jawabB");
jawabB.onclick = () => {
  const inputB = document.getElementById("jawabanB").value.toLowerCase().trim();
  document.getElementById("jawabanB").value = "";

  if (inputB === pertanyaanB[indexB].j) {
    posisi += 2;
    gambar.style.transform = `translateX(${posisi}%)`;
    soundBenar.play();
  } else {
    soundSalah.play();
  }

  indexB++;

  if (indexB >= pertanyaanB.length) {
    alert("Pertanyaan Tim B habis!");
    return;
  }

  document.getElementById("pertanyaanB").textContent = pertanyaanB[indexB].t;

  setTimeout(() => {
    cekPemenang();
  }, 1000);
};

// ==========================
// CEK PEMENANG
// ==========================
function cekPemenang() {
  const alertPemenangA = document.querySelector(".alert-pemenangA");
  const alertPemenangB = document.querySelector(".alert-pemenangB");
  const game = document.querySelector(".game");
  if (posisi <= -14) {
    soundMenang.play();
    // alert("TIM A MENANG!");
    alertPemenangA.style.display = "block";
    game.style.opacity = "0.1";
  }

  if (posisi >= 14) {
    soundMenang.play();
    // alert("TIM B MENANG!");
    alertPemenangB.style.display = "block";
    game.style.opacity = "0.1";
  }
}

///keyboard
// Fungsi untuk membuat keyboard virtual
function buatKeyboard(idKeyboard, inputTarget) {
  const keyboard = document.getElementById(idKeyboard);
  const keys = "0123456789";
  const inputEl = document.getElementById(inputTarget);

  // Tambah tombol huruf
  keys.split("").forEach((huruf) => {
    const tombol = document.createElement("div");
    tombol.className = "key";
    tombol.textContent = huruf;
    tombol.onmousedown = (e) => e.preventDefault();
    tombol.onclick = () => {
      document.getElementById(inputTarget).value += huruf.toLowerCase();
    };
    keyboard.appendChild(tombol);
  });

  // Tombol Backspace
  const back = document.createElement("div");
  back.className = "key big";
  back.textContent = "DELETE";
  back.onmousedown = (e) => e.preventDefault();
  back.onclick = () => {
    let inp = document.getElementById(inputTarget);
    inp.value = inp.value.slice(0, -1);
    inputEl.focus();
  };
  keyboard.appendChild(back);
}

// Buat 2 keyboard: untuk Tim A dan Tim B
buatKeyboard("keyboardA", "jawabanA");
buatKeyboard("keyboardB", "jawabanB");

//Putar backsound supporter
// Fungsi untuk memutar suara supporter sekali saja saat layar diklik
function putarBacksound() {
  soundSuporter.loop = true; // Opsional: Agar lagu otomatis mengulang terus saat habis
  soundSuporter.volume = 0.5; // Opsional: Mengecilkan suara supporter agar tidak menutupi sound benar/salah (rentang 0.0 - 1.0)

  soundSuporter
    .play()
    .then(() => {
      // Jika berhasil diputar, hapus sensor klik agar fungsi ini tidak berjalan terus-menerus setiap kali diklik
      document.removeEventListener("click", putarBacksound);
    })
    .catch((error) => {
      console.log("Autoplay diblokir oleh browser, menunggu interaksi pengguna.");
    });
}

// Pasang sensor klik global pada dokumen
document.addEventListener("click", putarBacksound);
