import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function UpgradeScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <View className='mx-5 my-10'>
        <Text className='text-4xl font-extrabold mb-1'>Insights</Text>
        <Text className='text-lg font-medium'>Previous Conversions</Text>
        <View className='mt-12 flex-col items-center'>
          <View className='bg-[#FAFAFA] w-11/12 h-1/2 rounded-xl'>
            <Text className='text-xl font-medium mx-5 mt-5'>System Set</Text>
            <Text className='text-base mx-5 mt-1'>Captured because you mentioned feeling "scattered."</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEF2FF"
  }
})