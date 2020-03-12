import React from "react"
import { Text, Button, View } from "react-native";
import { connect } from "react-redux"

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <Text>
                    Cart Array Length: {this.props.count}
                </Text>
                <Text>
                    Cart Count: {this.props.itemCount}
                </Text>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        count: () => state.cart.items.length
    }
}

export default connect(mapStateToProps)(NavBar);