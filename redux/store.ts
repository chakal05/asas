import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productsReducer from '../store/productsSlice';
import filtersReducer from '../store/filtersSlice';

export const store = configureStore({
	reducer: {
		produts: productsReducer,
		filters: filtersReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
