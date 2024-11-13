import { IWeddingData } from "@/interfaces/IWeedingData";

export const DEFAULTDATA: IWeddingData = {
  ladiesFirst: true,
  img: "/pink-one/imgone.jpeg",
  eventDate: "Sabtu, 17 Agustus 2025",
  man: {
    name: "Yono",
    fullName: "Yono Tanminto",
    age: 30,
    gender: "Male",
    anak: "Putra Pertama Dari",
    bapak: "Kasimen Jiwansa",
    ibu: "Kasimun Madani",
    img: "/pink-one/man.jpg",
  },
  woman: {
    name: "Yeni",
    fullName: "Yeni Masritun",
    age: 30,
    gender: "Female",
    anak: "Putri Pertama Dari",
    bapak: "Kasimen Jiwansa",
    ibu: "Kasimun Madani",
    img: "/pink-one/woman.jpg",
  },
  event: [
    {
      tittle: "Akad",
      description: "Acara berlangsung siang hari menggunakan dresscode pink",
      day: "Senin",
      date: "7 Desember 2026",
      time: "10.00 WIB",
      placeName: "Masjid Al-Akbar Surabaya",
      address: "Jl. Masjid Agung Surabaya",
      locations: "https://g.co/kgs/SV2PDsW",
    },

    {
      tittle: "Resepsi2",
      description: "Acara berlangsung siang hari menggunakan dresscode pink",
      day: "Senin",
      date: "8 Desember 2026",
      time: "10.00 WIB",
      placeName: "Masjid Al-Akbar Surabaya",
      address: "Jl. Masjid Agung Surabaya",
      locations: "https://g.co/kgs/SV2PDsW",
    },
  ],
  gift: [
    {
      name: "Mochamad Ramadhani",
      accountNumber: "9035023804",
      bankName: "BCA",
      img: "",
    },
    {
      name: "Mochamad Ramadhani",
      accountNumber: "081330129266",
      bankName: "Dana",
      img: "",
    },
  ],
  stuffGift: [
    {
      name: "Yono Tanmianto",
      phone: "6281330129266",
      labelPlace: "Rumah",
      location: "https://g.co/kgs/SV2PDsW",
      address: "Ds. Mandirejo RT.01 RW.01",
      kecamatan: "Mandirejo",
      kabupaten: "Malang",
      provinsi: "Jawa Timur",
      posCode: "51125",
    },
  ],
};
