import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
}

interface InitialState {
    reviews: Review[];
    loading: boolean;
    error: null | string;
};

const initialState: InitialState = {
    reviews: [],
    loading: false,
    error: null,
};
   
const reviewsSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        addReview: (state, action: PayloadAction<Review>) => {
            state.reviews.push(action.payload);
        },
        deleteReview: (state, action) => {
            state.reviews = state.reviews.filter((review) => review.id !== action.payload);
        },
    },
});

export const { addReview } = reviewsSlice.actions;

export const selectAllReviews = createSelector(
    (state: { review: InitialState }) => state.review.reviews,
    reviews => reviews
);

export default reviewsSlice.reducer;