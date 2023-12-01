import { useState, useEffect } from "react";
import getEnv from "./env";

import { getMyTopTracks, getAlbumTracks } from "./apiOptions";
import { Alert } from "react-native";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token) => {
  const [track, setTrack] = useState([]);

  useEffect(() => {
    (async function () {
      setTrack(await getAlbumTracks(ALBUM_ID, token));
    })();
  }, [token]);
  return track;
};

const useMyTracks = (token) => {
  const [track_, setTrack_] = useState([]);

  useEffect(() => {
    if (token) {
      (async function () {
        setTrack_(await getMyTopTracks(token));
      })();
    }
  }, [token]);
  return track_;
};

// Both work! Switch which one is commented out to see!

//export default useSpotifyTracks;
export default useMyTracks;
