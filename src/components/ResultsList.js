import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import ResultsDetail from "./ResultsDetail";

function ResultsList({ title, results }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default ResultsList;