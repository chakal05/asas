import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';

export const store = configureStore({
	reducer: {
		produts: productsReducer,
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
