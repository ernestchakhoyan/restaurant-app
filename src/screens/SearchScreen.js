import React, { useState } from "react";
import {
    Text,
    View
} from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

function SearchScreen(props) {
    const [ term, onTermChange ] = useState("");
    const [ searchApi, results, errorMessage ] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => onTermChange(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>

            <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
            <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
        </View>
    );
}

export default SearchScreen;