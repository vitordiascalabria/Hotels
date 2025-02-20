import { mount } from '@vue/test-utils';
import HotelCard from '@/components/HotelCard.vue';
import { Hotel } from "../../src/models/Hotel";

describe('HotelCard.vue', () => {
  const hotelMock: Hotel = new Hotel({
    placeId: 101,
    id: 1,
    name: 'Hotel Luxuoso',
    description: 'Um hotel luxuoso para testes.',
    stars: 5,
    price: 500,
    address: {
      street: 'Rua das Flores',
      number: '123',
      district: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      fullAddress: 'Rua das Flores, 123, Centro, São Paulo - SP, Brasil',
    },
    images: ['https://via.placeholder.com/400x300'],
    amenities: [{ key: 'wifi', label: 'Wi-Fi' }, { key: 'pool', label: 'Piscina' }],
    favorite: false,
  });

  const hotelSemImagens = new Hotel({
    placeId: 101,
    id: 1,
    name: 'Hotel Luxuoso',
    description: 'Um hotel luxuoso para testes.',
    stars: 5,
    price: 500,
    address: {
      street: 'Rua das Flores',
      number: '123',
      district: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      fullAddress: 'Rua das Flores, 123, Centro, São Paulo - SP, Brasil',
    },
    images: [], // Lista de imagens vazia
    amenities: [{ key: 'wifi', label: 'Wi-Fi' }, { key: 'pool', label: 'Piscina' }],
    favorite: false,
  });
  
  

  it('deve renderizar as informações do hotel corretamente', () => {
    const wrapper = mount(HotelCard, {
      props: { hotel: hotelMock }
    });
  
    expect(wrapper.find('.text-h6').text()).toBe(hotelMock.name);
    expect(wrapper.find('div').text()).toContain(`${hotelMock.stars} estrelas`);
    expect(wrapper.find('p').text()).toBe(hotelMock.description);
    expect(wrapper.find('.text-h5').text()).toBe(`R$ ${hotelMock.price}`);
  });
  it('deve exibir imagem padrão quando não houver imagens', () => {
  
    const wrapper = mount(HotelCard, {
      props: { hotel: hotelSemImagens }
    });
  
    const img = wrapper.find('.hotel-image');
    expect(img.attributes('src')).toBe('https://via.placeholder.com/400x300'); // Atualize o valor esperado
  });
});
