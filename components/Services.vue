<template>
  <section id="servicos" class="relative bg-white pt-20 pb-36 overflow-hidden">
    <div class="absolute inset-x-0 bottom-0 h-64 bg-[#000a53]"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <header class="mb-20">
        <span class="block text-[#000738] text-2xl font-extrabold uppercase tracking-wide">
          Nossos
        </span>
        <h2 class="text-[#000738] text-5xl md:text-6xl font-extrabold uppercase leading-tight">
          Serviços
        </h2>
      </header>

      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-[36px] bg-[#5c6b73] text-white p-10 min-h-[420px]">
          <h3 class="text-2xl font-extrabold mb-2">Transporte Rodoviário</h3>
          <p class="italic text-white/90 mb-8">LTL/FTL - DTA - Aeroportos</p>
          <p class="text-lg leading-relaxed text-white/90">
            Serviços de transporte rodoviário ágeis e seguros, cobrindo amplamente
            todo o território nacional.
          </p>
        </article>

        <article class="rounded-[36px] bg-[#000738] text-white p-10 min-h-[420px]">
          <h3 class="text-2xl font-extrabold mb-2">Armazenagem</h3>
          <p class="italic text-white/90 mb-8">Alfândegada - LCL/FCL - Geral</p>
          <p class="text-lg leading-relaxed text-white/90">
            Soluções de armazenagem seguras, garantindo a integridade e a gestão
            adequada de seus produtos.
          </p>
        </article>

        <article class="rounded-[36px] bg-[#5c6b73] text-white p-10 min-h-[420px]">
          <h3 class="text-2xl font-extrabold mb-2">Projetos</h3>
          <p class="italic text-white/90 mb-8">Cargas BreakBulk</p>
          <ul class="space-y-4 text-lg text-white/90">
            <li>Cargas com excessos de peso ou dimensões</li>
            <li>Especializados em cargas especiais e projetos complexos</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-[#000a53] pt-16 pb-28" id="parceiros">
    <div class="max-w-7xl mx-auto px-6 -mt-10">
      <div class="text-center mb-20">
        <span class="block text-white text-4xl md:text-5xl font-extrabold">
          LCL
        </span>
        <h2 class="text-white text-4xl md:text-5xl font-extrabold mt-2">
          Parceiros estratégicos
        </h2>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-items-center"
      >
        <img src="/images/partners/fam.png" alt="FAM" class="h-24 max-h-36 h-full object-contain" />
        <img src="/images/partners/world-freight.png" alt="World Freight" class="h-24 max-h-36 h-full object-contain" />
        <img src="/images/partners/south-cargo.png" alt="South Cargo" class="h-24 max-h-36 h-full object-contain" />
        <img src="/images/partners/amass.png" alt="AMASS" class="h-24 max-h-36 h-full object-contain" />
        <img src="/images/partners/msl.png" alt="MSL Group" class="h-24 max-h-36 h-full object-contain" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
