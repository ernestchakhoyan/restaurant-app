import React from "react";
import {View, Text,Image, StyleSheet} from "react-native";

function ResultsDetail({result}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Review
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        height: 120,
        width: 200,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"
    }
})

export default ResultsDetail;