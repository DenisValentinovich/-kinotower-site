<script setup lang="ts">
  const profileStore = useProfileStore();

</script>

<template>
  <template v-if="profileStore.userData">
  
  <h3>{{ profileStore.userData.fio }}</h3>
  <p class="mb-1">Count reviews: 10</p>
  <p>Count scores: 15</p>
<ul class="nav nav-underline" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" role="tab" aria-controls="profile-tab-pane" aria-selected="true" aria-current="page" href="#">My profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" href="#">My reviews</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="scores-tab"  data-bs-toggle="tab" data-bs-target="#scores-tab-pane" role="tab" aria-controls="scores-tab-pane" aria-selected="false" href="#">My scores</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <p class="mt-3">Email: ivan@ian.com</p>
    <p>Birthday: 20-05-2007</p>
    <p>Gender: Male</p>
    <div>
      <button class="btn btn-warning me-3">Edit</button>
      <button class="btn btn-danger">Delete Account</button>
    </div>
  </div>
  <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <div>
      <div class="row">
        <div class="col-9">
         <h5>Duna</h5> 
        </div>
        <div class="col-1 text-success">Approve</div>
        <div class="col-2">2022-05-25 15:08:14</div>
      </div>
      <div class="row">
        <div class="col-10">
          This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and
        </div>
        <div class="col-2">
          <button class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
    <hr class="divider">  

  </div>
  <div class="tab-pane fade" id="scores-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <div>
      <div class="row">
        <div class="col-10">
         <h5>Duna</h5> 
        </div>
        <div class="col-2">2022-05-25 15:08:14</div>
      </div>
      <div class="row">
        <div class="col-10 fw-bold">
          5
        </div>
        <div class="col-2">
          <button class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
    <hr class="divider">
  </div>

</div>
</template>
<div class="d-flex justify-content-center" v-else>
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</template>

<style>

</style>