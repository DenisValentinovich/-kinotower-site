import { defineStore } from 'pinia'
import { api } from '~/api';

export const useFilmsStore = defineStore('films', () => {
  const films = ref([]);
  const params: {
    category:number|null,
    country:number|null,
    sortBy:string,
    sortDir:string,
  } = {
    category: null,
    country: null,
    sortBy: 'name',
    sortDir: 'desc',
  };

  function addCategoryToParams(category:number|null) {
      params.category = category;
      fetchFilms();
  }

  function addCountryToParams(country:number|null) {
    params.country = country;
    fetchFilms();
  }

  function addSortToParams(sortBy: string) {
    params.sortBy = sortBy;
    fetchFilms();
  }

  async function fetchFilms() {
    const response = await api.get('/films',{params});
    films.value = response.data.films;
  }

  return {
    films,
    fetchFilms,
    addCategoryToParams,
    addCountryToParams,
    addSortToParams,
  }
})
