<template>
<main class="form-signin w-100 m-auto">
  <form @submit.prevent="signin">
    <img class="mb-4" src="/logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="alert alert-danger" role="alert" v-show="errorMsg">
      {{ errorMsg }}
    </div>
    <div class="form-floating">
      <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
</main>
</template>

<script lang="ts" setup>
  const authStore = useAuthStore();
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const errorMsg = ref('');
  
  const signin = async () => {
    if (email.value && password.value) {
      try {
        await authStore.signin(email.value, password.value);
        router.push('/');
      } catch(error: any) {
        errorMsg.value = error.message;
      }
    }
  };


</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}
</style>