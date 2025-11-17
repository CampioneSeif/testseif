import * as React from "react"
import Svg, {
  SvgProps,
  G,
  ForeignObject,
  Ellipse,
  Defs,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: div */
const DrawerSvg = (props: SvgProps) => (
  <Svg
    width={273}
    height={317}
    fill="none"
    {...props}
  >
    <G opacity={0.7}>
      <ForeignObject
        width={240.274}
        height={225.7}
        x={13.986}
        y={-45.81}
      ></ForeignObject>
      <Ellipse
        cx={114.765}
        cy={105.748}
        fill="#fff"
        fillOpacity={0.15}
        data-figma-bg-blur-radius={6.175}
        rx={114.765}
        ry={105.748}
        transform="scale(-1 1) rotate(-18.035 -131.632 870.542)"
      />
      <ForeignObject
        width={242.479}
        height={215.053}
        x={-115.333}
        y={18.424}
      ></ForeignObject>
      <Ellipse
        cx={116.554}
        cy={99.573}
        fill="#fff"
        fillOpacity={0.22}
        data-figma-bg-blur-radius={6.175}
        rx={116.554}
        ry={99.573}
        transform="scale(-1 1) rotate(-18.035 138.432 498.586)"
      />
    </G>
    <Defs>
      <ClipPath id="a" transform="translate(-13.986 45.81)">
        <Ellipse
          cx={114.765}
          cy={105.748}
          rx={114.765}
          ry={105.748}
          transform="scale(-1 1) rotate(-18.035 -131.632 870.542)"
        />
      </ClipPath>
      <ClipPath id="b" transform="translate(115.333 -18.424)">
        <Ellipse
          cx={116.554}
          cy={99.573}
          rx={116.554}
          ry={99.573}
          transform="scale(-1 1) rotate(-18.035 138.432 498.586)"
        />
      </ClipPath>
    </Defs>
  </Svg>
)
export default DrawerSvg
