import React, { useState ,useEffect} from "react";
import { useNavigation} from '@react-navigation/native';
import { Text, View, TextInput, Button ,Image,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

  
const NYTimesArticles = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { navigate} = useNavigation();


  const getNYTimesArticles = async () => {
    try {
      const response = await fetch('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=2IQXSkaiNMwmKfPVKg3kuWAa8Hrr38ER');
      const json = await response.json();
      console.log("Data",json)
      setData(json.results)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNYTimesArticles();
  }, []);
  const showArticles = (item) => {
    return(
            <TouchableOpacity
              onPress={()=>navigate('NYTimesArticlesDetails',{"Item":item})}
              activeOpacity={0.2}
              style={styles.opacityStyle}>
                <Text style={styles.mainHeading} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.writerStyle} numberOfLines={1}>
                  {item.byline}
                </Text>
              <View style={styles.rowContainerMain}>
                <Text style={styles.headig}>
                  {item.source}
                </Text>
                <View style={styles.rowContainer}>
                  <Icon  name="calendar" size={12} color="#900" />
                  <Text  style={styles.dateHeading}>
                  {item.published_date}
                  </Text>
                </View>
                
              </View>
              <Image style={styles.imageStyle}  />
              <Icon style={styles.iconStyle} name="chevron-right" size={25} color="#900"  />
              </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (showArticles(item))}
        />
      )}
    </View>
  );
};
export default NYTimesArticles;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor:'#FFFFFFF'
  },
  opacityStyle: {
    minHeight: 112,
    paddingVertical: 24,
    paddingLeft: 112,
    paddingRight: 24,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    // elevation: 4
  },
  mainHeading:{
    fontSize:15,
    lineHeight:18,
    fontWeight:'bold',
    color:'#1DA1F2'
  },
  headig:{
    fontSize:13,
    lineHeight:16,
    marginTop:8
  },
  writerStyle:{
    fontSize:15,
    lineHeight:18,
    fontWeight:'bold',
    marginTop:10
  },
  imageStyle:{
    width: 50,
    height: 50,
    position: 'absolute',
    top: 44,
    left: 20,
    backgroundColor:'#1DA1F2',
    borderRadius:50/2
  },
  iconStyle:{
    width: 20,
    height: 20,
    position: 'absolute',
    top: 84,
    right: 15,
    borderRadius:50/2
  },
  item: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  rowContainerMain:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:8
    
  },
  dateHeading:{
    fontSize:11,
    lineHeight:14,
    marginRight:20,
    marginLeft:8
  },
});