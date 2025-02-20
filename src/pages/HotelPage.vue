<template>
    <q-page class="q-pa-md">
      
      <div v-if="hotel">
        <hotel-carousel :images="hotel.images" />
  
        <q-card class="q-mt-md">
          <q-card-section>
            <div class="text-h5">{{ hotel.name }}</div>
            <div>{{ hotel.stars }} estrelas - R$ {{ hotel.price }}</div>
            <p>{{ hotel.description }}</p>
          </q-card-section>
  
          <q-card-actions align="right">
            <q-btn color="secondary" label="Ver Mais Detalhes" @click="openDrawer" />
          </q-card-actions>
        </q-card>
  
        <hotel-drawer ref="drawer" :hotel="hotel" />
      </div>
  
      <p v-else>Carregando hotel...</p>
      <q-btn style="margin-top: 20px;" color="primary" label="Voltar" @click="$router.push('/')" />
  
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { DataService } from '../services/DataService';
  import type { Hotel } from '../models/Hotel';
  import HotelCarousel from '../components/HotelCarousel.vue';
  import HotelDrawer from '../components/HotelDrawer.vue';
  
  const route = useRoute();
  const hotel = ref<Hotel | null>(null);
  const drawer = ref<InstanceType<typeof HotelDrawer> | null>(null);
  
  // Buscar o hotel pelo ID da rota
  onMounted(async () => {
    const hotelId = Number(route.params.id);
    const allHotels = await DataService.fetchAllHotels();
    hotel.value = allHotels.find(h => h.id === hotelId) || null;
  
    if (!hotel.value) {
      console.warn(`Hotel com ID ${hotelId} não encontrado.`);
    }
  });
  
  const openDrawer = () => {
    drawer.value?.openDrawer();
  };
  </script>
  
  <style scoped>
  .q-page {
    max-width: 800px;
    margin: auto;
  }
  </style>
  