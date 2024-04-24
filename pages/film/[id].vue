<script lang="ts" setup>
  const detailFilmStore = useDetailFilmStore();
  const route = useRoute();
  const authStore =  useAuthStore();
  const message = ref('');

  detailFilmStore.fetchFilm(route.params.id);
  detailFilmStore.fetchReviews(route.params.id);
  const sendReview = () => {
      if (message.value) {
        detailFilmStore.addReview(route.params.id, message.value);
      }
  }
</script>
<template>
  <template v-if="detailFilmStore.film">
  <div class="row">
    <div class="col">
      <h3>{{ detailFilmStore.film.ratingAvg }}</h3> 
    </div>
    <div class="col">
      <iframe width="800" height="470" :src="detailFilmStore.film.link_video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="col">
      <div class="d-flex flex-column align-items-center">
        <p><a href="" class="text-warning link-offset-2 link-underline link-underline-opacity-0"><i class="fa-regular fa-star fa-2xl"></i></a></p>
        <p><a href="" class=" text-warning link-offset-2 link-underline link-underline-opacity-0"><i class="fa-regular fa-star fa-xl"></i></a></p>
        <p><a href="" class=" text-warning link-offset-2 link-underline link-underline-opacity-0"><i class="fa-regular fa-star fa-lg"></i></a></p>
        <p><a href="" class=" text-warning link-offset-2 link-underline link-underline-opacity-0"><i class="fa-regular fa-star fa-sm"></i></a></p>
        <p><a href="" class=" text-warning link-offset-2 link-underline link-underline-opacity-0"><i class="fa-regular fa-star fa-xs"></i></a></p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h4>{{ detailFilmStore.film.name }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col">
      {{ detailFilmStore.film.duration }} min.
    </div>
    <div class="col">
      {{ detailFilmStore.film.country.name }}
    </div>
    <div class="col">
      {{ detailFilmStore.film.year_issue }}
    </div>
    <div class="col">
      {{ detailFilmStore.film.age }}+
    </div>
    <div class="col">
      {{ (new Date(detailFilmStore.film.created_at)).toLocaleDateString()  }}
    </div>
    <div class="col">
      <p class="card-text" v-if="detailFilmStore.film.categories.length != 0">
          <template v-for="(genre, index) in detailFilmStore.film.categories" :key="genre.id">
            {{ (index != detailFilmStore.film.categories.length - 1) ? genre.name+', ' : genre.name }}
          </template>
        </p>
        <p class="card-text" v-else>Нет жанров у этого шедевра</p>
    </div>
    <div class="col-4 text-end">
      <a :href="detailFilmStore.film.link_kinopoisk">Kinopoisk</a>
    </div>
  </div>
<div class="row mt-3" v-if="authStore.authData">
  <div class="col-md-10">
    <label for="review" class="form-label">Add review</label>
    <textarea v-model="message" class="form-control" id="review" rows="3"></textarea>
  </div>
  <div class="col-md-2 d-flex align-items-end">
    <button class="btn btn-primary" @click="sendReview">Send</button>
  </div>
</div>
<div class="row mt-3" v-else>
  <p class="text-center">Do add comment please sign in or sign up</p>
</div>
<div class="row">
  <h4>Reviews</h4>
  <div class="row" v-for="review in detailFilmStore.reviews" :key="review.id">
    <div class="col-md-1"></div>
    <div class="col-md-11">
      <div class="row">
      <div class="col-md-10 fw-bold">{{ review.user.fio }}</div>
      <div class="col-md-2">{{ review.created_at }}</div>
    </div>
    <div class="row">
      <div class="col">{{ review.message }}</div>
    </div>
    <hr>
  </div>
    </div>
</div>
</template>
<div class="d-flex justify-content-center" v-else>
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</template>

<style scoped>
.col-md-1 {
  width: 3%;
}
</style>