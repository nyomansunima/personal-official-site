<script setup lang="ts">
const colorMode = useColorMode()

const changeTheme = () => {
  const currentTheme = colorMode.preference
  const newTheme = currentTheme == 'light' ? 'dark' : 'light'
  colorMode.preference = newTheme
}
</script>

<template>
  <Button :size="'icon'" class="buttons" @click="changeTheme">
    <i v-show="$colorMode.preference == 'light'" class="fi fi-rr-brightness" />
    <i v-show="$colorMode.preference == 'dark'" class="fi fi-rr-moon-stars" />
  </Button>
</template>
