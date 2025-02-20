<template>
  <q-card class="hotel-card q-mb-md">
    <q-card-section class="row no-wrap items-center">
      <q-img
        :src="hotel.images?.[0] ?? 'https://via.placeholder.com/300'"
        class="hotel-image"
      />

      <div class="col q-pl-md">
        <div class="text-h6">{{ hotel.name }}</div>
        <div>{{ hotel.stars }} estrelas</div>
        <p>{{ hotel.description }}</p>
      </div>

      <div class="col-auto text-left">
        <div class="text-h5 text-primary">R$ {{ hotel.price }}</div>
        <q-btn
          color="primary"
          label="Selecionar"
          @click="goToDetails"
          data-testid="selecionar-button"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import type { Hotel } from '../models/Hotel';

const props = defineProps<{ hotel: Hotel }>();

const emit = defineEmits<{
  (event: 'selecionar', id: number): void;
}>();

const router = useRouter();

const goToDetails = () => {
  emit('selecionar', props.hotel.id);
  void router.push(`/hotel/${props.hotel.id}`);
};
</script>

<style scoped>
.hotel-card {
  min-width: 100%;
  align-items: center;
  padding: 10px;
}

.hotel-image {
  width: 150px;
  height: 100px;
  object-fit: cover;
}

.q-card-section {
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
