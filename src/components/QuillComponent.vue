<template>
  <div>
    <div ref="editorContainer" class="!border-surface !font-montserrat !mx-[-10px]"></div>
  </div>
</template>

<script setup>
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import { onMounted, ref, defineProps } from 'vue';

const editorContainer = ref(null);
const toolbarContainer = ref(null);
const props = defineProps({
  editing: {
    type: Boolean,
    default: false,
  },
  content: {
    // type: JSON,
  }
});
var quill = null;

onMounted(() => {
  quill = new Quill(editorContainer.value, {
    theme: 'snow',
    modules: {
      toolbar: props.editing ? [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link'],
        ['blockquote', 'code-block'],
        ['clean'],
      ] : null,
    },
    placeholder: 'Compose an epic...',
    readOnly: !props.editing,
  })
  // quill.import('formats/font');
  if (props.content) {
    quill.setContents(props.content)
  }
});
</script>

<style lang="scss" scoped></style>
