import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGenderFemale(props) {
  return (
    <Svg
      aria-hidden="true"
      className="genderFemale_svg__iconify genderFemale_svg__iconify--mdi"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M12 4a6 6 0 016 6c0 2.97-2.16 5.44-5 5.92V18h2v2h-2v2h-2v-2H9v-2h2v-2.08c-2.84-.48-5-2.95-5-5.92a6 6 0 016-6m0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgGenderFemale;
