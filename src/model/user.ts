export type Profile = {
  email: string;
  password: string;
  name: string;
  gender: "남성" | "여성";
  agegroup: "10대" | "20대" | "30대" | "40대" | "50대" | "60대 이상";
  preferredTags: string[];
  interestCategory?: string[];
};
