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

interface IGift {
  name: string;
  img: string;
  bankName: string;
  accountNumber: string;
}

export interface IWeddingData {
  ladiesFirst: boolean;
  img: string;
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
}
