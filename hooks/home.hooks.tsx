import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import { getTrendingTracks } from '@/api/tracks.api';
import { GlobalState } from '@/types/state.interface';
export const useTracks = () => {
	const dispatch = useAppDispatch();
	const {
		trendingTracks,
	} = useAppSelector((state: GlobalState) => state.tracks);

	const init = (accessToken: string): void => {
        if(!trendingTracks.tracks) dispatch(getTrendingTracks(accessToken));
	};

	return { init };
};