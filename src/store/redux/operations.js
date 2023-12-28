// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configApi/api';

// axios.defaults.baseURL = 'https://658a03c3324d41715259af04.mockapi.io';
// '';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContacts',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await api.post('contacts', newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
