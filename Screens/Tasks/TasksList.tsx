import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { getTaskList } from "../../actions/Tasks/action";
import TaskCard from '../../Components/Tasks/Card';
import { APP_CONST } from '../../utils/constants/AppConst';
import NDate from '@nepo/ndate';
import HeaderSeprator from '../../Components/Tasks/HeaderSeprator';
interface IProps { }

const TaskListScreen = (props: IProps) => {


  const dispatch = useDispatch();
  const tasks = useSelector((state: IApplicationState) => state.tasks)
  React.useEffect(() => {
    dispatch(getTaskList())
  }, []);
  return (
    <View style={styles.container}>
      <View><Text> Tasks </Text></View>
      <View style={styles.listContainer}>
        <SectionList sections={tasks.tasksList} 
        keyExtractor={item => ""+item.id}
        renderSectionHeader={({ section }) => {
          const title = new NDate(section.title).formatJalali("YYYY/MM/DD")

          return <HeaderSeprator title={title} />
        }}
          
        renderItem={(task) => {
          return ( <View style={styles.cardContainer}><TaskCard task={task.item} /></View> )
        }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: { 
    flex: 1, 
  },
  cardContainer: {
    width: "100%",
    paddingHorizontal: "10%"
  }
});

export default TaskListScreen