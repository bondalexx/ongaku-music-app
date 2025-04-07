import { createSlice } from '@reduxjs/toolkit';

import { getTrendingTracks } from '@/api/tracks.api';

const InitialState = {
    trendingTracks: { tracks: null, loading: true },
};

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: InitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTrendingTracks.fulfilled, (state, action) => {
            state.trendingTracks.tracks = action.payload;
            state.trendingTracks.loading = false;
        })
        builder.addCase(getTrendingTracks.pending, (state) => {
            state.trendingTracks.tracks = null;
            state.trendingTracks.loading = true;
        })
        builder.addCase(getTrendingTracks.rejected, (state) => {
            state.trendingTracks.tracks = null;
            state.trendingTracks.loading = false;
        })
    }
}) 

export default tracksSlice.reducer;
export const { actions } = tracksSlice;