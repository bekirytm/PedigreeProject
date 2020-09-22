import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDetailarrow(props) {
  return (
    <Svg
      aria-hidden="true"
      className="detailarrow_svg__iconify detailarrow_svg__iconify--ic"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgDetailarrow;
