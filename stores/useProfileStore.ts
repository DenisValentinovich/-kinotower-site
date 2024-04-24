import { defineStore } from 'pinia'
import { api } from '~/api';

export const useProfileStore = defineStore('profile', () => {
    const userData = ref(null);
    const reviewsData = ref([]);
    const authStore = useAuthStore();
  
    async function fetchUserData(id: number) {
      const res = await api.get(`/users/${id}`, {
        headers: {
          'Authorization':'Bearer '+ authStore.authData.token,
        }
      });
      userData.value = res.data;
    }

    async function fetchReviewsData() {
      const res = await api.get(`/users/${authStore.authData.id}/reviews`, {
        headers: {
          'Authorization':'Bearer '+ authStore.authData.token,
        }
      });
      reviewsData.value = res.data.reviews;
    }



    fetchUserData(authStore.authData.id);
    fetchReviewsData();

    return {
      userData,
      reviewsData,
    }
});
