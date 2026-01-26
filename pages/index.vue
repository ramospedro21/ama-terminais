<script setup lang="ts">
useSeoMeta({
  title: 'Ama Terminais | Soluções Logísticas e Armazenagem Alfandegada',
  description:
    'A Ama Terminais oferece soluções logísticas eficientes e seguras em transporte rodoviário, armazenagem alfandegada e cargas especiais.',
  ogTitle: 'Ama Terminais',
  ogDescription:
    'Soluções logísticas, transporte rodoviário, armazenagem alfandegada e projetos especiais.',
  ogType: 'website',
  ogLocale: 'pt_BR'
})
</script>

<template>
  <Header />

  <main>
    <Hero />
    <About />
    <Services />
    <Partners />
    <Routes />
    <Terminals />
    <Contact />
  </main>

  <Footer />
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
