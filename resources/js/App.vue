<script setup>
import { Link } from '@inertiajs/vue3'
import { useRoute } from 'inertia-routes'

const route = useRoute()
</script>

<template>
  <div class="h-full flex flex-col gap-12">
    <header class=" py-6 bg-gray-50/5">
      <div class="container mx-auto flex justify-between items-center gap-4">
        <div class="text-2xl font-semibold uppercase -tracking-widest">
          Boilerplate
        </div>

        <nav class="flex gap-12">
          <Link :href="route('home')">
            Home
          </Link>
          <Link :href="route('test')">
            Test
          </Link>
        </nav>
      </div>
    </header>

    <main class="grow container mx-auto">
      <slot />
    </main>

    <div class="text-center text-xs py-6">
      Footer
    </div>
  </div>
</template>