import * as React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

function Heart({style}) {
  return (
    <TouchableOpacity style={style}>
<Svg width={18} height={18} fill="rgba(0,0,0,0.3)" xmlns="http://www.w3.org/2000/svg">
      <Path
        clipRule="evenodd"
        d="M8.8 16.378a29.033 29.033 0 01-5.017-3.907 9.992 9.992 0 01-2.389-3.808c-.896-2.788.15-5.979 3.082-6.923a4.982 4.982 0 014.52.761 4.99 4.99 0 014.522-.761c2.93.944 3.985 4.135 3.089 6.923a9.993 9.993 0 01-2.389 3.808A29.033 29.033 0 019.2 16.378l-.196.122-.203-.122z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </TouchableOpacity>
    
  );
}

export default Heart;