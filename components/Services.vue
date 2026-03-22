<template>
  <section id="servicos" class="relative bg-white pt-20 pb-20 overflow-hidden scroll-mt-32">
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <header class="mb-16">
        <span class="block text-[#000738] text-2xl font-extrabold uppercase tracking-wide">
          Nossos
        </span>
        <h2 class="text-[#000738] text-5xl md:text-6xl font-extrabold uppercase leading-tight">
          Serviços
        </h2>
      </header>

      <div class="flex flex-col gap-6">

        <!-- Card Armazenagem -->
        <article class="flex flex-col">
          <!-- Topo: card azul — fica por cima via z-index e sombra -->
          <div class="relative z-10 rounded-[24px] bg-[#000738] text-white p-8 md:p-10 flex flex-col gap-3 shadow-xl">
            <h3 class="text-2xl font-extrabold">Armazenagem</h3>
            <p class="italic text-white text-md">Alfândegada - LCL/FCL - Geral</p>
            <p class="text-white text-md leading-relaxed">
              Soluções de armazenagem seguras, garantindo a <br>
              integridade e a gestão adequada de seus produtos.
            </p>
          </div>

          <!-- Baixo: bloco cinza sobe por baixo do azul -->
          <div class="-mt-6 pt-10 rounded-b-[24px] bg-[#5c6b73] text-white px-8 md:px-10 pb-8 md:pb-10 flex flex-col gap-4">
            <p class="font-bold text-white text-base">Soluções para Comércio Exterior</p>
            <p class="text-white text-md leading-relaxed">
              Gerimos com segurança seus processos de importação e exportação em áreas
              alfandegadas, oferecendo regimes especiais e controle aduaneiro integrado para sua carga.
            </p>
            <ul class="space-y-3 text-md text-white">
              <li>
                <span class="font-bold text-white">LCL - Consolidada:</span>
                Ideal para otimizar custos em embarques de menor volume, tanto na importação quanto na exportação.
              </li>
              <li>
                <span class="font-bold text-white">FCL - Completa:</span>
                Segurança e exclusividade para sua carga fechada, com gestão dedicada desde o container até a entrega final.
              </li>
            </ul>
          </div>
        </article>

        <!-- Card Transporte -->
        <article class="rounded-[24px] bg-[#010953] text-white p-8 md:p-10 flex flex-col gap-3">
          <h3 class="text-2xl font-extrabold">Transporte</h3>
          <p class="italic text-white text-md">Rodoviário / LTL / FTL / DTA / Aeroportos</p>
          <p class="font-bold text-white mt-2">Transporte LTL (Lotação Fracionada) e FTL (Lotação Completa).</p>
          <p class="text-white text-md leading-relaxed">
            Soluções rodoviárias ágeis para distribuição e coleta de cargas de importação e
            exportação, conectando portos, aeroportos e seu destino final. Especialistas em
            fracionado (LTL) para otimizar sua logística doméstica e internacional.
          </p>
        </article>

        <!-- Card Projetos -->
        <article class="rounded-[24px] bg-[#000738] text-white p-8 md:p-10 flex flex-col gap-3">
          <h3 class="text-2xl font-extrabold">Projetos</h3>
          <p class="italic text-white text-md">Cargas BreakBulk</p>
          <p class="italic text-white text-md">Cargas com excessos de peso ou dimensões</p>
          <p class="font-bold text-white mt-2">Projetos Especiais e BreakBulk</p>
          <p class="text-white text-md leading-relaxed">
            Atuamos na recepção, manuseio e embarque de equipamentos industriais, peças
            superdimensionadas e cargas fora dos padrões convencionais, garantindo segurança
            e planejamento em cada etapa.
          </p>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>