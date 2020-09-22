import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgFemaleGender(props) {
  return (
    <Svg width={512} height={512} viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={184}
        r={152}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 336v144M314 416H198"
      />
    </Svg>
  );
}

export default SvgFemaleGender;
