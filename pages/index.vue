<script lang="ts" setup>
 const filmsStore = useFilmsStore();
 const categoriesStore = useCategoriesStore();
 const countriesStore = useCountriesStore();
 
 const category = ref(null);
  watch(category, (newCategory) => {
    filmsStore.addCategoryToParams(newCategory);
  });
  const country = ref(null);
  watch(country, (newCountry) => {
    filmsStore.addCountryToParams(newCountry);
  });
  const sortBy = ref('name');
  watch(sortBy, (newSortBy) => {
    filmsStore.addSortToParams(newSortBy);
  });
  const resetParams = () => {
    category.value = null;
    country.value = null;
    sortBy.value = 'name';
    filmsStore.fetchFilms();
  };





 filmsStore.fetchFilms();
 categoriesStore.fetchCategories();
</script>

<template>
  <div class="row my-4">
    <div class="col-md-4">
      <select class="form-select" v-model="category" >
        <option selected :value="null">Select genre...</option>
        <option 
          v-for="category in categoriesStore.categories" 
          :key="category.id" 
          :value="category.id"
          >{{ category.name }} ({{ category.filmCount }})</option>
      </select>
    </div>
    <div class="col-md-4">
      <select class="form-select" v-model="country">
        <option selected :value="null">Select country...</option>
        <option 
        v-for="country in countriesStore.countries"
        :key="country.id"
        :value="country.id">{{ country.name }}</option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select" v-model="sortBy">
        <option value="name">Sort by Name</option>
        <option value="year">Sort by Year</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
    <div class="col-md-1">
      <button class="btn btn-outline-warning" @click="resetParams">Reset</button>
    </div>
  </div>


<div class="d-flex justify-content-center" v-if="filmsStore.isLoading">
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
<template v-else>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="film in filmsStore.films" :key="film.id">
    <div class="card h-100">
      <img :src="film.link_img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ film.name }}</h5>
        <p class="card-text">{{ film.ratingAvg }}</p>
        <p class="card-text">{{ film.duration }} мин.</p>
        <p class="card-text" v-if="film.categories.length != 0">
          <template v-for="(genre, index) in film.categories" :key="genre.id">
            {{ (index != film.categories.length - 1) ? genre.name+', ' : genre.name }}
          </template>
        </p>
        <p class="card-text" v-else>Нет жанров у этого шедевра</p>
      </div>
      <div class="card-footer text-end">
        <button @click="$router.push('/film/'+film.id)" class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  </div>


<!-- Pagination list films -->
<nav aria-label="Page navigation" class="mt-4 d-flex justify-content-center">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"
        :class="{'disabled': filmsStore.page-1 == 0}"
       href="#" aria-label="Previous"
      @click.prevent="filmsStore.changePage(filmsStore.page-1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" 
      v-for="page in Math.ceil(filmsStore.total/filmsStore.size)"
      :key="page">
      <a 
      class="page-link" 
      :class="{'active': page == filmsStore.page}"
      href="#"
      @click.prevent="filmsStore.changePage(page)">{{ page }}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

</template>


<style>

</style>