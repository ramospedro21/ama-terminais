<template>
  <div class="pill" role="group" aria-label="Rota">
    <div class="min-w-0">
      <div class="country">{{ country }}</div>
      <div class="city">{{ city }}</div>
    </div>
    <span class="tag" aria-label="Frequência do serviço">serviço semanal</span>
  </div>
</template>
<script setup>
defineProps({
  country: { type: String, required: true },
  city: { type: String, required: true },
})
</script>
<style scoped>
.pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;        /* fluido */
  max-width: 100%;    /* fluido por padrão (mobile) */

  padding: 15px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.country {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 6px;
}
.city {
  font-size: 16px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1;
  white-space: nowrap;
}
.tag {
  padding: 8px 12px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 13px;
  font-weight: 800;
  font-style: italic;
  white-space: nowrap;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .pill {
    max-width: 100%;
  }
}
</style>