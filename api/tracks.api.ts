import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { TRACKS_ACTIONS } from "@/lib/actions/tracks.action";
import { API_CONFIG } from "./api";

import { trendingPlaylistId } from "@/constants/tracks";

const getTrendingTracks : any = createAsyncThunk(
	TRACKS_ACTIONS.getTrendingTracks,
	async (accessToken: string) => {
		const response = await axios.get(
			`${API_CONFIG.url}/playlists/${trendingPlaylistId}`,
			{
				headers: {
				  Authorization: 'Bearer ' + accessToken,
				},
		}
		);
		return response.data;
	}
);

export { getTrendingTracks };