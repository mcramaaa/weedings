import { IWeddingData } from "@/interfaces/IWeedingData";

export const bintangRama: IWeddingData = {
  ladiesFirst: true,
  img: "/pink-one/imgone.jpeg",
  eventDate: "2024-12-08T11:00:00",
  music: "/rista-akbar/audio.mp3",

  man: {
    name: "Rama",
    fullName: "M. Ramadhani",
    age: 30,
    gender: "Male",
    anak: "Putra Pertama Dari",
    bapak: "Rahasia",
    ibu: "Rahasia",
    img: "/rista-akbar/man.png",
  },
  woman: {
    name: "Bintang",
    fullName: "Bintang Dectyanefa P.Z",
    age: 30,
    gender: "Male",
    anak: "Putri Pertama Dari",
    bapak: "Rahasia",
    ibu: "Rahasia",
    img: "/rista-akbar/woman.png",
  },
  loveStory: [
    {
      label: "Bertemu",
      description: "Darmo Permai Selatan",
    },
    {
      label: "Lamaran",
      description: "Darmo Permai Selatan",
    },
    {
      label: "Menikah",
      description: "Darmo Permai Selatan",
    },
  ],
  event: [
    {
      tittle: "Akad",
      description:
        "Kami akan memulai perjalanan hidup baru dengan mengikat janji suci di hari yang penuh kebahagiaan",
      day: "Minggu",
      date: "6 Desember 2027",
      time: "9.00 WIB",
      // placeName: "Masjid Al-Akbar Surabaya",
      // address: "Jl. Masjid Agung Surabaya",
      // locations: "https://g.co/kgs/SV2PDsW",
    },

    {
      tittle: "Resepsi",
      description:
        "Dengan penuh rasa syukur acara resepsi pernikahan yang diselenggarakan di kediaman mempelai wanita",
      day: "Minggu",
      date: "8 Desember 2024",
      time: "18.00 WIB - 21.00 WIB",
      placeName: "Kediaman Mempelai Wanita",
      address:
        "Jl.keputih GG. Makam city home blok E3 timur, Keputih, Kec. Sukolilo, Surabaya",
      locations: "https://goo.gl/maps/JP77VQcj7Wcgb31P9",
    },
  ],
  gift: [
    {
      name: "Rista Dewi Ariska",
      accountNumber: "7020042191",
      bankName: "Bank Muamalat",
      img: "",
    },
    {
      name: "Moh Akbar Hakiki",
      accountNumber: "1420021205223",
      bankName: "Bank Mandiri",
      img: "",
    },
  ],
  // stuffGift: [
  //   {
  //     name: "Yono Tanmianto",
  //     phone: "6281330129266",
  //     labelPlace: "Rumah",
  //     location: "https://g.co/kgs/SV2PDsW",
  //     address: "Ds. Mandirejo RT.01 RW.01",
  //     kecamatan: "Mandirejo",
  //     kabupaten: "Malang",
  //     provinsi: "Jawa Timur",
  //     posCode: "51125",
  //   },
  // ],
};
