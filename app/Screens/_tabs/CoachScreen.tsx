import { Sparkles } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function CoachScreen() {
  const insets = useSafeAreaInsets()
  const [textChange, setTextChange] = useState("")
  

  return (
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <View className='flex-row justify-normal items-center gap-2 mx-5 my-10'>
        <View className='bg-[#0A0A0A] px-2 py-2 rounded-full'>
          <Sparkles color={"#FAFAFA"} size={25} />
        </View>
        <Text className='text-xl font-bold'>Agent Bot</Text>
      </View>
      <TextInput  
        placeholder='Write your Query'
        onChangeText={setTextChange}
        className='bg-[#FAFAFA] w-11/12 self-center px-5'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EEF2FF",
  }
})