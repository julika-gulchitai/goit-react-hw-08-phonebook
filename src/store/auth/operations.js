import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../configApi/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await api.post('users/signup', credentials);
      setToken(response.data.token);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await api.post('users/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await api.post('users/logout');
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const saved = thunkApi.getState().auth.token;

    if (saved) {
      setToken(saved);
    } else {
      return thunkApi.rejectWithValue('Token is not exist');
    }

    try {
      const response = await api.get('users/current');

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
