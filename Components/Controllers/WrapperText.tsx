import * as React from 'react';
import { Text } from 'react-native';

const WrapperText = (props: any) => {

    let validText: string = props.text
    if(props.text.length > props.max) {
        validText = props.text.slice(0, props.max)+"..."
    }
    return <Text style={{...props.style}}> {validText} </Text>
}

export default WrapperText