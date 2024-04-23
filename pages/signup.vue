<template>
<main class="form-signup w-100 m-auto">
  <form @submit.prevent="signup">
    <img class="mb-4" src="/logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
    <div class="alert alert-danger" role="alert" v-show="errorMsg">
      {{ errorMsg }}
    </div>
    <div class="form-floating">
      <input type="text" v-model="fio" class="form-control" id="floatingFio" placeholder="Input FIO">
      <label for="floatingFio">Username</label>
    </div>
    <div class="form-floating">
      <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="date" v-model="birthday" class="form-control" id="floatingInput">
      <label for="floatingInput">Birthday</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="gender" class="form-control" id="gender">
        <option :value="null">Select gender...</option>
        <option 
        v-for="gender in genderStore.genders" 
        :value="gender.id"
        :key="gender.id">{{ gender.name }}</option>
      </select>
      <label for="gender">Gender</label>
      </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
  </form>
</main>
</template>

<script lang="ts" setup>
  const authStore = useAuthStore();
  const router = useRouter();
  const genderStore = useGendersStore();
  const email = ref('');
  const password = ref('');
  const fio = ref('');
  const birthday = ref('');
  const gender = ref(null);
  const errorMsg = ref('');
  
  const signup = async () => {
    if (fio.value && 
        email.value && 
        password.value && 
        birthday.value && 
        gender.value) {
      try {
        await authStore.signup({
          fio: fio.value,
          email: email.value,
          password: password.value,
          birthday: birthday.value,
          gender_id: gender.value
        });
        router.push('/');
      } catch(error: any) {
        errorMsg.value = error.message;
      }
    }
  };


</script>

<style>
.form-signup {
  max-width: 330px;
  padding: 1rem;
}
</style>