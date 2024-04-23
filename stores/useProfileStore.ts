import { defineStore } from 'pinia'
import { api } from '~/api';

export const useProfileStore = defineStore('profile', () => {
    const userData = ref(null);
    const authStore = useAuthStore();
  
    async function fetchUserData(id: number) {
      const res = await api.get(`/users/${id}`, {
        headers: {
          'Authorization':'Bearer '+ authStore.authData.token,
        }
      });
      userData.value = res.data;
    }

    fetchUserData(authStore.authData.id);

    return {
      userData,
    }
});
