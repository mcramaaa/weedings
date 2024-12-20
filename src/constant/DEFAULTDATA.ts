import { IWeddingData } from "@/interfaces/IWeedingData";

export const DEFAULTDATA: IWeddingData = {
  ladiesFirst: true,
  img: "/pink-one/imgone.jpeg",
  eventDate: "2024-12-08T11:00:00",
  music:
    "https://rr1---sn-npoe7nss.googlevideo.com/videoplayback?expire=1732723955&ei=k_BGZ-qOCensg8UP2PDNeA&ip=175.100.33.185&id=o-AMN_pkgzXe1YYLzbBaJ8Ns7nbleZYU_QVhjD6QEE79ry&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFR5f_J2-SMpALd3MOK0En2q2hDDOF9U1TS6re5BRov-6E9FUP-A-bqgczVbpYjYmnpfP1Tk8T51&vprv=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=5352611&dur=300.701&lmt=1731476675515341&keepalive=yes&fexp=24350302,24350590,24350655,24350675,24350704,24350705,24350737,24350804,51326932,51335594&c=ANDROID_VR&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAOOpoCYQ6QyIpDzdCEtC7OyRxTODYu1ROjZmCSoRhQbuAiALGDPhb1t3KYi7H66fVB9bRb_xfpoS1H8cccuqmPOyDg%3D%3D&rm=sn-8pxuuxaj5hcvqp5-2oiz7z,sn-npo6e7e&rrc=79,104&req_id=2654c48e5f7a3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1732712402,&mh=Yp&mip=114.10.47.157&mm=29&mn=sn-npoe7nss&ms=rdu&mt=1732712015&mv=m&mvi=1&pl=24&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIgRy1EANkZmjgtI64kJIRD4HQ0sHxG_SMHjtwQRHzRyMUCIQCvTCmwDuVyV6-pegx6B55z2gLvQPOAM-zdj95L-Iu2gg%3D%3D",
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
