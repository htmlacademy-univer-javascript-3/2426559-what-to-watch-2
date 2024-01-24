import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {deleteToken, getSavedToken, saveToken} from 'src/token';
import {AuthorizationStatus} from 'src/constants';
import {TLoginRequest, TUser} from 'src/types';
import {AppDispatch, State} from '../types';
import {updateAuthorizationStatus} from './action';


export const getLogin = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'getLogin',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    try {
      await api.get<TUser>('/login', {headers: {'X-Token': token}});
      dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
    } catch (error) {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
    }
  },
);

export const postLogin = createAsyncThunk<void, TLoginRequest, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postLogin',
  async (arg, {dispatch, extra: api}) => {
    const {data} = await api.post<TUser>('/login', arg);
    saveToken(data.token);
    dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchLogout',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    await api.delete('/logout', {headers: {'X-Token': token}});
    deleteToken();
    dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
  },
);
