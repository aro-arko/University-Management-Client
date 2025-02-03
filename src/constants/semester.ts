export const semesterOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];
export const semesterStatus = ["UPCOMING", "ONGOING", "ENDED"];
export const semesterStatusOptions = semesterStatus.map((item) => ({
  value: item,
  label: item,
}));
