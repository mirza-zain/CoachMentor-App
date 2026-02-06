import { Circle } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function ActiveTasks() {
  const [filledTaskIds, setFilledTaskIds] = useState<number[]>([]);
  const tasks = [
    {
      id: 1,
      title: "Review Weekly System",
    },
    {
      id: 2,
      title: "Start Learning Mobile Dev",
    },
    {
      id: 3,
      title: "Complete Practicing German",
    },
    {
      id: 4,
      title: "Complete Practicing Turkish",
    },
    {
      id: 5,
      title: "Complete Practicing Coding",
    }
  ];

  return (
    <View className="mt-8 mx-5 pb-2" style={{ flex: 1 }}>
      <Text className="text-2xl font-bold mb-4">Active Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          const isFilled = filledTaskIds.indexOf(item.id) !== -1;

          return (
            <View
              key={item.id}
              className="bg-[#FAFAFA] py-5 rounded-xl mt-5"
              style={styles.boxShadow}
            >
              <View className="flex-row justify-normal items-center gap-5 mx-5">
                <Pressable
                  onPress={() => {
                    setFilledTaskIds((prev) =>
                      prev.indexOf(item.id) !== -1
                        ? prev.filter((id) => id !== item.id)
                        : [...prev, item.id],
                    );
                  }}
                >
                  <Circle
                    size={25}
                    color={"#0A0A0A"}
                    fill={isFilled ? "#0A0A0A" : "transparent"}
                  />
                </Pressable>
                <Text
                  className={
                    isFilled ? "opacity-25 line-through" : "text-xl font-medium"
                  }
                >
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#0A0A0A",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 6,
  },
});
