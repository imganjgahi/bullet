import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MONTH_NAMES } from './utils';

interface IProps {
  onSelectMonth: (month: number) => void;
}
const MonthsBlock = (props: IProps) => {

  return (
    <View style={styles.container}>
      {MONTH_NAMES.map((name, i) => (
        <View style={styles.cols} key={i}>
          <TouchableOpacity
        onPress={() => props.onSelectMonth(i + 1)}
      >
        <Text style={styles.txt} > {name} </Text>
      </TouchableOpacity>
      </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    width: "100%",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  cols: {
    width: "25%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "shabnam"
  },
  txt: {
    fontFamily: "shabnam",
    textAlign: "center",
  }
});

export default MonthsBlock