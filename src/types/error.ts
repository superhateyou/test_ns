type TCompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type TGeo = {
  lng: string;
  lat: string;
};

type TAdress = {
  city: string;
  street: string;
  suite: string;
  zipcode: number;
  geo: TGeo;
};

type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: TCompany;
  address: TAdress;
};

export default TUser;
