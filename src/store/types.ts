import { IStateDictionaries, IStateUserResponse } from 'friendshome-api'

export interface RootState {
   dictionaries: IStateDictionaries
   user: IStateUserResponse
}
