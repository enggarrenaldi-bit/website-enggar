/* ==================== DAFTAR KUTIPAN ==================== */
const daftarKutipan = [
  {
    teks: "Happiness only real when shared.",
    terjemahan: "Kebahagiaan hanya nyata ketika dibagikan.",
    sumber: "Into the Wild (2007)"
  },
  {
    teks: "Sometimes losing your way is the only way to find yourself.",
    terjemahan: "Terkadang kehilangan arah adalah satu-satunya jalan untuk menemukan diri sendiri.",
    sumber: "Terinspirasi dari Wild (2014)"
  },
  {
    teks: "One day, I stopped imagining the journey and started living it.",
    terjemahan: "Suatu hari, aku berhenti membayangkan perjalanan dan mulai menjalaninya.",
    sumber: "Terinspirasi dari The Secret Life of Walter Mitty (2013)"
  },
  {
    teks: "Reaching the summit means nothing if you forget the importance of coming home.",
    terjemahan: "Mencapai puncak tidak berarti apa-apa jika kamu melupakan pentingnya pulang.",
    sumber: "Terinspirasi dari Everest (2015)"
  },
  {
    teks: "Some battles are not meant to be won; some are meant to teach us when to stop.",
    terjemahan: "Beberapa perjuangan bukan untuk dimenangkan, melainkan untuk mengajarkan kapan kita harus berhenti.",
    sumber: "Terinspirasi dari North Face (2008)"
  },
  {
    teks: "The greatest strength is knowing what you are willing to sacrifice for others.",
    terjemahan: "Kekuatan terbesar adalah mengetahui apa yang rela kamu korbankan demi orang lain.",
    sumber: "Terinspirasi dari Vertical Limit (2000)"
  },
  {
    teks: "The greatest achievement is not reaching the top, but returning with a story worth remembering.",
    terjemahan: "Pencapaian terbesar bukan mencapai puncak, melainkan kembali dengan cerita yang layak dikenang.",
    sumber: "Terinspirasi dari K2 (1991)"
  },
  {
    teks: "A true companion is not the one who reaches the summit first, but the one who never forgets those left behind.",
    terjemahan: "Sahabat sejati bukanlah orang yang pertama mencapai puncak, melainkan orang yang tidak pernah melupakan mereka yang tertinggal.",
    sumber: "Terinspirasi dari The Himalayas (2015)"
  },
  {
    teks: "In the deepest silence, the will to live becomes the loudest voice.",
    terjemahan: "Dalam kesunyian terdalam, keinginan untuk hidup menjadi suara yang paling lantang.",
    sumber: "Terinspirasi dari 127 Hours (2010)"
  },
  {
    teks: "Pain changes you, but it does not have to define you.",
    terjemahan: "Rasa sakit mengubah dirimu, tetapi tidak harus menentukan siapa dirimu.",
    sumber: "Terinspirasi dari The Revenant (2015)"
  },
  {
    teks: "The hardest mountain is often the one we carry within ourselves.",
    terjemahan: "Gunung tersulit sering kali adalah gunung yang kita bawa di dalam diri sendiri.",
    sumber: "Terinspirasi dari Meru (2015)"
  },
  {
    teks: "Hope is the quiet strength that survives when everything else falls apart.",
    terjemahan: "Harapan adalah kekuatan sunyi yang tetap bertahan ketika segalanya hancur.",
    sumber: "Terinspirasi dari Touching the Void (2003)"
  },
  {
    teks: "Some journeys are not about reaching a destination, but finding the truth behind what was lost.",
    terjemahan: "Beberapa perjalanan bukan tentang mencapai tujuan, melainkan menemukan kebenaran di balik sesuatu yang telah hilang.",
    sumber: "Terinspirasi dari Pencarian Terakhir"
  },
  {
    teks: "A meaningful life is not measured by how long we live, but by what we stand for.",
    terjemahan: "Kehidupan yang bermakna tidak diukur dari seberapa lama kita hidup, tetapi dari apa yang kita perjuangkan.",
    sumber: "Terinspirasi dari Gie (2005)"
  },
  {
    teks: "We climb mountains to see the world from above, but sometimes we need to go far away just to understand ourselves.",
    terjemahan: "Kita mendaki gunung untuk melihat dunia dari ketinggian, tetapi terkadang kita harus pergi sangat jauh hanya untuk memahami diri sendiri.",
    sumber: "The Mountain Within"
  }
];

/* ==================== PENGATURAN KUTIPAN ==================== */
// 12000 milidetik berarti 12 detik.
const jedaGanti = 12000;

const kotakKutipan = document.getElementById("kutipan");
const teksKutipan = document.getElementById("teks-kutipan");
const terjemahanKutipan = document.getElementById("terjemahan-kutipan");
const sumberKutipan = document.getElementById("sumber-kutipan");

let antreanKutipan = [];

/* Acak kutipan agar tidak berulang sampai semua kutipan tampil. */
function kocokKutipan() {
  const urutan = daftarKutipan.map((_, nomor) => nomor);

  for (let i = urutan.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [urutan[i], urutan[j]] = [urutan[j], urutan[i]];
  }

  return urutan;
}

function ambilKutipanBerikutnya() {
  if (antreanKutipan.length === 0) {
    antreanKutipan = kocokKutipan();
  }

  return antreanKutipan.pop();
}

function tampilkanKutipan(nomor) {
  const kutipan = daftarKutipan[nomor];

  teksKutipan.textContent = kutipan.teks;
  terjemahanKutipan.textContent = kutipan.terjemahan;
  sumberKutipan.textContent = kutipan.sumber;

  if (kutipan.teks.length > 85) {
    teksKutipan.style.fontSize = "clamp(1.8rem, 4vw, 3.5rem)";
  } else if (kutipan.teks.length > 55) {
    teksKutipan.style.fontSize = "clamp(2rem, 4.5vw, 4rem)";
  } else {
    teksKutipan.style.fontSize = "";
  }
}

if (kotakKutipan && teksKutipan && terjemahanKutipan && sumberKutipan) {
  tampilkanKutipan(ambilKutipanBerikutnya());

  window.setInterval(() => {
    kotakKutipan.classList.add("memudar");

    window.setTimeout(() => {
      tampilkanKutipan(ambilKutipanBerikutnya());
      kotakKutipan.classList.remove("memudar");
    }, 800);
  }, jedaGanti);
}

/* ==================== GULIR OTOMATIS DENGAN MOUSE ==================== */
// Hanya aktif di komputer. HP tetap menggunakan geser layar atau tombol panah.
const bagianKartu = document.getElementById("pilihan-menu");
let sudahGulirOtomatis = false;

window.addEventListener("pointermove", (event) => {
  const komputer =
    event.pointerType === "mouse" &&
    window.matchMedia("(min-width: 769px)").matches;

  if (!komputer || !bagianKartu || sudahGulirOtomatis) {
    return;
  }

  const kursorDiBawah = event.clientY >= window.innerHeight - 24;
  const masihDiBeranda = window.scrollY < 100;

  if (kursorDiBawah && masihDiBeranda) {
    sudahGulirOtomatis = true;
    bagianKartu.scrollIntoView({ behavior: "smooth" });
  }
});

/* ==================== TOMBOL KEMBALI KE ATAS ==================== */
const tombolKeAtas = document.querySelector(".tombol-keatas");

function perbaruiTombolKeAtas() {
  if (tombolKeAtas) {
    tombolKeAtas.classList.toggle("tampil", window.scrollY > 300);
  }
}

window.addEventListener("scroll", perbaruiTombolKeAtas);
perbaruiTombolKeAtas();