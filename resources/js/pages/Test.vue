<script setup>
import { Link } from '@inertiajs/vue3'
import { useRoute } from 'inertia-routes'

const props = defineProps({ testProps: Object })
const route = useRoute()

console.log(props)
</script>

<template>
  <div class="grid gap-12">
    Test.vue

    <div>
      Page props:
      <pre>{{ props }}</pre>
    </div>
  </div>
</template>