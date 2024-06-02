<template>
  <div class="flex flex-col flex-1 gap-2">
    <div class="bg-zinc-900 rounded-lg">
      <ul>
        <SideMenuItem href="/" iconName="HomeIcon">Home</SideMenuItem>
        <SideMenuItem href="#" iconName="SearchIcon">Search</SideMenuItem>
      </ul>
    </div>

    <div class="bg-zinc-900 rounded-lg flex-1">
      <ul>
        <SideMenuItem href="#" iconName="MediaIcon">
          Neal's Stuff
        </SideMenuItem>
      </ul>
      <ul class="pl-2">
        <SideItemMusic :playlist="playlists[4]" />
      </ul>
      <ul class="pl-2">
        <SideItemRepos :playlist="playlists[4]" />
      </ul>
    </div>
  </div>
</template>

<script>
import SideMenuItem from "./SideMenuItem.vue";
import SideItemRepos from "./SideItemRepos.vue";
import SideItemMusic from "./SideItemMusic.vue";
import { playlists } from "../../lib/musicData";

export default {
  name: "SideMenu",
  components: {
    SideMenuItem,
    SideItemRepos,
    SideItemMusic,
  },
  data() {
    return {
      playlists,
    };
  },
};
</script>
