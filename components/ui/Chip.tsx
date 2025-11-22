import { StyleSheet, Text, View } from "react-native";
import theme from "../../constants/theme";

type ColorKey = keyof typeof theme.colors;

type Props = {
  label: string;
  color?: ColorKey;
};

export default function Chip({ label, color = "primary" }: Props) {
  return (
    <View style={[styles.chip, { backgroundColor: theme.colors[color] }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: theme.radius.pill,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
