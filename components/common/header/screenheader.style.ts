import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  // @ts-expect-error TS(2322): Type '(dimension: any) => { width: any; height: an... Remove this comment to see the full error message
  btnImg: (dimension: any) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25
  }),
});

export default styles;
