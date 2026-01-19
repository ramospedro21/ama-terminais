<template>
  <section
    id="lcl-rotas"
    aria-labelledby="lcl-rotas-title"
    class="bg-[#000738] py-16 sm:py-20"
  >
    <div class="mx-auto max-w-[1600px] px-6">
      <div
        class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#000a4a] to-[#000738] p-6 shadow-[0_40px_120px_rgba(0,0,0,.45)]
               lg:rounded-[2.625rem] lg:p-14 md:rounded-[2rem] md:p-10"
        style="background:
          radial-gradient(1200px 700px at 20% 10%, rgba(255,255,255,0.06), transparent 55%),
          radial-gradient(900px 600px at 85% 20%, rgba(255,255,255,0.05), transparent 60%),
          linear-gradient(180deg, #000a4a 0%, #000738 100%);"
      >
        <!-- HEADER -->
        <header class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">
          <div class="min-w-0">
            <p class="text-3xl font-extrabold leading-none text-white lg:text-4xl">LCL</p>

            <h2
              id="lcl-rotas-title"
              class="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Rotas operadas por nossos parceiros
            </h2>
          </div>

          <p class="hidden pt-1 text-right text-sm italic tracking-wide text-white/70 lg:block whitespace-nowrap">
            Todos os serviços são <span class="font-semibold not-italic">semanais</span>
          </p>
        </header>

        <!-- LINHAS (logo | rotas) -->
        <div class="mt-8 space-y-10 lg:mt-12 lg:space-y-12">
          <!-- MSL -->
          <section class="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-16 lg:items-center" aria-labelledby="op-msl">
            <div class="hidden lg:flex min-h-[140px] items-center justify-center">
              <img
                src="/images/partners/msl.png"
                alt="MSL Group"
                width="220"
                height="96"
                class="h-[96px] w-auto max-w-[220px] object-contain opacity-95"
                loading="lazy"
                decoding="async"
                fetchpriority="high"
              />
            </div>

            <div class="min-w-0">
              <h3 id="op-msl" class="mb-4 block text-xl font-extrabold uppercase tracking-wide text-white lg:hidden">
                MSL Group
              </h3>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                <!-- rotas MSL (com bracket) -->
                <div
                  class="relative pl-7
                         before:absolute before:left-0 before:top-[6px] before:bottom-[6px] before:w-[18px]
                         before:rounded-l-[1.75rem]
                         before:border-l-2 before:border-y-2 before:border-white/20
                         before:border-r-0"
                >
                  <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none" aria-label="Rotas MSL Group">
                    <li><RoutePill country="CHINA" city="SHANGHAI" /></li>
                    <li><RoutePill country="CHINA" city="NINGBO" /></li>
                    <li><RoutePill country="CHINA" city="HONG KONG" /></li>
                    <li><RoutePill country="CHINA" city="GENOVA" /></li>
                  </ul>
                </div>

                <!-- FAM dentro da mesma linha -->
                <section
                  class="grid grid-cols-1 lg:ml-[-50px] lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-8 lg:items-center"
                  aria-labelledby="op-fam"
                >
                  <div class="hidden lg:flex min-h-[140px] items-center justify-center">
                    <img
                      src="/images/partners/fam.png"
                      alt="FAM"
                      width="140"
                      height="96"
                      class="h-[96px] w-auto max-w-[140px] object-contain opacity-95"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div class="min-w-0">
                    <h3 id="op-fam" class="mb-4 block text-xl font-extrabold uppercase tracking-wide text-white lg:hidden">
                      FAM
                    </h3>

                    <div
                      class="relative min-w-0 pl-7
                            before:absolute before:left-0 before:top-[6px] before:bottom-[6px] before:w-[18px]
                            before:rounded-l-[1.75rem]
                            before:border-l-2 before:border-y-2 before:border-white/20
                            before:border-r-0"
                    >
                      <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none" aria-label="Rotas FAM">
                        <li><RoutePill country="CHINA" city="SHANGHAI" /></li>
                        <li><RoutePill country="CHINA" city="NINGBO" /></li>
                        <li><RoutePill country="CHINA" city="SINGAPURA" /></li>
                        <li><RoutePill country="CHINA" city="HAMBURGO" /></li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </section>

          <!-- WORLD FREIGHT -->
          <section class="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-16 lg:items-center" aria-labelledby="op-world">
            <div class="hidden lg:flex min-h-[140px] items-center justify-center">
              <img
                src="/images/partners/world-freight.png"
                alt="World Freight"
                width="220"
                height="96"
                class="h-[96px] w-auto max-w-[220px] object-contain opacity-95"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="min-w-0">
              <h3 id="op-world" class="mb-4 block text-xl font-extrabold uppercase tracking-wide text-white lg:hidden">
                World Freight
              </h3>

              <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10" aria-label="Rotas World Freight">
                <div
                  class="relative pl-7
                         before:absolute before:left-0 before:top-[6px] before:bottom-[6px] before:w-[18px]
                         before:rounded-l-[1.75rem]
                         before:border-l-2 before:border-y-2 before:border-white/20
                         before:border-r-0"
                >
                  <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                    <li><RoutePill country="CHINA" city="SHANGHAI" /></li>
                    <li><RoutePill country="CHINA" city="NINGBO" /></li>
                    <li><RoutePill country="CHINA" city="HONG KONG" /></li>
                  </ul>
                </div>

                <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                  <li><RoutePill country="CHINA" city="SHENZHEN" /></li>
                  <li><RoutePill country="CHINA" city="QINGDAO" /></li>
                  <li><RoutePill country="COREIA DO SUL" city="BUSAN" /></li>
                </ul>

                <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                  <li><RoutePill country="ÍNDIA" city="NHAVA SHEVA" /></li>
                </ul>
              </div>
            </div>
          </section>

          <!-- SOUTH CARGO -->
          <section class="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-16 lg:items-center" aria-labelledby="op-south">
            <div class="hidden lg:flex min-h-[140px] items-center justify-center">
              <img
                src="/images/partners/south-cargo.png"
                alt="South Cargo"
                width="220"
                height="96"
                class="h-[96px] w-auto max-w-[220px] object-contain opacity-95"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="min-w-0">
              <h3 id="op-south" class="mb-4 block text-xl font-extrabold uppercase tracking-wide text-white lg:hidden">
                South Cargo
              </h3>

              <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10" aria-label="Rotas South Cargo">
                <div
                  class="relative pl-7
                         before:absolute before:left-0 before:top-[6px] before:bottom-[6px] before:w-[18px]
                         before:rounded-l-[1.75rem]
                         before:border-l-2 before:border-y-2 before:border-white/20
                         before:border-r-0"
                >
                  <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                    <li><RoutePill country="CHINA" city="SHANGHAI" /></li>
                    <li><RoutePill country="CHINA" city="NINGBO" /></li>
                  </ul>
                </div>

                <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                  <li><RoutePill country="CHINA" city="HONG KONG" /></li>
                  <li><RoutePill country="CHINA" city="SHENZHEN" /></li>
                </ul>

                <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none">
                  <li><RoutePill country="CHINA" city="QINGDAO" /></li>
                </ul>
              </div>
            </div>
          </section>

          <!-- AMASS -->
          <section class="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-16 lg:items-center" aria-labelledby="op-amass">
            <div class="hidden lg:flex min-h-[140px] items-center justify-center">
              <img
                src="/images/partners/amass.png"
                alt="AMASS"
                width="220"
                height="96"
                class="h-[96px] w-auto max-w-[220px] object-contain opacity-95"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="min-w-0">
              <h3 id="op-amass" class="mb-4 block text-xl font-extrabold uppercase tracking-wide text-white lg:hidden">
                AMASS
              </h3>

              <div
                class="relative max-w-md pl-7
                       before:absolute before:left-0 before:top-[6px] before:bottom-[6px] before:w-[18px]
                       before:rounded-l-[1.75rem]
                       before:border-l-2 before:border-y-2 before:border-white/20
                       before:border-r-0"
              >
                <ul class="space-y-3 w-full max-w-[290px] lg:w-[290px] lg:max-w-none" aria-label="Rotas AMASS">
                  <li><RoutePill country="CHINA" city="SHANGHAI" /></li>
                  <li><RoutePill country="CHINA" city="HONG KONG" /></li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <!-- Nota mobile -->
        <p class="mt-10 block text-center text-base italic text-white/80 lg:hidden">
          Todos os serviços são <span class="font-semibold not-italic">semanais</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import RoutePill from '@/components/RoutePill.vue'
</script>