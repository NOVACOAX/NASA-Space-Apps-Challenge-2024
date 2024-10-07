<template>
  <!-- Hero Image -->
  <div
    :class="[
      'absolute inset-0 md:relative flex items-center justify-center md:m-8 overflow-visible place-content-center',
    ]"
  >
    <div
      class="max-md:hidden relative max-h-[32rem] h-[80%] -translate-y-[6%] aspect-square scale-75 sm:scale-100"
    >
      <!-- Background oval -->
      <img src="@/assets/Oval.png" alt="Background oval" class="" />

      <!-- Oval outline mask -->
      <img
        src="@/assets/Mask.png"
        alt=""
        class="absolute bottom-0 translate-y-[9%] translate-x-[-3%] scale-[101%]"
      />

      <!-- Nkanai and kids -->
      <img
        src="@/assets/Oval-pic.png"
        alt="people smiling with children"
        class="absolute bottom-0 left-0 translate-y-[5%] translate-x-[-3%]"
      />

      <!-- Arc -->
      <img
        src="@/assets/arch.svg"
        alt="Arch"
        class="absolute bottom-0 right-0 translate-y-[35%] translate-x-[20%] scale-75"
      />

      <!-- Clouds -->
      <img
        src="@/assets/clouds.png"
        alt="Clouds"
        class="absolute top-0 left-0 scale-[50%] translate-x-[-20%] translate-y-[-35%]"
      />
      <img
        src="@/assets/clouds.png"
        alt="Clouds"
        class="absolute top-0 right-0 md:scale-[70%] scale-90 translate-x-[35%]"
      />
    </div>
    <div class="md:hidden min-w-full min-h-screen max-h-screen overflow-clip"> 
      <img class="min-w-full min-h-screen" src="@/assets/hero-bg-mobile.png" alt="Background image">
    </div>
  </div>
</template>
