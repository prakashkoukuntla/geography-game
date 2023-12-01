import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { Themes } from "./assets/Themes";
import images from "./assets/Images/images";
import { millisToMinutesAndSeconds } from "./utils";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const windowHeight = Dimensions.get("window").height;

export const TrackPage = ({ track }) => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const artists = (songArtist) => {
    let artistsString = "";
    songArtist.map((artist) => {
      artistsString = artistsString + (artist.name + ", ");
    });
    if (artistsString[artistsString.length - 1] === " ") {
      artistsString = artistsString.substring(0, artistsString.length - 2);
    }
    return artistsString;
  };

  const Item = ({ song }) => (
    <View style={styles.item}>
      <Pressable
        style={styles.playPress}
        onPress={() => {
          router.push({
            pathname: "previewUrl",
            params: { pURL: song.previewUrl },
          });
        }}
      >
        <View style={styles.circle}>
          <AntDesign
            name="caretright"
            style={styles.iconPlay}
            size={styles.iconPlay.fontSize}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.playExternal}
        onPress={() => {
          router.push({
            pathname: "externalUrl",
            params: { eURL: song.externalUrl },
          });
        }}
      >
        <Image style={styles.imageURL} source={{ url: song.imageUrl }} />
        <View style={styles.songText}>
          <Text style={styles.songTitle} numberOfLines={1}>
            {song.songTitle}
          </Text>
          <Text style={styles.songArtists} numberOfLines={1}>
            {artists(song.songArtists)}
          </Text>
        </View>
        <Text style={styles.album} numberOfLines={1}>
          {song.albumName}
        </Text>
        <Text style={styles.duration} numberOfLines={1}>
          {millisToMinutesAndSeconds(song.duration)}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.tracksPage}>
      <StatusBar style="light" />
      <View style={styles.tracksHeader}>
        <Image style={styles.logoTrackPage} source={images.spotify}></Image>
        <Text style={styles.tracksPageTitle}>My Top Tracks</Text>
      </View>
      <FlatList
        data={track}
        renderItem={({ item }) => <Item song={item} />}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Themes.colors.background,
    marginVertical: 5,
    flexDirection: "row",
    height: windowHeight * 0.1,
    justifyContent: "center",
  },
  tracksPageTitle: {
    fontSize: 32,
    color: Themes.colors.white,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  tracksPage: {
    backgroundColor: Themes.colors.background,
    flex: 1,
    width: "100%",
  },
  tracksHeader: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
  },
  logoTrackPage: {
    width: 40,
    height: 40,
  },
  imageURL: {
    flex: 2,
    height: "100%",
    resizeMode: "contain",
  },
  duration: {
    flex: 1,
    fontSize: 15,
    color: Themes.colors.white,
    alignSelf: "center",
    textAlign: "center",
    padding: 3,
  },
  trackNumber: {
    color: Themes.colors.gray,
    fontSize: 15,
    textAlign: "left",
  },
  songText: {
    flex: 4,
    justifyContent: "flex-start",
    alignSelf: "center",
    paddingLeft: 4,
  },
  songTitle: {
    fontSize: 15,
    color: Themes.colors.white,
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  songArtists: {
    fontSize: 15,
    color: Themes.colors.gray,
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  album: {
    flex: 2,
    fontSize: 15,
    color: Themes.colors.white,
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  playPress: {
    flex: 1,
    alignSelf: "center",
  },
  playExternal: {
    flex: 6,
    flexDirection: "row",
  },
  circle: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 10,
    width: 20,
    aspectRatio: 1,
    fontSize: 12,
    alignSelf: "center",
    justifyContent: "center",
  },
  iconPlay: {
    color: "black",
    fontSize: 12,
    alignSelf: "center",
  },
});
