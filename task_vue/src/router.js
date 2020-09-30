import Vue from 'vue'
import Router from 'vue-router'
import Info from './components/Pages/Info'
import Questionnaire from './components/Pages/Questionnaire'
import Consultation from './components/Pages/Consultation'
import Confirm from './components/Pages/Confirm'
import ContentInfo from './components/Molecules/ContentInfo'
import ContentQuestionnaire from './components/Molecules/ContentQuestionnaire'
import ContentConsultation from './components/Molecules/ContentConsultation'
import ContentConfirm from './components/Molecules/ContentConfirm'

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
      path: '/confirm',
      component: Confirm,
      children: [{
        path: '',
        component: ContentConfirm,
        name: 'confirm'
      }
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})