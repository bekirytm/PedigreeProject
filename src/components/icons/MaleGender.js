import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgMaleGender(props) {
  return (
    <Svg width={512} height={512} viewBox="0 0 512 512" {...props}>
      <Circle
        cx={216}
        cy={296}
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
        d="M448 160V64h-96M324 188L448 64"
      />
    </Svg>
  );
}

export default SvgMaleGender;
