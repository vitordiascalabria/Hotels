import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { Quasar } from 'quasar';


config.global.plugins = [Quasar];

config.global.mocks = {
  $t: (msg: string) => msg,
};

vi.mock('vue-router', async () => {
  const actual = await vi.importActual('vue-router');
  return {
    ...actual,
    useRouter: () => ({
      push: vi.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: {} }),
  useRouter: () => ({ push: vi.fn() }),
}));

