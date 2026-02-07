import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ActiveTasks from "../Components/ActiveTasks";
import AgenticBox from "../Components/AgenticBox";
import { CircleUser } from "lucide-react-native";

export default function () {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View className="flex-row justify-between items-center mx-5 my-10">
        <View>
          <Text className="text-base font-semibold text-[#0A0A0A] mb-2">
            Coaching Buddy
          </Text>
          <Text className="text-4xl font-bold text-[#0A0A0A] mb-2">Hey Mate,</Text>
          <Text className="text-indigo-700 font-bold text-base bg-indigo-200 w-[35] text-center rounded-xl">PRO</Text>
        </View>
        <View className="">
          <CircleUser size={32} />
        </View>
      </View>
      <AgenticBox />
      <View style={{ flex: 1 }}>
        <ActiveTasks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EEF2FF",
  },
});
