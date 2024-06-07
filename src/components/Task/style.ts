import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.base.gray500,
    borderColor: globalStyles.colors.base.gray400,
    borderWidth: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: globalStyles.fontSize.sm,
    color: globalStyles.colors.base.gray100,
    flex: 1,
    marginHorizontal: 8,
  },
  textDashed: {
    textDecorationColor: globalStyles.colors.base.gray300,
    textDecorationLine: 'line-through',
    color: globalStyles.colors.base.gray300,
  },
  checkbox: {
    borderRadius: 999,
    width: 18,
    height: 18,
  },
  button: {}
});