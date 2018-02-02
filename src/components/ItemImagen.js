import React from 'react';
import { Text, View } from 'react-native';
import Flag from 'react-native-flags';
import { CardSection } from './lib';

const ItemImagen = (props) => {
      const { viewStyle, flag, textStyle } = styles;
      const { imagen, descripcion } = props.rowData;

      //========================================================================
      // Mostrar la bandera del pais de acuerdo a su valor en la base de datos
      //========================================================================
        return (
            <View style={viewStyle}>
                <CardSection addStyle={props.rowStyle}>
                    <Flag
                      code={imagen}
                      size={32}
                      style={flag}
                    />
                    <Text style={textStyle}>{descripcion}</Text>
                </CardSection>
            </View>
        );
};

const styles = {
    viewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15
    },
    textStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingTop: 6,
        marginLeft: 12
    },
};

export { ItemImagen };
