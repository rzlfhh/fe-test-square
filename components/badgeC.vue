<template>
  <span :class="className">
    <slot />
  </span>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    juragan: Boolean,
    sultan: Boolean,
    konglomerat: Boolean,
  });

  const className = computed(() => {
    let baseName = "badge";

    return {
      [baseName]: true,
      [`${baseName}--juragan`]: props.juragan,
      [`${baseName}--sultan`]: props.sultan,
      [`${baseName}--konglomerat`]: props.konglomerat,
    };
  });
</script>

<style>
  .badge {
    background: #fefbf6;
    color: #f46b45;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .badge--warga {
    background: #fefbf6;
    color: #f46b45;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .badge--juragan {
    background: #f6fcfe;
    color: #2f80ed;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .badge--sultan {
    background: #f6fef9;
    color: #11998e;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .badge--konglomerat {
    background: #fef5ff;
    color: #7f00ff;
    padding: 4px 8px;
    border-radius: 4px;
  }

  @media screen and (min-width: 1024px) {
    .badge,
    .badge--warga,
    .badge--juragan,
    .badge--sultan,
    .badge--konglomerat {
      padding: 8px 24px;
    }
  }
</style>
