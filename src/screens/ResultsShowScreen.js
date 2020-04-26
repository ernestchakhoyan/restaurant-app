import React, {
    useEffect,
    useState
} from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    View
} from "react-native";
import yelp from "../api/yelp";

function ResultsShowScreen({ navigation }) {
    const id = navigation.getParam("id");

    const [ result, setResult ] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 10,
        fontSize: 18,
        marginLeft: 15,
        fontWeight: "bold"
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        marginLeft: 15,
        borderRadius: 4
    }
});

export default ResultsShowScreen;