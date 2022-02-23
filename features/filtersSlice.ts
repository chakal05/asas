import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filterState {
	filters: {
		text: string;
		city: string;
	};
}

const initialState: filterState = {
	filters: {
		text: '',
		city: '',
	},
};

export const filtersSlice = createSlice({
	name: 'setFilters',
	initialState,
	reducers: {
		filterByText: (state, { payload }: PayloadAction<string>) => {
			state.filters.text = payload;
		},
		filterByCity: (state, { payload }: PayloadAction<string>) => {
			state.filters.city = payload;
		},
	},
});

export const { filterByText, filterByCity } = filtersSlice.actions;

export default filtersSlice.reducer;
