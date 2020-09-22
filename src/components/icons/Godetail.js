import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGodetail(props) {
  return (
    <Svg
      aria-hidden="true"
      className="godetail_svg__iconify godetail_svg__iconify--ic"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgGodetail;
