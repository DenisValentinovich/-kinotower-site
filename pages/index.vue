<script lang="ts" setup>
 const filmsStore = useFilmsStore();
 
 filmsStore.fetchFilms();
</script>

<template>
  <div class="row my-4">
    <div class="col-md-4">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select genre...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-4">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select country...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Sort by...</option>
        <option value="name">Name</option>
        <option value="year">Year</option>
        <option value="rating">Rating</option>
      </select>
    </div>
    <div class="col-md-1">
      <button class="btn btn-outline-warning">Reset</button>
    </div>
  </div>
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
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c73a777d-538d-41a7-ad0c-7947713e5c29/1920x" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Троя</h5>
        <p class="card-text">4.5</p>
        <p class="card-text">180 мин.</p>
        <p class="card-text">Драма, Приключния, Исторический</p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-primary">View</button>
      </div>
    </div>
  </div>
</div>
<!-- Pagination list films -->
<nav aria-label="Page navigation" class="mt-4 d-flex justify-content-center">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

</template>

<script lang="ts" setup>

</script>

<style>

</style>