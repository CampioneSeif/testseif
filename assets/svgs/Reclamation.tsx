import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ReclamationProps extends SvgProps {
  color?: string;
}

const Reclamation: React.FC<ReclamationProps> = ({ color = "#f40616", ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
      fill={color}
    />
  </Svg>
);

export default Reclamation;
