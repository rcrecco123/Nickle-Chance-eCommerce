import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select'

export default class itemShow extends React.Component {
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
                    <Text style={{ padding: 7, fontSize: 25 }}>{JSON.stringify(navigation.getParam('name'))}</Text>
                    <Image source={require('../assets/clothingitem1.jpeg')} resizeMode='contain' style={styles.image} />

                    {/* <ItemSelection /> */}


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

                    {/* <Picker>
                        <Picker.Item label="small" value="s" />
                    </Picker> */}

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