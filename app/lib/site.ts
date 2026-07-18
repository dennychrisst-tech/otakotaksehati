export const WHATSAPP_NUMBER = "6287867888883";

export const HERO_IMAGES = [
  "/hero/hero-otak-box.jpg",
  "/hero/hero-otak-plate.jpg",
];

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/sehatiotakotak/",
    icon: "instagram",
  },
  {
    label: "Shopee",
    url: "https://id.shp.ee/tMGmx7oA",
    icon: "shopee",
  },
] as const;

export const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#menu", label: "Menu" },
  { href: "#hampers", label: "Hampers" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#pesan", label: "Cara Pesan" },
  { href: "#faq", label: "FAQ" },
];

export const HAMPERS = [
  {
    occasion: "Natal",
    title: "Hampers Natal",
    description:
      "Kemasan eksklusif bernuansa merah keemasan, lengkap dengan otak-otak premium dan saus kacang khas Sehati.",
    image: "/hampers/natal.jpg",
  },
  {
    occasion: "Imlek",
    title: "Hampers Imlek",
    description:
      "Sajian keberuntungan dalam keranjang bambu tradisional, dibungkus nuansa merah-emas yang meriah.",
    image: "/hampers/imlek.jpg",
  },
  {
    occasion: "Lebaran",
    title: "Hampers Lebaran",
    description:
      "Paket berkah Hari Raya dalam anyaman rotan elegan, cocok untuk berbagi kebahagiaan bersama keluarga.",
    image: "/hampers/lebaran.jpg",
  },
] as const;

export const ABOUT = {
  eyebrow: "Tentang Kami",
  title: "Cerita di Balik Sehati",
  paragraphs: [
    "Otak-Otak Sehati lahir dari resep rumahan yang diwariskan dengan satu prinsip sederhana: bahan baku terbaik dan tanpa jalan pintas. Setiap potong ikan tenggiri dipilih langsung, diracik segar setiap hari.",
    "Nama \"Sehati\" bukan sekadar nama — ia adalah janji kami bahwa setiap adonan diracik sepenuh hati, sehat untuk keluarga, dan jujur soal apa yang ada di dalamnya.",
  ],
  // Placeholder — sesuaikan dengan data aktual bisnis
  stats: [
    { value: 5, suffix: "+", label: "Tahun Berkarya" },
    { value: 1000, suffix: "+", label: "Pelanggan Puas" },
    { value: 100, suffix: "%", label: "Ikan Tenggiri Asli" },
    { display: "0%", label: "Pengawet & Boraks" },
  ],
} as const;

export const TICKER_ITEMS = [
  "100% Ikan Tenggiri Asli",
  "Tanpa Pengawet",
  "Higienis & Fresh",
  "Dibuat Dengan Hati",
];

export const BENEFITS = [
  {
    title: "Ikan Tenggiri Pilihan",
    description:
      "100% daging ikan tenggiri segar pilihan, tanpa campuran ikan lain, untuk rasa gurih yang otentik.",
    icon: "fish",
  },
  {
    title: "Tanpa Pengawet & Boraks",
    description:
      "Diracik tanpa bahan pengawet maupun boraks, aman dinikmati oleh seluruh keluarga.",
    icon: "shield",
  },
  {
    title: "Higienis & Fresh",
    description:
      "Diproses dengan standar kebersihan tinggi dan langsung dikemas dalam kondisi segar.",
    icon: "sparkle",
  },
  {
    title: "Dibuat Dengan Hati",
    description:
      "Setiap adonan diracik dengan penuh perhatian, menjaga kualitas rasa di setiap gigitan.",
    icon: "heart",
  },
] as const;

export const MENU_NOTE =
  "Rp 10.000 / pcs — pembelian minimum 10 pcs.";

export const MENU_CATEGORY_BG = {
  "otak-otak": "/menu/otak-otak-bg.jpg",
  puding: "/menu/puding-bg.jpg",
} as const;

export const MENU_ITEMS = [
  {
    name: "Otak-Otak Isi 10",
    description: "Otak-otak ikan tenggiri asli, cocok untuk camilan keluarga.",
    price: "Rp 100.000",
    unit: "/ pack isi 10",
    category: "otak-otak",
    qty: "10",
    imagePosition: "center center",
    image: "/menu/otak-otak-isi-10.jpg",
  },
  {
    name: "Otak-Otak Isi 20",
    description: "Porsi lebih banyak untuk berbagi bersama orang tersayang.",
    price: "Rp 200.000",
    unit: "/ pack isi 20",
    category: "otak-otak",
    featured: true,
    qty: "20",
    imagePosition: "center center",
  },
  {
    name: "Otak-Otak Family Pack",
    description: "Paket besar untuk acara keluarga, arisan, hingga hampers.",
    price: "Rp 300.000 – Rp 500.000",
    unit: "/ pack isi 30–50",
    category: "otak-otak",
    qty: "30+",
    imagePosition: "center center",
    image: "/menu/otak-otak-family-pack.jpg",
  },
  {
    name: "Puding Isi 5",
    description: "Puding lembut sebagai pelengkap manis di setiap hidangan.",
    price: "Rp 185.000",
    unit: "/ pack isi 5",
    category: "puding",
    qty: "5",
    imagePosition: "left center",
  },
  {
    name: "Puding Isi 10",
    description: "Puding lembut sebagai pelengkap manis di setiap hidangan.",
    price: "Rp 365.000",
    unit: "/ pack isi 10",
    category: "puding",
    qty: "10",
    imagePosition: "right center",
  },
] as const;

