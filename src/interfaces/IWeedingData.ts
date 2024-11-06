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

export interface IWeddingData {
  ladiesFirst: boolean;
  img: string;
  event: IEvent[];
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
}
