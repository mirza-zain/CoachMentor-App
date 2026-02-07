import { Circle } from "lucide-react-native";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function AgenticBox() {
  return (
    <View>
      <View style={styles.boxShadow} className="bg-[#0A0A0A] w-11/12 self-center rounded-[40]">
        <View className="flex-row justify-start items-center mt-7 mx-5 mb-5 gap-2">
          <Circle color={"#818cf8"} size={12} fill={"#818cf8"} />
          <Text className="text-base text-center text-indigo-200 font-bold ">
            AGENTIC INTELLIGENCE
          </Text>
        </View>
        <View className="mx-5 mb-10">
            <Text className="text-[#FAFAFA] font-bold text-3xl">
            Motivation gets you started. {" "}
            <Text className="text-indigo-500 italic">Systems </Text>
            keep you going.
            </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#111111",
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 6
    }
})
