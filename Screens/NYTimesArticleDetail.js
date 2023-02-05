import React, { useState } from "react";
import { Text, View} from "react-native";

  
const NYTimesArticlesDetails = (props) => {

  const [data, setData] = useState(props.route.params.Item);

  const textCell = (title,value) =>
  {
      return(
        <View>
            <Text>
                {title}: {value}
            </Text>
        </View>
      )
  }
  return (
    <View style={{flex: 1, padding: 24}}>
            <View style={{flex:1}}>
              <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                  {textCell("Title",data.title)}
                  {textCell("Writer",data.byline)}
                  {textCell("Source",data.source)}
                  {textCell("Published Date",data.published_date)}
                  {textCell("Type",data.type)}
                  {textCell("Section",data.section)}
                  {textCell("Last Updated ",data.updated)}
              </View>
            </View>
    </View>
  );
};
  
  
export default NYTimesArticlesDetails;