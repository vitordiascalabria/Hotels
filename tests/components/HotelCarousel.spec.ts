import { mount } from '@vue/test-utils';
import HotelCarousel from '../../src/components/HotelCarousel.vue';

describe('HotelCarousel.vue', () => {
  const images = ['https://via.placeholder.com/300', 'https://via.placeholder.com/400'];
  it('deve exibir o número correto de slides', () => {
    const wrapper = mount(HotelCarousel, {
      props: { images }
    });
  
    const slideInfo = wrapper.find('.q-mt-sm.text-center');
    expect(slideInfo.exists()).toBe(true);
    expect(slideInfo.text()).toBe('1 / 2');
  });
});
