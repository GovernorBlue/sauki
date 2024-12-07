<script lang="ts" setup>
import { navbarData, homePage } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: homePage.headline,
  title: navbarData.homeTitle,
  description: homePage.description,
  link: '/urbluedr.jpeg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
