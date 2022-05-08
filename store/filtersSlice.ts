import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../interfaces';

const initialState: FilterState = {
	filters: {
		_id: '',
		title: '',
		city: '',
		added: '',
		category: '',
		price: 0,
	},
};

export const filtersSlice = createSlice({
	name: 'setFilters',
	initialState,
	reducers: {
		filterByText: (state, { payload }: PayloadAction<string>) => {
			state.filters.title = payload;
		},
		filterByCity: (state, { payload }: PayloadAction<string>) => {
			state.filters.city = payload;
		},
		filterByCategory: (state, { payload }: PayloadAction<string>) => {
			state.filters.category = payload;
		},
	},
});

export const { filterByText, filterByCity } = filtersSlice.actions;

export default filtersSlice.reducer;
