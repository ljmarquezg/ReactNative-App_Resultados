import React, { Component } from 'react';
import { View, Image } from 'react-native';
    
class Logo extends Component {   
    logoColor() {
        const { imageStyles, addStyle } = styles;
        if (this.props.isColor) {
            return (
                <Image
                    style={[imageStyles, addStyle]}
                    source={require('../../img/logo-color.png')}
                />
            );
        }
        return (
            <Image
                style={[imageStyles, addStyle]}
                source={require('../../img/logo.png')}
            />
        );
    }

    render() {
        return (
            <View style={styles.imageContainer}>
                {this.logoColor()}
            </View>
        );
    }
}

const styles = {
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyles: {
        height: 120,
        width: 120,
        backgroundColor: 'transparent',
        marginTop: 0
    }
};

export { Logo };
