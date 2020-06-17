import * as React from 'react';
import NDate from '@nepo/ndate';
import { Text } from 'react-native';

const PersianDate = (props: any) => {

    const format = props.format ? props.format : "YYYY/MM/DD";
    return <Text style={{...props.style}}> {new NDate(props.date).formatJalali(format)} </Text>
}

export default PersianDate