<template>
  <aside>
    <!-- analytics -->
    <div
      class="bg-primary rounded-lg text-white p-4 relative overflow-hidden mb-4"
    >
      <img
        src="~/assets/image/line-aside.png"
        alt="line"
        class="absolute left-0 top-0"
      />
      <img
        src="~/assets/image/circle-aside.png"
        alt="line"
        class="absolute right-0 bottom-0"
      />

      <h3
        class="font-quicksand font-semibold text-xl leading-[30px] tracking-[-0.02rem] mb-[98px] w-[80%]"
      >
        See analytics of the Customer Clearly
      </h3>

      <button
        class="bg-blurry py-3 px-4 rounded-lg font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] flex items-center gap-3 hover:bg-white/40 transition-all"
      >
        <span class="text-ellipsis overflow-hidden whitespace-nowrap">
          See Analytics
        </span>
      </button>
    </div>

    <!-- top menu -->
    <div class="bg-secondary-3">
      <div class="p-4 pb-0 rounded-lg overflow-hidden">
        <h3
          class="font-quicksand font-medium text-2xl leading-[28.8px] tracking-[-0.02rem] text-black-2 mb-3"
        >
          Top Menu <br />
          <span class="font-semibold text-orange">This Week</span>
        </h3>

        <p class="text-xs leading-6 tracking-[0.015rem] text-secondary mb-3">
          10 - 12 Agustus 2023
        </p>

        <ol type="1" class="flex flex-col gap-2">
          <li
            class="p-[10px] font-quicksand font-semibold text-xs leading-[1.125rem] tracking-[-0.01rem] text-secondary relative"
            :class="item.class"
            v-for="item in dataTopMenu"
            :key="item.id"
          >
            {{ item.title }}
            <img
              src="~/assets/image/one.svg"
              alt="one"
              class="absolute top-[-.6em] right-0"
              v-if="item.isOne"
            />
          </li>
        </ol>
      </div>

      <img src="~/assets/image/graph-aside.png" alt="graph" class="w-full" />
    </div>
  </aside>
</template>

<script setup>
  const dataTopMenu = [
    {
      title: "Nasi Goreng Jamur Special Resto Pak Min",
      class:
        "bg-white rounded-lg shadow !font-bold !text-sm !leading-[21px] !tracking-[-0.01rem] text-black",
      isOne: true,
    },
    {
      title: "2. Tongseng Sapi Gurih",
    },
    {
      title: "3. Nasi Gudeg Telur Ceker",
    },
    {
      title: "4. Nasi Ayam serundeng",
    },
    {
      title: "5. Nasi Goreng Seafood",
    },
  ];
</script>

<style></style>
