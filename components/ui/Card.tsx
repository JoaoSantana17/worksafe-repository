import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import theme from "../../constants/theme";

type Props = ViewProps & {
  children: ReactNode;
};

export default function Card({ children, style, ...rest }: Props) {
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
    marginBottom: theme.spacing.md,
  },
});
