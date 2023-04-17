<template>
  <main class="flex">
    <sidebar></sidebar>

    <!-- Customer section -->
    <section class="flex-grow-[1] lg:p-6 p-5">
      <!-- header -->
      <headerC></headerC>

      <div class="flex gap-4 flex-col md:flex-row">
        <!-- list customer -->
        <div class="flex-grow-[1]">
          <banner class="mb-6"></banner>
          <tableC></tableC>
        </div>
        <!-- aside -->
        <div class="md:w-[227px] w-full">
          <asideC></asideC>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style></style>
