import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={{padding: 30, display: 'flex', flexDirection: 'row'}}>
      <Text style={{fontSize: 12.25, lineHeight: 17.5}}>
        ICP备案号：闽ICP备19020557号-4A
      </Text>
      {/* 其他组件，略 */}
    </View>
  );
}

export default App;
