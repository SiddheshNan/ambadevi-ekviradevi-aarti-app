import React from "react";
import { ScrollView, StyleSheet, Text, View, Linking } from "react-native";
import { Button, Header as HeaderRNE } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { normalize } from "../utils";

const HomeScreen = ({ navigation }) => {
  //   React.useEffect(() => {
  //     StatusBar.setHidden(true);
  //     // StatusBar.setTranslucent(true);
  //     return () => {
  //       StatusBar.setHidden(false);
  //       //   StatusBar.setTranslucent(false);
  //     };
  //   }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderRNE
        elevated={0}
        backgroundColor="#E74C3C"
        // leftComponent={{
        //   icon: "menu",
        //   color: "#fff",
        // }}
        centerComponent={{
          text: "अंबा देवी आरती मंडळ",
          style: {
            color: "white",
            fontSize: normalize(20),
            fontWeight: "bold",
            marginTop: 5,
            marginBottom: 5,
          },
        }}
      />

      <SafeAreaView style={{ height: "100%", flex: 1, paddingTop: -40 }}>
        <ScrollView>
          <View style={{ flex: 1, height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingTop: 30,
              }}
            >
              <Button
                title={"देवी आरती संग्रह"}
                size="xl"
                titleStyle={styles.btnText}
                buttonStyle={styles.buttons}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  navigation.navigate("BookletScreen", {
                    type: "AARTI_SANGRAH",
                    name: "देवी आरती संग्रह",
                  });
                }}
              />
              <Button
                title={"अष्टक पुस्तिका 1"}
                size="xl"
                titleStyle={styles.btnText}
                buttonStyle={styles.buttons}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  navigation.navigate("BookletScreen", {
                    type: "ASHTAK_PUSTIKA_1",
                    name: "अष्टक पुस्तिका 1",
                  });
                }}
              />
              <Button
                title={"अष्टक पुस्तिका 2"}
                size="xl"
                titleStyle={styles.btnText}
                buttonStyle={styles.buttons}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  navigation.navigate("BookletScreen", {
                    type: "ASHTAK_PUSTIKA_2",
                    name: "अष्टक पुस्तिका 2",
                  });
                }}
              />
              <Button
                title={"काकड आरती"}
                size="xl"
                titleStyle={styles.btnText}
                buttonStyle={styles.buttons}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  navigation.navigate("BookletScreen", {
                    type: "KAKAD_AARTI",
                    name: "काकड आरती",
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>

        <Text
          style={{
            backgroundColor: "#FFBF00",
            color: "white",
            textAlign: "center",
            paddingVertical: 7.5,
            fontWeight: "bold",
          }}
        >
          App by{" "}
          <Text
            onPress={() =>
              Linking.openURL("https://siddhesh.me").catch(console.log)
            }
            style={{ textDecorationLine: "underline" }}
          >
            Siddhesh Nandurkar
          </Text>
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#DE3163", //#DE3163
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
  },
  btnContainer: {
    width: "72%",
    marginTop: 23,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HomeScreen;
