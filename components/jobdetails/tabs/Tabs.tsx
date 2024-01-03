import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({
  name,
  activeTab,
  onHandleSearchType
}: any) => (
  <TouchableOpacity
    // @ts-expect-error TS(2349): This expression is not callable.
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    // @ts-expect-error TS(2349): This expression is not callable.
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab
}: any) => {
  return (
    <View style = {styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({item}) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs