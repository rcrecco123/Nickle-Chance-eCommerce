import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ItemListThumbnail from './itemListThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';


export default class ItemList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        //make api call to respective category under items!
        let db = firebase.database()
        let ref2 = db.ref(`Products/Categories/${this.props.navigation.state.params.item}`)

        ref2.on("value", (snapshot) => {

            let newVal = snapshot.exportVal();
            let tempNoteList = []
            this.state.noteList = []

            if (Object.keys(newVal)) {
                Object.keys(newVal).forEach(key => {
                    tempNoteList.push(newVal[key])
                })
            }

            this.setState({
                items: tempNoteList
            })


        })
    }

    render() {


        let itemsComps = this.state.items.map((item, i) => {
            return (
                <ItemListThumbnail navigation={this.props.navigation} key={i} itemName={item.name} />
            )
        })

        return (
            <ScrollView style={styles.scrollView}>
                <Text style={styles.header}>{this.props.navigation.state.params.item}</Text>
                <View style={styles.itemContainer}>
                    {itemsComps}
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
        padding: 7,
        marginTop: 18
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