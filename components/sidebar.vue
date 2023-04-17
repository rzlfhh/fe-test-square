<template>
  <div
    class="w-[200px] border-right-grey h-[100vh] lg:flex flex-col sticky top-0 left-0 hidden"
  >
    <!-- logo -->
    <a href="#" class="block m-6"
      ><img src="~/assets/image/logo.svg" alt="logo"
    /></a>

    <!-- sidebar link -->
    <nav class="text-secondary mx-6">
      <!-- menu -->
      <div class="mb-6">
        <span class="text-[.625rem] leading-5 tracking-[.015rem] mb-2"
          >Menu</span
        >
        <ul
          class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem]"
        >
          <li v-for="item in dataMenu" :key="item.id" class="py-2">
            <a
              :href="item.link"
              class="flex gap-3 justify-between items-center hover:text-primary hover:font-bold transition-all"
              :class="item.class"
            >
              <div class="flex items-center gap-3">
                <img :src="item.src" :alt="item.alt" />
                <span>{{ item.text }}</span>
              </div>

              <span
                v-if="item.notif"
                class="rounded-full grad-orange w-[18px] h-[17px] text-[.625rem] text-center text-white leading-none grid place-content-center hover:animate-pulse"
                >4</span
              >
            </a>
          </li>
        </ul>
      </div>

      <!-- integration -->
      <div class="">
        <span class="text-[.625rem] leading-5 tracking-[.015rem] mb-2"
          >Integration</span
        >
        <ul
          class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem]"
        >
          <li v-for="item in dataIntegration" :key="item.id" class="py-2">
            <a
              :href="item.link"
              class="flex gap-3 justify-between items-center hover:text-primary hover:font-bold transition-all"
            >
              <div class="flex items-center gap-3">
                <img :src="item.src" :alt="item.alt" />
                <span>{{ item.text }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- profile -->
    <div class="border-top-grey justify-end mt-auto p-6">
      <div class="flex gap-3 items-center mb-6 overflow-hidden">
        <img
          src="~/assets/image/profile.png"
          alt="profile pic"
          class="h-[36px] w-[36px]"
        />
        <div>
          <h3
            class="font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem]"
          >
            Savannah
          </h3>
          <p
            class="text-[.625rem] leading-5 tracking-[.015rem] text-secondary text-ellipsis overflow-hidden whitespace-nowrap"
          >
            Food Quality Manager
          </p>
        </div>
      </div>

      <button
        class="flex gap-2 items-center w-full justify-center p-2 bg-red-soft font-quicksand font-semibold text-[.75rem] leading-[18px] tracking-[-0.01rem] text-red rounded-[4px] hover:bg-[#ffe0e2] transition-all"
      >
        <img src="~/assets/image/logout.svg" alt="icon" />
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
  import dashboardIcon from "~/assets/image/dashboard.svg";
  import stockIcon from "~/assets/image/battery-full.svg";
  import cust from "~/assets/image/cust.svg";
  import restaurant from "~/assets/image/restaurant.svg";
  import design from "~/assets/image/design.svg";
  import report from "~/assets/image/report.svg";
  import admin from "~/assets/image/admin.svg";
  import settings from "~/assets/image/settings.svg";
  import stock from "~/assets/image/stock.svg";
  import supply from "~/assets/image/supply.svg";

  const dataMenu = [
    {
      src: dashboardIcon,
      alt: "nav icon",
      text: "Dashboard",
      link: "#",
      notif: true,
    },
    {
      src: stockIcon,
      alt: "nav icon",
      text: "Stock",
      link: "#",
    },
    {
      src: cust,
      alt: "nav icon",
      text: "Customer",
      link: "#",
      class: "active",
    },
    {
      src: restaurant,
      alt: "nav icon",
      text: "Reastaurant",
      link: "#",
    },
    {
      src: design,
      alt: "nav icon",
      text: "Design",
      link: "#",
    },
    {
      src: report,
      alt: "nav icon",
      text: "Report",
      link: "#",
    },
    {
      src: admin,
      alt: "nav icon",
      text: "Role & Admin",
      link: "#",
    },
    {
      src: settings,
      alt: "nav icon",
      text: "Settings",
      link: "#",
    },
  ];

  const dataIntegration = [
    {
      src: stock,
      alt: "nav icon",
      text: "Stock",
      link: "#",
    },
    {
      src: supply,
      alt: "nav icon",
      text: "Supply",
      link: "#",
    },
  ];
</script>

<style></style>
