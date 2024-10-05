<template>
  <div v-if="showLightbox" class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
    <div class="bg-black opacity-90 absolute top-0 left-0 w-full h-full -z-10" @click="closeLightbox"></div>
    <p v-if="text" class="absolute top-2 text-gray-200 left-2 -z-10 text-label-medium"><strong>*</strong> {{ text }}</p>
    <div class="absolute top-14 sm:top-8 md:top-2 right-2 flex gap-2">
      <button v-if="downloadable" class=" text-gray-200 bg-black bg-opacity-20 hover:bg-opacity-50 rounded-full"
        @click="downloadImage">
        <Icon icon="material-symbols:download-sharp" class=" sm:px-[6px]" width="40px" />
      </button>
      <button class=" text-gray-200 bg-black bg-opacity-20 hover:bg-opacity-50 rounded-full" @click="closeLightbox">
        <Icon icon="material-symbols:close" class=" px-1 sm:px-[6px]" width="40px" ></Icon>
      </button>
    </div>
    <div class="absolute left-0 z-20 px-1 sm:px-3 md:px-4">
      <Icon icon="ic:round-chevron-left" :class="{ 'opacity-40': currentIndex === 0 && carousel === false }"
        class="text-primary-on rounded-full z-30 px-1 sm:py-[2px] bg-primary cursor-pointer" width="40px" height="40px"
        @click="prevImage"></Icon>
    </div>
    <div class="rounded-md overflow-clip relative h-screen flex flex-col gap-1 justify-center pointer-events-none mx-5">
      <div class="relative h-[50%] md:h-[70%] flex items-center justify-center py-4 pointer-events-none">
        <transition :name="direction === 'right' ? 'slide-out' : 'slide-in'" mode="out-in">
          <img :key="currentIndex" :src="imageList[currentIndex].src" alt="Lightbox Image"
            class="min-w-full max-w-fit grow min-h-full max-h-full object-contain rounded-md overflow-clip pointer-events-auto"
            draggable="false" @swipeleft="nextImage" @swiperight="prevImage" @contextmenu="preventRightClick" />
        </transition>
      </div>
    </div>
    <div class="absolute right-0 z-20 px-1 sm:px-3 md:px-4">
      <Icon icon="ic:round-chevron-right" :class="{
        'opacity-40':
          currentIndex === imageList.length - 1 && carousel === false,
      }" class="text-primary-on rounded-full z-10 px-1 sm:py-[2px] bg-primary cursor-pointer" width="40px"
        height="40px" @click="nextImage"></Icon>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { Icon } from '@iconify/vue';

export default {
  props: {
    imageList: Array, // List of image information (src, download link, loaction, tags list)
    currentImageSrc: String, // Current image src
    downloadable: Boolean, // Whether image is downloadable
    showLightbox: Boolean, // Whether to show or hide the lightbox
    carousel: Boolean, // Whether to create a circular effect (when you reach to the end, it starts again)
    text: String, // Text to display at the top of the page
  },
  components: { Icon },
  setup(props, context) {
    const currentIndex = ref(0);
    const direction = ref("right");
    watch(
      () => props.showLightbox,
      () => {
        if (!props.currentImageSrc) {
          currentIndex.value = 0;
        } else {
          const index = props.imageList.findIndex(
            (item) => item.src === props.currentImageSrc
          );
          currentIndex.value = index >= 0 ? index : 0;
        }
      }
    );

    const closeLightbox = () => {
      context.emit("closeLightbox");
    };


    const prevImage = () => {
      if (currentIndex.value > 0) {
        direction.value = "left";
        currentIndex.value--;
      } else if (currentIndex.value === 0 && props.carousel === true) {
        direction.value = "left";
        currentIndex.value = props.imageList.length - 1;
      }
    };

    const nextImage = () => {
      if (currentIndex.value < props.imageList.length - 1) {
        direction.value = "right";
        currentIndex.value++;
      } else if (
        currentIndex.value === props.imageList.length - 1 &&
        props.carousel === true
      ) {
        direction.value = "right";
        currentIndex.value = 0;
      }
    };

    const downloadImage = () => {
      if (props.downloadable) {
        const driveLinkPattern =
          /drive\.google\.com\/(file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
        const downloadSrc = props.imageList[currentIndex.value].downloadLink
          ? props.imageList[currentIndex.value].downloadLink
          : props.imageList[currentIndex.value].src;
        var downloadLink = "";
        if (driveLinkPattern.test(downloadSrc)) {
          const fileID = extractFileIdFromGoogleDriveLink(downloadSrc);
          // Construct the direct download link for the Google Drive file
          downloadLink = `http://drive.google.com/uc?export=download&id=${fileID}`;
        } else {
          downloadLink = downloadSrc;
        }
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = `SonyEnt-${(Math.floor(Math.random() * 9999999) + 1)
          .toString()
          .padStart(8, "0")}.jpg`;
        link.click();
      }
    };

    const extractFileIdFromGoogleDriveLink = (link) => {
      // Regular expression to extract the file ID
      const fileIdPattern = /id=([a-zA-Z0-9_-]+)/;

      // Use the regular expression to find the match in the link
      const match = link.match(fileIdPattern);

      // Check if a match was found and return the file ID
      if (match && match[1]) {
        console.log(match[1]);
        return match[1];
      } else {
        // Return null if no match was found
        return null;
      }
    };

    const preventRightClick = (event) => {
      event.preventDefault();
    };

    // Listen for swipe events on component mount
    onMounted(() => {
      const element = document.querySelector("img");
      if (element) {
        element.addEventListener("swiperight", prevImage);
        element.addEventListener("swipeleft", nextImage);
      }
    });

    return {
      currentIndex,
      closeLightbox,
      prevImage,
      nextImage,
      downloadImage,
      preventRightClick,
      direction,
    };
  },
};
</script>

<style>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-out-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-out-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
