import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    // Seta o token para ser enviado a todas as requisições do usuário
    api.defaults.headers.Authorization = `Barear ${token}`;

    yield put(signInSuccess(token, user));

    toast.success('Login efetuado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados!');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // Seta o token para ser enviado a todas as requisições do usuário
    api.defaults.headers.Authorization = `Barear ${token}`;
  }
}

export function signOut() {
  toast.success('Logout efetuado com sucesso!');
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
