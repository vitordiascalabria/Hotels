<template>
  <q-page class="q-pa-md">
    <q-card style="width: 60%;" class=" q-pa-md">
      <div>
        <q-select
          v-model="selectedCity"
          :options="cities"
          option-label="name"
          label="Escolha uma cidade"
        />
      </div>
      <q-btn
        :label="searchPerformed ? 'Alterar Busca' : 'Buscar'"
        color="primary"
        class="q-mt-md"
        @click="searchHotels"
      />
    </q-card>

    <div v-if="hotels.length">
      <hotel-card
        v-for="hotel in displayedHotels"
        :key="hotel.id"
        :hotel="hotel"
      />

      <q-btn
        v-if="hasMore"
        label="Carregar mais"
        color="secondary"
        class="q-mt-md"
        @click="loadMore"
      />
    </div>

    <p v-else-if="searchPerformed" class="q-mt-md">Nenhum hotel encontrado para a cidade selecionada.</p>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { DataService } from '../services/DataService';
import type { Hotel } from '../models/Hotel';
import type { City } from '../models/City';
import HotelCard from '../components/HotelCard.vue';

const selectedCity = ref<City | null>(null);
const hotels = ref<Hotel[]>([]);
const displayedHotels = ref<Hotel[]>([]);
const searchPerformed = ref(false);
const page = ref(1);

const hasMore = computed(() => displayedHotels.value.length < hotels.value.length);

const searchHotels = async () => {
  if (!selectedCity.value) return;

  const cityName = selectedCity.value.name;
  hotels.value = await DataService.fetchHotelsByCity(cityName);
  displayedHotels.value = hotels.value.slice(0, 10);
  searchPerformed.value = true;
  page.value = 1;
};

const loadMore = () => {
  const start = page.value * 10;
  const nextHotels = hotels.value.slice(start, start + 10);
  displayedHotels.value.push(...nextHotels);
  page.value++;
};

const cities = ref<City[]>([]);

onMounted(async () => {
  cities.value = await DataService.fetchCities();
});

</script>

<style scoped>
.q-page {
  margin: auto;
  justify-items: center;
}
.q-card{
  margin-bottom: 20px;
}
</style>
