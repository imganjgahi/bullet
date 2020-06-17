import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { getTaskList } from "../../actions/Tasks/action";
import { APP_CONST } from '../../utils/constants/AppConst';
import TaskCard from '../../Components/Task/Card';
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
        {tasks.tasksList.length > 0 && <FlatList
          onRefresh={() => dispatch(getTaskList())}
          refreshing={tasks.loading}
          data={tasks.tasksList}
          keyExtractor={(item, index) => ""+item.id}
          renderItem={(task) => {
            return ( <TaskCard task={task.item} /> )
          }}
        />}
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
    width: "80%" 
  },
});

export default TaskListScreen