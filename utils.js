import { Dimensions, Platform, PixelRatio, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
import aartiSangrahMap from "./mappings/aarti-sangrah/map";
import kakadAartiMap from "./mappings/kakad-aarti/map";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const openPDF = async (file, goBack = () => {}) => {
  try {
    const localFile = await file.downloadAsync();
    const cUri = await FileSystem.getContentUriAsync(localFile.localUri);

    const result = await IntentLauncher.startActivityAsync(
      "android.intent.action.VIEW",
      {
        data: cUri,
        flags: 1,
        type: "application/pdf",
        packageName: "com.google.android.apps.docs",
      }
    );

    goBack();

    if (result.resultCode != 0) {
      throw "Error opening file";
    }

    //  Alert.alert("", `${cUri} \n ${newFile.localUri}`, [
    //   {
    //     text: 'ok',
    //     onPress: () => {},
    //   },
    // ]);
  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Somthing went wrong...", [
      {
        text: "Okay",
        onPress: () => {},
      },
    ]);
  }
};

export const fileMap = {
  AARTI_SANGRAH: aartiSangrahMap,
  ASHTAK_PUSTIKA_1: [],
  ASHTAK_PUSTIKA_2: [],
  KAKAD_AARTI: kakadAartiMap,
  // ALL: [
  //   ...aartiSangrahMap.map((item) => {
  //     return {
  //       ...item,
  //       name: `आरती संग्रह - ${item.name}`,
  //     };
  //   }),
  //   ...kakadAartiMap.map((item) => {
  //     return {
  //       ...item,
  //       name: `काकड आरती - ${item.name}`,
  //     };
  //   }),
  // ],
};

export const hasNumber = (myString) => {
  return /\d/.test(myString);
};
