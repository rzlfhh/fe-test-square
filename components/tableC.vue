<template>
  <table class="w-full text-left mb-14">
    <tr
      class="bg-secondary-3 font-quicksand font-medium text-xs lg:text-sm leading-[21px] tracking-[-0.01rem] text-secondary rounded-sm"
    >
      <th class="w-[20%] p-[10px]">Customer Name</th>
      <th class="w-[20%]">Level</th>
      <th class="w-[20%]">Favorite Menu</th>
      <th class="w-[20%]">Total Transaction</th>
      <th class="w-[20%]">Action</th>
    </tr>
    <tr
      class="font-quicksand font-semibold text-xs lg:text-sm leading-[21px] tracking-[-0.01rem] text-black-2"
      v-for="item in dataCustomer"
      :key="item.id"
    >
      <td class="px-[10px] py-[14px] pb-4">{{ item.name }}</td>
      <td>
        <BadgeC :class="item.props">{{ item.level }}</BadgeC>
      </td>
      <td>{{ item.favorite }}</td>
      <td>{{ item.transaction }}</td>
      <td class="flex gap-1 items-center">
        <button
          class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] text-black-2 lg:px-3 lg:py-1 px-[8px] py-[8px] bg-secondary-3 hover:bg-[#ededed] transition-all rounded-[4px] flex items-center gap-2 h-[29px]"
        >
          <img src="~/assets/image/detail.svg" alt="icon" class="w-3" />
          <span class="hidden md:block">Detail</span>
        </button>
        <button
          class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] text-black-2 lg:px-3 lg:py-1 px-[8px] py-[8px] bg-secondary-3 hover:bg-[#ededed] transition-all rounded-[4px] h-[29px]"
        >
          <img src="~/assets/image/edit-2.svg" alt="icon" class="w-3" />
        </button>
        <button
          class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] text-black-2 lg:px-3 lg:py-1 px-[8px] py-[8px] bg-red-soft hover:bg-[#FFE2E4] transition-all rounded-[4px] h-[29px]"
        >
          <img src="~/assets/image/delete.svg" alt="icon" class="w-3" />
        </button>
      </td>
    </tr>
  </table>

  <paginationC></paginationC>
</template>

<script setup>
  const dataCustomer = [
    {
      name: "Odis Rhinehart ",
      level: "Warga",
      favorite: "Chicken & Ribs Combo ",
      transaction: "IDR 194,700 ",
      props: "badge--warga",
    },
    {
      name: "Kris Roher",
      level: "Warga",
      favorite: "Surf & Turf Gift Basket",
      transaction: "IDR 631,200",
      props: "badge--warga",
    },
    {
      name: "Serenity Fisher",
      level: "Juragan",
      favorite: "Fried Chicken Dinne",
      transaction: "IDR 1,040.920",
      props: "badge--juragan",
    },
    {
      name: "Brooklyn Warren",
      level: "Sultan",
      favorite: "Surf & Turf Gift Basket",
      transaction: "IDR 730,500",
      props: "badge--sultan",
    },
    {
      name: "Franco Delort",
      level: "Juragan",
      favorite: "Chicken & Ribs Combo",
      transaction: "IDR 96,000",
      props: "badge--juragan",
    },
    {
      name: "Saul Geoghegan",
      level: "Juragan",
      favorite: "Surf & Turf Gift Basket",
      transaction: "IDR 256,000",
      props: "badge--juragan",
    },
    {
      name: "Alfredo Vetrovs",
      level: "Juragan",
      favorite: "Dark & Stormy",
      transaction: "IDR 590,080",
      props: "badge--juragan",
    },
    {
      name: "Cristofer Vetrovs",
      level: "Konglomerat",
      favorite: "Shaking Beef Tri-Tip",
      transaction: "IDR 782,600",
      props: "badge--konglomerat",
    },
    {
      name: "Calvin Steward",
      level: "Konglomerat",
      favorite: "BBQ Rib Dinner",
      transaction: "IDR 467,500",
      props: "badge--konglomerat",
    },
    {
      name: "Calvin Steward",
      level: "Konglomerat",
      favorite: "BBQ Rib Dinner",
      transaction: "IDR 467,500",
      props: "badge--konglomerat",
    },
  ];
</script>

<style></style>
