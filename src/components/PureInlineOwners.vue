<template>
  {{ owner }}
</template>

<script>
export default {
  name: "PureInlineOwners",
  props: {
    owner: {
      type: String,
      required: true,
    },
  },
};
</script>
