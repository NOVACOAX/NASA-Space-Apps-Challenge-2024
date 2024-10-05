<template>
  <form class="flex flex-col">
    <div class="mb-4 font-display">Newsletter</div>

    <form @submit.prevent="submitForm">
      <div class="flex w-full mb-2">
        <input class="px-2 text-surface-on py-2 rounded-[0.375rem_0rem_0rem_0.375rem] bg-surface w-0 flex-1" type="email"
          placeholder="Enter your email" required v-model="email" name="email"/>
        <CustomButton class="rounded-l-none" type="submit">Subscribe</CustomButton>
      </div>
    </form>

    <p class="text-[rgba(208_228_255_/_0.70)] mb-8 text-label-small">
      Your email is safe with us. We don’t spam.
    </p>

    <div>
      <div class="mb-4 font-display">Follow Us</div>
      <div class="flex gap-4">
        <a href="">
          <img src="@/assets/twitter.svg" alt="Twitter logo" />
        </a>
        <a href="">
          <img src="@/assets/instagram.svg" alt="Instagram logo" />
        </a>
        <a href="">
          <img src="@/assets/tiktok.svg" alt="TikTok logo" />
        </a>
        <a href="">
          <img src="@/assets/threads.svg" alt="Threads logo" />
        </a>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import CustomButton from '../CustomButton.vue';
import { subscribe } from "@/firebase/index";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const email = ref("");

const submitForm = async () => {
  if (email.value) {
    const response = await subscribe(email.value);
    if (response.success === true) {
      email.value = "";
      toast.success("Never miss an update. You are amazing ❤️");
    } else {
      toast.error(`Email subscription failed: ${response.error}`);
    }
  }
};
</script>