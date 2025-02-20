import type { State } from '../models/City';
import { City } from '../models/City';
import type { HotelData } from '../models/Hotel';
import { Hotel } from '../models/Hotel';

interface CityData {
  name: string;
  state: State;
  placeId: number;
}

export class DataService {
  static async fetchCities(): Promise<City[]> {
    try {
      const response = await fetch('/place.json');
      if (!response.ok) throw new Error('Erro ao carregar cidades');
      const data: CityData[] = await response.json();
      return data.map(city => new City(city.placeId, city.name, city.state));
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
      return [];
    }
  }

  static async fetchAllHotels(): Promise<Hotel[]> {
    try {
      const response = await fetch('/hotel.json');
      if (!response.ok) throw new Error('Erro ao carregar hotéis');
      const data: { hotels: HotelData[] }[] = await response.json();

      const allHotels = data.flatMap((item) => item.hotels ?? []);
      return allHotels.map((hotel) => new Hotel(hotel));
    } catch (error) {
      console.error('Erro ao buscar hotéis:', error);
      return [];
    }
  }

  static async fetchHotelsByCity(cityName: string): Promise<Hotel[]> {
    try {
      const allHotels = await this.fetchAllHotels();
      return allHotels.filter(hotel => hotel.address?.city?.toLowerCase() === cityName.toLowerCase());
    } catch (error) {
      console.error('Erro ao buscar hotéis por cidade:', error);
      return [];
    }
  }
}
