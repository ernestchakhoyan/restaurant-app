import React from "react";
import { withNavigation } from "react-navigation";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import ResultsDetail from "./ResultsDetail";

function ResultsList({ title, results, navigation }) {

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
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
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default withNavigation(ResultsList);