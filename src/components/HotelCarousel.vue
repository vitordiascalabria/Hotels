<template>
    <div>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="primary"
        padding
        arrows
        infinite
        class="carousel"
      >
        <q-carousel-slide
          v-for="(image, index) in images"
          :key="index"
          :name="index"
          :img-src="image ?? 'https://via.placeholder.com/400x300'"
        />
      </q-carousel>
  
      <div class="q-mt-sm text-center">
        {{ slide + 1 }} / {{ images.length }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, watch } from 'vue';
  
  const props = defineProps<{ images: string[] }>();
  
  const slide = ref(0);
  
  watch(() => props.images, () => {
    slide.value = 0;
  });
  </script>
  
  <style scoped>
  .carousel {
    height: 300px;
  }
  </style>
  