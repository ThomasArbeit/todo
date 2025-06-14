// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/main.scss'],
  components: true,
  modules: ['@nuxtjs/google-fonts', 'nuxt-lucide-icons', 'nuxt-lodash'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap', // recommandé pour de meilleures performances
  },
  runtimeConfig: {    
    public: {      
      supabaseUrl: process.env.SUPABASE_URL,      
      supabaseAnonKey: process.env.SUPABASE_KEY,    
    },  
  },
  lucide: {
    namePrefix: 'Icon',
  }
})