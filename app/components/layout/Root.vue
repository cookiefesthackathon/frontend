<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <Html :lang="appConfig.locale" dir="ltr">
      <Head>
        <Title>{{ appConfig.name }}</Title>
        <Meta name="description" :content="appConfig.description" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="theme-color" :content="appConfig.themeColor" />
        <Meta property="og:title" :content="appConfig.name" />
        <Meta property="og:description" :content="appConfig.description" />
        <Meta property="og:site_name" :content="appConfig.name" />
        <Meta property="og:type" content="website" />
        <Link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>
