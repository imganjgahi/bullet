import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper, {swipeDirections} from './Swiper';
import { ReactNode } from 'react';


interface IProps {
    children: ReactNode;
}

const SwipBox = (props: IProps) => {
   return (
      <View style={styles.container}>
          <Swiper
          config= {{
            velocityThreshold: 0.6,
            directionalOffsetThreshold: 80
          }}
          style={styles.box}
          onSwipe = {(swipeDirection, gestureState) => console.log("onSwipe: ", swipeDirection)}
          onSwipeUp = {() => console.log("onSwipeUp: ")}
          onSwipeDown = {() => console.log("onSwipeDown: ")}
          onSwipeLeft = {() => console.log("onSwipeLeft: ")}
          onSwipeRight = {() => console.log("onSwipeRight: ")}
          >
              {props.children}
          </Swiper>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
   box: {
       flex: 1,
       backgroundColor: 'coral',
       alignItems: 'center',
       justifyContent: 'center'
   }
});


export default SwipBox