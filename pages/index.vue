<script setup lang="ts">
import { ref, onMounted } from 'vue';

const message = ref('통합형 API에서 메시지를 가져오는 중...');

onMounted(async () => {
  try {
    // Nuxt의 내장 $fetch로 내부 API 호출
    const response = await $fetch('/api/hello'); 
    message.value = response.message;
  } catch (error) {
    console.error("API 호출 오류:", error);
    message.value = '통합 API 호출 실패.';
  }
});
</script>

<template>
  <div style="padding: 20px; font-size: 24px; text-align: center;">
    <h1>통합형 풀스택 시연 (Nuxt.js)</h1>
    <p>받은 메시지: <strong style="color: #00dc82;">{{ message }}</strong></p>
  </div>
</template>