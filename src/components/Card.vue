<template>
  <article class="overflow-hidden bg-white rounded-md shadow-lg">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="p-3 md:p-6">
      <slot name="body"></slot>
    </div>
    <hr />
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>
