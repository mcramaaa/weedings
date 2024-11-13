interface IEvent {
  tittle: string;
  description: string;
  day: string;
  date: string;
  time: string;
  placeName: string;
  address: string;
  locations: string;
}

interface IStuffGift {
  labelPlace: string;
  phone: string;
  name: string;
  address: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  posCode: string;
  location: string;
}

interface IGift {
  name: string;
  img: string;
  bankName: string;
  accountNumber: string;
}

export interface IWeddingData {
  ladiesFirst: boolean;
  img: string;
  eventDate: string;
  man: {
    name: string;
    fullName: string;
    age: number;
    gender: string;
    anak: string;
    bapak: string;
    ibu: string;
    img: string;
  };
  woman: {
    name: string;
    fullName: string;
    age: number;
    gender: string;
    anak: string;
    bapak: string;
    ibu: string;
    img: string;
  };
  event: IEvent[];
  gift: IGift[];
  stuffGift: IStuffGift[];
}
