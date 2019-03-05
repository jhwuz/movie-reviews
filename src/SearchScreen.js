import React from "react";
import { StyleSheet, View} from "react-native";
import SearchList from "./SearchList";

export default class SearchScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#14171C',
        paddingBottom: 25,
    }});