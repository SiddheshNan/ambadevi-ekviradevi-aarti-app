import React from "react";
import {
  ScrollView,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Header as HeaderRNE } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { openPDF, normalize, fileMap } from "../utils";
import { SearchBar, Icon } from "@rneui/themed";

const renderItem = ({ item }) => (
  <Button
    title={`${item.number}. ${item.name_mr}`}
    buttonStyle={{
      borderColor: "#D5D8DC",
    }}
    type="outline"
    raised
    size={"lg"}
    titleStyle={{
      color: "#f0225e",
      fontSize: normalize(18.5),
    }}
    containerStyle={{
      width: "90%",
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 25,
    }}
    onPress={() => openPDF(item.file)}
  />
);
// borderRadius: 20,
// borderWidth: 1,
// borderColor: "",
// elevation: 2,

const BookletScreen = ({ route, navigation }) => {
  const BOOKLET = fileMap[route.params.type];

  const searchRef = React.useRef(null);

  const [searchText, setSearchText] = React.useState("");
  const [items, setItems] = React.useState(BOOKLET);

  const onSearchType = (queryString) => {
    setSearchText(queryString);

    if (!queryString) {
      setItems(BOOKLET);
      return;
    }

    const lowerQueryString = queryString.toLowerCase();

    const matches = BOOKLET.filter((item) => {
      if (item.name_en.indexOf(lowerQueryString) >= 0) return true;
      // else if (item)
    });

    setItems(matches);

    console.log(matches);
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <HeaderRNE
        elevated={0}
        backgroundColor="#E74C3C"
        centerComponent={{
          text: route.params.name,
          style: {
            color: "white",
            fontSize: normalize(19),
            fontWeight: "bold",
              marginTop: 3,
              marginBottom: 3,
          },
        }}
      />
      <SafeAreaView style={{height: '100%', paddingTop: -40}}>
        
        <SearchBar
          onChangeText={onSearchType}
          value={searchText}
          ref={searchRef}
          lightTheme={true}
          round={true}
          inputStyle={{
            backgroundColor: "white",
          }}
          containerStyle={{
            backgroundColor: "#EAECEE",
            padding: normalize(10),
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            padding: normalize(2),
          }}
          placeholderTextColor={"#85929E"}
          placeholder={"Search Here.."}
        />
        <KeyboardAvoidingView style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              flex: 1,
              height: "100%",
              paddingTop: 5,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {items.length ? (
              <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.name_en}
              />
            ) : (
              <Text style={{ fontSize: 18, color: "#2C3E50", marginTop: 50 }}>
                Not Found!
              </Text>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default BookletScreen;
