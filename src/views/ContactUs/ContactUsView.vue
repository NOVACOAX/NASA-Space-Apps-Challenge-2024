<template>
  <main>
    <HeaderComponent />
    <HeroSectionComponent>
      <template #default>
        <div class="flex flex-col items-center min-w-full  sm:my-4">
          <h1 class="text-headline-medium md:text-headline-large font-display mb-1">Contact Us</h1>
          <p class="text-label-medium underline underline-offset-2"><RouterLink to="/">home</RouterLink>/<RouterLink to="/contact">contact</RouterLink></p>
        </div>
      </template>
    </HeroSectionComponent>
    <CustomSection class="flex flex-col gap-3">
      <CustomSectionHeader title="Send me a message" heading="Get in Touch" />
      <div class="flex gap-9 max-md:flex-col w-full">
        <form @submit.prevent="submitForm" class="w-full md:w-[55%] flex flex-col gap-2">
          <div class="w-full">
            <p class="text-label-large mb-1">Name *</p>
            <input v-model="name" type="text" placeholder="Name" class="input" required>
          </div>
          <div class="w-full flex gap-2 md:gap-4 max-md:flex-col">
            <div class="w-full">
              <p class="text-label-large mb-1">Email *</p>
              <input v-model="email" type="email" placeholder="Email" class="input" required>
            </div>
            <div class="w-full">
              <p class="text-label-large mb-1">Phone </p>
              <input v-model="phone" type="text" placeholder="+254" class="input">
            </div>
          </div>
          <div class="w-full">
            <p class="text-label-large mb-1">Message *</p>
            <textarea v-model="message" placeholder="Type your message here..." class="input h-32" required></textarea>
          </div>
          <CustomButton class="md:w-fit" type="submit">Send Message</CustomButton>
        </form>
        <div
          class="bg-primary-container text-surface-on bg-opacity-10 w-full md:w-96 md:h-64 py-7 px-6 flex justify-center items-center rounded-md border border-outline-variant">
          <div class="flex flex-col gap-2">
            <h3 class="font-display text-title-large mb-2">Contact Us</h3>
            <p class="text-primary-on-container">We'd love to hear from you. Reach out to us for any inquiries or support.
            </p>
            <h5><strong>Location :</strong> 123 Charity Street, Nairobi, Kenya</h5>
            <h5><strong>Phone :</strong> +254722123456</h5>
            <h5><strong>Email :</strong> info@herclimate.com</h5>
          </div>
        </div>
      </div>
    </CustomSection>
    <FooterComponent />
  </main>
</template>

<script setup>
import HeroSectionComponent from '@/components/HeroSectionComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';
import CustomSection from '@/components/CustomSection/CustomSection.vue';
import CustomSectionHeader from '@/components/CustomSection/CustomSectionHeader.vue';
import CustomButton from '@/components/CustomButton.vue';
import { ref } from 'vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import { sendMessage } from '@/firebase/index';

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

// const submitForm = async () => {
//   if (email.value && name.value && message.value) {
//     const result = await sendMessage(
//       name.value,
//       email.value,
//       phone.value,
//       message.value
//     );
//     if (result.success === true) {
//       name.value = "";
//       email.value = "";
//       phone.value = "";
//       message.value = "";
//       toast.success(
//         "Message sent successfully! \nWe will get to you as soon as possible"
//       );
//     } else {
//       toast.error(`Message sending failed: ${result.error}`);
//     }
//   }
// }

</script>


<style scoped lang="scss"></style>
