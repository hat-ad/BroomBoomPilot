import React from "react";
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
export const ArrowLeft = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"arrow-left"}
    color={color}
    style={style}
    size={size}
  />
);
export const SearchIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"search"} color={color} style={style} size={size} />
);
export const FileIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"file"} color={color} style={style} size={size} />
);
export const ShareAllIcon = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"share-from-square"}
    color={color}
    style={style}
    size={size}
  />
);
export const GiftIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"gift"} color={color} style={style} size={size} />
);
export const CopyIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"copy"} color={color} style={style} size={size} />
);

export const SteeringIcon = ({ size, color, style }) => (
  <Image
    source={{
      uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315273_steeringWheel.png",
    }}
    style={style}
  />
);

export const BankIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/account_balance.png")} style={style} />
);

export const VectorIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/vector.png")} style={style} />
);

export const CoinIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/BBCoin.png")} style={style} />
);

export const AddBankAndUpiIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/AddBankAndUPI.png")} style={style} />
);

export const RightIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/right.png")} style={style} />
);

export const OrderDoneIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/OrderDone.png")} style={style} />
);
export const GroupIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/Group.png")} style={style} />
);

export const ArrowIcon = ({ size, color, style }) => (
  <Image source={require("../../assets/arrow.png")} style={style} />
);

export const ProfileIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"user"} color={color} style={style} size={size} />
);

export const AddressCardIcon = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"address-card"}
    color={color}
    style={style}
    size={size}
  />
);

export const FlipCameraIcon = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"camera-rotate"}
    color={color}
    style={style}
    size={size}
  />
);

export const CrossIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"xmark"} color={color} style={style} size={size} />
);

export const CameraIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"camera"} color={color} style={style} size={size} />
);

export const GalleryIcon = ({ size, color, style }) => (
  <FontAwesomeIcon icon={"image"} color={color} style={style} size={size} />
);
export const LogoutIcon = ({ size, color, style }) => (
  <FontAwesomeIcon
    icon={"right-from-bracket"}
    color={color}
    style={style}
    size={size}
  />
);
