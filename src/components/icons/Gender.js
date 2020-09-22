import * as React from 'react';
import Svg, {Circle, Path, G} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgGender(props) {
  return (
    <Svg
      id="gender_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      {...props}>
      <Circle className="gender_svg__st0" cx={64} cy={-124.24} r={24.55} />
      <Path d="M58.86-102.33h10.28v37.76H58.86z" />
      <Path
        transform="rotate(-90 64 -81.905)"
        d="M58.86-98.91h10.28v34.01H58.86z"
      />
      <G>
        <Circle className="gender_svg__st0" cx={64} cy={73.61} r={24.55} />
        <Path
          transform="rotate(45.001 92.547 46.51)"
          d="M87.41 28.07h10.28v36.88H87.41z"
        />
        <Path d="M100.89 29.84h8.33v22.04h-8.33z" />
        <Path
          transform="rotate(90 98.198 34)"
          d="M94.03 22.98h8.33v22.04h-8.33z"
        />
      </G>
    </Svg>
  );
}

export default SvgGender;
