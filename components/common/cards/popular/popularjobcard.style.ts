import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  // @ts-expect-error TS(2322): Type '(selectedJob: any, item: any) => { shadowCol... Remove this comment to see the full error message
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white
  }),
  // @ts-expect-error TS(2322): Type '(selectedJob: any, item: any) => { width: nu... Remove this comment to see the full error message
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  // @ts-expect-error TS(2322): Type '(selectedJob: any, item: any) => { fontSize:... Remove this comment to see the full error message
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // @ts-expect-error TS(2322): Type '(selectedJob: any) => { fontSize: number; fo... Remove this comment to see the full error message
  publisher: (selectedJob: any) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    // @ts-expect-error TS(2304): Cannot find name 'item'.
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
