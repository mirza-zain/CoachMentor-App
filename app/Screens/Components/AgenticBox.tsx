import { Circle } from "lucide-react-native";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function AgenticBox() {
  return (
    <View>
      <View className="bg-[#0A0A0A] w-11/12 self-center rounded-[40]">
        <View className="flex-row justify-start items-center mt-7 mx-5 mb-5 gap-2">
          <Circle color={"#818cf8"} size={12} fill={"#818cf8"} />
          <Text className="text-base text-center text-indigo-200 font-bold ">
            AGENTIC INTELLIGENCE
          </Text>
        </View>
        <View className="mx-5">
            <Text className="text-[#FAFAFA] font-bold text-3xl">
            I've detected friction in your{" "}
            <Text className="text-indigo-500 italic">writing workflow</Text>
            . Ready to systemize.
            </Text>
        </View>
        <Pressable style={styles.buttonShadow} className="active:opacity-55 bg-gray-600 w-2/5 py-3 rounded-2xl mx-5 my-6">
            <Text className="text-[#FFFFFF] text-center font-bold text-base">RUN DEEP ANALYSIS</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonShadow: {
        shadowColor: "#FAFAFA",
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 6
    }
})
