import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class itemShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {

        let navigation = this.props.navigation //access to navigation

        return (
            <ScrollView style={{ height: '100%', borderWidth: 21 }}>
                <View style={styles.main}>
                    <Text >{JSON.stringify(navigation.getParam('name'))}</Text>
                    <Image source={require('../assets/clothingitem1.jpeg')} resizeMode='contain' style={styles.image} />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        borderWidth: 2,
        height: '100%',
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: 300
    }
})