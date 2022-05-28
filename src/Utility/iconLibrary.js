import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image } from "react-native";

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
export const MapMarkerIcon = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"location-dot"}
    color={color}
    style={style}
    size={size}
  />
);
export const ArrowRight = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"arrow-right"}
    color={color}
    style={style}
    size={size}
  />
);
export const SearchIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"search"} color={color} style={style} size={size} />
);

export const SteeringIcon = ({ size, color, style }) => (
  <Image
    source={require("../../assets/Icon/steeringWheel.png")}
    style={style}
  />
);
