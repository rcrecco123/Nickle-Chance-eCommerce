import React from "react"
import { Text, Button, View } from "react-native";
import { connect } from "react-redux"

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cartCount: this.props.items.length
        }
    }


    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <Text>
                    Cart Array Length: {this.props.count}
                </Text>
                <Text>
                    {this.props.items}
                </Text>
            </View>
        )
    }

}

const mapStateToProps = state => {

    let arrCount = 0

    state.items.forEach(item => {
        arrCount += 1
    })


    return {
        count: 2,
        items: arrCount
    }
}

export default connect(mapStateToProps)(NavBar);