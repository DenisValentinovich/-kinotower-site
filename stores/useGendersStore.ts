import { defineStore } from 'pinia'
import { api } from '~/api';

export const useGendersStore = defineStore('gender', () => {
  const genders = ref([]);
  async function fetchGenders() {
    const res = await api.get('/genders');
    genders.value = res.data.genders;
  }
  fetchGenders();
  
  return {
    genders,
  }
});
