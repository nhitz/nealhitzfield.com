<template>
  <li>
    <a
      :href="href"
      class="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
    >
      <component :is="iconName" class="h-6 w-6 menu-item-icon" />
      <span class="menu-item-text"><slot /></span>
    </a>
  </li>
</template>

<script>
import HomeIcon from "../icons/HomeIcon.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import MediaIcon from "../icons/MediaIcon.vue";

export default {
  name: "SideMenuItem",
  components: {
    "HomeIcon": HomeIcon,
    "SearchIcon": SearchIcon,
    "MediaIcon": MediaIcon,
  },
  props: {
    href: {
      type: String,
      default: "#",
    },
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>