// Placeholder — ganti dengan testimoni pelanggan asli
export const TESTIMONIALS = [
  {
    quote:
      "Rasanya beda banget, gurihnya berasa ikan asli bukan tepung doang. Favorit keluarga tiap minggu!",
    name: "Ibu Ratna",
    location: "Jakarta Selatan",
  },
  {
    quote:
      "Kemasannya rapi dan higienis, pengirimannya juga cepat. Pasti order lagi!",
    name: "Pak Dimas",
    location: "Tangerang",
  },
  {
    quote:
      "Cocok banget buat oleh-oleh, semua yang cicip pada nanya beli di mana.",
    name: "Sarah",
    location: "Bekasi",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Apa bahan utama Otak-Otak Sehati?",
    answer:
      "100% daging ikan tenggiri segar pilihan, diracik tanpa pengawet maupun boraks — aman dinikmati seluruh keluarga.",
  },
  {
    question: "Berapa minimal pemesanan?",
    answer:
      "Harga otak-otak Rp 10.000/pcs dengan pembelian minimal 10 pcs. Untuk puding tersedia paket isi 5 dan isi 10.",
  },
  {
    question: "Bagaimana cara menghangatkan otak-otak?",
    answer:
      "Bisa pakai microwave (gunakan wadah tahan panas, panaskan ±1 menit) atau wajan anti lengket (panaskan ±1 menit tiap sisi) hingga siap disajikan.",
  },
  {
    question: "Berapa lama otak-otak bisa disimpan?",
    answer:
      "Simpan dalam wadah kedap udara di lemari es tahan 3–4 hari, atau di freezer tahan hingga 1 bulan. Jika akan disimpan lebih dari sehari, wajib masuk lemari es.",
  },
  {
    question: "Bagaimana cara pemesanan?",
    answer:
      "Pilih menu, chat kami via WhatsApp dengan detail pesanan, kami konfirmasi & kirim info pembayaran, lalu pesanan segar dikemas dan dikirim ke Anda.",
  },
  {
    question: "Kemana saja area pengiriman tersedia?",
    answer:
      "Kami hanya menggunakan pengiriman one day service agar kualitas, rasa, dan kesegaran produk tetap terjaga. Dalam Kota Jakarta & sekitarnya: via Grab dan Gojek. Luar Kota Jakarta: via ekspedisi PAXEL dengan jangkauan Bogor, Depok, Tangerang, Bekasi, Cikarang, Cimahi, Bandung, Cirebon, Tasikmalaya, Purwokerto, Yogyakarta, Magelang, Solo, Semarang, Ngawi, Sidoarjo, Jember, Madiun, Kediri, Surabaya, Malang, Banyuwangi, Denpasar, Makassar, dan Medan. Ongkos kirim dihitung sesuai jarak/ekspedisi dan ditanggung pembeli.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima transfer bank serta e-wallet/QRIS (GoPay, OVO, Dana, ShopeePay). Info rekening & QRIS dikirim setelah pesanan dikonfirmasi via WhatsApp.",
  },
  {
    question: "Apakah tersedia paket hampers untuk hari raya?",
    answer:
      "Ya, kami punya paket hampers khusus untuk Natal, Imlek, dan Lebaran — kemasan eksklusif, cocok untuk hadiah maupun suguhan keluarga.",
  },
] as const;

export const DELIVERY_INFO = [
  {
    icon: "clock",
    title: "One Day Service",
    description: "Dikirim di hari yang sama demi menjaga kesegaran & kualitas rasa",
  },
  {
    icon: "map",
    title: "Dalam Kota Jakarta",
    description: "Via Grab & Gojek, khusus Jakarta & sekitarnya",
  },
  {
    icon: "truck",
    title: "Luar Kota Jakarta",
    description: "Via ekspedisi PAXEL, jangkauan 25+ kota se-Indonesia",
  },
  {
    icon: "wallet",
    title: "Pembayaran",
    description: "Transfer Bank & E-wallet/QRIS (GoPay, OVO, Dana, ShopeePay)",
  },
] as const;

export const ORDER_STEPS = [
  {
    title: "Pilih Menu",
    description: "Tentukan varian & jumlah otak-otak favorit Anda.",
  },
  {
    title: "Chat via WhatsApp",
    description: "Klik tombol pesan, kirim detail pesanan ke kami.",
  },
  {
    title: "Konfirmasi & Bayar",
    description: "Kami konfirmasi pesanan & kirim info pembayaran.",
  },
  {
    title: "Terima Pesanan",
    description: "Otak-otak segar dikemas rapi & sampai ke tangan Anda.",
  },
] as const;
