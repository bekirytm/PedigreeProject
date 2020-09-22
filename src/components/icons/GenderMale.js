import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGenderMale(props) {
  return (
    <Svg
      aria-hidden="true"
      className="genderMale_svg__iconify genderMale_svg__iconify--mdi"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M9 9c1.29 0 2.5.41 3.47 1.11L17.58 5H13V3h8v8h-2V6.41l-5.11 5.09c.7 1 1.11 2.2 1.11 3.5a6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6m0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgGenderMale;
