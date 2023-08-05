import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";


export const createUser = createAsyncThunk(
	'users/createUser',
	async (payload, thunkAPI) => {
		try {
			const res = await axios.post(`${BASE_URL}/users`, {
				...payload,
				avatar: 'https://example.com/avatar.png',
			});
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	})

export const updateUser = createAsyncThunk(
	'users/updateUser',
	async (payload, thunkAPI) => {
		try {
			const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	})

export const loginUser = createAsyncThunk(
	'users/loginUser',
	async (payload, thunkAPI) => {
		try {
			const res = await axios.post(`${BASE_URL}/auth/login`, payload);
			const login = await axios(`${BASE_URL}/auth/profile`, {
				headers: {
					Authorization: `Bearer ${res.data.access_token}`,
				}
			});
			return login.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	});

const addCurrentUser = (state, { payload }) => {
	state.currentUser = payload;
}


const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		formType: 'signup',
		showForm: false,
		favorite: [],
	},
	reducers: {
		toggleForm: (state, { payload }) => {
			state.showForm = payload;
		},
		toggleFormType: (state, { payload }) => {
			state.formType = payload;
		},
		addItemToFavorite: (state, { payload }) => {
			const isItemInFavorite = state.favorite.some(item => item.id === payload.id);

			if (!isItemInFavorite) {
				state.favorite.push({ ...payload, quantity: 1 });
			}
		},
		removeItemToFavorite: (state, { payload }) => {
			state.favorite = state.favorite.filter(({ id }) => id !== payload)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createUser.fulfilled, addCurrentUser);
		builder.addCase(loginUser.fulfilled, addCurrentUser);
		builder.addCase(updateUser.fulfilled, addCurrentUser);

	}
})

export const { toggleFormType, toggleForm, addItemToFavorite, removeItemToFavorite } = userSlice.actions;

export default userSlice.reducer


