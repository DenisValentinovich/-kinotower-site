<script setup lang="ts">
    const authStore = useAuthStore();
</script>
<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <NuxtLink to="/" class="navbar-brand"><img src="/logo.svg" alt="Logo" width="35" height="35" class="d-inline-block align-text-top">inoTower</NuxtLink>
            <div class="d-flex align-items-center">
                <template v-if="!authStore.authData">
                    <button @click="$router.push('/signup')" class="btn btn-outline-primary me-3">SignUp</button>
                    <button @click="$router.push('/signin')" class="btn btn-outline-success">SignIn</button>  
                </template>
                <template v-else>
                    <a href="#" @click.prevent="$router.push('/profile')" class="link-offset-1 pe-2">{{ authStore.authData.fio }}</a>
                    <button @click="authStore.signout()"  class="btn btn-outline-primary me-3">SignOut</button>
                </template>
            </div>
        </div>
    </nav>
    <div class="container py-2 mb-auto" style="min-height: calc(100vh-190px) !important;">
        <slot />
    </div>
    <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 KinoTower, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul>
        </footer>
    </div>
  </template>

  <style>
.container {
        min-height: calc(100vh - 40px - 150px);
    }
</style>