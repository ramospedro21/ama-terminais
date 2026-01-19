<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
       <a href="/" class="transition-opacity duration-300 hover:opacity-80">
        <img
          src="/images/logo-ama-terminais.svg"
          alt="Ama Terminais - Soluções Logísticas"
          class="h-8 md:h-10 w-auto"
          loading="eager"
        />
      </a>

      <!-- PILULA DESKTOP -->
      <nav
        class="hidden md:flex items-center
               border border-blue-900
               rounded-full
               overflow-hidden
               h-12"
      >
        <!-- Links -->
        <ul class="flex items-center gap-8 px-8 text-sm font-medium text-blue-900 bg-white">
          <li>
            <a href="#quem-somos" class="transition-colors duration-300 hover:text-blue-600">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="#servicos" class="transition-colors duration-300 hover:text-blue-600">
              Serviços
            </a>
          </li>
          <li>
            <a href="#parceiros" class="transition-colors duration-300 hover:text-blue-600">
              Parceiros
            </a>
          </li>
          <li>
            <a href="#rotas" class="transition-colors duration-300 hover:text-blue-600">
              Rotas
            </a>
          </li>
        </ul>

        <!-- CTA integrado -->
        <a
          href="#contato"
          class="h-full flex items-center px-8
                 bg-[#000738] text-white
                 font-medium text-sm
                 rounded-full
                 transition-all duration-300 hover:bg-[#02085a]"
        >
          Entre em contato
        </a>
      </nav>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-blue-900 text-2xl transition-transform duration-300 hover:scale-110"
        @click="open = !open"
        aria-label="Abrir menu"
      >
        ☰
      </button>
    </div>

    <!-- MENU MOBILE -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-white border-t"
      >
        <ul class="flex flex-col px-6 py-6 gap-5 text-sm font-medium text-blue-900">
          <li>
            <a 
              @click="open=false" 
              href="#quem-somos"
              class="block transition-colors duration-300 hover:text-blue-600"
            >
              Quem Somos
            </a>
          </li>
          <li>
            <a 
              @click="open=false" 
              href="#servicos"
              class="block transition-colors duration-300 hover:text-blue-600"
            >
              Serviços
            </a>
          </li>
          <li>
            <a 
              @click="open=false" 
              href="#parceiros"
              class="block transition-colors duration-300 hover:text-blue-600"
            >
              Parceiros
            </a>
          </li>
          <li>
            <a 
              @click="open=false" 
              href="#rotas"
              class="block transition-colors duration-300 hover:text-blue-600"
            >
              Rotas
            </a>
          </li>
          <li>
          <a
              @click="open=false"
              href="#contato"
              class="block bg-blue-900 text-white py-3 rounded-full text-center
                     transition-all duration-300 hover:bg-[#02085a] hover:shadow-lg"
            >
              Entre em contato
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>