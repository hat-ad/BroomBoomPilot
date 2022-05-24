import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const UploadIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={"arrow-up-from-bracket"} color={color} size={size} />
);

export const DeleteIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={"trash"} color={color} size={size} />
);
export const QuestionIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={"circle-question"} color={color} size={size} />
);
export const CircleCheckIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={"circle-check"} color={color} size={size} />
);
