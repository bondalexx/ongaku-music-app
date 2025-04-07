
import { TrendingTracksResponse } from "./tracks.interface";
interface TrendingTracksState {
	tracks: TrendingTracksResponse | null;
	loading: boolean;
}
export interface GlobalState {
	tracks: {
		trendingTracks: TrendingTracksState;
	};
}