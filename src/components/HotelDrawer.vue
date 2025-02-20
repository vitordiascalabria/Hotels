<template>
    <q-drawer v-model="show" side="right" overlay elevated>
      <q-toolbar>
        <q-toolbar-title>Detalhes do Hotel</q-toolbar-title>
        <q-btn flat round dense icon="close" @click="show = false" />
      </q-toolbar>
  
      <q-card-section v-if="hotel">
        <div class="q-mb-md">
          <q-carousel
            v-model="currentSlide"
            animated
            infinite
            arrows
            control-color="primary"
            class="carousel"
          >
            <q-carousel-slide
              v-for="(image, index) in hotel.images"
              :key="index"
              :name="index"
              :img-src="image"
            />
          </q-carousel>
  
          <div class="carousel-controls">
            <q-btn
              flat
              round
              dense
              icon="arrow_left"
              @click="currentSlide = (currentSlide - 1 + hotel.images.length) % hotel.images.length"
            />
            <span>{{ currentSlide + 1 }} / {{ hotel.images.length }}</span>
            <q-btn
              flat
              round
              dense
              icon="arrow_right"
              @click="currentSlide = (currentSlide + 1) % hotel.images.length"
            />
          </div>
        </div>
  
        <div class="q-mt-md">
          <div class="text-h6">{{ hotel.name }}</div>
          <p>{{ hotel.description }}</p>
          <p><strong>Estrelas:</strong> {{ hotel.stars }}</p>
          <p><strong>Preço:</strong> R$ {{ hotel.price }}</p>
  
          <p><strong>Amenidades:</strong></p>
          <ul>
            <li v-for="amenity in hotel.amenities" :key="amenity.key">
              {{ amenity.label }}
            </li>
          </ul>
        </div>
      </q-card-section>
  
      <q-card-section v-else>
        <p>Nenhum hotel selecionado.</p>
      </q-card-section>
    </q-drawer>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineExpose } from 'vue';
  import type { Hotel } from '../models/Hotel';
  
  defineProps<{ hotel: Hotel }>();
  
  const show = ref(false);
  const currentSlide = ref(0);
  
  const openDrawer = () => {
    currentSlide.value = 0; 
    show.value = true;
  };
  
  defineExpose({ openDrawer });
  </script>
  
  <style scoped>

  .carousel {
    height: 300px;
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  
  .carousel-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  
  ul {
    padding-left: 20px;
  }
  </style>
  