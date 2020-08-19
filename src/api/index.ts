import ApiBase, { Mode } from 'friendshome-api'
import Notify from '@/utils/notify'

const api = new ApiBase(Mode.dev, null, error => {
    Notify.error('Ошибка', error)
})

export const dictionariesApi = api.getDictionariesApi()
export const userApi = api.getUserApi()
export const adsApi = api.getAdsApi()
export const vkApi = api.getVkApi()
