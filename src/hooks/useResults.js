import React, {
    useEffect,
    useState
} from "react";
import yelp from "../api/yelp";

export default () => {
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

    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
}