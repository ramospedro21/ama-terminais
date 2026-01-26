<template>
  <section class="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden" id="hero" >
    <!-- IMAGEM DE FUNDO -->
    <img
      src="/images/hero-containers.jpg"
      alt="Contêineres logísticos empilhados em terminal de cargas"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <!-- OVERLAY ESCURO -->
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- CONTEÚDO -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-3xl">
        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl leading-tight italic animate-fade-up delay-150">
          <span class="block font-light">Estamos</span>
          <span class="block font-light">prontos para</span>
          <span class="block">
            <span class="font-extrabold">receber </span>
            <span class="font-light">sua</span>
          </span>
          <span class="block font-extrabold">carga</span>
        </h1>
        <p class="mt-6 max-w-2xl text-white/75 text-xl md:text-2xl font-light leading-relaxed animate-fade-up delay-150">
          Pronto para tirar seu projeto do papel<br> 
          ou agilizar sua cadeia logística?
        </p>
        <a
          href="#contato"
          class="inline-flex items-center mt-8 md:mt-10 bg-transparent text-white
                 px-8 py-4 text-sm font-semibold rounded-full
                 border border-white
                 transition hover:bg-white hover:text-[#000738]"
        >
          Fale conosco
        </a>
      </div>
    </div>
    <!-- ONDA NO FINAL (mais baixa para mostrar mais da foto) -->
    <div class="pointer-events-none absolute inset-x-0 -bottom-12 z-30 h-24 sm:h-32 md:h-40">
      <svg
        class="block h-full w-full"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <!-- Onda otimizada -->
        <path
          d="M0,30 C200,190 600,70 1000,20 C1150,10 1280,35 1440,50 L1440,160 L0,160 Z"
          fill="#000738"
        />
      </svg>
    </div>
  </section>
</template>