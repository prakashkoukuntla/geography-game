import { Button, StyleSheet } from "react-native";
import { getAlbumTracks, getMyTopTracks } from "./utils/apiOptions";

export default ListPage = () => {
  return (
    <Button
      styles={styles.container}
      title="AlbumTracks"
      onPress={() => console.log(getAlbumTracks(ALBUM_ID, token))}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
