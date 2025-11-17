import * as React from "react"
import Svg, {
  SvgProps,
  ForeignObject,
  Ellipse,
  Defs,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: div */
const LoginSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={132}
    height={185}
    fill="none"
    {...props}
  >
    <ForeignObject width={156.682} height={145} x={-4} y={-33}></ForeignObject>
    <Ellipse
      cx={74.341}
      cy={39.5}
      fill="#fff"
      fillOpacity={0.15}
      data-figma-bg-blur-radius={4}
      rx={74.341}
      ry={68.5}
    />
    <ForeignObject width={159} height={137} x={62} y={33}></ForeignObject>
    <Ellipse
      cx={141.5}
      cy={101.5}
      fill="#fff"
      fillOpacity={0.22}
      data-figma-bg-blur-radius={4}
      rx={75.5}
      ry={64.5}
    />
    <Defs>
      <ClipPath id="a" transform="translate(4 33)">
        <Ellipse cx={74.341} cy={39.5} rx={74.341} ry={68.5} />
      </ClipPath>
      <ClipPath id="b" transform="translate(-62 -33)">
        <Ellipse cx={141.5} cy={101.5} rx={75.5} ry={64.5} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LoginSvg
