export interface Address {
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
}

export interface Amenity {
  key: string;
  label: string;
}

export interface HotelData {
  placeId: number;
  id: number;
  name: string;
  description: string;
  stars: string | number;
  price: number | string;
  address?: Address;
  images?: string[];
  amenities?: Amenity[];
  favorite?: boolean | null;
}

export class Hotel {
  id: number;
  name: string;
  description: string;
  stars: number;
  price: number;
  address: Address;
  images: string[];
  amenities: Amenity[];
  favorite: boolean;
  static images: string[];


  constructor(data: HotelData) {
    this.id = data.id ?? 0;
    this.name = data.name ?? 'Nome não disponível';
    this.description = data.description ?? 'Sem descrição disponível';
    this.stars = Number(data.stars) || 0; 
    this.price = Number(data.price) || 0; 
    this.address = data.address ?? {
      street: '',
      number: '',
      district: '',
      city: 'Cidade não informada',
      state: '',
      country: '',
      fullAddress: 'Endereço não disponível',
    };
    this.images = data.images?.length ? data.images : ['https://via.placeholder.com/400x300'];
    this.amenities = data.amenities ?? [];
    this.favorite = data.favorite ?? false;
  }
}
