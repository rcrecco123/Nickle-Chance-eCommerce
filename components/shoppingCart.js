import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    render() {
        return (
            <View>
                <Text>
                    Items
                </Text>

                <FlatList data={this.state.items}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />

            </View>
        )
    }
}