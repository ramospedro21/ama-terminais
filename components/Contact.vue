<template>
  <section id="contato" class="relative bg-white">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <img
        src="/images/logo-ama-terminais.svg"
        alt="Ama Terminais"
        class="h-20 object-contain"
      />
      <div class="grid lg:grid-cols-2 items-start">
        <!-- COLUNA ESQUERDA -->
        <div>
          <!-- Logo -->
          <!-- Título -->
          <h2 class="mt-16 text-[#000738] text-5xl md:text-6xl font-extrabold italic leading-tight">
            Entre em contato
          </h2>
          <p class="mt-4 text-[#000738] text-xl">
            Estamos prontos para receber sua carga
          </p>
          <!-- Contatos -->
          <ul class="mt-14 space-y-6 text-[#000738]">
            <li class="flex items-center gap-5">
              <span class="iconBubble">
                <!-- mail -->
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <a class="text-xl hover:underline transition-colors duration-300" href="mailto:comercial@amaterminais.com.br">
                comercial@amaterminais.com.br
              </a>
            </li>
            <li class="flex items-center gap-5">
              <span class="iconBubble">
                <!-- instagram -->
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </span>
              <a class="text-xl hover:underline transition-colors duration-300" href="https://instagram.com/ama.terminais" target="_blank" rel="noreferrer">
                @ama.terminais
              </a>
            </li>
            <li class="flex items-center gap-5">
              <span class="iconBubble">
                <!-- phone -->
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.12a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a class="text-xl hover:underline transition-colors duration-300" href="tel:+5547988145980">
                (47) 9 8814-5980
              </a>
            </li>
            <li class="flex items-start gap-5">
              <span class="iconBubble mt-1">
                <!-- map pin -->
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </span>
              <div class="text-xl leading-relaxed">
                <div>Arnoldo Lopes Gonzaga, 507</div>
                <div>Barra do Rio, Itajaí - SC, 88305-570</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- COLUNA DIREITA (FORM) -->
        <div class="w-full max-w-[420px] mt-5 pt-5">
          <form class="space-y-4">
            <div>
              <label class="block text-[#000738] text-lg font-extrabold mb-1">
                Nome completo
              </label>
              <input type="text" class="field py-2.5 px-4 text-sm" />
            </div>

            <div>
              <label class="block text-[#000738] text-lg font-extrabold mb-1">
                Telefone
              </label>
              <input type="tel" class="field py-2.5 px-4 text-sm" />
            </div>

            <div>
              <label class="block text-[#000738] text-lg font-extrabold mb-1">
                Email
              </label>
              <input type="email" class="field py-2.5 px-4 text-sm" />
            </div>

            <div>
              <label class="block text-[#000738] text-lg font-extrabold mb-1">
                Escreva sua mensagem
              </label>
              <textarea rows="3" class="field resize-none py-2.5 px-4 text-sm"></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex items-center justify-center bg-[#000738] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#02085a]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Botão voltar ao topo (fixo no canto inferior direito) -->
    <button
      type="button"
      aria-label="Voltar ao topo"
      class="toTop"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.field {
  width: 100%;
  border: 2px solid rgba(0, 7, 56, 0.55);
  border-radius: 10px;
  padding: 14px 16px;
  outline: none;
  color: #000738;
  background: white;
  transition: border-color 0.3s ease;
}

.field:focus {
  border-color: rgba(0, 7, 56, 0.95);
}

.iconBubble {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: #000738;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.toTop {
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 74px;
  height: 74px;
  border-radius: 999px;
  background: #000738;
  color: white;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 7, 56, 0.3);
  z-index: 40;
}

.toTop:hover {
  background: #02085a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 7, 56, 0.4);
}

.toTop:active {
  transform: translateY(0);
}
</style>