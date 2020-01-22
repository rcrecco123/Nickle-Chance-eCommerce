import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ItemListThumbnail from './itemListThumbnail';
import { ScrollView } from 'react-native-gesture-handler';


export default class ItemList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: ['dress1', 'dress2', 'dress3', 'dress4', 'dress5', 'dress6', 'dress7', 'dress8', 'dress9', 'dress10']
        }
    }

    componentDidMount() {
        //make api call to respective category under items!
    }

    render() {

        let items = this.state.items.map((item, i) => {
            return (

                <ItemListThumbnail navigation={this.props.navigation} itemName={item} key={i} />

            )
        })

        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.itemContainer}>
                    {items}
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'space-around',
        padding: 7
    },
    body: {
        textAlign: 'center'
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: 'auto',
        textAlign: 'center',
        alignSelf: 'center',
        // borderWidth: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: "3%",
        // borderWidth: 1,
    }
})