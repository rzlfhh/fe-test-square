<template>
  <div class="bg-primary text-white p-3 rounded-lg relative overflow-hidden">
    <img
      src="~/assets/image/banner-img.png"
      alt="banner image"
      class="absolute top-0 right-0 h-full object-cover w-[30%] max-w-[30%] lg:w-auto lg:max-w-fit"
    />
    <h2
      class="font-quicksand font-bold text-xl leading-[30px] tracking-[-0.02rem] relative z-auto"
    >
      Customer
    </h2>
    <p class="text-xs leading-6 tracking-[0.015rem] mb-4 relative z-auto">
      On this menu you will be able to create, edit, and also delete <br />
      the customer. Also you can manage it easily.
    </p>

    <!-- button -->
    <div class="flex gap-4 flex-wrap md:flex-nowrap">
      <button
        class="bg-blurry py-2 px-3 lg:py-3 lg:px-4 rounded-lg font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] flex items-center gap-3 hover:bg-white/40 transition-all"
      >
        <img src="~/assets/image/add.svg" alt="icon" />
        <span class="text-ellipsis overflow-hidden whitespace-nowrap">
          Add New Customer
        </span>
      </button>
      <!-- search -->
      <div
        class="relative text-secondary font-quicksand font-[500] text-sm leading-[21px] tracking-[-0.01rem] flex-grow-[1]"
      >
        <div class="absolute top-[10px] lg:top-[14px] left-4">
          <img src="~/assets/image/search-normal.svg" alt="icon" />
        </div>
        <input
          type="text"
          class="w-full lg:h-full h-[37px] pl-12 pr-20 rounded-lg z-0 focus:shadow focus:outline-none placeholder-secondary-2"
          placeholder="Search Customer"
        />
        <div class="absolute top-1 right-1 bottom-1">
          <button
            class="text-white rounded-lg bg-primary hover:bg-[#5152D7] transition-all py-1 px-3 lg:py-2"
          >
            Search
          </button>
        </div>
      </div>
      <button
        class="bg-blurry py-2 px-3 lg:py-3 lg:px-4 rounded-lg font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] flex items-center gap-3 hover:bg-white/40 transition-all"
      >
        <img src="~/assets/image/filter.svg" alt="icon" />
        <span class="text-ellipsis overflow-hidden whitespace-nowrap">
          Filter
        </span>
      </button>
      <button
        class="bg-blurry py-2 px-3 lg:py-3 lg:px-4 rounded-lg font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] flex items-center gap-3 hover:bg-white/40 transition-all"
      >
        <img src="~/assets/image/refresh-2.svg" alt="icon" />
        <span class="text-ellipsis overflow-hidden whitespace-nowrap">
          Refresh
        </span>
      </button>
      <button
        class="bg-blurry py-2 px-3 lg:py-3 lg:px-4 rounded-lg font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] flex items-center gap-3 hover:bg-white/40 transition-all"
      >
        <img src="~/assets/image/printer.svg" alt="icon" width="18" />
      </button>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
