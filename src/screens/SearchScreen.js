import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

function SearchScreen(props) {
    const [term, onTermChange] = useState("");

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => onTermChange(newTerm)}
                onTermSubmit={() => console.log("Submit")}
            />
            <Text>Search Screen</Text>
        </View>
    );
}

export default SearchScreen;