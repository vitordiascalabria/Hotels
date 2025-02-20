import { mount } from '@vue/test-utils';
import HotelDrawer from '@/components/HotelDrawer.vue';
import { describe, it, expect } from 'vitest';

describe('HotelDrawer.vue', () => {
  const hotel = {
    id: 1,
    name: 'Hotel Luxuoso',
    stars: 5,
    price: 500,
    images: ['https://via.placeholder.com/300'],
    description: 'Um hotel luxuoso para testes.',
    amenities: [
        { key: 'piscina', label: 'Piscina' },
        { key: 'wifi', label: 'Wi-Fi' },
      ],
  };

  it('deve exibir o nome e a descrição do hotel no drawer', () => {
    const wrapper = mount(HotelDrawer, {
      props: { hotel },
    });

    expect(wrapper.text()).toContain('Hotel Luxuoso');
    expect(wrapper.text()).toContain('Um hotel luxuoso para testes.');
  });

  it('deve exibir as amenidades corretamente', () => {
    const wrapper = mount(HotelDrawer, {
      props: { hotel },
    });

    expect(wrapper.text()).toContain('Piscina');
    expect(wrapper.text()).toContain('Wi-Fi');
  });
});
