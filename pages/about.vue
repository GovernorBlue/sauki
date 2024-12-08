<script setup lang="ts">
import { aboutPage, footerData, navbarData } from '~/data'

const { data: aboutData } = await useAsyncData('about', () => queryContent('/about').findOne())

const mainImage = computed(() => aboutData.value?.image || '/urbluedr.jpeg')

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: aboutData.value?.aboutAuthor || footerData.aboutAuthor,
    },
  ],
})

defineOgImageComponent('About', {
  headline: aboutData.value?.ogImageHeadline || 'Greetings 👋',
  title: aboutData.value?.title || navbarData.homeTitle,
  description:
    aboutData.value?.description ||
    'Dive into Medicine, Healthcare, lifestyle & Problem Solving with me and let us learn together.',
  link: mainImage.value,
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div class="col-span-5 max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">
              {{ aboutData?.title || aboutPage.title }}
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://www.instagram.com/yourbluedoctor/?hl=en-gb"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Instagram"
              >
                <Icon name="fa:instagram" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/puamus-oki-babas-m-d-ba8056137/"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://x.com/yourbluedoctor"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg :src="mainImage" width="125" height="115" quality="50" class="rounded-md" />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          {{ aboutData?.description aboutPage.description }}
        </h3>

        <p>{{ aboutData?.aboutMe || aboutPage.aboutMe }}</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg :src="mainImage" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
