import React from 'react';
import { Image } from 'react-native';

const Background = () => {
    return (
        <Image
            style={styles.backgroundImage}
            source={require('../../img/login-bk.png')}
        />
    );
};
const styles = {
    backgroundImage: {
        backgroundColor: '#ccc',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
};

export { Background };
