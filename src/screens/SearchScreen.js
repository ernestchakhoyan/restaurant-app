import React, { useState } from "react";
import {
    Text,
    View
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

function SearchScreen(props) {
    const [ term, onTermChange ] = useState("");
    const [ searchApi, results, errorMessage ] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => onTermChange(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

export default SearchScreen;