<template>
    <a
      v-bind:href="'/music/'"
      class="playlist-item flex group relative p-0.5 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50"
      v-bind:data-color="playlist.color.dark"
    >
      <div class="h-12 w-12 flex-none">
        <img
          v-bind:src="playlist.cover"
          v-bind:alt="playlist.title"
          class="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
        />
      </div>
      <div class="flex flex-auto flex-col truncate">
        <div class="font-semibold w-full flex-none truncate">Music</div>
        <div class="text-gray-400 text-sm truncate flex-1">Spotify</div>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    name: 'PlaylistItem',
    props: {
      playlist: {
        type: Object,
        required: true
      }
    }
  }
  </script>