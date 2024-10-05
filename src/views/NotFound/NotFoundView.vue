<script setup>
import CustomButton from '../../components/CustomButton.vue';
import router from '../../router';
</script>

<template>
  <section
    class="relative p-4 pt-20 flex flex-col gap-8 justify-center items-center overflow-x-hidden min-h-[100vh] [background:_rgba(181_36_35_/_0.04)]"
    title="Resource Not Found"
  >
    <img src="@/assets/404.png" alt="" class="max-h-80" />
    <p>Oops! We couldn't find the resource you're looking for.</p>
    <CustomButton class="gap-3" @click="()=>{ router.push({ name: 'Home' });}">
      <span>Go to the homepage</span>
    </CustomButton>
  </section>
</template>
