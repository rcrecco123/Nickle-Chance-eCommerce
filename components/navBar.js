import React from "react"
import { Text, Button, View } from "react-native";
import { connect } from "react-redux"

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cartCount: "0"
        }
    }


    render() {
        return (
            <View>
                <Text>
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.state.cartCount}
                    CART COUNT: {this.props.count}
                </Text>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        count: state.cart.itemCount
    }
}

export default connect(mapStateToProps)(NavBar);