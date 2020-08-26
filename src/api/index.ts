import ApiBase, { Mode } from 'friendshome-api'
import Notify from '@/utils/notify'
import { getToken } from '@/utils/auth'

const mode = process.env.NODE_ENV === 'development' ? Mode.dev : Mode.prod

const api = new ApiBase(mode, () => new Promise(resolve => resolve(getToken())), error => {
    Notify.error('Ошибка', error)
})

export const dictionariesApi = api.getDictionariesApi()
export const userApi = api.getUserApi()
export const adsApi = api.getAdsApi()
export const vkApi = api.getVkApi()
