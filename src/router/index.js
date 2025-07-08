import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Level1visuellView from '@/views/Level1visuellView.vue'
import Level1CompleteView from '@/views/Level1CompleteView.vue'
import Level2multimodalView from '@/views/Level2multimodalView.vue'
import Level3ohneFeedbackView from '@/views/Level3ohneFeedbackView.vue'
import Level2CompleteView from '@/views/Level2CompleteView.vue'
import Level3Complete from '@/components/Level3Complete.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/level-1',
      name: 'level-1',
      component: Level1visuellView,
    },
    { path: '/level-1-complete',
      name: 'level-1-complete',
      component: Level1CompleteView,
    },
    { path: '/level-2',
      name: 'level-2',
      component: Level2multimodalView,
    },
    { path: '/level-2-complete',
      name: 'level-2-complete',
      component: Level2CompleteView,
    },
    { path: '/level-3',
      name: 'level-3',
      component: Level3ohneFeedbackView,
    },
    { path: '/level-3-complete',
      name: 'level-3-complete',
      component: Level3Complete,
    },


  ],
})

export default router
