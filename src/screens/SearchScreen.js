import React, { useState } from "react";
import {
    Text,
    View
} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

function SearchScreen(props) {
    const [ term, onTermChange ] = useState("");
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState("");

    const searchApi = async (termName) => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: termName,
                    location: "san jose"
                }
            });
            setResults(res.data.businesses);
            setErrorMessage("");
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    };

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