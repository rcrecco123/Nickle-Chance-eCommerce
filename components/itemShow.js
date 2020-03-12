import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select'
import { connect } from "react-redux";
import { addItem } from '../actions/cart';

class itemShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }


    render() {

        let navigation = this.props.navigation //access to navigation

        return (

            <ScrollView style={{ height: 100, borderWidth: 1, padding: 25 }}>

                <View style={styles.main}>
                    <Text style={{ padding: 7, fontSize: 25 }}>{this.props.navigation.state.params.name}</Text>
                    <Image source={require('../assets/clothingitem1.jpeg')} resizeMode='contain' style={styles.image} />

                    <RNPickerSelect
                        onValueChange={(value) =>
                            this.setState({
                                size: value
                            })
                        }
                        placeholder={{ label: "select a size" }}
                        items={[
                            { label: "s", value: "small" },
                            { label: "m", value: "medium" },
                            { label: "l", value: "large" },
                            { label: "xl", value: "extra large" }
                        ]}>

                    </RNPickerSelect>

                    <Button title="add to cart" onPress={() => addItem(this.props.navigation.state.params.item)} />

                </View>

                {/* <RelatedProducts /> */}

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        borderWidth: 2,
        alignItems: 'center',
        height: 400,

    },
    image: {
        height: 300,
        width: 300
    }
})

export default connect(null)(itemShow)