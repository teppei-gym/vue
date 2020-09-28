import Vue from 'vue'
import Router from 'vue-router'
// import BtnLink from './src/components/Atoms/BtnLink'
import Info from './src/components/Pages/Info'
import Questionnaire from './src/components/Pages/Questionnaire'
import Consultation from './src/components/Pages/Consultation'
import ContentInfo from './src/components/Molecules/ContentInfo'
import ContentQuestionnaire from './src/components/Molecules/ContentQuestionnaire'
import ContentConsultation from './src/components/Molecules/ContentConsultation'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Info,
      children: [
        {
          path: '',
          component: ContentInfo,
          name: 'info',
        }
      ]
    },
    {
      path: '/questionnaire',
      component: Questionnaire,
      children: [
        {
          path: '',
          component: ContentQuestionnaire,
          name: 'questionnaire',
        }
      ]
    },
    {
      path: '/consultation',
      component: Consultation,
      children: [
        {
          path: '',
          component: ContentConsultation,
          name: 'consultation',
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})