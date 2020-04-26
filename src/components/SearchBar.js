import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: "row",
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e7e6e6",
        marginHorizontal: 15,
        borderRadius: 5
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar;