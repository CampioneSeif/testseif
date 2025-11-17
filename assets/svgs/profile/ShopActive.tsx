import * as React from "react"
import Svg, {
  SvgProps,
  Mask,
  Path,
  G,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const ShopActive = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={99}
    height={99}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={99}
      height={99}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h99v98.617H0V0Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFCFCF"
        d="M99 49.307c0 .807-.02 1.614-.06 2.421a49.55 49.55 0 0 1-.892 7.2 49.238 49.238 0 0 1-1.944 6.99c-.27.762-.562 1.515-.874 2.26a47.839 47.839 0 0 1-.983 2.212c-.346.729-.711 1.45-1.092 2.163a51.91 51.91 0 0 1-1.198 2.104 48.41 48.41 0 0 1-2.7 4.023 48.469 48.469 0 0 1-3.08 3.74 53.723 53.723 0 0 1-1.675 1.755 49.073 49.073 0 0 1-3.601 3.248 46.818 46.818 0 0 1-1.915 1.489A46.38 46.38 0 0 1 77 90.307a49.519 49.519 0 0 1-15.474 6.83 49.024 49.024 0 0 1-7.176 1.241c-.805.081-1.613.14-2.423.18a49.86 49.86 0 0 1-9.69-.475 49.599 49.599 0 0 1-27.74-13.908 50.896 50.896 0 0 1-3.263-3.585 50.866 50.866 0 0 1-1.494-1.91 48.466 48.466 0 0 1-2.697-4.023 49.1 49.1 0 0 1-3.276-6.479c-.309-.745-.6-1.498-.874-2.259a50.08 50.08 0 0 1-1.41-4.63 49.114 49.114 0 0 1-1.423-14.4c.039-.805.098-1.61.177-2.415a49.41 49.41 0 0 1 3.53-14.035 50.618 50.618 0 0 1 2.078-4.376 49.165 49.165 0 0 1 2.497-4.148c.45-.672.916-1.331 1.398-1.979.484-.65.98-1.284 1.495-1.91a50.893 50.893 0 0 1 3.263-3.584 48.83 48.83 0 0 1 3.599-3.248 53.227 53.227 0 0 1 1.915-1.492c.652-.48 1.314-.944 1.986-1.392a52.25 52.25 0 0 1 2.052-1.295 49.566 49.566 0 0 1 6.507-3.263 53.68 53.68 0 0 1 2.265-.87 51.52 51.52 0 0 1 2.307-.758c.776-.234 1.557-.45 2.342-.645a48.546 48.546 0 0 1 4.765-.945c.8-.118 1.606-.217 2.411-.295.806-.082 1.613-.14 2.424-.18a49.976 49.976 0 0 1 4.856 0c.81.04 1.618.098 2.423.18a49.201 49.201 0 0 1 7.176 1.24 50.524 50.524 0 0 1 4.649 1.403c.764.273 1.52.563 2.268.87a50.911 50.911 0 0 1 4.39 2.07 49.476 49.476 0 0 1 9.908 6.951 48.984 48.984 0 0 1 6.516 7.163 48.64 48.64 0 0 1 2.7 4.024c.415.691.815 1.392 1.198 2.104.38.713.746 1.434 1.092 2.163.346.728.675 1.466.983 2.212.312.745.603 1.498.875 2.259A49.238 49.238 0 0 1 99 49.307Z"
      />
      <Path
        fill="red"
        fillRule="evenodd"
        d="M22.584 71.139h55.095V29.555H22.584V71.14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#FFE5CA"
        d="M72.535 46.073H60.277v24.932h-.054V46.019h12.365v24.986h-.053V46.073Z"
      />
      <Path
        fill="#E00000"
        fillRule="evenodd"
        d="M22.613 71.197h36.421v-1.513h-36.42v1.513Zm49.868-.04h5.145v-1.512H72.48v1.512Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="m72.536 71.177.025-25.05H60.25l.07 25.012h-1.287l-.29-27.105 15.16-.091-.114 27.23-1.253.004Z"
      />
      <Path
        fill="#D6B294"
        fillRule="evenodd"
        d="M72.535 70.23V46.128H60.276v9.391l.045 15.62h12.214v-.907Z"
        clipRule="evenodd"
      />
      <Path
        fill="#BAE6E7"
        fillRule="evenodd"
        d="M71.117 61.826V47.369h-9.495v5.632l.036 9.369h9.459v-.544Z"
        clipRule="evenodd"
      />
      <Mask
        id="b"
        width={1}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 51.608h.185v.077h-.185v-.077Z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="url(#c)"
          d="M0 0h.276v.076H0z"
          transform="matrix(1 0 0 -1 65.32 51.685)"
        />
      </G>
      <Mask
        id="d"
        width={1}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 51.605h.24v.014h-.24v-.014Z" />
      </Mask>
      <G mask="url(#d)">
        <Path
          fill="url(#e)"
          d="M0 0h.41v.043H0z"
          transform="matrix(1 0 0 -1 65.254 51.62)"
        />
      </G>
      <Mask
        id="f"
        width={1}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.188 51.526h.505v.028h-.505v-.028Z" />
      </Mask>
      <G mask="url(#f)">
        <Path
          fill="url(#g)"
          d="M0 0h.575v.043H0z"
          transform="matrix(1 0 0 -1 65.188 51.554)"
        />
      </G>
      <Mask
        id="h"
        width={1}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 51.313h.79v.044h-.79v-.043Z" />
      </Mask>
      <G mask="url(#h)">
        <Path
          fill="url(#i)"
          d="M0 0h1.007v.043H0z"
          transform="matrix(1 0 0 -1 65.088 51.357)"
        />
      </G>
      <Mask
        id="j"
        width={2}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 51.28h.994v.043h-.994v-.043Z" />
      </Mask>
      <G mask="url(#j)">
        <Path
          fill="url(#k)"
          d="M0 0h1.073v.043H0z"
          transform="matrix(1 0 0 -1 65.088 51.324)"
        />
      </G>
      <Mask
        id="l"
        width={2}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 51.247h1.026v.044h-1.026v-.044Z" />
      </Mask>
      <G mask="url(#l)">
        <Path
          fill="url(#m)"
          d="M0 0h1.107v.043H0z"
          transform="matrix(1 0 0 -1 65.088 51.29)"
        />
      </G>
      <Mask
        id="n"
        width={1}
        height={1}
        x={64}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.58 51.235h.185v.023h-.185v-.023Z" />
      </Mask>
      <G mask="url(#n)">
        <Path
          fill="url(#o)"
          d="M0 0h.243v.043H0z"
          transform="matrix(1 0 0 -1 64.556 51.258)"
        />
      </G>
      <Mask
        id="p"
        width={2}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 51.235h1.082v.023h-1.082v-.023Z" />
      </Mask>
      <G mask="url(#p)">
        <Path
          fill="url(#q)"
          d="M0 0h1.173v.043H0z"
          transform="matrix(1 0 0 -1 65.088 51.258)"
        />
      </G>
      <Mask
        id="r"
        width={1}
        height={1}
        x={64}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 51.132h.556v.028h-.556v-.028Z" />
      </Mask>
      <G mask="url(#r)">
        <Path
          fill="url(#s)"
          d="M0 0h.642v.043H0z"
          transform="matrix(1 0 0 -1 64.356 51.16)"
        />
      </G>
      <Mask
        id="t"
        width={2}
        height={1}
        x={65}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 51.132h1.184v.028h-1.184v-.028Z" />
      </Mask>
      <G mask="url(#t)">
        <Path
          fill="url(#u)"
          d="M0 0h1.34v.043H0z"
          transform="matrix(1 0 0 -1 65.121 51.16)"
        />
      </G>
      <Mask
        id="v"
        width={2}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.919h.79v.043h-.79v-.043Z" />
      </Mask>
      <G mask="url(#v)">
        <Path
          fill="url(#w)"
          d="M0 0h1.073v.043H0z"
          transform="matrix(1 0 0 -1 64.224 50.962)"
        />
      </G>
      <Mask
        id="x"
        width={2}
        height={1}
        x={65}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 50.919h1.424v.043h-1.424v-.043Z" />
      </Mask>
      <G mask="url(#x)">
        <Path
          fill="url(#y)"
          d="M0 0h1.439v.043H0z"
          transform="matrix(1 0 0 -1 65.32 50.962)"
        />
      </G>
      <Mask
        id="z"
        width={3}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.887h2.367v.043h-2.367v-.043Z" />
      </Mask>
      <G mask="url(#z)">
        <Path
          fill="url(#A)"
          d="M0 0h2.601v.043H0z"
          transform="matrix(1 0 0 -1 64.224 50.93)"
        />
      </G>
      <Mask
        id="B"
        width={3}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.863h2.367v.033h-2.367v-.033Z" />
      </Mask>
      <G mask="url(#B)">
        <Path
          fill="url(#C)"
          d="M0 0h2.668v.043H0z"
          transform="matrix(1 0 0 -1 64.224 50.896)"
        />
      </G>
      <Mask
        id="D"
        width={3}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.754h2.613v.043h-2.613v-.043Z" />
      </Mask>
      <G mask="url(#D)">
        <Path
          fill="url(#E)"
          d="M0 0h2.8v.043H0z"
          transform="matrix(1 0 0 -1 64.224 50.798)"
        />
      </G>
      <Mask
        id="F"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.737h2.713v.028h-2.713v-.028Z" />
      </Mask>
      <G mask="url(#F)">
        <Path
          fill="url(#G)"
          d="M0 0h2.867v.043H0z"
          transform="matrix(1 0 0 -1 64.224 50.765)"
        />
      </G>
      <Mask
        id="H"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 50.493h2.984v.074h-2.984v-.074Z" />
      </Mask>
      <G mask="url(#H)">
        <Path
          fill="url(#I)"
          d="M0 0h3.133v.076H0z"
          transform="matrix(1 0 0 -1 64.29 50.568)"
        />
      </G>
      <Mask
        id="J"
        width={2}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 50.493h1.563v.01h-1.563v-.01Z" />
      </Mask>
      <G mask="url(#J)">
        <Path
          fill="url(#K)"
          d="M0 0h1.671v.043H0z"
          transform="matrix(1 0 0 -1 64.323 50.502)"
        />
      </G>
      <Mask
        id="L"
        width={2}
        height={1}
        x={66}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.063 50.493h1.393v.01h-1.394v-.01Z" />
      </Mask>
      <G mask="url(#L)">
        <Path
          fill="url(#M)"
          d="M0 0h1.439v.043H0z"
          transform="matrix(1 0 0 -1 66.018 50.502)"
        />
      </G>
      <Mask
        id="N"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 50.393h3.14v.044h-3.14v-.044Z" />
      </Mask>
      <G mask="url(#N)">
        <Path
          fill="url(#O)"
          d="M0 0h3.2v.043H0z"
          transform="matrix(1 0 0 -1 64.39 50.436)"
        />
      </G>
      <Mask
        id="P"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.423 50.361h3.112v.043h-3.112v-.043Z" />
      </Mask>
      <G mask="url(#P)">
        <Path
          fill="url(#Q)"
          d="M0 0h3.2v.043H0z"
          transform="matrix(1 0 0 -1 64.424 50.404)"
        />
      </G>
      <Mask
        id="R"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.58 50.342h2.955v.028H64.58v-.028Z" />
      </Mask>
      <G mask="url(#R)">
        <Path
          fill="url(#S)"
          d="M0 0h3.2v.043H0z"
          transform="matrix(1 0 0 -1 64.49 50.371)"
        />
      </G>
      <Mask
        id="T"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.79 50.13h3.128v.045H64.79v-.045Z" />
      </Mask>
      <G mask="url(#T)">
        <Path
          fill="url(#U)"
          d="M0 0h3.2v.043H0z"
          transform="matrix(1 0 0 -1 64.787 50.174)"
        />
      </G>
      <Mask
        id="V"
        width={4}
        height={1}
        x={64}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.855 50.122h3.074v.019h-3.074v-.019Z" />
      </Mask>
      <G mask="url(#V)">
        <Path
          fill="url(#W)"
          d="M0 0h3.2v.043H0z"
          transform="matrix(1 0 0 -1 64.856 50.141)"
        />
      </G>
      <Mask
        id="X"
        width={5}
        height={2}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.999h3.448v.043h-3.448v-.043Z" />
      </Mask>
      <G mask="url(#X)">
        <Path
          fill="url(#Y)"
          d="M0 0h3.465v.043H0z"
          transform="matrix(1 0 0 -1 64.755 50.042)"
        />
      </G>
      <Mask
        id="Z"
        width={5}
        height={2}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.966h3.515v.044h-3.515v-.044Z" />
      </Mask>
      <G mask="url(#Z)">
        <Path
          fill="url(#aa)"
          d="M0 0h3.565v.043H0z"
          transform="matrix(1 0 0 -1 64.722 50.01)"
        />
      </G>
      <Mask
        id="ab"
        width={5}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.948h3.518v.03h-3.518v-.03Z" />
      </Mask>
      <G mask="url(#ab)">
        <Path
          fill="url(#ac)"
          d="M0 0h3.631v.043H0z"
          transform="matrix(1 0 0 -1 64.689 49.977)"
        />
      </G>
      <Mask
        id="ad"
        width={5}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.752h3.552v.06h-3.552v-.06Z" />
      </Mask>
      <G mask="url(#ad)">
        <Path
          fill="url(#ae)"
          d="M0 0h3.83v.076H0z"
          transform="matrix(1 0 0 -1 64.622 49.813)"
        />
      </G>
      <Mask
        id="af"
        width={5}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.638h3.552v.076h-3.552v-.076Z" />
      </Mask>
      <G mask="url(#af)">
        <Path
          fill="url(#ag)"
          d="M0 0h3.797v.076H0z"
          transform="matrix(1 0 0 -1 64.655 49.714)"
        />
      </G>
      <Mask
        id="ah"
        width={4}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.604h2.59v.045h-2.59v-.045Z" />
      </Mask>
      <G mask="url(#ah)">
        <Path
          fill="url(#ai)"
          d="M0 0h2.734v.043H0z"
          transform="matrix(1 0 0 -1 64.689 49.648)"
        />
      </G>
      <Mask
        id="aj"
        width={2}
        height={1}
        x={67}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.535 49.604h.79v.045h-.79v-.045Z" />
      </Mask>
      <G mask="url(#aj)">
        <Path
          fill="url(#ak)"
          d="M0 0h1.007v.043H0z"
          transform="matrix(1 0 0 -1 67.446 49.648)"
        />
      </G>
      <Mask
        id="al"
        width={5}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.572h3.552v.043h-3.552v-.043Z" />
      </Mask>
      <G mask="url(#al)">
        <Path
          fill="url(#am)"
          d="M0 0h3.73v.043H0z"
          transform="matrix(1 0 0 -1 64.722 49.615)"
        />
      </G>
      <Mask
        id="an"
        width={5}
        height={1}
        x={64}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 49.567h3.552v.016h-3.552v-.016Z" />
      </Mask>
      <G mask="url(#an)">
        <Path
          fill="url(#ao)"
          d="M0 0h3.698v.043H0z"
          transform="matrix(1 0 0 -1 64.755 49.582)"
        />
      </G>
      <Mask
        id="ap"
        width={4}
        height={1}
        x={65}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 49.38h3.123v.005h-3.123v-.004Z" />
      </Mask>
      <G mask="url(#ap)">
        <Path
          fill="url(#aq)"
          d="M0 0h3.332v.043H0z"
          transform="matrix(1 0 0 -1 65.022 49.385)"
        />
      </G>
      <Mask
        id="ar"
        width={4}
        height={1}
        x={65}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 49.276h3.086v.043h-3.086v-.043Z" />
      </Mask>
      <G mask="url(#ar)">
        <Path
          fill="url(#as)"
          d="M0 0h3.133v.043H0z"
          transform="matrix(1 0 0 -1 65.121 49.32)"
        />
      </G>
      <Mask
        id="at"
        width={3}
        height={1}
        x={65}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.188 49.243h2.73v.044h-2.73v-.044Z" />
      </Mask>
      <G mask="url(#at)">
        <Path
          fill="url(#au)"
          d="M0 0h2.767v.043H0z"
          transform="matrix(1 0 0 -1 65.188 49.287)"
        />
      </G>
      <Mask
        id="av"
        width={1}
        height={1}
        x={68}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.01 49.243h.093v.044h-.092v-.044Z" />
      </Mask>
      <G mask="url(#av)">
        <Path
          fill="url(#aw)"
          d="M0 0h.11v.043H0z"
          transform="matrix(1 0 0 -1 68.01 49.287)"
        />
      </G>
      <Mask
        id="ax"
        width={3}
        height={1}
        x={65}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 49.21h2.608v.044h-2.608v-.044Z" />
      </Mask>
      <G mask="url(#ax)">
        <Path
          fill="url(#ay)"
          d="M0 0h2.767v.043H0z"
          transform="matrix(1 0 0 -1 65.254 49.254)"
        />
      </G>
      <Mask
        id="az"
        width={3}
        height={1}
        x={65}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 49.196h2.608v.024h-2.608v-.024Z" />
      </Mask>
      <G mask="url(#az)">
        <Path
          fill="url(#aA)"
          d="M0 0h2.8v.043H0z"
          transform="matrix(1 0 0 -1 65.287 49.221)"
        />
      </G>
      <Mask
        id="aB"
        width={4}
        height={1}
        x={65}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.719 48.915h2.57v.043h-2.57v-.043Z" />
      </Mask>
      <G mask="url(#aB)">
        <Path
          fill="url(#aC)"
          d="M0 0h2.635v.043H0z"
          transform="matrix(1 0 0 -1 65.719 48.958)"
        />
      </G>
      <Mask
        id="aD"
        width={4}
        height={1}
        x={65}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 48.883h2.334v.041h-2.334v-.041Z" />
      </Mask>
      <G mask="url(#aD)">
        <Path
          fill="url(#aE)"
          d="M0 0h2.568v.043H0z"
          transform="matrix(1 0 0 -1 65.785 48.925)"
        />
      </G>
      <Mask
        id="aF"
        width={4}
        height={1}
        x={65}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 48.849h2.334v.043h-2.334v-.043Z" />
      </Mask>
      <G mask="url(#aF)">
        <Path
          fill="url(#aG)"
          d="M0 0h2.535v.043H0z"
          transform="matrix(1 0 0 -1 65.818 48.892)"
        />
      </G>
      <Mask
        id="aH"
        width={4}
        height={1}
        x={65}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 48.826h2.334v.034h-2.334v-.034Z" />
      </Mask>
      <G mask="url(#aH)">
        <Path
          fill="url(#aI)"
          d="M0 0h2.469v.043H0z"
          transform="matrix(1 0 0 -1 65.885 48.86)"
        />
      </G>
      <Mask
        id="aJ"
        width={2}
        height={1}
        x={65}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 48.826h1.002v.001h-1.002v-.001Z" />
      </Mask>
      <G mask="url(#aJ)">
        <Path
          fill="url(#aK)"
          d="M0 0h1.04v.043H0z"
          transform="matrix(1 0 0 -1 65.918 48.827)"
        />
      </G>
      <Mask
        id="aL"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.14 48.826h1.15v.001h-1.15v-.001Z" />
      </Mask>
      <G mask="url(#aL)">
        <Path
          fill="url(#aM)"
          d="M0 0h1.372v.043H0z"
          transform="matrix(1 0 0 -1 66.98 48.827)"
        />
      </G>
      <Mask
        id="aN"
        width={1}
        height={1}
        x={66}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.435 48.52h.556v.044h-.556v-.044Z" />
      </Mask>
      <G mask="url(#aN)">
        <Path
          fill="url(#aO)"
          d="M0 0h.642v.043H0z"
          transform="matrix(1 0 0 -1 66.383 48.564)"
        />
      </G>
      <Mask
        id="aP"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.535 48.52h.755v.044h-.755v-.044Z" />
      </Mask>
      <G mask="url(#aP)">
        <Path
          fill="url(#aQ)"
          d="M0 0h.907v.043H0z"
          transform="matrix(1 0 0 -1 67.413 48.564)"
        />
      </G>
      <Mask
        id="aR"
        width={1}
        height={1}
        x={66}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.45 48.488h.54v.043h-.54v-.043Z" />
      </Mask>
      <G mask="url(#aR)">
        <Path
          fill="url(#aS)"
          d="M0 0h.542v.043H0z"
          transform="matrix(1 0 0 -1 66.45 48.531)"
        />
      </G>
      <Mask
        id="aT"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.535 48.488h.752v.043h-.752v-.043Z" />
      </Mask>
      <G mask="url(#aT)">
        <Path
          fill="url(#aU)"
          d="M0 0h.84v.043H0z"
          transform="matrix(1 0 0 -1 67.446 48.531)"
        />
      </G>
      <Mask
        id="aV"
        width={1}
        height={1}
        x={66}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.516 48.456h.442v.041h-.442v-.041Z" />
      </Mask>
      <G mask="url(#aV)">
        <Path
          fill="url(#aW)"
          d="M0 0h.442v.043H0z"
          transform="matrix(1 0 0 -1 66.516 48.498)"
        />
      </G>
      <Mask
        id="aX"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.547 48.456h.706v.041h-.706v-.041Z" />
      </Mask>
      <G mask="url(#aX)">
        <Path
          fill="url(#aY)"
          d="M0 0h.741v.043H0z"
          transform="matrix(1 0 0 -1 67.513 48.498)"
        />
      </G>
      <Mask
        id="aZ"
        width={1}
        height={1}
        x={66}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.745 48.454h.213v.011h-.213v-.01Z" />
      </Mask>
      <G mask="url(#aZ)">
        <Path
          fill="url(#ba)"
          d="M0 0h.41v.043H0z"
          transform="matrix(1 0 0 -1 66.549 48.466)"
        />
      </G>
      <Mask
        id="bb"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.547 48.454h.673v.011h-.673v-.01Z" />
      </Mask>
      <G mask="url(#bb)">
        <Path
          fill="url(#bc)"
          d="M0 0h.675v.043H0z"
          transform="matrix(1 0 0 -1 67.546 48.466)"
        />
      </G>
      <Mask
        id="bd"
        width={1}
        height={1}
        x={66}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.745 48.37h.06v.029h-.06v-.03Z" />
      </Mask>
      <G mask="url(#bd)">
        <Path
          fill="url(#be)"
          d="M0 0h.143v.043H0z"
          transform="matrix(1 0 0 -1 66.682 48.4)"
        />
      </G>
      <Mask
        id="bf"
        width={2}
        height={1}
        x={67}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.733 48.37h.37v.029h-.37v-.03Z" />
      </Mask>
      <G mask="url(#bf)">
        <Path
          fill="url(#bg)"
          d="M0 0h.476v.043H0z"
          transform="matrix(1 0 0 -1 67.679 48.4)"
        />
      </G>
      <Path
        fill="#BAE6E7"
        fillRule="evenodd"
        d="M71.19 69.577v-6.512h-9.496v2.537l.034 4.222h9.461v-.247Z"
        clipRule="evenodd"
      />
      <Mask
        id="bh"
        width={1}
        height={1}
        x={65}
        y={68}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 68.284h.487v.03h-.487v-.03Z" />
      </Mask>
      <G mask="url(#bh)">
        <Path
          fill="url(#bi)"
          d="M0 0h.542v.044H0z"
          transform="matrix(1 0 0 -1 65.268 68.314)"
        />
      </G>
      <Mask
        id="bj"
        width={1}
        height={1}
        x={65}
        y={68}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 68.17h.79v.045h-.79v-.045Z" />
      </Mask>
      <G mask="url(#bj)">
        <Path
          fill="url(#bk)"
          d="M0 0h.808v.044H0z"
          transform="matrix(1 0 0 -1 65.168 68.214)"
        />
      </G>
      <Mask
        id="bl"
        width={1}
        height={1}
        x={65}
        y={68}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 68.136h.79v.045h-.79v-.045Z" />
      </Mask>
      <G mask="url(#bl)">
        <Path
          fill="url(#bm)"
          d="M0 0h.874v.044H0z"
          transform="matrix(1 0 0 -1 65.168 68.18)"
        />
      </G>
      <Mask
        id="bn"
        width={1}
        height={1}
        x={65}
        y={68}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 68.104h.79v.043h-.79v-.043Z" />
      </Mask>
      <G mask="url(#bn)">
        <Path
          fill="url(#bo)"
          d="M0 0h.94v.044H0z"
          transform="matrix(1 0 0 -1 65.135 68.147)"
        />
      </G>
      <Mask
        id="bp"
        width={1}
        height={1}
        x={65}
        y={68}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 68.1h.79v.015h-.79v-.016Z" />
      </Mask>
      <G mask="url(#bp)">
        <Path
          fill="url(#bq)"
          d="M0 0h1.007v.044H0z"
          transform="matrix(1 0 0 -1 65.135 68.114)"
        />
      </G>
      <Mask
        id="br"
        width={1}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 67.803h.379v.045h-.38v-.045Z" />
      </Mask>
      <G mask="url(#br)">
        <Path
          fill="url(#bs)"
          d="M0 0h.575v.044H0z"
          transform="matrix(1 0 0 -1 64.37 67.848)"
        />
      </G>
      <Mask
        id="bt"
        width={2}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 67.803h1.44v.045h-1.44v-.045Z" />
      </Mask>
      <G mask="url(#bt)">
        <Path
          fill="url(#bu)"
          d="M0 0h1.472v.044H0z"
          transform="matrix(1 0 0 -1 65.135 67.848)"
        />
      </G>
      <Mask
        id="bv"
        width={1}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 67.77h.556v.044h-.556v-.043Z" />
      </Mask>
      <G mask="url(#bv)">
        <Path
          fill="url(#bw)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 64.304 67.814)"
        />
      </G>
      <Mask
        id="bx"
        width={2}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 67.77h1.454v.044h-1.454v-.043Z" />
      </Mask>
      <G mask="url(#bx)">
        <Path
          fill="url(#by)"
          d="M0 0h1.505v.044H0z"
          transform="matrix(1 0 0 -1 65.135 67.814)"
        />
      </G>
      <Mask
        id="bz"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 67.737h.667v.045h-.667v-.045Z" />
      </Mask>
      <G mask="url(#bz)">
        <Path
          fill="url(#bA)"
          d="M0 0h.774v.044H0z"
          transform="matrix(1 0 0 -1 64.27 67.781)"
        />
      </G>
      <Mask
        id="bB"
        width={2}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 67.737h1.454v.045h-1.454v-.045Z" />
      </Mask>
      <G mask="url(#bB)">
        <Path
          fill="url(#bC)"
          d="M0 0h1.538v.044H0z"
          transform="matrix(1 0 0 -1 65.168 67.781)"
        />
      </G>
      <Mask
        id="bD"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 67.728h.734v.02h-.734v-.02Z" />
      </Mask>
      <G mask="url(#bD)">
        <Path
          fill="url(#bE)"
          d="M0 0h.874v.044H0z"
          transform="matrix(1 0 0 -1 64.237 67.748)"
        />
      </G>
      <Mask
        id="bF"
        width={2}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 67.728h1.572v.02h-1.572v-.02Z" />
      </Mask>
      <G mask="url(#bF)">
        <Path
          fill="url(#bG)"
          d="M0 0h1.571v.044H0z"
          transform="matrix(1 0 0 -1 65.168 67.748)"
        />
      </G>
      <Mask
        id="bH"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.208 67.543h1.113v.004h-1.113v-.004Z" />
      </Mask>
      <G mask="url(#bH)">
        <Path
          fill="url(#bI)"
          d="M0 0h1.273v.044H0z"
          transform="matrix(1 0 0 -1 64.138 67.548)"
        />
      </G>
      <Mask
        id="bJ"
        width={2}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 67.543h1.43v.004h-1.43v-.004Z" />
      </Mask>
      <G mask="url(#bJ)">
        <Path
          fill="url(#bK)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 65.434 67.548)"
        />
      </G>
      <Mask
        id="bL"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.208 67.438h1.298v.043h-1.298v-.043Z" />
      </Mask>
      <G mask="url(#bL)">
        <Path
          fill="url(#bM)"
          d="M0 0h1.372v.044H0z"
          transform="matrix(1 0 0 -1 64.138 67.482)"
        />
      </G>
      <Mask
        id="bN"
        width={3}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 67.438h1.579v.043H65.56v-.043Z" />
      </Mask>
      <G mask="url(#bN)">
        <Path
          fill="url(#bO)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 65.533 67.482)"
        />
      </G>
      <Mask
        id="bP"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.208 67.404h1.298v.045h-1.298v-.045Z" />
      </Mask>
      <G mask="url(#bP)">
        <Path
          fill="url(#bQ)"
          d="M0 0h1.439v.044H0z"
          transform="matrix(1 0 0 -1 64.138 67.448)"
        />
      </G>
      <Mask
        id="bR"
        width={3}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.599 67.404h1.541v.045h-1.541v-.045Z" />
      </Mask>
      <G mask="url(#bR)">
        <Path
          fill="url(#bS)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 65.6 67.448)"
        />
      </G>
      <Mask
        id="bT"
        width={4}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.208 67.372h2.932v.043h-2.932v-.043Z" />
      </Mask>
      <G mask="url(#bT)">
        <Path
          fill="url(#bU)"
          d="M0 0h3.132v.044H0z"
          transform="matrix(1 0 0 -1 64.138 67.415)"
        />
      </G>
      <Mask
        id="bV"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.208 67.358h1.353v.023h-1.353v-.023Z" />
      </Mask>
      <G mask="url(#bV)">
        <Path
          fill="url(#bW)"
          d="M0 0h1.538v.044H0z"
          transform="matrix(1 0 0 -1 64.138 67.382)"
        />
      </G>
      <Mask
        id="bX"
        width={3}
        height={1}
        x={65}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.7 67.358h1.44v.023H65.7v-.023Z" />
      </Mask>
      <G mask="url(#bX)">
        <Path
          fill="url(#bY)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 65.7 67.382)"
        />
      </G>
      <Mask
        id="bZ"
        width={2}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 67.071h1.578v.045h-1.578v-.045Z" />
      </Mask>
      <G mask="url(#bZ)">
        <Path
          fill="url(#ca)"
          d="M0 0h1.904v.044H0z"
          transform="matrix(1 0 0 -1 64.205 67.115)"
        />
      </G>
      <Mask
        id="cb"
        width={2}
        height={1}
        x={66}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.13 67.071h1.604v.045H66.13v-.045Z" />
      </Mask>
      <G mask="url(#cb)">
        <Path
          fill="url(#cc)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 66.13 67.115)"
        />
      </G>
      <Mask
        id="cd"
        width={4}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 67.039h3.355v.043h-3.355v-.043Z" />
      </Mask>
      <G mask="url(#cd)">
        <Path
          fill="url(#ce)"
          d="M0 0h3.564v.044H0z"
          transform="matrix(1 0 0 -1 64.237 67.082)"
        />
      </G>
      <Mask
        id="cf"
        width={3}
        height={1}
        x={64}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.378 67.005h1.83v.043h-1.83v-.043Z" />
      </Mask>
      <G mask="url(#cf)">
        <Path
          fill="url(#cg)"
          d="M0 0h1.937v.044H0z"
          transform="matrix(1 0 0 -1 64.27 67.049)"
        />
      </G>
      <Mask
        id="ch"
        width={2}
        height={1}
        x={66}
        y={67}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 67.005h1.519v.043H66.35v-.043Z" />
      </Mask>
      <G mask="url(#ch)">
        <Path
          fill="url(#ci)"
          d="M0 0h1.638v.044H0z"
          transform="matrix(1 0 0 -1 66.23 67.049)"
        />
      </G>
      <Mask
        id="cj"
        width={4}
        height={2}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.394 66.986h3.525v.03h-3.525v-.03Z" />
      </Mask>
      <G mask="url(#cj)">
        <Path
          fill="url(#ck)"
          d="M0 0h3.63v.044H0z"
          transform="matrix(1 0 0 -1 64.304 67.015)"
        />
      </G>
      <Mask
        id="cl"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.706h3.518v.043h-3.518v-.043Z" />
      </Mask>
      <G mask="url(#cl)">
        <Path
          fill="url(#cm)"
          d="M0 0h3.597v.044H0z"
          transform="matrix(1 0 0 -1 64.735 66.749)"
        />
      </G>
      <Mask
        id="cn"
        width={3}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.672h1.973v.043h-1.973v-.043Z" />
      </Mask>
      <G mask="url(#cn)">
        <Path
          fill="url(#co)"
          d="M0 0h2.003v.044H0z"
          transform="matrix(1 0 0 -1 64.769 66.716)"
        />
      </G>
      <Mask
        id="cp"
        width={3}
        height={1}
        x={66}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.806 66.672h1.518v.043h-1.518v-.043Z" />
      </Mask>
      <G mask="url(#cp)">
        <Path
          fill="url(#cq)"
          d="M0 0h1.605v.044H0z"
          transform="matrix(1 0 0 -1 66.795 66.716)"
        />
      </G>
      <Mask
        id="cr"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.836 66.64h3.488v.043h-3.488v-.044Z" />
      </Mask>
      <G mask="url(#cr)">
        <Path
          fill="url(#cs)"
          d="M0 0h3.63v.044H0z"
          transform="matrix(1 0 0 -1 64.836 66.683)"
        />
      </G>
      <Mask
        id="ct"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 66.616h3.374v.033H64.95v-.033Z" />
      </Mask>
      <G mask="url(#ct)">
        <Path
          fill="url(#cu)"
          d="M0 0h3.63v.044H0z"
          transform="matrix(1 0 0 -1 64.87 66.65)"
        />
      </G>
      <Mask
        id="cv"
        width={3}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.52h2.218v.028h-2.217v-.027Z" />
      </Mask>
      <G mask="url(#cv)">
        <Path
          fill="url(#cw)"
          d="M0 0h2.302v.044H0z"
          transform="matrix(1 0 0 -1 64.735 66.55)"
        />
      </G>
      <Mask
        id="cx"
        width={2}
        height={1}
        x={67}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.14 66.52h1.52v.028h-1.52v-.027Z" />
      </Mask>
      <G mask="url(#cx)">
        <Path
          fill="url(#cy)"
          d="M0 0h1.605v.044H0z"
          transform="matrix(1 0 0 -1 67.06 66.55)"
        />
      </G>
      <Mask
        id="cz"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.273h3.946v.077h-3.946v-.077Z" />
      </Mask>
      <G mask="url(#cz)">
        <Path
          fill="url(#cA)"
          d="M0 0h4.295v.077H0z"
          transform="matrix(1 0 0 -1 64.603 66.35)"
        />
      </G>
      <Mask
        id="cB"
        width={4}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.246h2.698v.037h-2.698v-.037Z" />
      </Mask>
      <G mask="url(#cB)">
        <Path
          fill="url(#cC)"
          d="M0 0h2.867v.044H0z"
          transform="matrix(1 0 0 -1 64.603 66.283)"
        />
      </G>
      <Mask
        id="cD"
        width={2}
        height={1}
        x={67}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.547 66.246h1.171v.037h-1.171v-.037Z" />
      </Mask>
      <G mask="url(#cD)">
        <Path
          fill="url(#cE)"
          d="M0 0h1.405v.044H0z"
          transform="matrix(1 0 0 -1 67.492 66.283)"
        />
      </G>
      <Mask
        id="cF"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.246h4.074v.003h-4.074v-.003Z" />
      </Mask>
      <G mask="url(#cF)">
        <Path
          fill="url(#cG)"
          d="M0 0h4.328v.044H0z"
          transform="matrix(1 0 0 -1 64.603 66.25)"
        />
      </G>
      <Mask
        id="cH"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.14h4.074v.043h-4.074v-.043Z" />
      </Mask>
      <G mask="url(#cH)">
        <Path
          fill="url(#cI)"
          d="M0 0h4.328v.044H0z"
          transform="matrix(1 0 0 -1 64.603 66.183)"
        />
      </G>
      <Mask
        id="cJ"
        width={5}
        height={1}
        x={64}
        y={66}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 66.126h4.074v.025h-4.074v-.025Z" />
      </Mask>
      <G mask="url(#cJ)">
        <Path
          fill="url(#cK)"
          d="M0 0h4.295v.044H0z"
          transform="matrix(1 0 0 -1 64.636 66.15)"
        />
      </G>
      <Mask
        id="cL"
        width={4}
        height={1}
        x={64}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 65.906h2.969v.044H64.95v-.044Z" />
      </Mask>
      <G mask="url(#cL)">
        <Path
          fill="url(#cM)"
          d="M0 0h3.132v.044H0z"
          transform="matrix(1 0 0 -1 64.87 65.95)"
        />
      </G>
      <Mask
        id="cN"
        width={1}
        height={1}
        x={68}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.103 65.906h.616v.044h-.616v-.044Z" />
      </Mask>
      <G mask="url(#cN)">
        <Path
          fill="url(#cO)"
          d="M0 0h.874v.044H0z"
          transform="matrix(1 0 0 -1 68.023 65.95)"
        />
      </G>
      <Mask
        id="cP"
        width={5}
        height={1}
        x={64}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 65.875h3.769v.041H64.95v-.041Z" />
      </Mask>
      <G mask="url(#cP)">
        <Path
          fill="url(#cQ)"
          d="M0 0h3.996v.044H0z"
          transform="matrix(1 0 0 -1 64.902 65.917)"
        />
      </G>
      <Mask
        id="cR"
        width={4}
        height={1}
        x={64}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.969 65.875h2.96v.01h-2.96v-.01Z" />
      </Mask>
      <G mask="url(#cR)">
        <Path
          fill="url(#cS)"
          d="M0 0h3.132v.044H0z"
          transform="matrix(1 0 0 -1 64.969 65.883)"
        />
      </G>
      <Mask
        id="cT"
        width={1}
        height={1}
        x={68}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.124 65.875h.595v.01h-.595v-.01Z" />
      </Mask>
      <G mask="url(#cT)">
        <Path
          fill="url(#cU)"
          d="M0 0h.741v.044H0z"
          transform="matrix(1 0 0 -1 68.124 65.883)"
        />
      </G>
      <Mask
        id="cV"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 65.773h3.551v.045h-3.551v-.045Z" />
      </Mask>
      <G mask="url(#cV)">
        <Path
          fill="url(#cW)"
          d="M0 0h3.73v.044H0z"
          transform="matrix(1 0 0 -1 65.067 65.817)"
        />
      </G>
      <Mask
        id="cX"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 65.74h3.1v.044h-3.1v-.045Z" />
      </Mask>
      <G mask="url(#cX)">
        <Path
          fill="url(#cY)"
          d="M0 0h3.132v.044H0z"
          transform="matrix(1 0 0 -1 65.135 65.784)"
        />
      </G>
      <Mask
        id="cZ"
        width={1}
        height={1}
        x={68}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.324 65.74h.395v.044h-.395v-.045Z" />
      </Mask>
      <G mask="url(#cZ)">
        <Path
          fill="url(#da)"
          d="M0 0h.476v.044H0z"
          transform="matrix(1 0 0 -1 68.29 65.784)"
        />
      </G>
      <Mask
        id="db"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 65.732h3.123v.018h-3.123v-.018Z" />
      </Mask>
      <G mask="url(#db)">
        <Path
          fill="url(#dc)"
          d="M0 0h3.166v.044H0z"
          transform="matrix(1 0 0 -1 65.168 65.75)"
        />
      </G>
      <Mask
        id="dd"
        width={1}
        height={1}
        x={68}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.356 65.732h.304v.018h-.304v-.018Z" />
      </Mask>
      <G mask="url(#dd)">
        <Path
          fill="url(#de)"
          d="M0 0h.31v.044H0z"
          transform="matrix(1 0 0 -1 68.356 65.75)"
        />
      </G>
      <Mask
        id="df"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 65.507h3.07v.044h-3.07v-.044Z" />
      </Mask>
      <G mask="url(#df)">
        <Path
          fill="url(#dg)"
          d="M0 0h3.132v.044H0z"
          transform="matrix(1 0 0 -1 65.5 65.55)"
        />
      </G>
      <Mask
        id="dh"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.566 65.505h3.094v.012h-3.094v-.012Z" />
      </Mask>
      <G mask="url(#dh)">
        <Path
          fill="url(#di)"
          d="M0 0h3.1v.044H0z"
          transform="matrix(1 0 0 -1 65.566 65.517)"
        />
      </G>
      <Mask
        id="dj"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.692 65.406h2.968v.045h-2.968v-.045Z" />
      </Mask>
      <G mask="url(#dj)">
        <Path
          fill="url(#dk)"
          d="M0 0h3.066v.044H0z"
          transform="matrix(1 0 0 -1 65.666 65.45)"
        />
      </G>
      <Mask
        id="dl"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.7 65.374h3.019v.043h-3.02v-.043Z" />
      </Mask>
      <G mask="url(#dl)">
        <Path
          fill="url(#dm)"
          d="M0 0h3.066v.044H0z"
          transform="matrix(1 0 0 -1 65.7 65.418)"
        />
      </G>
      <Mask
        id="dn"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 65.34h2.762v.045h-2.762v-.045Z" />
      </Mask>
      <G mask="url(#dn)">
        <Path
          fill="url(#do)"
          d="M0 0h3v.044H0z"
          transform="matrix(1 0 0 -1 65.766 65.384)"
        />
      </G>
      <Mask
        id="dp"
        width={4}
        height={1}
        x={65}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.956 65.337h2.762v.014h-2.762v-.014Z" />
      </Mask>
      <G mask="url(#dp)">
        <Path
          fill="url(#dq)"
          d="M0 0h2.966v.044H0z"
          transform="matrix(1 0 0 -1 65.832 65.351)"
        />
      </G>
      <Mask
        id="dr"
        width={2}
        height={1}
        x={66}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.13 65.133h1.01v.018h-1.01v-.018Z" />
      </Mask>
      <G mask="url(#dr)">
        <Path
          fill="url(#ds)"
          d="M0 0h1.14v.044H0z"
          transform="matrix(1 0 0 -1 66.13 65.151)"
        />
      </G>
      <Mask
        id="dt"
        width={2}
        height={1}
        x={67}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.362 65.133h1.357v.018h-1.357v-.018Z" />
      </Mask>
      <G mask="url(#dt)">
        <Path
          fill="url(#du)"
          d="M0 0h1.505v.044H0z"
          transform="matrix(1 0 0 -1 67.326 65.151)"
        />
      </G>
      <Mask
        id="dv"
        width={2}
        height={1}
        x={66}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 65.041h.79v.043h-.79v-.043Z" />
      </Mask>
      <G mask="url(#dv)">
        <Path
          fill="url(#dw)"
          d="M0 0h1.073v.044H0z"
          transform="matrix(1 0 0 -1 66.23 65.085)"
        />
      </G>
      <Mask
        id="dx"
        width={2}
        height={1}
        x={67}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.535 65.041h1.184v.043h-1.184v-.043Z" />
      </Mask>
      <G mask="url(#dx)">
        <Path
          fill="url(#dy)"
          d="M0 0h1.405v.044H0z"
          transform="matrix(1 0 0 -1 67.426 65.085)"
        />
      </G>
      <Mask
        id="dz"
        width={2}
        height={1}
        x={66}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 65.007h.79v.045h-.79v-.045Z" />
      </Mask>
      <G mask="url(#dz)">
        <Path
          fill="url(#dA)"
          d="M0 0h1.007v.044H0z"
          transform="matrix(1 0 0 -1 66.297 65.051)"
        />
      </G>
      <Mask
        id="dB"
        width={2}
        height={1}
        x={67}
        y={65}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.547 65.007h1.171v.045h-1.171v-.045Z" />
      </Mask>
      <G mask="url(#dB)">
        <Path
          fill="url(#dC)"
          d="M0 0h1.372v.044H0z"
          transform="matrix(1 0 0 -1 67.459 65.051)"
        />
      </G>
      <Mask
        id="dD"
        width={2}
        height={2}
        x={66}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.435 64.975h.706v.043h-.706v-.043Z" />
      </Mask>
      <G mask="url(#dD)">
        <Path
          fill="url(#dE)"
          d="M0 0h.94v.044H0z"
          transform="matrix(1 0 0 -1 66.363 65.018)"
        />
      </G>
      <Mask
        id="dF"
        width={2}
        height={2}
        x={67}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.547 64.975h1.171v.043h-1.171v-.043Z" />
      </Mask>
      <G mask="url(#dF)">
        <Path
          fill="url(#dG)"
          d="M0 0h1.306v.044H0z"
          transform="matrix(1 0 0 -1 67.525 65.018)"
        />
      </G>
      <Mask
        id="dH"
        width={2}
        height={1}
        x={66}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.435 64.948h.706v.036h-.706v-.036Z" />
      </Mask>
      <G mask="url(#dH)">
        <Path
          fill="url(#dI)"
          d="M0 0h.907v.044H0z"
          transform="matrix(1 0 0 -1 66.397 64.985)"
        />
      </G>
      <Mask
        id="dJ"
        width={2}
        height={1}
        x={67}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.592 64.948h1.127v.036h-1.127v-.036Z" />
      </Mask>
      <G mask="url(#dJ)">
        <Path
          fill="url(#dK)"
          d="M0 0h1.206v.044H0z"
          transform="matrix(1 0 0 -1 67.592 64.985)"
        />
      </G>
      <Mask
        id="dL"
        width={2}
        height={1}
        x={66}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.464 64.948h.676v.004h-.676v-.003Z" />
      </Mask>
      <G mask="url(#dL)">
        <Path
          fill="url(#dM)"
          d="M0 0h.84v.044H0z"
          transform="matrix(1 0 0 -1 66.463 64.951)"
        />
      </G>
      <Mask
        id="dN"
        width={2}
        height={1}
        x={67}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.626 64.948h1.093v.004h-1.093v-.003Z" />
      </Mask>
      <G mask="url(#dN)">
        <Path
          fill="url(#dO)"
          d="M0 0h1.173v.044H0z"
          transform="matrix(1 0 0 -1 67.625 64.951)"
        />
      </G>
      <Mask
        id="dP"
        width={2}
        height={1}
        x={66}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.806 64.763h.334v.022h-.334v-.021Z" />
      </Mask>
      <G mask="url(#dP)">
        <Path
          fill="url(#dQ)"
          d="M0 0h.476v.044H0z"
          transform="matrix(1 0 0 -1 66.762 64.785)"
        />
      </G>
      <Mask
        id="dR"
        width={2}
        height={1}
        x={67}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.93 64.763h.73v.022h-.73v-.021Z" />
      </Mask>
      <G mask="url(#dR)">
        <Path
          fill="url(#dS)"
          d="M0 0h.808v.044H0z"
          transform="matrix(1 0 0 -1 67.89 64.785)"
        />
      </G>
      <Mask
        id="dT"
        width={2}
        height={1}
        x={66}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.99 64.642h.014v.043h-.014v-.043Z" />
      </Mask>
      <G mask="url(#dT)">
        <Path
          fill="url(#dU)"
          d="M0 0h.077v.044H0z"
          transform="matrix(1 0 0 -1 66.928 64.685)"
        />
      </G>
      <Mask
        id="dV"
        width={1}
        height={1}
        x={68}
        y={64}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M68.103 64.642h.372v.043h-.371v-.043Z" />
      </Mask>
      <G mask="url(#dV)">
        <Path
          fill="url(#dW)"
          d="M0 0h.509v.044H0z"
          transform="matrix(1 0 0 -1 68.057 64.685)"
        />
      </G>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M63.784 54.79h4.877c.066 0 .119.053.119.118v2.058a.119.119 0 0 1-.119.119h-4.877a.118.118 0 0 1-.117-.12v-2.057c0-.065.052-.117.117-.117Z"
        clipRule="evenodd"
      />
      <Path
        fill="#DC0000"
        fillRule="evenodd"
        d="M64.644 55.278c.11 0 .205.025.285.074.079.05.14.12.184.214a.806.806 0 0 1 .065.34.804.804 0 0 1-.065.337.5.5 0 0 1-.184.217.535.535 0 0 1-.285.074.489.489 0 0 1-.472-.288.845.845 0 0 1-.063-.34c0-.13.022-.243.065-.337a.494.494 0 0 1 .47-.291Zm0 .191a.22.22 0 0 0-.199.103c-.044.07-.067.18-.067.333 0 .153.023.264.069.333.045.07.11.105.197.105a.216.216 0 0 0 .197-.103c.045-.07.067-.18.067-.335 0-.152-.022-.265-.067-.333a.216.216 0 0 0-.197-.103Zm1.098-.163c.157 0 .277.032.363.097.087.064.13.162.13.29 0 .134-.042.234-.128.302a.54.54 0 0 1-.344.101h-.137v.41h-.256v-1.2h.372Zm0 .604a.258.258 0 0 0 .17-.05c.04-.035.06-.09.06-.167 0-.136-.078-.204-.233-.204h-.113v.42h.116Zm1.38-.604-.029.185h-.434v.313h.379v.183h-.38v.331h.466v.188h-.72v-1.2h.717Zm1.106 1.2H67.9l-.383-.952a5 5 0 0 1 .025.231c.006.072.01.157.01.254v.467h-.23v-1.2h.32l.389.954a2.899 2.899 0 0 1-.034-.427v-.527h.23v1.2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#430068"
        d="M64.409 54.81c-.01.009-.028.009-.037-.002-.01-.01-.01-.026.002-.037l2.019-1.893c.01-.01.026-.01.037.002l1.934 1.892c.01.01.01.027 0 .037-.01.01-.026.01-.037 0l-1.916-1.875-2.002 1.875Z"
      />
      <Path
        fill="#1A1A1A"
        fillRule="evenodd"
        d="M66.41 52.958c.05 0 .09.04.09.086 0 .048-.04.087-.09.087-.051 0-.093-.039-.093-.087 0-.046.042-.086.093-.086Z"
        clipRule="evenodd"
      />
      <Path
        fill="#BAE6E7"
        fillRule="evenodd"
        d="M28.393 44.268h26.379v19.714l-26.022.396-.357-20.11Z"
        clipRule="evenodd"
      />
      <Path
        fill="#D6B294"
        fillRule="evenodd"
        d="M46.906 63.501h6.852v-5.738h-6.852V63.5Z"
        clipRule="evenodd"
      />
      <Path
        fill="#C2A287"
        fillRule="evenodd"
        d="M46.916 58.467h6.851v-.695h-6.851v.695Z"
        clipRule="evenodd"
      />
      <Path
        fill="#E00000"
        fillRule="evenodd"
        d="M27.294 65.298h29.073a.9.9 0 0 0 .897-.897.9.9 0 0 0-.897-.897H27.294a.899.899 0 0 0-.897.897c0 .494.402.897.897.897Z"
        clipRule="evenodd"
      />
      <Mask
        id="dX"
        width={13}
        height={14}
        x={19}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M19.395 23h12.232v13.926H19.395V23Z" />
      </Mask>
      <G mask="url(#dX)">
        <Path
          fill="red"
          fillRule="evenodd"
          d="M31.328 23.008c-.037.081-.071.163-.104.242-.932 2.264-1.866 4.539-2.796 6.806-.926 2.27-1.86 4.54-2.794 6.806h-6.058l3.383-6.807c1.129-2.27 2.255-4.543 3.384-6.81.037-.079.078-.16.122-.242 1.618.002 3.236.002 4.863.005Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="dY"
        width={11}
        height={14}
        x={31}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.627 23h9.47v13.926h-9.47V23Z" />
      </Mask>
      <G mask="url(#dY)">
        <Path
          fill="red"
          fillRule="evenodd"
          d="M41.06 23.015c-.024.082-.041.162-.061.242-.538 2.268-1.08 4.535-1.619 6.804l-1.618 6.8h-6.058l2.201-6.801c.734-2.27 1.468-4.54 2.207-6.809.025-.078.054-.16.085-.242 1.619.003 3.239.006 4.863.006Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="dZ"
        width={8}
        height={14}
        x={43}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M43.465 23h7.497v13.926h-7.497V23Z" />
      </Mask>
      <G mask="url(#dZ)">
        <Path
          fill="red"
          fillRule="evenodd"
          d="m50.792 23.023-.019.242c-.15 2.264-.296 4.533-.442 6.8-.145 2.266-.297 4.535-.442 6.797H43.83c.34-2.265.684-4.534 1.023-6.8.341-2.265.686-4.534 1.032-6.803.012-.077.024-.159.043-.24 1.618 0 3.238.001 4.863.004Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="ea"
        width={8}
        height={14}
        x={55}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M55.303 23h7.102v13.926h-7.102V23Z" />
      </Mask>
      <G mask="url(#ea)">
        <Path
          fill="red"
          fillRule="evenodd"
          d="M60.518 23.03c.007.082.016.164.025.243.245 2.264.492 4.532.734 6.796.242 2.264.491 4.531.74 6.793h-6.058c-.056-2.262-.11-4.529-.157-6.795-.05-2.264-.097-4.531-.147-6.797v-.24h4.863Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="eb"
        width={10}
        height={14}
        x={65}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 23h9.076v13.926h-9.076V23Z" />
      </Mask>
      <G mask="url(#eb)">
        <Path
          fill="red"
          fillRule="evenodd"
          d="M70.25 23.037c.02.082.045.162.069.242.638 2.263 1.273 4.532 1.91 6.793.636 2.266 1.272 4.53 1.915 6.79H68.08c-.442-2.26-.89-4.526-1.327-6.792-.437-2.264-.88-4.53-1.322-6.793-.019-.078-.031-.161-.043-.242 1.62.002 3.238.002 4.863.002Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="ec"
        width={12}
        height={14}
        x={25}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M25.313 23H36.36v13.926H25.313V23Z" />
      </Mask>
      <G mask="url(#ec)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M36.197 23.01c-.031.08-.06.163-.085.241a3819.15 3819.15 0 0 0-2.207 6.808l-2.201 6.803h-6.07c.934-2.266 1.868-4.537 2.794-6.806.93-2.267 1.862-4.542 2.796-6.806.031-.08.067-.16.104-.242l4.869.001Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="ed"
        width={10}
        height={14}
        x={37}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M37.546 23h8.68v13.926h-8.68V23Z" />
      </Mask>
      <G mask="url(#ed)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M45.93 23.018c-.019.082-.031.164-.044.24-.345 2.27-.69 4.539-1.03 6.805-.34 2.265-.685 4.534-1.024 6.799h-6.07c.54-2.265 1.079-4.535 1.618-6.801L41 23.257c.018-.08.037-.16.061-.242 1.619.002 3.245.004 4.87.004Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="ee"
        width={8}
        height={14}
        x={49}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.778 23h6.314v13.926h-6.314V23Z" />
      </Mask>
      <G mask="url(#ee)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M55.656 23.03c0 .078-.002.16 0 .24l.146 6.797c.048 2.266.102 4.533.158 6.794h-6.07c.145-2.26.297-4.53.442-6.797.147-2.266.291-4.535.442-6.799l.019-.242c1.618 0 3.238.002 4.863.006Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="ef"
        width={9}
        height={14}
        x={60}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M60.433 23h7.892v13.926h-7.892V23Z" />
      </Mask>
      <G mask="url(#ef)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M65.388 23.035c.012.08.027.162.043.242.445 2.262.885 4.53 1.322 6.793.437 2.266.885 4.532 1.327 6.792h-6.063c-.248-2.262-.498-4.529-.74-6.793-.242-2.265-.492-4.532-.734-6.796a3.044 3.044 0 0 1-.024-.242c1.62.001 3.244.001 4.869.004Z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="eg"
        width={12}
        height={14}
        x={69}
        y={23}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M69.902 23h10.654v13.926H69.902V23Z" />
      </Mask>
      <G mask="url(#eg)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M75.122 23.043c.023.082.054.162.085.242.83 2.261 1.667 4.527 2.497 6.79.83 2.264 1.674 4.529 2.51 6.787h-6.07c-.642-2.26-1.279-4.524-1.915-6.79-.637-2.261-1.274-4.53-1.91-6.793a3.094 3.094 0 0 1-.068-.242c1.62.005 3.245.006 4.87.006Z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#E00000"
        fillRule="evenodd"
        d="M25.64 36.858c.006.458.018.916.03 1.374.013.458.02.915.03 1.372.014.556-.318 1.059-.854 1.427-.53.364-1.285.594-2.11.594h-.008c-.829 0-1.589-.226-2.145-.594-.554-.364-.905-.87-.922-1.427l-.043-1.372c-.014-.458-.03-.916-.042-1.374h6.064Zm12.128 0c-.006.458.003.916.006 1.374.003.458.003.915.006 1.372.003.556-.334 1.06-.874 1.427-.535.365-1.291.594-2.116.594h-.006c-.837 0-1.59-.223-2.146-.594-.542-.36-.888-.87-.898-1.427-.008-.457-.008-.914-.017-1.372-.01-.458-.019-.916-.019-1.374h6.064Zm12.127 0c-.012.458-.015.916-.018 1.374-.003.458-.006.915-.013 1.372-.006.556-.352 1.059-.903 1.427-.54.364-1.297.594-2.122.594h-.006c-.831 0-1.585-.223-2.135-.594-.535-.36-.873-.87-.873-1.427 0-.457.003-.914 0-1.372-.003-.458 0-.916.007-1.374h6.063Zm12.128 0c-.019.458-.034.916-.043 1.374-.01.458-.016.915-.03 1.372-.017.556-.373 1.059-.928 1.427-.548.364-1.31.594-2.134.594h-.007c-.83 0-1.584-.224-2.122-.594-.53-.362-.865-.87-.856-1.427.01-.457.02-.914.025-1.372.006-.458.013-.916.031-1.374h6.064Zm12.127 0c-.03.458-.048.916-.066 1.374-.019.458-.033.915-.054 1.372-.028.556-.385 1.059-.947 1.427-.554.364-1.322.594-2.147.594h-.006c-.83 0-1.578-.226-2.11-.594-.529-.364-.85-.87-.83-1.427.016-.457.03-.914.04-1.372.013-.458.032-.916.056-1.374h6.064Z"
        clipRule="evenodd"
      />
      <Path
        fill="#CCC"
        fillRule="evenodd"
        d="M31.704 36.858c0 .458.01.916.019 1.374.01.458.01.915.017 1.372.01.556-.324 1.057-.866 1.427-.53.362-1.286.594-2.11.594h-.007c-.83 0-1.59-.224-2.147-.594-.547-.362-.895-.87-.91-1.427-.01-.457-.016-.914-.029-1.372-.012-.458-.024-.916-.03-1.374h6.063Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M43.831 36.858c-.006.458-.009.916-.006 1.374.003.458 0 .915 0 1.372 0 .556-.348 1.059-.89 1.427-.537.364-1.298.594-2.123.594h-.006c-.831 0-1.585-.224-2.135-.594-.541-.362-.888-.87-.891-1.427-.003-.457-.003-.914-.006-1.372-.003-.458-.013-.916-.006-1.374h6.063Z"
        clipRule="evenodd"
      />
      <Path
        fill="#CCC"
        fillRule="evenodd"
        d="M55.959 36.858c-.019.458-.025.916-.03 1.374-.006.458-.016.915-.026 1.372-.009.556-.357 1.06-.909 1.427-.546.365-1.31.594-2.135.594h-.004c-.831 0-1.579-.224-2.123-.594-.536-.362-.874-.87-.868-1.427.006-.457.01-.914.013-1.372.003-.458.006-.916.018-1.374h6.064Zm12.128 0c-.025.458-.043.916-.056 1.374-.01.458-.024.915-.041 1.372-.02.556-.376 1.06-.934 1.427-.553.365-1.316.594-2.141.594h-.005c-.837 0-1.586-.223-2.122-.594-.526-.36-.854-.87-.837-1.427.014-.457.02-.914.03-1.372.008-.458.024-.916.042-1.374h6.064Zm12.127 0c-.03.458-.05.916-.072 1.374l-.067 1.372c-.03.556-.397 1.057-.965 1.427-.555.362-1.32.594-2.145.594h-.008c-.83 0-1.578-.224-2.11-.594-.523-.362-.845-.87-.817-1.427.022-.457.035-.914.054-1.372.018-.458.035-.916.066-1.374h6.064Z"
        clipRule="evenodd"
      />
      <Mask
        id="eh"
        width={62}
        height={5}
        x={19}
        y={70}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M19 70.861h61.774v3.863H19V70.86Z" />
      </Mask>
      <G mask="url(#eh)">
        <Path
          fill="#E00000"
          fillRule="evenodd"
          d="M19 74.707h61.774v-.626a2.999 2.999 0 0 0-2.992-2.987H21.99A2.997 2.997 0 0 0 19 74.081v.626Z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="red"
        fillRule="evenodd"
        d="M19.439 74.058a3.018 3.018 0 0 1 2.996-2.747h56.113c.089 0 .178.005.266.013a2.937 2.937 0 0 0-1.197-.255h-55.44a2.98 2.98 0 0 0-2.974 2.969v.02h.236Z"
        clipRule="evenodd"
      />
      <Mask
        id="ei"
        width={1}
        height={1}
        x={33}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.205 51.526h.21v.028h-.21v-.028Z" />
      </Mask>
      <G mask="url(#ei)">
        <Path
          fill="url(#ej)"
          d="M0 0h.343v.077H0z"
          transform="matrix(1 0 0 -1 33.133 51.553)"
        />
      </G>
      <Mask
        id="ek"
        width={2}
        height={1}
        x={32}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.9 51.31h.7v.045h-.7v-.045Z" />
      </Mask>
      <G mask="url(#ek)">
        <Path
          fill="url(#el)"
          d="M0 0h.875v.044H0z"
          transform="matrix(1 0 0 -1 32.9 51.355)"
        />
      </G>
      <Mask
        id="em"
        width={2}
        height={1}
        x={32}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.866 51.278h.919v.043h-.919v-.043Z" />
      </Mask>
      <G mask="url(#em)">
        <Path
          fill="url(#en)"
          d="M0 0h.941v.044H0z"
          transform="matrix(1 0 0 -1 32.866 51.322)"
        />
      </G>
      <Mask
        id="eo"
        width={2}
        height={1}
        x={32}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.866 51.246h.919v.043h-.919v-.043Z" />
      </Mask>
      <G mask="url(#eo)">
        <Path
          fill="url(#ep)"
          d="M0 0h1.008v.044H0z"
          transform="matrix(1 0 0 -1 32.866 51.289)"
        />
      </G>
      <Mask
        id="eq"
        width={2}
        height={1}
        x={32}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.858 51.235h1.049v.02h-1.049v-.02Z" />
      </Mask>
      <G mask="url(#eq)">
        <Path
          fill="url(#er)"
          d="M0 0h1.074v.044H0z"
          transform="matrix(1 0 0 -1 32.833 51.255)"
        />
      </G>
      <Mask
        id="es"
        width={2}
        height={1}
        x={32}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.858 51.132h1.136v.024h-1.136v-.024Z" />
      </Mask>
      <G mask="url(#es)">
        <Path
          fill="url(#et)"
          d="M0 0h1.274v.044H0z"
          transform="matrix(1 0 0 -1 32.8 51.156)"
        />
      </G>
      <Mask
        id="eu"
        width={1}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.115 50.914h.3v.043h-.3v-.043Z" />
      </Mask>
      <G mask="url(#eu)">
        <Path
          fill="url(#ev)"
          d="M0 0h.41v.044H0z"
          transform="matrix(1 0 0 -1 32.036 50.957)"
        />
      </G>
      <Mask
        id="ew"
        width={3}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.858 50.914h1.483v.043h-1.483v-.043Z" />
      </Mask>
      <G mask="url(#ew)">
        <Path
          fill="url(#ex)"
          d="M0 0h1.606v.044H0z"
          transform="matrix(1 0 0 -1 32.8 50.957)"
        />
      </G>
      <Mask
        id="ey"
        width={1}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.022 50.88h.394v.045h-.394v-.045Z" />
      </Mask>
      <G mask="url(#ey)">
        <Path
          fill="url(#ez)"
          d="M0 0h.542v.044H0z"
          transform="matrix(1 0 0 -1 31.97 50.924)"
        />
      </G>
      <Mask
        id="eA"
        width={3}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.858 50.88h1.531v.045h-1.53v-.045Z" />
      </Mask>
      <G mask="url(#eA)">
        <Path
          fill="url(#eB)"
          d="M0 0h1.64v.044H0z"
          transform="matrix(1 0 0 -1 32.8 50.924)"
        />
      </G>
      <Mask
        id="eC"
        width={1}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.022 50.863h.394v.028h-.394v-.028Z" />
      </Mask>
      <G mask="url(#eC)">
        <Path
          fill="url(#eD)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 31.903 50.891)"
        />
      </G>
      <Mask
        id="eE"
        width={3}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.858 50.863h1.531v.028h-1.53v-.028Z" />
      </Mask>
      <G mask="url(#eE)">
        <Path
          fill="url(#eF)"
          d="M0 0h1.739v.044H0z"
          transform="matrix(1 0 0 -1 32.8 50.891)"
        />
      </G>
      <Mask
        id="eG"
        width={2}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.77 50.748h.901v.045h-.902v-.045Z" />
      </Mask>
      <G mask="url(#eG)">
        <Path
          fill="url(#eH)"
          d="M0 0h.975v.044H0z"
          transform="matrix(1 0 0 -1 31.77 50.792)"
        />
      </G>
      <Mask
        id="eI"
        width={3}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.866 50.748h1.84v.045h-1.84v-.045Z" />
      </Mask>
      <G mask="url(#eI)">
        <Path
          fill="url(#eJ)"
          d="M0 0h1.839v.044H0z"
          transform="matrix(1 0 0 -1 32.866 50.792)"
        />
      </G>
      <Mask
        id="eK"
        width={2}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.77 50.737h1.008v.022H31.77v-.022Z" />
      </Mask>
      <G mask="url(#eK)">
        <Path
          fill="url(#eL)"
          d="M0 0h1.008v.044H0z"
          transform="matrix(1 0 0 -1 31.77 50.759)"
        />
      </G>
      <Mask
        id="eM"
        width={3}
        height={1}
        x={32}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.866 50.737h1.847v.022h-1.847v-.022Z" />
      </Mask>
      <G mask="url(#eM)">
        <Path
          fill="url(#eN)"
          d="M0 0h1.872v.044H0z"
          transform="matrix(1 0 0 -1 32.866 50.759)"
        />
      </G>
      <Mask
        id="eO"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.638 50.517h1.405v.043h-1.405v-.043Z" />
      </Mask>
      <G mask="url(#eO)">
        <Path
          fill="url(#eP)"
          d="M0 0h1.473v.044H0z"
          transform="matrix(1 0 0 -1 31.637 50.56)"
        />
      </G>
      <Mask
        id="eQ"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.205 50.517h1.865v.043h-1.865v-.043Z" />
      </Mask>
      <G mask="url(#eQ)">
        <Path
          fill="url(#eR)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.133 50.56)"
        />
      </G>
      <Mask
        id="eS"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.638 50.493h1.538v.034h-1.538v-.034Z" />
      </Mask>
      <G mask="url(#eS)">
        <Path
          fill="url(#eT)"
          d="M0 0h1.54v.044H0z"
          transform="matrix(1 0 0 -1 31.637 50.527)"
        />
      </G>
      <Mask
        id="eU"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.228 50.493h1.856v.034h-1.856v-.034Z" />
      </Mask>
      <G mask="url(#eU)">
        <Path
          fill="url(#eV)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.2 50.527)"
        />
      </G>
      <Mask
        id="eW"
        width={5}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.638 50.384h3.54v.043h-3.54v-.043Z" />
      </Mask>
      <G mask="url(#eW)">
        <Path
          fill="url(#eX)"
          d="M0 0h3.667v.044H0z"
          transform="matrix(1 0 0 -1 31.637 50.428)"
        />
      </G>
      <Mask
        id="eY"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.638 50.35h1.567v.045h-1.567v-.045Z" />
      </Mask>
      <G mask="url(#eY)">
        <Path
          fill="url(#eZ)"
          d="M0 0h1.739v.044H0z"
          transform="matrix(1 0 0 -1 31.637 50.395)"
        />
      </G>
      <Mask
        id="fa"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.415 50.35h1.763v.045h-1.763v-.045Z" />
      </Mask>
      <G mask="url(#fa)">
        <Path
          fill="url(#fb)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.398 50.395)"
        />
      </G>
      <Mask
        id="fc"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.638 50.342h1.777v.019h-1.777v-.019Z" />
      </Mask>
      <G mask="url(#fc)">
        <Path
          fill="url(#fd)"
          d="M0 0h1.806v.044H0z"
          transform="matrix(1 0 0 -1 31.637 50.361)"
        />
      </G>
      <Mask
        id="fe"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.6 50.342h1.803v.019H33.6v-.019Z" />
      </Mask>
      <G mask="url(#fe)">
        <Path
          fill="url(#ff)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.465 50.361)"
        />
      </G>
      <Mask
        id="fg"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.746 50.122H33.6v.04h-1.854v-.04Z" />
      </Mask>
      <G mask="url(#fg)">
        <Path
          fill="url(#fh)"
          d="M0 0h2.071v.044H0z"
          transform="matrix(1 0 0 -1 31.669 50.163)"
        />
      </G>
      <Mask
        id="fi"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.785 50.122h1.788v.04h-1.788v-.04Z" />
      </Mask>
      <G mask="url(#fi)">
        <Path
          fill="url(#fj)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.765 50.163)"
        />
      </G>
      <Mask
        id="fk"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.746 50.122h2.04v.008h-2.04v-.008Z" />
      </Mask>
      <G mask="url(#fk)">
        <Path
          fill="url(#fl)"
          d="M0 0h2.138v.044H0z"
          transform="matrix(1 0 0 -1 31.669 50.13)"
        />
      </G>
      <Mask
        id="fm"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.994 50.122h1.579v.008h-1.579v-.008Z" />
      </Mask>
      <G mask="url(#fm)">
        <Path
          fill="url(#fn)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.83 50.13)"
        />
      </G>
      <Mask
        id="fo"
        width={3}
        height={1}
        x={31}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.746 50.02h2.161v.043h-2.16v-.043Z" />
      </Mask>
      <G mask="url(#fo)">
        <Path
          fill="url(#fp)"
          d="M0 0h2.204v.044H0z"
          transform="matrix(1 0 0 -1 31.703 50.063)"
        />
      </G>
      <Mask
        id="fq"
        width={3}
        height={1}
        x={33}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.994 50.02h1.831v.043h-1.83v-.043Z" />
      </Mask>
      <G mask="url(#fq)">
        <Path
          fill="url(#fr)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.93 50.063)"
        />
      </G>
      <Mask
        id="fs"
        width={3}
        height={2}
        x={31}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.746 49.986h2.226v.045h-2.226v-.045Z" />
      </Mask>
      <G mask="url(#fs)">
        <Path
          fill="url(#ft)"
          d="M0 0h2.238v.044H0z"
          transform="matrix(1 0 0 -1 31.736 50.03)"
        />
      </G>
      <Mask
        id="fu"
        width={3}
        height={2}
        x={33}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.997 49.986h1.938v.045h-1.938v-.045Z" />
      </Mask>
      <G mask="url(#fu)">
        <Path
          fill="url(#fv)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 33.997 50.03)"
        />
      </G>
      <Mask
        id="fw"
        width={3}
        height={1}
        x={31}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.77 49.953h2.2v.044h-2.2v-.045Z" />
      </Mask>
      <G mask="url(#fw)">
        <Path
          fill="url(#fx)"
          d="M0 0h2.238v.044H0z"
          transform="matrix(1 0 0 -1 31.77 49.997)"
        />
      </G>
      <Mask
        id="fy"
        width={2}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.03 49.953h1.938v.044H34.03v-.045Z" />
      </Mask>
      <G mask="url(#fy)">
        <Path
          fill="url(#fz)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 34.03 49.997)"
        />
      </G>
      <Mask
        id="fA"
        width={3}
        height={1}
        x={31}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M31.802 49.948h2.192v.015h-2.192v-.015Z" />
      </Mask>
      <G mask="url(#fA)">
        <Path
          fill="url(#fB)"
          d="M0 0h2.27v.044H0z"
          transform="matrix(1 0 0 -1 31.803 49.964)"
        />
      </G>
      <Mask
        id="fC"
        width={2}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.156 49.948h1.811v.015h-1.81v-.015Z" />
      </Mask>
      <G mask="url(#fC)">
        <Path
          fill="url(#fD)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 34.097 49.964)"
        />
      </G>
      <Mask
        id="fE"
        width={3}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.115 49.752h2.226v.012h-2.226v-.012Z" />
      </Mask>
      <G mask="url(#fE)">
        <Path
          fill="url(#fF)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 32.068 49.765)"
        />
      </G>
      <Mask
        id="fG"
        width={3}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.429 49.752h1.933v.012h-1.933v-.012Z" />
      </Mask>
      <G mask="url(#fG)">
        <Path
          fill="url(#fH)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 34.429 49.765)"
        />
      </G>
      <Mask
        id="fI"
        width={3}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.17 49.655h2.22v.043h-2.22v-.043Z" />
      </Mask>
      <G mask="url(#fI)">
        <Path
          fill="url(#fJ)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 32.169 49.699)"
        />
      </G>
      <Mask
        id="fK"
        width={3}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.562 49.655h1.8v.043h-1.8v-.043Z" />
      </Mask>
      <G mask="url(#fK)">
        <Path
          fill="url(#fL)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 34.562 49.699)"
        />
      </G>
      <Mask
        id="fM"
        width={3}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.623h1.973v.043h-1.973v-.043Z" />
      </Mask>
      <G mask="url(#fM)">
        <Path
          fill="url(#fN)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 32.235 49.666)"
        />
      </G>
      <Mask
        id="fO"
        width={3}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 49.623h1.579v.043h-1.579v-.043Z" />
      </Mask>
      <G mask="url(#fO)">
        <Path
          fill="url(#fP)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 34.595 49.666)"
        />
      </G>
      <Mask
        id="fQ"
        width={3}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.589h2.223v.043h-2.223v-.043Z" />
      </Mask>
      <G mask="url(#fQ)">
        <Path
          fill="url(#fR)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 32.268 49.633)"
        />
      </G>
      <Mask
        id="fS"
        width={3}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 49.589h1.784v.043h-1.784v-.043Z" />
      </Mask>
      <G mask="url(#fS)">
        <Path
          fill="url(#fT)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 34.661 49.633)"
        />
      </G>
      <Mask
        id="fU"
        width={3}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.567h2.289v.033h-2.289v-.033Z" />
      </Mask>
      <G mask="url(#fU)">
        <Path
          fill="url(#fV)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 32.335 49.6)"
        />
      </G>
      <Mask
        id="fW"
        width={3}
        height={1}
        x={34}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 49.567h1.785v.033h-1.785v-.033Z" />
      </Mask>
      <G mask="url(#fW)">
        <Path
          fill="url(#fX)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 34.727 49.6)"
        />
      </G>
      <Mask
        id="fY"
        width={4}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.225h2.668v.077h-2.668v-.077Z" />
      </Mask>
      <G mask="url(#fY)">
        <Path
          fill="url(#fZ)"
          d="M0 0h2.87v.077H0z"
          transform="matrix(1 0 0 -1 32.302 49.301)"
        />
      </G>
      <Mask
        id="ga"
        width={3}
        height={1}
        x={35}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.27 49.225h1.83v.077h-1.83v-.077Z" />
      </Mask>
      <G mask="url(#ga)">
        <Path
          fill="url(#gb)"
          d="M0 0h1.905v.077H0z"
          transform="matrix(1 0 0 -1 35.193 49.301)"
        />
      </G>
      <Mask
        id="gc"
        width={4}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.196h2.762v.038h-2.762v-.038Z" />
      </Mask>
      <G mask="url(#gc)">
        <Path
          fill="url(#gd)"
          d="M0 0h2.969v.044H0z"
          transform="matrix(1 0 0 -1 32.268 49.235)"
        />
      </G>
      <Mask
        id="ge"
        width={3}
        height={1}
        x={35}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.27 49.196h1.855v.038H35.27v-.038Z" />
      </Mask>
      <G mask="url(#ge)">
        <Path
          fill="url(#gf)"
          d="M0 0h1.872v.044H0z"
          transform="matrix(1 0 0 -1 35.26 49.235)"
        />
      </G>
      <Mask
        id="gg"
        width={4}
        height={1}
        x={32}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 49.196h2.762v.006h-2.762v-.006Z" />
      </Mask>
      <G mask="url(#gg)">
        <Path
          fill="url(#gh)"
          d="M0 0h3.035v.044H0z"
          transform="matrix(1 0 0 -1 32.235 49.202)"
        />
      </G>
      <Mask
        id="gi"
        width={3}
        height={1}
        x={35}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.294 49.196h1.831v.006h-1.831v-.006Z" />
      </Mask>
      <G mask="url(#gi)">
        <Path
          fill="url(#gj)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 35.293 49.202)"
        />
      </G>
      <Mask
        id="gk"
        width={4}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.17 48.894h3.403v.043H32.17v-.043Z" />
      </Mask>
      <G mask="url(#gk)">
        <Path
          fill="url(#gl)"
          d="M0 0h3.534v.044H0z"
          transform="matrix(1 0 0 -1 32.169 48.937)"
        />
      </G>
      <Mask
        id="gm"
        width={3}
        height={1}
        x={35}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.726 48.894h1.425v.043h-1.425v-.043Z" />
      </Mask>
      <G mask="url(#gm)">
        <Path
          fill="url(#gn)"
          d="M0 0h1.606v.044H0z"
          transform="matrix(1 0 0 -1 35.726 48.937)"
        />
      </G>
      <Mask
        id="go"
        width={4}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.202 48.861h3.371v.043h-3.37v-.043Z" />
      </Mask>
      <G mask="url(#go)">
        <Path
          fill="url(#gp)"
          d="M0 0h3.567v.044H0z"
          transform="matrix(1 0 0 -1 32.202 48.904)"
        />
      </G>
      <Mask
        id="gq"
        width={3}
        height={1}
        x={35}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.968 48.861h1.184v.043h-1.184v-.043Z" />
      </Mask>
      <G mask="url(#gq)">
        <Path
          fill="url(#gr)"
          d="M0 0h1.54v.044H0z"
          transform="matrix(1 0 0 -1 35.792 48.904)"
        />
      </G>
      <Mask
        id="gs"
        width={2}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.202 48.827h1.213v.043h-1.213v-.043Z" />
      </Mask>
      <G mask="url(#gs)">
        <Path
          fill="url(#gt)"
          d="M0 0h1.24v.044H0z"
          transform="matrix(1 0 0 -1 32.202 48.871)"
        />
      </G>
      <Mask
        id="gu"
        width={3}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.6 48.827h2.202v.043H33.6v-.043Z" />
      </Mask>
      <G mask="url(#gu)">
        <Path
          fill="url(#gv)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 33.465 48.871)"
        />
      </G>
      <Mask
        id="gw"
        width={3}
        height={1}
        x={35}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.968 48.827h1.184v.043h-1.184v-.043Z" />
      </Mask>
      <G mask="url(#gw)">
        <Path
          fill="url(#gx)"
          d="M0 0h1.506v.044H0z"
          transform="matrix(1 0 0 -1 35.825 48.871)"
        />
      </G>
      <Mask
        id="gy"
        width={4}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 48.826h3.41v.012h-3.41v-.012Z" />
      </Mask>
      <G mask="url(#gy)">
        <Path
          fill="url(#gz)"
          d="M0 0h3.634v.044H0z"
          transform="matrix(1 0 0 -1 32.235 48.838)"
        />
      </G>
      <Mask
        id="gA"
        width={3}
        height={1}
        x={35}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.968 48.826h1.184v.012h-1.184v-.012Z" />
      </Mask>
      <G mask="url(#gA)">
        <Path
          fill="url(#gB)"
          d="M0 0h1.44v.044H0z"
          transform="matrix(1 0 0 -1 35.892 48.838)"
        />
      </G>
      <Mask
        id="gC"
        width={4}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.416 48.764h3.551v.008h-3.551v-.008Z" />
      </Mask>
      <G mask="url(#gC)">
        <Path
          fill="url(#gD)"
          d="M0 0h3.667v.044H0z"
          transform="matrix(1 0 0 -1 32.302 48.772)"
        />
      </G>
      <Mask
        id="gE"
        width={2}
        height={1}
        x={36}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.012 48.764h1.139v.008h-1.14v-.008Z" />
      </Mask>
      <G mask="url(#gE)">
        <Path
          fill="url(#gF)"
          d="M0 0h1.34v.044H0z"
          transform="matrix(1 0 0 -1 35.991 48.772)"
        />
      </G>
      <Mask
        id="gG"
        width={5}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.567 48.528h3.734v.045h-3.734v-.045Z" />
      </Mask>
      <G mask="url(#gG)">
        <Path
          fill="url(#gH)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 32.567 48.573)"
        />
      </G>
      <Mask
        id="gI"
        width={2}
        height={1}
        x={36}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.382 48.528h.769v.045h-.77v-.045Z" />
      </Mask>
      <G mask="url(#gI)">
        <Path
          fill="url(#gJ)"
          d="M0 0h.941v.044H0z"
          transform="matrix(1 0 0 -1 36.323 48.573)"
        />
      </G>
      <Mask
        id="gK"
        width={2}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.81 48.496h1.161v.045h-1.16v-.045Z" />
      </Mask>
      <G mask="url(#gK)">
        <Path
          fill="url(#gL)"
          d="M0 0h1.34v.044H0z"
          transform="matrix(1 0 0 -1 32.634 48.54)"
        />
      </G>
      <Mask
        id="gM"
        width={5}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.997 48.496h3.154v.045h-3.154v-.045Z" />
      </Mask>
      <G mask="url(#gM)">
        <Path
          fill="url(#gN)"
          d="M0 0h3.235v.044H0z"
          transform="matrix(1 0 0 -1 33.997 48.54)"
        />
      </G>
      <Mask
        id="gO"
        width={5}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.81 48.464h3.552v.043H32.81v-.043Z" />
      </Mask>
      <G mask="url(#gO)">
        <Path
          fill="url(#gP)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 32.667 48.507)"
        />
      </G>
      <Mask
        id="gQ"
        width={2}
        height={1}
        x={36}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.424 48.464h.727v.043h-.727v-.043Z" />
      </Mask>
      <G mask="url(#gQ)">
        <Path
          fill="url(#gR)"
          d="M0 0h.808v.044H0z"
          transform="matrix(1 0 0 -1 36.424 48.507)"
        />
      </G>
      <Mask
        id="gS"
        width={5}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.81 48.454h3.552v.019H32.81v-.019Z" />
      </Mask>
      <G mask="url(#gS)">
        <Path
          fill="url(#gT)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 32.733 48.474)"
        />
      </G>
      <Mask
        id="gU"
        width={2}
        height={1}
        x={36}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.568 48.454h.557v.019h-.557v-.019Z" />
      </Mask>
      <G mask="url(#gU)">
        <Path
          fill="url(#gV)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 36.49 48.474)"
        />
      </G>
      <Mask
        id="gW"
        width={5}
        height={1}
        x={32}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M32.9 48.37h3.669v.004H32.9v-.004Z" />
      </Mask>
      <G mask="url(#gW)">
        <Path
          fill="url(#gX)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 32.9 48.374)"
        />
      </G>
      <Mask
        id="gY"
        width={2}
        height={1}
        x={36}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.757 48.37h.276v.004h-.276v-.004Z" />
      </Mask>
      <G mask="url(#gY)">
        <Path
          fill="url(#gZ)"
          d="M0 0h.376v.044H0z"
          transform="matrix(1 0 0 -1 36.656 48.374)"
        />
      </G>
      <Mask
        id="ha"
        width={4}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.228 48.165h3.529v.043h-3.529v-.043Z" />
      </Mask>
      <G mask="url(#ha)">
        <Path
          fill="url(#hb)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 33.166 48.209)"
        />
      </G>
      <Mask
        id="hc"
        width={4}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.228 48.132h3.529v.043h-3.529v-.043Z" />
      </Mask>
      <G mask="url(#hc)">
        <Path
          fill="url(#hd)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 33.2 48.175)"
        />
      </G>
      <Mask
        id="he"
        width={4}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.266 48.1h3.673v.043h-3.673V48.1Z" />
      </Mask>
      <G mask="url(#he)">
        <Path
          fill="url(#hf)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 33.266 48.143)"
        />
      </G>
      <Mask
        id="hg"
        width={5}
        height={1}
        x={33}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.415 48.084h3.618v.025h-3.618v-.025Z" />
      </Mask>
      <G mask="url(#hg)">
        <Path
          fill="url(#hh)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 33.332 48.11)"
        />
      </G>
      <Mask
        id="hi"
        width={5}
        height={2}
        x={33}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.6 47.975h3.499v.035h-3.5v-.035Z" />
      </Mask>
      <G mask="url(#hi)">
        <Path
          fill="url(#hj)"
          d="M0 0h3.634v.044H0z"
          transform="matrix(1 0 0 -1 33.465 48.01)"
        />
      </G>
      <Mask
        id="hk"
        width={5}
        height={1}
        x={33}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.6 47.975h3.525v.001H33.6v-.001Z" />
      </Mask>
      <G mask="url(#hk)">
        <Path
          fill="url(#hl)"
          d="M0 0h3.6v.044H0z"
          transform="matrix(1 0 0 -1 33.531 47.977)"
        />
      </G>
      <Mask
        id="hm"
        width={5}
        height={1}
        x={33}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.994 47.767h3.13v.045h-3.13v-.045Z" />
      </Mask>
      <G mask="url(#hm)">
        <Path
          fill="url(#hn)"
          d="M0 0h3.401v.044H0z"
          transform="matrix(1 0 0 -1 33.797 47.811)"
        />
      </G>
      <Mask
        id="ho"
        width={3}
        height={1}
        x={33}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.994 47.734h1.184v.044h-1.184v-.044Z" />
      </Mask>
      <G mask="url(#ho)">
        <Path
          fill="url(#hp)"
          d="M0 0h1.373v.044H0z"
          transform="matrix(1 0 0 -1 33.863 47.778)"
        />
      </G>
      <Mask
        id="hq"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.27 47.734h1.855v.044H35.27v-.044Z" />
      </Mask>
      <G mask="url(#hq)">
        <Path
          fill="url(#hr)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 35.26 47.778)"
        />
      </G>
      <Mask
        id="hs"
        width={3}
        height={1}
        x={33}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M33.994 47.713h1.184v.032h-1.184v-.032Z" />
      </Mask>
      <G mask="url(#hs)">
        <Path
          fill="url(#ht)"
          d="M0 0h1.373v.044H0z"
          transform="matrix(1 0 0 -1 33.897 47.745)"
        />
      </G>
      <Mask
        id="hu"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.294 47.713h1.831v.032h-1.831v-.032Z" />
      </Mask>
      <G mask="url(#hu)">
        <Path
          fill="url(#hv)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 35.293 47.745)"
        />
      </G>
      <Mask
        id="hw"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.063 47.602h1.115v.045h-1.114v-.045Z" />
      </Mask>
      <G mask="url(#hw)">
        <Path
          fill="url(#hx)"
          d="M0 0h1.307v.044H0z"
          transform="matrix(1 0 0 -1 34.063 47.646)"
        />
      </G>
      <Mask
        id="hy"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.573 47.602h1.552v.045h-1.552v-.045Z" />
      </Mask>
      <G mask="url(#hy)">
        <Path
          fill="url(#hz)"
          d="M0 0h1.739v.044H0z"
          transform="matrix(1 0 0 -1 35.459 47.646)"
        />
      </G>
      <Mask
        id="hA"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.156 47.58h1.022v.033h-1.022v-.033Z" />
      </Mask>
      <G mask="url(#hA)">
        <Path
          fill="url(#hB)"
          d="M0 0h1.24v.044H0z"
          transform="matrix(1 0 0 -1 34.13 47.612)"
        />
      </G>
      <Mask
        id="hC"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.573 47.58h1.552v.033h-1.552v-.033Z" />
      </Mask>
      <G mask="url(#hC)">
        <Path
          fill="url(#hD)"
          d="M0 0h1.673v.044H0z"
          transform="matrix(1 0 0 -1 35.526 47.612)"
        />
      </G>
      <Mask
        id="hE"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.429 47.37h.974v.044h-.974v-.043Z" />
      </Mask>
      <G mask="url(#hE)">
        <Path
          fill="url(#hF)"
          d="M0 0h.975v.044H0z"
          transform="matrix(1 0 0 -1 34.429 47.414)"
        />
      </G>
      <Mask
        id="hG"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.968 47.37h1.157v.044h-1.157v-.043Z" />
      </Mask>
      <G mask="url(#hG)">
        <Path
          fill="url(#hH)"
          d="M0 0h1.34v.044H0z"
          transform="matrix(1 0 0 -1 35.825 47.414)"
        />
      </G>
      <Mask
        id="hI"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.53 47.343h.873v.037h-.874v-.037Z" />
      </Mask>
      <G mask="url(#hI)">
        <Path
          fill="url(#hJ)"
          d="M0 0h.875v.044H0z"
          transform="matrix(1 0 0 -1 34.528 47.38)"
        />
      </G>
      <Mask
        id="hK"
        width={3}
        height={1}
        x={35}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M35.968 47.343h1.157v.037h-1.157v-.037Z" />
      </Mask>
      <G mask="url(#hK)">
        <Path
          fill="url(#hL)"
          d="M0 0h1.24v.044H0z"
          transform="matrix(1 0 0 -1 35.892 47.38)"
        />
      </G>
      <Mask
        id="hM"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 47.343h.395v.004h-.395v-.004Z" />
      </Mask>
      <G mask="url(#hM)">
        <Path
          fill="url(#hN)"
          d="M0 0h.775v.044H0z"
          transform="matrix(1 0 0 -1 34.595 47.348)"
        />
      </G>
      <Mask
        id="hO"
        width={2}
        height={1}
        x={36}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.012 47.343h1.113v.004h-1.113v-.004Z" />
      </Mask>
      <G mask="url(#hO)">
        <Path
          fill="url(#hP)"
          d="M0 0h1.207v.044H0z"
          transform="matrix(1 0 0 -1 35.925 47.348)"
        />
      </G>
      <Mask
        id="hQ"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 47.238h.395v.043h-.395v-.043Z" />
      </Mask>
      <G mask="url(#hQ)">
        <Path
          fill="url(#hR)"
          d="M0 0h.642v.044H0z"
          transform="matrix(1 0 0 -1 34.695 47.281)"
        />
      </G>
      <Mask
        id="hS"
        width={2}
        height={1}
        x={36}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.059 47.238h1.006v.043H36.06v-.043Z" />
      </Mask>
      <G mask="url(#hS)">
        <Path
          fill="url(#hT)"
          d="M0 0h1.008v.044H0z"
          transform="matrix(1 0 0 -1 36.058 47.281)"
        />
      </G>
      <Mask
        id="hU"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.783 47.204h.395v.045h-.395v-.045Z" />
      </Mask>
      <G mask="url(#hU)">
        <Path
          fill="url(#hV)"
          d="M0 0h.576v.044H0z"
          transform="matrix(1 0 0 -1 34.727 47.248)"
        />
      </G>
      <Mask
        id="hW"
        width={2}
        height={1}
        x={36}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.09 47.204h.975v.045h-.974v-.045Z" />
      </Mask>
      <G mask="url(#hW)">
        <Path
          fill="url(#hX)"
          d="M0 0h.975v.044H0z"
          transform="matrix(1 0 0 -1 36.09 47.248)"
        />
      </G>
      <Mask
        id="hY"
        width={2}
        height={1}
        x={34}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M34.794 47.186h.384v.029h-.384v-.03Z" />
      </Mask>
      <G mask="url(#hY)">
        <Path
          fill="url(#hZ)"
          d="M0 0h.476v.044H0z"
          transform="matrix(1 0 0 -1 34.795 47.215)"
        />
      </G>
      <Mask
        id="ia"
        width={1}
        height={1}
        x={36}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M36.197 47.186h.742v.029h-.742v-.03Z" />
      </Mask>
      <G mask="url(#ia)">
        <Path
          fill="url(#ib)"
          d="M0 0h.842v.044H0z"
          transform="matrix(1 0 0 -1 36.157 47.215)"
        />
      </G>
      <Mask
        id="ic"
        width={1}
        height={1}
        x={47}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.41 51.235h.288v.04h-.288v-.04Z" />
      </Mask>
      <G mask="url(#ic)">
        <Path
          fill="url(#id)"
          d="M0 0h.343v.077H0z"
          transform="matrix(1 0 0 -1 47.394 51.275)"
        />
      </G>
      <Mask
        id="ie"
        width={1}
        height={1}
        x={47}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.41 51.132h.395v.044h-.395v-.044Z" />
      </Mask>
      <G mask="url(#ie)">
        <Path
          fill="url(#if)"
          d="M0 0h.609v.044H0z"
          transform="matrix(1 0 0 -1 47.26 51.175)"
        />
      </G>
      <Mask
        id="ig"
        width={1}
        height={1}
        x={47}
        y={51}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.41 51.132h.395v.01h-.395v-.01Z" />
      </Mask>
      <G mask="url(#ig)">
        <Path
          fill="url(#ih)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 47.227 51.142)"
        />
      </G>
      <Mask
        id="ii"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.931h1.025v.043h-1.025v-.043Z" />
      </Mask>
      <G mask="url(#ii)">
        <Path
          fill="url(#ij)"
          d="M0 0h1.074v.044H0z"
          transform="matrix(1 0 0 -1 47.094 50.975)"
        />
      </G>
      <Mask
        id="ik"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.897H48.2v.045h-1.057v-.045Z" />
      </Mask>
      <G mask="url(#ik)">
        <Path
          fill="url(#il)"
          d="M0 0h1.14v.044H0z"
          transform="matrix(1 0 0 -1 47.094 50.942)"
        />
      </G>
      <Mask
        id="im"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.865H48.2v.043h-1.057v-.043Z" />
      </Mask>
      <G mask="url(#im)">
        <Path
          fill="url(#in)"
          d="M0 0h1.24v.044H0z"
          transform="matrix(1 0 0 -1 47.06 50.909)"
        />
      </G>
      <Mask
        id="io"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.863H48.2v.013h-1.057v-.013Z" />
      </Mask>
      <G mask="url(#io)">
        <Path
          fill="url(#ip)"
          d="M0 0h1.274v.044H0z"
          transform="matrix(1 0 0 -1 47.06 50.875)"
        />
      </G>
      <Mask
        id="iq"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.765h1.291v.043h-1.291v-.043Z" />
      </Mask>
      <G mask="url(#iq)">
        <Path
          fill="url(#ir)"
          d="M0 0h1.373v.044H0z"
          transform="matrix(1 0 0 -1 47.06 50.809)"
        />
      </G>
      <Mask
        id="is"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.737h1.297v.037h-1.297v-.037Z" />
      </Mask>
      <G mask="url(#is)">
        <Path
          fill="url(#it)"
          d="M0 0h1.44v.044H0z"
          transform="matrix(1 0 0 -1 47.06 50.775)"
        />
      </G>
      <Mask
        id="iu"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.737h1.424v.005h-1.424v-.005Z" />
      </Mask>
      <G mask="url(#iu)">
        <Path
          fill="url(#iv)"
          d="M0 0h1.506v.044H0z"
          transform="matrix(1 0 0 -1 47.06 50.742)"
        />
      </G>
      <Mask
        id="iw"
        width={1}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 50.53h.678v.045h-.678v-.045Z" />
      </Mask>
      <G mask="url(#iw)">
        <Path
          fill="url(#ix)"
          d="M0 0h.775v.044H0z"
          transform="matrix(1 0 0 -1 46.13 50.575)"
        />
      </G>
      <Mask
        id="iy"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.53h1.669v.045h-1.67v-.045Z" />
      </Mask>
      <G mask="url(#iy)">
        <Path
          fill="url(#iz)"
          d="M0 0h1.772v.044H0z"
          transform="matrix(1 0 0 -1 47.094 50.575)"
        />
      </G>
      <Mask
        id="iA"
        width={1}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 50.498h.712v.043h-.712v-.043Z" />
      </Mask>
      <G mask="url(#iA)">
        <Path
          fill="url(#iB)"
          d="M0 0h.842v.044H0z"
          transform="matrix(1 0 0 -1 46.097 50.541)"
        />
      </G>
      <Mask
        id="iC"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.498h1.669v.043h-1.67v-.043Z" />
      </Mask>
      <G mask="url(#iC)">
        <Path
          fill="url(#iD)"
          d="M0 0h1.806v.044H0z"
          transform="matrix(1 0 0 -1 47.094 50.541)"
        />
      </G>
      <Mask
        id="iE"
        width={1}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 50.493h.729v.016h-.73v-.016Z" />
      </Mask>
      <G mask="url(#iE)">
        <Path
          fill="url(#iF)"
          d="M0 0h.975v.044H0z"
          transform="matrix(1 0 0 -1 46.03 50.508)"
        />
      </G>
      <Mask
        id="iG"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 50.493h1.823v.016h-1.823v-.016Z" />
      </Mask>
      <G mask="url(#iG)">
        <Path
          fill="url(#iH)"
          d="M0 0h1.839v.044H0z"
          transform="matrix(1 0 0 -1 47.127 50.508)"
        />
      </G>
      <Mask
        id="iI"
        width={2}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.03 50.398h.986v.043h-.987v-.043Z" />
      </Mask>
      <G mask="url(#iI)">
        <Path
          fill="url(#iJ)"
          d="M0 0h1.107v.044H0z"
          transform="matrix(1 0 0 -1 45.997 50.441)"
        />
      </G>
      <Mask
        id="iK"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.161 50.398h1.828v.043h-1.828v-.043Z" />
      </Mask>
      <G mask="url(#iK)">
        <Path
          fill="url(#iL)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 47.161 50.441)"
        />
      </G>
      <Mask
        id="iM"
        width={2}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.03 50.364h.986v.043h-.987v-.043Z" />
      </Mask>
      <G mask="url(#iM)">
        <Path
          fill="url(#iN)"
          d="M0 0h1.207v.044H0z"
          transform="matrix(1 0 0 -1 45.964 50.408)"
        />
      </G>
      <Mask
        id="iO"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.194 50.364h1.794v.043h-1.794v-.043Z" />
      </Mask>
      <G mask="url(#iO)">
        <Path
          fill="url(#iP)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 47.194 50.408)"
        />
      </G>
      <Mask
        id="iQ"
        width={2}
        height={1}
        x={46}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.03 50.342h.986v.033h-.987v-.033Z" />
      </Mask>
      <G mask="url(#iQ)">
        <Path
          fill="url(#iR)"
          d="M0 0h1.24v.044H0z"
          transform="matrix(1 0 0 -1 45.964 50.375)"
        />
      </G>
      <Mask
        id="iS"
        width={2}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.41 50.342h1.579v.033H47.41v-.033Z" />
      </Mask>
      <G mask="url(#iS)">
        <Path
          fill="url(#iT)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 47.26 50.375)"
        />
      </G>
      <Mask
        id="iU"
        width={3}
        height={1}
        x={45}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M45.898 50.13h1.512v.045h-1.512v-.045Z" />
      </Mask>
      <G mask="url(#iU)">
        <Path
          fill="url(#iV)"
          d="M0 0h1.64v.044H0z"
          transform="matrix(1 0 0 -1 45.898 50.174)"
        />
      </G>
      <Mask
        id="iW"
        width={3}
        height={1}
        x={47}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.559 50.13h1.825v.045h-1.825v-.045Z" />
      </Mask>
      <G mask="url(#iW)">
        <Path
          fill="url(#iX)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 47.56 50.174)"
        />
      </G>
      <Mask
        id="iY"
        width={5}
        height={1}
        x={45}
        y={50}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M45.898 50.122h3.485v.019h-3.485v-.019Z" />
      </Mask>
      <G mask="url(#iY)">
        <Path
          fill="url(#iZ)"
          d="M0 0h3.667v.044H0z"
          transform="matrix(1 0 0 -1 45.898 50.141)"
        />
      </G>
      <Mask
        id="ja"
        width={3}
        height={2}
        x={45}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M45.898 49.997h1.8v.045h-1.8v-.045Z" />
      </Mask>
      <G mask="url(#ja)">
        <Path
          fill="url(#jb)"
          d="M0 0h1.839v.044H0z"
          transform="matrix(1 0 0 -1 45.898 50.041)"
        />
      </G>
      <Mask
        id="jc"
        width={3}
        height={2}
        x={47}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.805 49.997h1.891v.045h-1.891v-.045Z" />
      </Mask>
      <G mask="url(#jc)">
        <Path
          fill="url(#jd)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 47.759 50.041)"
        />
      </G>
      <Mask
        id="je"
        width={3}
        height={2}
        x={45}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M45.898 49.963h1.904v.045h-1.904v-.045Z" />
      </Mask>
      <G mask="url(#je)">
        <Path
          fill="url(#jf)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 45.898 50.008)"
        />
      </G>
      <Mask
        id="jg"
        width={3}
        height={2}
        x={47}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.884 49.963h1.856v.045h-1.856v-.045Z" />
      </Mask>
      <G mask="url(#jg)">
        <Path
          fill="url(#jh)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 47.825 50.008)"
        />
      </G>
      <Mask
        id="ji"
        width={5}
        height={1}
        x={45}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M45.898 49.948h3.841v.026H45.9v-.026Z" />
      </Mask>
      <G mask="url(#ji)">
        <Path
          fill="url(#jj)"
          d="M0 0h3.933v.044H0z"
          transform="matrix(1 0 0 -1 45.898 49.974)"
        />
      </G>
      <Mask
        id="jk"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.03 49.752h2.137v.022H46.03v-.022Z" />
      </Mask>
      <G mask="url(#jk)">
        <Path
          fill="url(#jl)"
          d="M0 0h2.204v.044H0z"
          transform="matrix(1 0 0 -1 45.964 49.774)"
        />
      </G>
      <Mask
        id="jm"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.255 49.752h1.854v.022h-1.854v-.022Z" />
      </Mask>
      <G mask="url(#jm)">
        <Path
          fill="url(#jn)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 48.191 49.774)"
        />
      </G>
      <Mask
        id="jo"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 49.63H48.2v.043h-1.973v-.043Z" />
      </Mask>
      <G mask="url(#jo)">
        <Path
          fill="url(#jp)"
          d="M0 0h2.27v.044H0z"
          transform="matrix(1 0 0 -1 46.063 49.674)"
        />
      </G>
      <Mask
        id="jq"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.44 49.63h1.733v.043H48.44v-.043Z" />
      </Mask>
      <G mask="url(#jq)">
        <Path
          fill="url(#jr)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 48.357 49.674)"
        />
      </G>
      <Mask
        id="js"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 49.596H48.4v.044h-2.174v-.044Z" />
      </Mask>
      <G mask="url(#js)">
        <Path
          fill="url(#jt)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 46.063 49.64)"
        />
      </G>
      <Mask
        id="ju"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.595 49.596h1.578v.044h-1.578v-.044Z" />
      </Mask>
      <G mask="url(#ju)">
        <Path
          fill="url(#jv)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 48.424 49.64)"
        />
      </G>
      <Mask
        id="jw"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 49.567h2.207v.04h-2.207v-.04Z" />
      </Mask>
      <G mask="url(#jw)">
        <Path
          fill="url(#jx)"
          d="M0 0h2.304v.044H0z"
          transform="matrix(1 0 0 -1 46.13 49.607)"
        />
      </G>
      <Mask
        id="jy"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.595 49.567h1.802v.04h-1.802v-.04Z" />
      </Mask>
      <G mask="url(#jy)">
        <Path
          fill="url(#jz)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 48.457 49.607)"
        />
      </G>
      <Mask
        id="jA"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.227 49.567h2.213v.006h-2.213v-.006Z" />
      </Mask>
      <G mask="url(#jA)">
        <Path
          fill="url(#jB)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 46.163 49.574)"
        />
      </G>
      <Mask
        id="jC"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.595 49.567h1.866v.006h-1.866v-.006Z" />
      </Mask>
      <G mask="url(#jC)">
        <Path
          fill="url(#jD)"
          d="M0 0h1.938v.044H0z"
          transform="matrix(1 0 0 -1 48.523 49.574)"
        />
      </G>
      <Mask
        id="jE"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 49.264h2.344v.043h-2.344v-.044Z" />
      </Mask>
      <G mask="url(#jE)">
        <Path
          fill="url(#jF)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 46.596 49.307)"
        />
      </G>
      <Mask
        id="jG"
        width={3}
        height={1}
        x={48}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.997 49.264h1.856v.043h-1.856v-.044Z" />
      </Mask>
      <G mask="url(#jG)">
        <Path
          fill="url(#jH)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 48.99 49.307)"
        />
      </G>
      <Mask
        id="jI"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.629 49.23h2.36v.044h-2.36v-.044Z" />
      </Mask>
      <G mask="url(#jI)">
        <Path
          fill="url(#jJ)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 46.629 49.274)"
        />
      </G>
      <Mask
        id="jK"
        width={2}
        height={1}
        x={49}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.023 49.23h1.83v.044h-1.83v-.044Z" />
      </Mask>
      <G mask="url(#jK)">
        <Path
          fill="url(#jL)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 49.022 49.274)"
        />
      </G>
      <Mask
        id="jM"
        width={3}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.77 49.197h2.218v.043h-2.217v-.043Z" />
      </Mask>
      <G mask="url(#jM)">
        <Path
          fill="url(#jN)"
          d="M0 0h2.37v.044H0z"
          transform="matrix(1 0 0 -1 46.695 49.24)"
        />
      </G>
      <Mask
        id="jO"
        width={2}
        height={1}
        x={49}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.088 49.197h1.874v.043h-1.874v-.043Z" />
      </Mask>
      <G mask="url(#jO)">
        <Path
          fill="url(#jP)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 49.089 49.24)"
        />
      </G>
      <Mask
        id="jQ"
        width={5}
        height={1}
        x={46}
        y={49}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.77 49.196h4.191v.01h-4.19v-.01Z" />
      </Mask>
      <G mask="url(#jQ)">
        <Path
          fill="url(#jR)"
          d="M0 0h4.299v.044H0z"
          transform="matrix(1 0 0 -1 46.762 49.207)"
        />
      </G>
      <Mask
        id="jS"
        width={4}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.897h2.762v.043h-2.762v-.043Z" />
      </Mask>
      <G mask="url(#jS)">
        <Path
          fill="url(#jT)"
          d="M0 0h3.035v.044H0z"
          transform="matrix(1 0 0 -1 46.496 48.94)"
        />
      </G>
      <Mask
        id="jU"
        width={3}
        height={1}
        x={49}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.555 48.897h1.802v.043h-1.802v-.043Z" />
      </Mask>
      <G mask="url(#jU)">
        <Path
          fill="url(#jV)"
          d="M0 0h1.905v.044H0z"
          transform="matrix(1 0 0 -1 49.554 48.94)"
        />
      </G>
      <Mask
        id="jW"
        width={4}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.863h2.932v.043H46.62v-.043Z" />
      </Mask>
      <G mask="url(#jW)">
        <Path
          fill="url(#jX)"
          d="M0 0h3.135v.044H0z"
          transform="matrix(1 0 0 -1 46.463 48.907)"
        />
      </G>
      <Mask
        id="jY"
        width={3}
        height={1}
        x={49}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.778 48.863h1.579v.043h-1.579v-.043Z" />
      </Mask>
      <G mask="url(#jY)">
        <Path
          fill="url(#jZ)"
          d="M0 0h1.872v.044H0z"
          transform="matrix(1 0 0 -1 49.62 48.907)"
        />
      </G>
      <Mask
        id="ka"
        width={6}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.829h4.735v.045h-4.735v-.045Z" />
      </Mask>
      <G mask="url(#ka)">
        <Path
          fill="url(#kb)"
          d="M0 0h5.063v.044H0z"
          transform="matrix(1 0 0 -1 46.463 48.873)"
        />
      </G>
      <Mask
        id="kc"
        width={4}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.826h3.075v.014h-3.075v-.014Z" />
      </Mask>
      <G mask="url(#kc)">
        <Path
          fill="url(#kd)"
          d="M0 0h3.235v.044H0z"
          transform="matrix(1 0 0 -1 46.463 48.84)"
        />
      </G>
      <Mask
        id="ke"
        width={3}
        height={1}
        x={49}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.778 48.826h1.579v.014h-1.579v-.014Z" />
      </Mask>
      <G mask="url(#ke)">
        <Path
          fill="url(#kf)"
          d="M0 0h1.806v.044H0z"
          transform="matrix(1 0 0 -1 49.72 48.84)"
        />
      </G>
      <Mask
        id="kg"
        width={2}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.764h.79v.01h-.79v-.01Z" />
      </Mask>
      <G mask="url(#kg)">
        <Path
          fill="url(#kh)"
          d="M0 0h1.008v.044H0z"
          transform="matrix(1 0 0 -1 46.43 48.773)"
        />
      </G>
      <Mask
        id="ki"
        width={3}
        height={1}
        x={47}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.513 48.764h2.227v.01h-2.227v-.01Z" />
      </Mask>
      <G mask="url(#ki)">
        <Path
          fill="url(#kj)"
          d="M0 0h2.337v.044H0z"
          transform="matrix(1 0 0 -1 47.46 48.773)"
        />
      </G>
      <Mask
        id="kk"
        width={3}
        height={1}
        x={49}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.82 48.764h1.738v.01h-1.739v-.01Z" />
      </Mask>
      <G mask="url(#kk)">
        <Path
          fill="url(#kl)"
          d="M0 0h1.739v.044H0z"
          transform="matrix(1 0 0 -1 49.82 48.773)"
        />
      </G>
      <Mask
        id="km"
        width={5}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.528h3.488v.045h-3.488v-.045Z" />
      </Mask>
      <G mask="url(#km)">
        <Path
          fill="url(#kn)"
          d="M0 0h3.634v.044H0z"
          transform="matrix(1 0 0 -1 46.496 48.573)"
        />
      </G>
      <Mask
        id="ko"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.173 48.528h1.42v.045h-1.42v-.045Z" />
      </Mask>
      <G mask="url(#ko)">
        <Path
          fill="url(#kp)"
          d="M0 0h1.44v.044H0z"
          transform="matrix(1 0 0 -1 50.152 48.573)"
        />
      </G>
      <Mask
        id="kq"
        width={5}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.496h3.488v.045h-3.488v-.045Z" />
      </Mask>
      <G mask="url(#kq)">
        <Path
          fill="url(#kr)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 46.496 48.54)"
        />
      </G>
      <Mask
        id="ks"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.296 48.496h1.296v.045h-1.296v-.045Z" />
      </Mask>
      <G mask="url(#ks)">
        <Path
          fill="url(#kt)"
          d="M0 0h1.373v.044H0z"
          transform="matrix(1 0 0 -1 50.219 48.54)"
        />
      </G>
      <Mask
        id="ku"
        width={5}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.462h3.551v.043h-3.55v-.043Z" />
      </Mask>
      <G mask="url(#ku)">
        <Path
          fill="url(#kv)"
          d="M0 0h3.667v.044H0z"
          transform="matrix(1 0 0 -1 46.563 48.506)"
        />
      </G>
      <Mask
        id="kw"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.296 48.462h1.296v.043h-1.296v-.043Z" />
      </Mask>
      <G mask="url(#kw)">
        <Path
          fill="url(#kx)"
          d="M0 0h1.34v.044H0z"
          transform="matrix(1 0 0 -1 50.252 48.506)"
        />
      </G>
      <Mask
        id="ky"
        width={5}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.621 48.454h3.551v.019h-3.55v-.019Z" />
      </Mask>
      <G mask="url(#ky)">
        <Path
          fill="url(#kz)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 46.596 48.473)"
        />
      </G>
      <Mask
        id="kA"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.317 48.454h1.275v.019h-1.275v-.019Z" />
      </Mask>
      <G mask="url(#kA)">
        <Path
          fill="url(#kB)"
          d="M0 0h1.274v.044H0z"
          transform="matrix(1 0 0 -1 50.318 48.473)"
        />
      </G>
      <Mask
        id="kC"
        width={5}
        height={1}
        x={46}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M46.77 48.37h3.69v.003h-3.69v-.003Z" />
      </Mask>
      <G mask="url(#kC)">
        <Path
          fill="url(#kD)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 46.728 48.373)"
        />
      </G>
      <Mask
        id="kE"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.567 48.37h.991v.003h-.99v-.003Z" />
      </Mask>
      <G mask="url(#kE)">
        <Path
          fill="url(#kF)"
          d="M0 0h1.074v.044H0z"
          transform="matrix(1 0 0 -1 50.484 48.373)"
        />
      </G>
      <Mask
        id="kG"
        width={4}
        height={1}
        x={47}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.016 48.161h3.551v.045h-3.551v-.045Z" />
      </Mask>
      <G mask="url(#kG)">
        <Path
          fill="url(#kH)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 46.994 48.206)"
        />
      </G>
      <Mask
        id="kI"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.751 48.161h.606v.045h-.606v-.045Z" />
      </Mask>
      <G mask="url(#kI)">
        <Path
          fill="url(#kJ)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 50.75 48.206)"
        />
      </G>
      <Mask
        id="kK"
        width={4}
        height={1}
        x={47}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 48.129h3.425v.043h-3.425v-.043Z" />
      </Mask>
      <G mask="url(#kK)">
        <Path
          fill="url(#kL)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 47.06 48.173)"
        />
      </G>
      <Mask
        id="kM"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.962 48.129h.394v.043h-.394v-.043Z" />
      </Mask>
      <G mask="url(#kM)">
        <Path
          fill="url(#kN)"
          d="M0 0h.609v.044H0z"
          transform="matrix(1 0 0 -1 50.784 48.173)"
        />
      </G>
      <Mask
        id="kO"
        width={4}
        height={1}
        x={47}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.143 48.095h3.685v.043h-3.685v-.043Z" />
      </Mask>
      <G mask="url(#kO)">
        <Path
          fill="url(#kP)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 47.094 48.14)"
        />
      </G>
      <Mask
        id="kQ"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.962 48.095h.394v.043h-.394v-.043Z" />
      </Mask>
      <G mask="url(#kQ)">
        <Path
          fill="url(#kR)"
          d="M0 0h.51v.044H0z"
          transform="matrix(1 0 0 -1 50.85 48.14)"
        />
      </G>
      <Mask
        id="kS"
        width={4}
        height={1}
        x={47}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.161 48.084h3.692v.022H47.16v-.022Z" />
      </Mask>
      <G mask="url(#kS)">
        <Path
          fill="url(#kT)"
          d="M0 0h3.734v.044H0z"
          transform="matrix(1 0 0 -1 47.161 48.106)"
        />
      </G>
      <Mask
        id="kU"
        width={2}
        height={1}
        x={50}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.962 48.084h.26v.022h-.26v-.022Z" />
      </Mask>
      <G mask="url(#kU)">
        <Path
          fill="url(#kV)"
          d="M0 0h.376v.044H0z"
          transform="matrix(1 0 0 -1 50.917 48.106)"
        />
      </G>
      <Mask
        id="kW"
        width={4}
        height={2}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.41 47.975h3.552v.03H47.41v-.03Z" />
      </Mask>
      <G mask="url(#kW)">
        <Path
          fill="url(#kX)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 47.327 48.006)"
        />
      </G>
      <Mask
        id="kY"
        width={5}
        height={1}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.805 47.762h3.52v.043h-3.52v-.043Z" />
      </Mask>
      <G mask="url(#kY)">
        <Path
          fill="url(#kZ)"
          d="M0 0h3.7v.044H0z"
          transform="matrix(1 0 0 -1 47.626 47.806)"
        />
      </G>
      <Mask
        id="la"
        width={5}
        height={1}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.805 47.728h3.52v.043h-3.52v-.043Z" />
      </Mask>
      <G mask="url(#la)">
        <Path
          fill="url(#lb)"
          d="M0 0h3.634v.044H0z"
          transform="matrix(1 0 0 -1 47.692 47.772)"
        />
      </G>
      <Mask
        id="lc"
        width={5}
        height={1}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.805 47.713h3.551v.026h-3.551v-.026Z" />
      </Mask>
      <G mask="url(#lc)">
        <Path
          fill="url(#ld)"
          d="M0 0h3.634v.044H0z"
          transform="matrix(1 0 0 -1 47.726 47.739)"
        />
      </G>
      <Mask
        id="le"
        width={5}
        height={1}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.892 47.594h3.465v.045h-3.465v-.045Z" />
      </Mask>
      <G mask="url(#le)">
        <Path
          fill="url(#lf)"
          d="M0 0h3.534v.044H0z"
          transform="matrix(1 0 0 -1 47.892 47.639)"
        />
      </G>
      <Mask
        id="lg"
        width={5}
        height={1}
        x={47}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M47.959 47.58h3.397v.025H47.96v-.025Z" />
      </Mask>
      <G mask="url(#lg)">
        <Path
          fill="url(#lh)"
          d="M0 0h3.467v.044H0z"
          transform="matrix(1 0 0 -1 47.958 47.605)"
        />
      </G>
      <Mask
        id="li"
        width={2}
        height={1}
        x={48}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.291 47.361h1.262v.045h-1.262v-.045Z" />
      </Mask>
      <G mask="url(#li)">
        <Path
          fill="url(#lj)"
          d="M0 0h1.307v.044H0z"
          transform="matrix(1 0 0 -1 48.291 47.405)"
        />
      </G>
      <Mask
        id="lk"
        width={3}
        height={1}
        x={49}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.778 47.361h1.579v.045h-1.579v-.045Z" />
      </Mask>
      <G mask="url(#lk)">
        <Path
          fill="url(#ll)"
          d="M0 0h1.839v.044H0z"
          transform="matrix(1 0 0 -1 49.653 47.405)"
        />
      </G>
      <Mask
        id="lm"
        width={2}
        height={1}
        x={48}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.323 47.343h1.23v.028h-1.23v-.028Z" />
      </Mask>
      <G mask="url(#lm)">
        <Path
          fill="url(#ln)"
          d="M0 0h1.307v.044H0z"
          transform="matrix(1 0 0 -1 48.324 47.372)"
        />
      </G>
      <Mask
        id="lo"
        width={3}
        height={1}
        x={49}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.778 47.343h1.579v.028h-1.579v-.028Z" />
      </Mask>
      <G mask="url(#lo)">
        <Path
          fill="url(#lp)"
          d="M0 0h1.739v.044H0z"
          transform="matrix(1 0 0 -1 49.72 47.372)"
        />
      </G>
      <Mask
        id="lq"
        width={2}
        height={1}
        x={48}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.595 47.229h1.07v.043h-1.07v-.043Z" />
      </Mask>
      <G mask="url(#lq)">
        <Path
          fill="url(#lr)"
          d="M0 0h1.174v.044H0z"
          transform="matrix(1 0 0 -1 48.49 47.272)"
        />
      </G>
      <Mask
        id="ls"
        width={3}
        height={1}
        x={49}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.925 47.229h1.432v.043h-1.432v-.043Z" />
      </Mask>
      <G mask="url(#ls)">
        <Path
          fill="url(#lt)"
          d="M0 0h1.573v.044H0z"
          transform="matrix(1 0 0 -1 49.887 47.272)"
        />
      </G>
      <Mask
        id="lu"
        width={2}
        height={1}
        x={48}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.627 47.194h1.037v.044h-1.037v-.045Z" />
      </Mask>
      <G mask="url(#lu)">
        <Path
          fill="url(#lv)"
          d="M0 0h1.107v.044H0z"
          transform="matrix(1 0 0 -1 48.557 47.238)"
        />
      </G>
      <Mask
        id="lw"
        width={3}
        height={1}
        x={49}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.925 47.194h1.432v.044h-1.432v-.045Z" />
      </Mask>
      <G mask="url(#lw)">
        <Path
          fill="url(#lx)"
          d="M0 0h1.54v.044H0z"
          transform="matrix(1 0 0 -1 49.919 47.238)"
        />
      </G>
      <Mask
        id="ly"
        width={2}
        height={1}
        x={48}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.627 47.186h1.037v.018h-1.037v-.018Z" />
      </Mask>
      <G mask="url(#ly)">
        <Path
          fill="url(#lz)"
          d="M0 0h1.074v.044H0z"
          transform="matrix(1 0 0 -1 48.59 47.205)"
        />
      </G>
      <Mask
        id="lA"
        width={2}
        height={1}
        x={50}
        y={47}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.173 47.186h1.184v.018h-1.184v-.018Z" />
      </Mask>
      <G mask="url(#lA)">
        <Path
          fill="url(#lB)"
          d="M0 0h1.473v.044H0z"
          transform="matrix(1 0 0 -1 49.986 47.205)"
        />
      </G>
      <Mask
        id="lC"
        width={2}
        height={2}
        x={48}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M48.997 46.971h.557v.033h-.557v-.033Z" />
      </Mask>
      <G mask="url(#lC)">
        <Path
          fill="url(#lD)"
          d="M0 0h.642v.044H0z"
          transform="matrix(1 0 0 -1 48.956 47.005)"
        />
      </G>
      <Mask
        id="lE"
        width={2}
        height={2}
        x={50}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.317 46.971h1.008v.033h-1.008v-.033Z" />
      </Mask>
      <G mask="url(#lE)">
        <Path
          fill="url(#lF)"
          d="M0 0h1.008v.044H0z"
          transform="matrix(1 0 0 -1 50.318 47.005)"
        />
      </G>
      <Mask
        id="lG"
        width={1}
        height={1}
        x={49}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M49.088 46.86h.296v.045h-.296v-.045Z" />
      </Mask>
      <G mask="url(#lG)">
        <Path
          fill="url(#lH)"
          d="M0 0h.41v.044H0z"
          transform="matrix(1 0 0 -1 49.089 46.905)"
        />
      </G>
      <Mask
        id="lI"
        width={2}
        height={1}
        x={50}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.567 46.86h.655v.045h-.655v-.045Z" />
      </Mask>
      <G mask="url(#lI)">
        <Path
          fill="url(#lJ)"
          d="M0 0h.775v.044H0z"
          transform="matrix(1 0 0 -1 50.451 46.905)"
        />
      </G>
      <Mask
        id="lK"
        width={2}
        height={1}
        x={50}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.567 46.827h.626v.044h-.626v-.045Z" />
      </Mask>
      <G mask="url(#lK)">
        <Path
          fill="url(#lL)"
          d="M0 0h.675v.044H0z"
          transform="matrix(1 0 0 -1 50.518 46.871)"
        />
      </G>
      <Mask
        id="lM"
        width={1}
        height={1}
        x={50}
        y={46}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M50.666 46.794h.296v.043h-.296v-.043Z" />
      </Mask>
      <G mask="url(#lM)">
        <Path
          fill="url(#lN)"
          d="M0 0h.542v.044H0z"
          transform="matrix(1 0 0 -1 50.585 46.838)"
        />
      </G>
      <Path
        fill="#F63"
        fillRule="evenodd"
        d="M31.03 63.49h5.113l-.652-5.316h-3.75l-.71 5.316Z"
        clipRule="evenodd"
      />
      <Path
        fill="#430068"
        d="M34.651 58.566v-1.007a.98.98 0 0 0-.29-.697.983.983 0 0 0-1.68.697v1.007h-.186v-1.007c0-.322.133-.615.344-.826a1.167 1.167 0 0 1 1.654 0c.21.211.343.504.343.826v1.007h-.185Z"
      />
      <Path
        fill="red"
        fillRule="evenodd"
        d="M41.298 59.335h5.01v4.152h-5.01v-4.152Z"
        clipRule="evenodd"
      />
      <Path
        fill="#BA0000"
        fillRule="evenodd"
        d="M41.245 59.1h5.116c.104 0 .19.085.19.192v.431a.19.19 0 0 1-.19.19h-5.116a.19.19 0 0 1-.191-.19v-.431c0-.107.086-.191.19-.191Z"
        clipRule="evenodd"
      />
      <Path
        fill="#FF9"
        fillRule="evenodd"
        d="M49.702 57.763h.999v1.278h-.999v-1.278Z"
        clipRule="evenodd"
      />
      <Path
        fill="#DC5800"
        fillRule="evenodd"
        d="M36.882 63.489h3.773V61.94h-3.773v1.548Z"
        clipRule="evenodd"
      />
      <Mask
        id="lO"
        width={1}
        height={1}
        x={65}
        y={61}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 61.242h.131v.003h-.13v-.003Z" />
      </Mask>
      <G mask="url(#lO)">
        <Path
          fill="url(#lP)"
          d="M0 0h.274v.076H0z"
          transform="matrix(1 0 0 -1 65.501 61.245)"
        />
      </G>
      <Mask
        id="lQ"
        width={1}
        height={1}
        x={65}
        y={61}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 61.135h.312v.043h-.312v-.043Z" />
      </Mask>
      <G mask="url(#lQ)">
        <Path
          fill="url(#lR)"
          d="M0 0h.439v.043H0z"
          transform="matrix(1 0 0 -1 65.435 61.179)"
        />
      </G>
      <Mask
        id="lS"
        width={1}
        height={1}
        x={65}
        y={61}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 61.103h.316v.043h-.315v-.043Z" />
      </Mask>
      <G mask="url(#lS)">
        <Path
          fill="url(#lT)"
          d="M0 0h.538v.043H0z"
          transform="matrix(1 0 0 -1 65.402 61.146)"
        />
      </G>
      <Mask
        id="lU"
        width={1}
        height={1}
        x={65}
        y={61}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 61.069h.395v.045h-.395v-.045Z" />
      </Mask>
      <G mask="url(#lU)">
        <Path
          fill="url(#lV)"
          d="M0 0h.604v.043H0z"
          transform="matrix(1 0 0 -1 65.37 61.113)"
        />
      </G>
      <Mask
        id="lW"
        width={1}
        height={1}
        x={65}
        y={61}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.335 61.056h.621v.025h-.621v-.025Z" />
      </Mask>
      <G mask="url(#lW)">
        <Path
          fill="url(#lX)"
          d="M0 0h.703v.043H0z"
          transform="matrix(1 0 0 -1 65.336 61.08)"
        />
      </G>
      <Mask
        id="lY"
        width={1}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 60.775h.178v.043h-.178v-.043Z" />
      </Mask>
      <G mask="url(#lY)">
        <Path
          fill="url(#lZ)"
          d="M0 0h.241v.043H0z"
          transform="matrix(1 0 0 -1 64.742 60.818)"
        />
      </G>
      <Mask
        id="ma"
        width={2}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 60.775h1.03v.043h-1.03v-.043Z" />
      </Mask>
      <G mask="url(#ma)">
        <Path
          fill="url(#mb)"
          d="M0 0h1.197v.043H0z"
          transform="matrix(1 0 0 -1 65.27 60.818)"
        />
      </G>
      <Mask
        id="mc"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 60.74h.278v.044h-.278v-.043Z" />
      </Mask>
      <G mask="url(#mc)">
        <Path
          fill="url(#md)"
          d="M0 0h.406v.043H0z"
          transform="matrix(1 0 0 -1 64.644 60.785)"
        />
      </G>
      <Mask
        id="me"
        width={2}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 60.74h1.03v.044h-1.03v-.043Z" />
      </Mask>
      <G mask="url(#me)">
        <Path
          fill="url(#mf)"
          d="M0 0h1.263v.043H0z"
          transform="matrix(1 0 0 -1 65.27 60.785)"
        />
      </G>
      <Mask
        id="mg"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 60.708h.344v.043h-.344v-.043Z" />
      </Mask>
      <G mask="url(#mg)">
        <Path
          fill="url(#mh)"
          d="M0 0h.505v.043H0z"
          transform="matrix(1 0 0 -1 64.611 60.752)"
        />
      </G>
      <Mask
        id="mi"
        width={2}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 60.708h1.244v.043h-1.244v-.043Z" />
      </Mask>
      <G mask="url(#mi)">
        <Path
          fill="url(#mj)"
          d="M0 0h1.296v.043H0z"
          transform="matrix(1 0 0 -1 65.27 60.752)"
        />
      </G>
      <Mask
        id="mk"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.58 60.687h.557v.032h-.557v-.032Z" />
      </Mask>
      <G mask="url(#mk)">
        <Path
          fill="url(#ml)"
          d="M0 0h.637v.043H0z"
          transform="matrix(1 0 0 -1 64.545 60.719)"
        />
      </G>
      <Mask
        id="mm"
        width={2}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.321 60.687h1.3v.032h-1.3v-.032Z" />
      </Mask>
      <G mask="url(#mm)">
        <Path
          fill="url(#mn)"
          d="M0 0h1.329v.043H0z"
          transform="matrix(1 0 0 -1 65.303 60.719)"
        />
      </G>
      <Mask
        id="mo"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.48 60.602h.687v.018h-.688v-.018Z" />
      </Mask>
      <G mask="url(#mo)">
        <Path
          fill="url(#mp)"
          d="M0 0h.867v.043H0z"
          transform="matrix(1 0 0 -1 64.48 60.62)"
        />
      </G>
      <Mask
        id="mq"
        width={2}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 60.602h1.184v.018h-1.184v-.018Z" />
      </Mask>
      <G mask="url(#mq)">
        <Path
          fill="url(#mr)"
          d="M0 0h1.428v.043H0z"
          transform="matrix(1 0 0 -1 65.37 60.62)"
        />
      </G>
      <Mask
        id="ms"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.38h1.148v.043h-1.148v-.043Z" />
      </Mask>
      <G mask="url(#ms)">
        <Path
          fill="url(#mt)"
          d="M0 0h1.23v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.423)"
        />
      </G>
      <Mask
        id="mu"
        width={3}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.692 60.38h1.402v.043h-1.402v-.043Z" />
      </Mask>
      <G mask="url(#mu)">
        <Path
          fill="url(#mv)"
          d="M0 0h1.428v.043H0z"
          transform="matrix(1 0 0 -1 65.666 60.423)"
        />
      </G>
      <Mask
        id="mw"
        width={4}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.347h2.727v.044h-2.727v-.044Z" />
      </Mask>
      <G mask="url(#mw)">
        <Path
          fill="url(#mx)"
          d="M0 0h2.746v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.39)"
        />
      </G>
      <Mask
        id="my"
        width={4}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.315h2.727v.042h-2.727v-.042Z" />
      </Mask>
      <G mask="url(#my)">
        <Path
          fill="url(#mz)"
          d="M0 0h2.779v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.358)"
        />
      </G>
      <Mask
        id="mA"
        width={4}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.315h2.727v.01h-2.727v-.01Z" />
      </Mask>
      <G mask="url(#mA)">
        <Path
          fill="url(#mB)"
          d="M0 0h2.878v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.325)"
        />
      </G>
      <Mask
        id="mC"
        width={2}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.215h1.464v.043h-1.464v-.043Z" />
      </Mask>
      <G mask="url(#mC)">
        <Path
          fill="url(#mD)"
          d="M0 0h1.527v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.259)"
        />
      </G>
      <Mask
        id="mE"
        width={3}
        height={1}
        x={65}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.963 60.215h1.4v.043h-1.4v-.043Z" />
      </Mask>
      <G mask="url(#mE)">
        <Path
          fill="url(#mF)"
          d="M0 0h1.428v.043H0z"
          transform="matrix(1 0 0 -1 65.962 60.259)"
        />
      </G>
      <Mask
        id="mG"
        width={4}
        height={1}
        x={64}
        y={60}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.413 60.207h3.043v.019h-3.043v-.019Z" />
      </Mask>
      <G mask="url(#mG)">
        <Path
          fill="url(#mH)"
          d="M0 0h3.043v.043H0z"
          transform="matrix(1 0 0 -1 64.413 60.226)"
        />
      </G>
      <Mask
        id="mI"
        width={4}
        height={2}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.58 59.985h2.955v.043H64.58v-.043Z" />
      </Mask>
      <G mask="url(#mI)">
        <Path
          fill="url(#mJ)"
          d="M0 0h3.174v.043H0z"
          transform="matrix(1 0 0 -1 64.545 60.029)"
        />
      </G>
      <Mask
        id="mK"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 59.953h2.961v.043h-2.96v-.043Z" />
      </Mask>
      <G mask="url(#mK)">
        <Path
          fill="url(#mL)"
          d="M0 0h3.207v.043H0z"
          transform="matrix(1 0 0 -1 64.578 59.996)"
        />
      </G>
      <Mask
        id="mM"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.772 59.945h2.961v.019h-2.96v-.019Z" />
      </Mask>
      <G mask="url(#mM)">
        <Path
          fill="url(#mN)"
          d="M0 0h3.207v.043H0z"
          transform="matrix(1 0 0 -1 64.611 59.963)"
        />
      </G>
      <Mask
        id="mO"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.775 59.822h3.143v.043h-3.143v-.043Z" />
      </Mask>
      <G mask="url(#mO)">
        <Path
          fill="url(#mP)"
          d="M0 0h3.207v.043H0z"
          transform="matrix(1 0 0 -1 64.775 59.865)"
        />
      </G>
      <Mask
        id="mQ"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.808 59.813h3.12v.018h-3.12v-.018Z" />
      </Mask>
      <G mask="url(#mQ)">
        <Path
          fill="url(#mR)"
          d="M0 0h3.24v.043H0z"
          transform="matrix(1 0 0 -1 64.809 59.832)"
        />
      </G>
      <Mask
        id="mS"
        width={2}
        height={1}
        x={65}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 59.59h1.578v.045h-1.578v-.044Z" />
      </Mask>
      <G mask="url(#mS)">
        <Path
          fill="url(#mT)"
          d="M0 0h1.856v.043H0z"
          transform="matrix(1 0 0 -1 65.04 59.635)"
        />
      </G>
      <Mask
        id="mU"
        width={3}
        height={1}
        x={66}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.99 59.59h1.3v.045h-1.3v-.044Z" />
      </Mask>
      <G mask="url(#mU)">
        <Path
          fill="url(#mV)"
          d="M0 0h1.428v.043H0z"
          transform="matrix(1 0 0 -1 66.918 59.635)"
        />
      </G>
      <Mask
        id="mW"
        width={5}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 59.574h3.374v.028H64.95v-.028Z" />
      </Mask>
      <G mask="url(#mW)">
        <Path
          fill="url(#mX)"
          d="M0 0h3.471v.043H0z"
          transform="matrix(1 0 0 -1 64.94 59.602)"
        />
      </G>
      <Mask
        id="mY"
        width={5}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.842 59.46h3.633v.043h-3.633v-.043Z" />
      </Mask>
      <G mask="url(#mY)">
        <Path
          fill="url(#mZ)"
          d="M0 0h3.702v.043H0z"
          transform="matrix(1 0 0 -1 64.842 59.503)"
        />
      </G>
      <Mask
        id="na"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.842 59.427h2.298v.043h-2.298v-.043Z" />
      </Mask>
      <G mask="url(#na)">
        <Path
          fill="url(#nb)"
          d="M0 0h2.318v.043H0z"
          transform="matrix(1 0 0 -1 64.842 59.47)"
        />
      </G>
      <Mask
        id="nc"
        width={2}
        height={1}
        x={67}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.182 59.427h1.395v.043h-1.395v-.043Z" />
      </Mask>
      <G mask="url(#nc)">
        <Path
          fill="url(#nd)"
          d="M0 0h1.395v.043H0z"
          transform="matrix(1 0 0 -1 67.182 59.47)"
        />
      </G>
      <Mask
        id="ne"
        width={5}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.808 59.418h3.8v.02h-3.8v-.02Z" />
      </Mask>
      <G mask="url(#ne)">
        <Path
          fill="url(#nf)"
          d="M0 0h3.8v.076H0z"
          transform="matrix(1 0 0 -1 64.809 59.438)"
        />
      </G>
      <Mask
        id="ng"
        width={5}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.842 59.204h3.8v.07h-3.8v-.07Z" />
      </Mask>
      <G mask="url(#ng)">
        <Path
          fill="url(#nh)"
          d="M0 0h3.8v.076H0z"
          transform="matrix(1 0 0 -1 64.842 59.273)"
        />
      </G>
      <Mask
        id="ni"
        width={4}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 59.204h2.585v.003H64.95v-.003Z" />
      </Mask>
      <G mask="url(#ni)">
        <Path
          fill="url(#nj)"
          d="M0 0h2.746v.043H0z"
          transform="matrix(1 0 0 -1 64.875 59.208)"
        />
      </G>
      <Mask
        id="nk"
        width={2}
        height={1}
        x={67}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.733 59.204h.91v.003h-.91v-.003Z" />
      </Mask>
      <G mask="url(#nk)">
        <Path
          fill="url(#nl)"
          d="M0 0h1v.043H0z"
          transform="matrix(1 0 0 -1 67.644 59.208)"
        />
      </G>
      <Mask
        id="nm"
        width={5}
        height={1}
        x={64}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M64.95 59.099h3.692v.043H64.95V59.1Z" />
      </Mask>
      <G mask="url(#nm)">
        <Path
          fill="url(#nn)"
          d="M0 0h3.702v.043H0z"
          transform="matrix(1 0 0 -1 64.94 59.142)"
        />
      </G>
      <Mask
        id="no"
        width={4}
        height={1}
        x={65}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 59.065h3.442v.045h-3.442v-.045Z" />
      </Mask>
      <G mask="url(#no)">
        <Path
          fill="url(#np)"
          d="M0 0h3.603v.043H0z"
          transform="matrix(1 0 0 -1 65.007 59.109)"
        />
      </G>
      <Mask
        id="nq"
        width={4}
        height={1}
        x={65}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 59.033h3.442v.043h-3.442v-.043Z" />
      </Mask>
      <G mask="url(#nq)">
        <Path
          fill="url(#nr)"
          d="M0 0h3.57v.043H0z"
          transform="matrix(1 0 0 -1 65.04 59.076)"
        />
      </G>
      <Mask
        id="ns"
        width={3}
        height={1}
        x={65}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.167 59.023h2.716v.02h-2.716v-.02Z" />
      </Mask>
      <G mask="url(#ns)">
        <Path
          fill="url(#nt)"
          d="M0 0h2.779v.043H0z"
          transform="matrix(1 0 0 -1 65.106 59.044)"
        />
      </G>
      <Mask
        id="nu"
        width={2}
        height={1}
        x={67}
        y={59}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.93 59.023h.68v.02h-.68v-.02Z" />
      </Mask>
      <G mask="url(#nu)">
        <Path
          fill="url(#nv)"
          d="M0 0h.703v.043H0z"
          transform="matrix(1 0 0 -1 67.907 59.044)"
        />
      </G>
      <Mask
        id="nw"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 58.832h2.542v.014h-2.542v-.014Z" />
      </Mask>
      <G mask="url(#nw)">
        <Path
          fill="url(#nx)"
          d="M0 0h2.779v.043H0z"
          transform="matrix(1 0 0 -1 65.37 58.846)"
        />
      </G>
      <Mask
        id="ny"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 58.737h2.718v.043h-2.717v-.043Z" />
      </Mask>
      <G mask="url(#ny)">
        <Path
          fill="url(#nz)"
          d="M0 0h2.812v.043H0z"
          transform="matrix(1 0 0 -1 65.468 58.78)"
        />
      </G>
      <Mask
        id="nA"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.561 58.705h2.729v.043H65.56v-.043Z" />
      </Mask>
      <G mask="url(#nA)">
        <Path
          fill="url(#nB)"
          d="M0 0h2.779v.043H0z"
          transform="matrix(1 0 0 -1 65.534 58.748)"
        />
      </G>
      <Mask
        id="nC"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.566 58.67h2.724v.045h-2.724v-.045Z" />
      </Mask>
      <G mask="url(#nC)">
        <Path
          fill="url(#nD)"
          d="M0 0h2.812v.043H0z"
          transform="matrix(1 0 0 -1 65.566 58.715)"
        />
      </G>
      <Mask
        id="nE"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.692 58.647h2.632v.036h-2.632v-.036Z" />
      </Mask>
      <G mask="url(#nE)">
        <Path
          fill="url(#nF)"
          d="M0 0h2.779v.043H0z"
          transform="matrix(1 0 0 -1 65.633 58.682)"
        />
      </G>
      <Mask
        id="nG"
        width={4}
        height={1}
        x={65}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M65.7 58.647h2.624v.002H65.7v-.002Z" />
      </Mask>
      <G mask="url(#nG)">
        <Path
          fill="url(#nH)"
          d="M0 0h2.746v.043H0z"
          transform="matrix(1 0 0 -1 65.7 58.649)"
        />
      </G>
      <Mask
        id="nI"
        width={2}
        height={1}
        x={66}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.127 58.342h.999v.043h-.999v-.043Z" />
      </Mask>
      <G mask="url(#nI)">
        <Path
          fill="url(#nJ)"
          d="M0 0h1v.043H0z"
          transform="matrix(1 0 0 -1 66.127 58.386)"
        />
      </G>
      <Mask
        id="nK"
        width={2}
        height={1}
        x={67}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.177 58.342h1.298v.043h-1.298v-.043Z" />
      </Mask>
      <G mask="url(#nK)">
        <Path
          fill="url(#nL)"
          d="M0 0h1.395v.043H0z"
          transform="matrix(1 0 0 -1 67.148 58.386)"
        />
      </G>
      <Mask
        id="nM"
        width={2}
        height={1}
        x={66}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 58.31h.79v.043h-.79v-.043Z" />
      </Mask>
      <G mask="url(#nM)">
        <Path
          fill="url(#nN)"
          d="M0 0h.966v.043H0z"
          transform="matrix(1 0 0 -1 66.193 58.353)"
        />
      </G>
      <Mask
        id="nO"
        width={2}
        height={1}
        x={67}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.182 58.31h1.395v.043h-1.395v-.043Z" />
      </Mask>
      <G mask="url(#nO)">
        <Path
          fill="url(#nP)"
          d="M0 0h1.395v.043H0z"
          transform="matrix(1 0 0 -1 67.182 58.353)"
        />
      </G>
      <Mask
        id="nQ"
        width={2}
        height={1}
        x={66}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 58.278h.79v.043h-.79v-.043Z" />
      </Mask>
      <G mask="url(#nQ)">
        <Path
          fill="url(#nR)"
          d="M0 0h.9v.043H0z"
          transform="matrix(1 0 0 -1 66.259 58.32)"
        />
      </G>
      <Mask
        id="nS"
        width={2}
        height={1}
        x={67}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.362 58.278h1.113v.043h-1.113v-.043Z" />
      </Mask>
      <G mask="url(#nS)">
        <Path
          fill="url(#nT)"
          d="M0 0h1.263v.043H0z"
          transform="matrix(1 0 0 -1 67.28 58.32)"
        />
      </G>
      <Mask
        id="nU"
        width={2}
        height={1}
        x={66}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.35 58.278h.79v.01h-.79v-.01Z" />
      </Mask>
      <G mask="url(#nU)">
        <Path
          fill="url(#nV)"
          d="M0 0h.9v.043H0z"
          transform="matrix(1 0 0 -1 66.292 58.288)"
        />
      </G>
      <Mask
        id="nW"
        width={2}
        height={1}
        x={67}
        y={58}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.535 58.278h.94v.01h-.94v-.01Z" />
      </Mask>
      <G mask="url(#nW)">
        <Path
          fill="url(#nX)"
          d="M0 0h1.197v.043H0z"
          transform="matrix(1 0 0 -1 67.347 58.288)"
        />
      </G>
      <Mask
        id="nY"
        width={2}
        height={2}
        x={66}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.806 57.982h.32v.043h-.32v-.043Z" />
      </Mask>
      <G mask="url(#nY)">
        <Path
          fill="url(#nZ)"
          d="M0 0h.406v.043H0z"
          transform="matrix(1 0 0 -1 66.72 58.025)"
        />
      </G>
      <Mask
        id="oa"
        width={2}
        height={2}
        x={67}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.93 57.982h.394v.043h-.394v-.043Z" />
      </Mask>
      <G mask="url(#oa)">
        <Path
          fill="url(#ob)"
          d="M0 0h.67v.043H0z"
          transform="matrix(1 0 0 -1 67.742 58.025)"
        />
      </G>
      <Mask
        id="oc"
        width={1}
        height={1}
        x={66}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.806 57.95h.185v.042h-.185v-.043Z" />
      </Mask>
      <G mask="url(#oc)">
        <Path
          fill="url(#od)"
          d="M0 0h.274v.043H0z"
          transform="matrix(1 0 0 -1 66.786 57.992)"
        />
      </G>
      <Mask
        id="oe"
        width={2}
        height={1}
        x={67}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.93 57.95h.36v.042h-.36v-.043Z" />
      </Mask>
      <G mask="url(#oe)">
        <Path
          fill="url(#of)"
          d="M0 0h.57v.043H0z"
          transform="matrix(1 0 0 -1 67.808 57.992)"
        />
      </G>
      <Mask
        id="og"
        width={1}
        height={1}
        x={66}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M66.852 57.915h.138v.043h-.138v-.043Z" />
      </Mask>
      <G mask="url(#og)">
        <Path
          fill="url(#oh)"
          d="M0 0h.142v.043H0z"
          transform="matrix(1 0 0 -1 66.852 57.96)"
        />
      </G>
      <Mask
        id="oi"
        width={2}
        height={1}
        x={67}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M67.93 57.915h.36v.043h-.36v-.043Z" />
      </Mask>
      <G mask="url(#oi)">
        <Path
          fill="url(#oj)"
          d="M0 0h.472v.043H0z"
          transform="matrix(1 0 0 -1 67.874 57.96)"
        />
      </G>
    </G>
    <Defs>
      <Pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ok" transform="scale(.125 .5)" />
      </Pattern>
      <Pattern
        id="e"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ol" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="g"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#om" transform="scale(.05882 1)" />
      </Pattern>
      <Pattern
        id="i"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#on" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="k"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oo" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="m"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#op" transform="scale(.0303 1)" />
      </Pattern>
      <Pattern
        id="o"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oq" transform="scale(.14286 1)" />
      </Pattern>
      <Pattern
        id="q"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#or" transform="scale(.02857 1)" />
      </Pattern>
      <Pattern
        id="s"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#os" transform="scale(.05263 1)" />
      </Pattern>
      <Pattern
        id="u"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ot" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="w"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ou" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="y"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ov" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="A"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ow" transform="scale(.01282 1)" />
      </Pattern>
      <Pattern
        id="C"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ox" transform="scale(.0125 1)" />
      </Pattern>
      <Pattern
        id="E"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oy" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="G"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oz" transform="scale(.01163 1)" />
      </Pattern>
      <Pattern
        id="I"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oA" transform="scale(.01064 .5)" />
      </Pattern>
      <Pattern
        id="K"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oB" transform="scale(.02 1)" />
      </Pattern>
      <Pattern
        id="M"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ov" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="O"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oC" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="Q"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oD" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="S"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oE" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="U"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oF" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="W"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oD" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="Y"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oG" transform="scale(.00962 1)" />
      </Pattern>
      <Pattern
        id="aa"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oH" transform="scale(.00935 1)" />
      </Pattern>
      <Pattern
        id="ac"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oI" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="ae"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oJ" transform="scale(.0087 .5)" />
      </Pattern>
      <Pattern
        id="ag"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oK" transform="scale(.00877 .5)" />
      </Pattern>
      <Pattern
        id="ai"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oL" transform="scale(.0122 1)" />
      </Pattern>
      <Pattern
        id="ak"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#on" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="am"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oM" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="ao"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oN" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="aq"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oO" transform="scale(.01 1)" />
      </Pattern>
      <Pattern
        id="as"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oP" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="au"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oQ" transform="scale(.01205 1)" />
      </Pattern>
      <Pattern
        id="aw"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oR" transform="scale(.33333 1)" />
      </Pattern>
      <Pattern
        id="ay"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oQ" transform="scale(.01205 1)" />
      </Pattern>
      <Pattern
        id="aA"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oS" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="aC"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oT" transform="scale(.01266 1)" />
      </Pattern>
      <Pattern
        id="aE"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oU" transform="scale(.01299 1)" />
      </Pattern>
      <Pattern
        id="aG"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oV" transform="scale(.01316 1)" />
      </Pattern>
      <Pattern
        id="aI"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oW" transform="scale(.01351 1)" />
      </Pattern>
      <Pattern
        id="aK"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oX" transform="scale(.03226 1)" />
      </Pattern>
      <Pattern
        id="aM"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oY" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="aO"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oZ" transform="scale(.05263 1)" />
      </Pattern>
      <Pattern
        id="aQ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pa" transform="scale(.03704 1)" />
      </Pattern>
      <Pattern
        id="aS"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pb" transform="scale(.0625 1)" />
      </Pattern>
      <Pattern
        id="aU"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pc" transform="scale(.04 1)" />
      </Pattern>
      <Pattern
        id="aW"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pd" transform="scale(.07692 1)" />
      </Pattern>
      <Pattern
        id="aY"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pe" transform="scale(.04545 1)" />
      </Pattern>
      <Pattern
        id="ba"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pf" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="bc"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pg" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="be"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ph" transform="scale(.25 1)" />
      </Pattern>
      <Pattern
        id="bg"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pi" transform="scale(.07143 1)" />
      </Pattern>
      <Pattern
        id="bi"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pj" transform="scale(.0625 1)" />
      </Pattern>
      <Pattern
        id="bk"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pk" transform="scale(.04167 1)" />
      </Pattern>
      <Pattern
        id="bm"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pl" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="bo"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pm" transform="scale(.03571 1)" />
      </Pattern>
      <Pattern
        id="bq"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pn" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="bs"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#po" transform="scale(.05882 1)" />
      </Pattern>
      <Pattern
        id="bu"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pp" transform="scale(.02273 1)" />
      </Pattern>
      <Pattern
        id="bw"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pq" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="by"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pr" transform="scale(.02222 1)" />
      </Pattern>
      <Pattern
        id="bA"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ps" transform="scale(.04348 1)" />
      </Pattern>
      <Pattern
        id="bC"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pt" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="bE"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pl" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="bG"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pu" transform="scale(.02128 1)" />
      </Pattern>
      <Pattern
        id="bI"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pv" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="bK"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pw" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="bM"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#px" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="bO"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#py" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="bQ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pz" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="bS"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pw" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="bU"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pA" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="bW"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pt" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="bY"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pw" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="ca"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pB" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="cc"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pw" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="ce"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pC" transform="scale(.00935 1)" />
      </Pattern>
      <Pattern
        id="cg"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pD" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="ci"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#py" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="ck"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pE" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="cm"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pF" transform="scale(.00926 1)" />
      </Pattern>
      <Pattern
        id="co"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pG" transform="scale(.01667 1)" />
      </Pattern>
      <Pattern
        id="cq"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pH" transform="scale(.02083 1)" />
      </Pattern>
      <Pattern
        id="cs"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pE" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="cu"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pI" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="cw"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pJ" transform="scale(.0145 1)" />
      </Pattern>
      <Pattern
        id="cy"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pH" transform="scale(.02083 1)" />
      </Pattern>
      <Pattern
        id="cA"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pK" transform="scale(.00775 .5)" />
      </Pattern>
      <Pattern
        id="cC"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pL" transform="scale(.01163 1)" />
      </Pattern>
      <Pattern
        id="cE"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pM" transform="scale(.0238 1)" />
      </Pattern>
      <Pattern
        id="cG"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pN" transform="scale(.0077 1)" />
      </Pattern>
      <Pattern
        id="cI"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pO" transform="scale(.0077 1)" />
      </Pattern>
      <Pattern
        id="cK"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pP" transform="scale(.00775 1)" />
      </Pattern>
      <Pattern
        id="cM"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pQ" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="cO"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pR" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="cQ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pS" transform="scale(.00833 1)" />
      </Pattern>
      <Pattern
        id="cS"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pQ" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="cU"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pT" transform="scale(.04545 1)" />
      </Pattern>
      <Pattern
        id="cW"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pU" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="cY"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pQ" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="da"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pV" transform="scale(.07143 1)" />
      </Pattern>
      <Pattern
        id="dc"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pW" transform="scale(.01053 1)" />
      </Pattern>
      <Pattern
        id="de"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pX" transform="scale(.11111 1)" />
      </Pattern>
      <Pattern
        id="dg"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pQ" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="di"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pY" transform="scale(.01075 1)" />
      </Pattern>
      <Pattern
        id="dk"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pZ" transform="scale(.01087 1)" />
      </Pattern>
      <Pattern
        id="dm"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qa" transform="scale(.01087 1)" />
      </Pattern>
      <Pattern
        id="do"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qb" transform="scale(.01111 1)" />
      </Pattern>
      <Pattern
        id="dq"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qc" transform="scale(.01124 1)" />
      </Pattern>
      <Pattern
        id="ds"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qd" transform="scale(.02941 1)" />
      </Pattern>
      <Pattern
        id="du"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pr" transform="scale(.02222 1)" />
      </Pattern>
      <Pattern
        id="dw"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qe" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="dy"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qf" transform="scale(.0238 1)" />
      </Pattern>
      <Pattern
        id="dA"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qg" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="dC"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qh" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="dE"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qi" transform="scale(.03571 1)" />
      </Pattern>
      <Pattern
        id="dG"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qj" transform="scale(.02564 1)" />
      </Pattern>
      <Pattern
        id="dI"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qk" transform="scale(.03704 1)" />
      </Pattern>
      <Pattern
        id="dK"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ql" transform="scale(.02778 1)" />
      </Pattern>
      <Pattern
        id="dM"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qm" transform="scale(.04 1)" />
      </Pattern>
      <Pattern
        id="dO"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qn" transform="scale(.02857 1)" />
      </Pattern>
      <Pattern
        id="dQ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qo" transform="scale(.07143 1)" />
      </Pattern>
      <Pattern
        id="dS"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qp" transform="scale(.04167 1)" />
      </Pattern>
      <Pattern
        id="dU"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qq" transform="scale(.5 1)" />
      </Pattern>
      <Pattern
        id="dW"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qr" transform="scale(.06667 1)" />
      </Pattern>
      <Pattern
        id="ej"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qs" transform="scale(.1 .5)" />
      </Pattern>
      <Pattern
        id="el"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pR" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="en"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qt" transform="scale(.03571 1)" />
      </Pattern>
      <Pattern
        id="ep"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qu" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="er"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qv" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="et"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qw" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="ev"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qx" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="ex"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qy" transform="scale(.02083 1)" />
      </Pattern>
      <Pattern
        id="ez"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pj" transform="scale(.0625 1)" />
      </Pattern>
      <Pattern
        id="eB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#py" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="eD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pq" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="eF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qz" transform="scale(.01923 1)" />
      </Pattern>
      <Pattern
        id="eH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qA" transform="scale(.03448 1)" />
      </Pattern>
      <Pattern
        id="eJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qB" transform="scale(.01818 1)" />
      </Pattern>
      <Pattern
        id="eL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pn" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="eN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qC" transform="scale(.01786 1)" />
      </Pattern>
      <Pattern
        id="eP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qD" transform="scale(.02273 1)" />
      </Pattern>
      <Pattern
        id="eR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="eT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qF" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="eV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qG" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="eX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qH" transform="scale(.0091 1)" />
      </Pattern>
      <Pattern
        id="eZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qI" transform="scale(.01923 1)" />
      </Pattern>
      <Pattern
        id="fb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qJ" transform="scale(.01852 1)" />
      </Pattern>
      <Pattern
        id="ff"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qG" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qK" transform="scale(.01613 1)" />
      </Pattern>
      <Pattern
        id="fj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qL" transform="scale(.01563 1)" />
      </Pattern>
      <Pattern
        id="fn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qM" transform="scale(.01515 1)" />
      </Pattern>
      <Pattern
        id="fr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="ft"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qN" transform="scale(.01493 1)" />
      </Pattern>
      <Pattern
        id="fv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qG" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qO" transform="scale(.01493 1)" />
      </Pattern>
      <Pattern
        id="fz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qP" transform="scale(.0147 1)" />
      </Pattern>
      <Pattern
        id="fD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qQ" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="fH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qG" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="fJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qR" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="fL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qS" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="fN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qQ" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="fP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qT" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="fR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qU" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="fT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qT" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="fV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qR" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="fX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qS" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="fZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qV" transform="scale(.01163 .5)" />
      </Pattern>
      <Pattern
        id="gb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qW" transform="scale(.01754 .5)" />
      </Pattern>
      <Pattern
        id="gd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qX" transform="scale(.01124 1)" />
      </Pattern>
      <Pattern
        id="gf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qY" transform="scale(.01786 1)" />
      </Pattern>
      <Pattern
        id="gh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qZ" transform="scale(.01099 1)" />
      </Pattern>
      <Pattern
        id="gj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qT" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="gl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ra" transform="scale(.00943 1)" />
      </Pattern>
      <Pattern
        id="gn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qy" transform="scale(.02083 1)" />
      </Pattern>
      <Pattern
        id="gp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rb" transform="scale(.00935 1)" />
      </Pattern>
      <Pattern
        id="gr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qF" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="gt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rc" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="gv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rd" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="gx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#re" transform="scale(.02222 1)" />
      </Pattern>
      <Pattern
        id="gz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rf" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="gB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rg" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="gD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rh" transform="scale(.0091 1)" />
      </Pattern>
      <Pattern
        id="gF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ri" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="gH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="gJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rk" transform="scale(.03571 1)" />
      </Pattern>
      <Pattern
        id="gL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rl" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="gN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rm" transform="scale(.0103 1)" />
      </Pattern>
      <Pattern
        id="gP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="gR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rn" transform="scale(.04167 1)" />
      </Pattern>
      <Pattern
        id="gT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="gV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ro" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="gX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="gZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rp" transform="scale(.0909 1)" />
      </Pattern>
      <Pattern
        id="hb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="hd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="hf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rq" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="hh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rr" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="hj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rs" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="hl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rt" transform="scale(.00926 1)" />
      </Pattern>
      <Pattern
        id="hn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ru" transform="scale(.0098 1)" />
      </Pattern>
      <Pattern
        id="hp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#px" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="hr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qE" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="ht"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#px" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="hv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qT" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="hx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rv" transform="scale(.02564 1)" />
      </Pattern>
      <Pattern
        id="hz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qz" transform="scale(.01923 1)" />
      </Pattern>
      <Pattern
        id="hB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rw" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="hD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rx" transform="scale(.02 1)" />
      </Pattern>
      <Pattern
        id="hF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ry" transform="scale(.03448 1)" />
      </Pattern>
      <Pattern
        id="hH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rz" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="hJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rA" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="hL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rB" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="hN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rC" transform="scale(.04348 1)" />
      </Pattern>
      <Pattern
        id="hP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rD" transform="scale(.02778 1)" />
      </Pattern>
      <Pattern
        id="hR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rE" transform="scale(.05263 1)" />
      </Pattern>
      <Pattern
        id="hT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rF" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="hV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rG" transform="scale(.05882 1)" />
      </Pattern>
      <Pattern
        id="hX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rH" transform="scale(.03448 1)" />
      </Pattern>
      <Pattern
        id="hZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rI" transform="scale(.07143 1)" />
      </Pattern>
      <Pattern
        id="ib"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rJ" transform="scale(.04 1)" />
      </Pattern>
      <Pattern
        id="id"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rK" transform="scale(.1 .5)" />
      </Pattern>
      <Pattern
        id="if"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rL" transform="scale(.05556 1)" />
      </Pattern>
      <Pattern
        id="ih"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pq" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="ij"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qv" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="il"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rM" transform="scale(.02941 1)" />
      </Pattern>
      <Pattern
        id="in"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rN" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="ip"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pv" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="ir"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rO" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="it"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rP" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="iv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rQ" transform="scale(.02222 1)" />
      </Pattern>
      <Pattern
        id="ix"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ps" transform="scale(.04348 1)" />
      </Pattern>
      <Pattern
        id="iz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rR" transform="scale(.01887 1)" />
      </Pattern>
      <Pattern
        id="iB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rS" transform="scale(.04 1)" />
      </Pattern>
      <Pattern
        id="iD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rT" transform="scale(.01852 1)" />
      </Pattern>
      <Pattern
        id="iF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rU" transform="scale(.03448 1)" />
      </Pattern>
      <Pattern
        id="iH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rV" transform="scale(.01818 1)" />
      </Pattern>
      <Pattern
        id="iJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rW" transform="scale(.0303 1)" />
      </Pattern>
      <Pattern
        id="iL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rX" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="iN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rY" transform="scale(.02778 1)" />
      </Pattern>
      <Pattern
        id="iP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rZ" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="iR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rc" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="iT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sa" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="iV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#py" transform="scale(.0204 1)" />
      </Pattern>
      <Pattern
        id="iX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sb" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="iZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sc" transform="scale(.0091 1)" />
      </Pattern>
      <Pattern
        id="jb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sd" transform="scale(.01818 1)" />
      </Pattern>
      <Pattern
        id="jd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#se" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sa" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="jh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#se" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sf" transform="scale(.00847 1)" />
      </Pattern>
      <Pattern
        id="jl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sg" transform="scale(.01515 1)" />
      </Pattern>
      <Pattern
        id="jn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#se" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sh" transform="scale(.0147 1)" />
      </Pattern>
      <Pattern
        id="jr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#se" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#si" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="jv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sj" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sk" transform="scale(.0145 1)" />
      </Pattern>
      <Pattern
        id="jz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#se" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#si" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="jD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sb" transform="scale(.01724 1)" />
      </Pattern>
      <Pattern
        id="jF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sl" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="jH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sm" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="jJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sn" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="jL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sa" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="jN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sn" transform="scale(.01408 1)" />
      </Pattern>
      <Pattern
        id="jP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sa" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="jR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#so" transform="scale(.00775 1)" />
      </Pattern>
      <Pattern
        id="jT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qZ" transform="scale(.01099 1)" />
      </Pattern>
      <Pattern
        id="jV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sa" transform="scale(.01754 1)" />
      </Pattern>
      <Pattern
        id="jX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pA" transform="scale(.01064 1)" />
      </Pattern>
      <Pattern
        id="jZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sp" transform="scale(.01786 1)" />
      </Pattern>
      <Pattern
        id="kb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sq" transform="scale(.00658 1)" />
      </Pattern>
      <Pattern
        id="kd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sr" transform="scale(.0103 1)" />
      </Pattern>
      <Pattern
        id="kf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rT" transform="scale(.01852 1)" />
      </Pattern>
      <Pattern
        id="kh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ss" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="kj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#st" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="kl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#su" transform="scale(.01923 1)" />
      </Pattern>
      <Pattern
        id="kn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rs" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="kp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pz" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="kr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sv" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="kt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rO" transform="scale(.02439 1)" />
      </Pattern>
      <Pattern
        id="kv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sw" transform="scale(.0091 1)" />
      </Pattern>
      <Pattern
        id="kx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rl" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="kz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sx" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="kB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qw" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="kD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sy" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="kF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#qv" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="kH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sy" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="kJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pq" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="kL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rq" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="kN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sz" transform="scale(.05556 1)" />
      </Pattern>
      <Pattern
        id="kP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sy" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="kR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sA" transform="scale(.06667 1)" />
      </Pattern>
      <Pattern
        id="kT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rj" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="kV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sB" transform="scale(.0909 1)" />
      </Pattern>
      <Pattern
        id="kX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rq" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="kZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sv" transform="scale(.009 1)" />
      </Pattern>
      <Pattern
        id="lb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#rs" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="ld"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sC" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="lf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sD" transform="scale(.00943 1)" />
      </Pattern>
      <Pattern
        id="lh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sE" transform="scale(.00962 1)" />
      </Pattern>
      <Pattern
        id="lj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sF" transform="scale(.02564 1)" />
      </Pattern>
      <Pattern
        id="ll"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sG" transform="scale(.01818 1)" />
      </Pattern>
      <Pattern
        id="ln"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sH" transform="scale(.02564 1)" />
      </Pattern>
      <Pattern
        id="lp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#su" transform="scale(.01923 1)" />
      </Pattern>
      <Pattern
        id="lr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sI" transform="scale(.02857 1)" />
      </Pattern>
      <Pattern
        id="lt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sJ" transform="scale(.02128 1)" />
      </Pattern>
      <Pattern
        id="lv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sK" transform="scale(.0303 1)" />
      </Pattern>
      <Pattern
        id="lx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pt" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="lz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sL" transform="scale(.03125 1)" />
      </Pattern>
      <Pattern
        id="lB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sM" transform="scale(.02273 1)" />
      </Pattern>
      <Pattern
        id="lD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sN" transform="scale(.05263 1)" />
      </Pattern>
      <Pattern
        id="lF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#pn" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="lH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sO" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="lJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sP" transform="scale(.04348 1)" />
      </Pattern>
      <Pattern
        id="lL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sQ" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="lN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sR" transform="scale(.0625 1)" />
      </Pattern>
      <Pattern
        id="lP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sS" transform="scale(.125 .5)" />
      </Pattern>
      <Pattern
        id="lR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sT" transform="scale(.07692 1)" />
      </Pattern>
      <Pattern
        id="lT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sU" transform="scale(.0625 1)" />
      </Pattern>
      <Pattern
        id="lV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sV" transform="scale(.05556 1)" />
      </Pattern>
      <Pattern
        id="lX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sW" transform="scale(.04762 1)" />
      </Pattern>
      <Pattern
        id="lZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sX" transform="scale(.14286 1)" />
      </Pattern>
      <Pattern
        id="mb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sY" transform="scale(.02778 1)" />
      </Pattern>
      <Pattern
        id="md"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ol" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="mf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#sZ" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="mh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ta" transform="scale(.06667 1)" />
      </Pattern>
      <Pattern
        id="mj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tb" transform="scale(.02564 1)" />
      </Pattern>
      <Pattern
        id="ml"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#os" transform="scale(.05263 1)" />
      </Pattern>
      <Pattern
        id="mn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tc" transform="scale(.025 1)" />
      </Pattern>
      <Pattern
        id="mp"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#td" transform="scale(.03846 1)" />
      </Pattern>
      <Pattern
        id="mr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#te" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="mt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tf" transform="scale(.02703 1)" />
      </Pattern>
      <Pattern
        id="mv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ov" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="mx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tg" transform="scale(.01205 1)" />
      </Pattern>
      <Pattern
        id="mz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#th" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="mB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ti" transform="scale(.0115 1)" />
      </Pattern>
      <Pattern
        id="mD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tj" transform="scale(.02174 1)" />
      </Pattern>
      <Pattern
        id="mF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ov" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="mH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tk" transform="scale(.01087 1)" />
      </Pattern>
      <Pattern
        id="mJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oF" transform="scale(.01042 1)" />
      </Pattern>
      <Pattern
        id="mL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tl" transform="scale(.0103 1)" />
      </Pattern>
      <Pattern
        id="mN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tl" transform="scale(.0103 1)" />
      </Pattern>
      <Pattern
        id="mP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tm" transform="scale(.0103 1)" />
      </Pattern>
      <Pattern
        id="mR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tn" transform="scale(.0102 1)" />
      </Pattern>
      <Pattern
        id="mT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#to" transform="scale(.01786 1)" />
      </Pattern>
      <Pattern
        id="mV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ov" transform="scale(.02326 1)" />
      </Pattern>
      <Pattern
        id="mX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tp" transform="scale(.00952 1)" />
      </Pattern>
      <Pattern
        id="mZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oM" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="nb"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tq" transform="scale(.01429 1)" />
      </Pattern>
      <Pattern
        id="nd"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tr" transform="scale(.0238 1)" />
      </Pattern>
      <Pattern
        id="nf"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ts" transform="scale(.0087 .5)" />
      </Pattern>
      <Pattern
        id="nh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tt" transform="scale(.0087 .5)" />
      </Pattern>
      <Pattern
        id="nj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tu" transform="scale(.01205 1)" />
      </Pattern>
      <Pattern
        id="nl"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#on" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="nn"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tv" transform="scale(.00893 1)" />
      </Pattern>
      <Pattern
        id="np"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tw" transform="scale(.00917 1)" />
      </Pattern>
      <Pattern
        id="nr"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tx" transform="scale(.00926 1)" />
      </Pattern>
      <Pattern
        id="nt"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#oS" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="nv"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ty" transform="scale(.04762 1)" />
      </Pattern>
      <Pattern
        id="nx"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tz" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="nz"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tA" transform="scale(.01176 1)" />
      </Pattern>
      <Pattern
        id="nB"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tB" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="nD"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tA" transform="scale(.01176 1)" />
      </Pattern>
      <Pattern
        id="nF"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tz" transform="scale(.0119 1)" />
      </Pattern>
      <Pattern
        id="nH"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tC" transform="scale(.01205 1)" />
      </Pattern>
      <Pattern
        id="nJ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tD" transform="scale(.03333 1)" />
      </Pattern>
      <Pattern
        id="nL"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tE" transform="scale(.0238 1)" />
      </Pattern>
      <Pattern
        id="nN"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tF" transform="scale(.03448 1)" />
      </Pattern>
      <Pattern
        id="nP"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tG" transform="scale(.0238 1)" />
      </Pattern>
      <Pattern
        id="nR"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tH" transform="scale(.03704 1)" />
      </Pattern>
      <Pattern
        id="nT"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tI" transform="scale(.02632 1)" />
      </Pattern>
      <Pattern
        id="nV"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tJ" transform="scale(.03704 1)" />
      </Pattern>
      <Pattern
        id="nX"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tK" transform="scale(.02778 1)" />
      </Pattern>
      <Pattern
        id="nZ"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tL" transform="scale(.08333 1)" />
      </Pattern>
      <Pattern
        id="ob"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tM" transform="scale(.05 1)" />
      </Pattern>
      <Pattern
        id="od"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tN" transform="scale(.125 1)" />
      </Pattern>
      <Pattern
        id="of"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tO" transform="scale(.05882 1)" />
      </Pattern>
      <Pattern
        id="oh"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#ph" transform="scale(.25 1)" />
      </Pattern>
      <Pattern
        id="oj"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#tP" transform="scale(.07143 1)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AzbAwsDAIM7JgSkBAH0aArVuvlwPAAAAAElFTkSuQmCC"
        id="ok"
        width={8}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAIAAABlidhuAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA14AAF2hArF6i3jsAAAAAElFTkSuQmCC"
        id="ol"
        width={12}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAABCAIAAAC32dI2AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHAykAAIYAArF6q5+GAAAAAElFTkSuQmCC"
        id="om"
        width={17}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49A20AAO9vArG9/3y/AAAAAElFTkSuQmCC"
        id="on"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAABCAIAAAAw6DswAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49Ay0BAP+VArHa4nv6AAAAAElFTkSuQmCC"
        id="oo"
        width={32}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAABCAIAAADfKlAOAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49A40BAAe3ArHlUgRSAAAAAElFTkSuQmCC"
        id="op"
        width={33}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAABCAIAAACdaSOZAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHAxIAADTKArFBj4t4AAAAAElFTkSuQmCC"
        id="oq"
        width={7}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAABCAIAAADb34AzAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49A10AABfdArGQlM3bAAAAAElFTkSuQmCC"
        id="or"
        width={35}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAABCAIAAACzLAILAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA+kAAJYmArHab23AAAAAAElFTkSuQmCC"
        id="os"
        width={19}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAIAAAAjP3vEAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWO8+P49A93By+8/AEXdBYmKRc1jAAAAAElFTkSuQmCC"
        id="ot"
        width={40}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAABCAIAAAAw6DswAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA80AAP8dArGPjcK3AAAAAElFTkSuQmCC"
        id="ou"
        width={32}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAABCAIAAADICMDHAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49w4ACAFh1ArF58g3RAAAAAElFTkSuQmCC"
        id="ov"
        width={43}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAABCAIAAAD/xg/zAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQImWPc9ey5OCcHA43By+8/6GALfgcAAADsCIldihb1AAAAAElFTkSuQmCC"
        id="ow"
        width={78}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAABCAIAAADGob6oAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWO8+P49w4gBL7//AACI5AWJHpL/IgAAAABJRU5ErkJggg=="
        id="ox"
        width={80}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAABCAIAAADPSh7SAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49w0gFAKOPArFyMYslAAAAAElFTkSuQmCC"
        id="oy"
        width={84}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAABCAIAAADLv87vAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQYlWO8+P49w8CBl99/iHNyDKwDAEH8CIm9PuJjAAAAAElFTkSuQmCC"
        id="oz"
        width={86}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAACCAIAAABe/Py1AAAABmJLR0QA/wD/AP+gvaeTAAAAIElEQVQokWO8+P49wyjAAC+//2B6+f3HQDtjMAJxTg4AOpUIi0CYWwMAAAAASUVORK5CYII="
        id="oA"
        width={94}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAIAAAATs2rlAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHwyADAJCCArGEwihhAAAAAElFTkSuQmCC"
        id="oB"
        width={50}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAABCAIAAACuUjyQAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ey5OCcHw2AFL7//GFjnAQCDoQWxmuf99AAAAABJRU5ErkJggg=="
        id="oC"
        width={96}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAABCAIAAACuUjyQAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5AwODOCcHwyjABgADkgKxdZaXtAAAAABJRU5ErkJggg=="
        id="oD"
        width={96}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAABCAIAAACuUjyQAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQYlWPc9ey5OCcHwyjAAQAECgKxZm2SQwAAAABJRU5ErkJggg=="
        id="oE"
        width={96}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAABCAIAAACuUjyQAAAABmJLR0QA/wD/AP+gvaeTAAAAHElEQVQYlWPc9ew5AwODOCcHw2AFL7//GEDnAQB6KQWxSYj88QAAAABJRU5ErkJggg=="
        id="oF"
        width={96}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAABCAIAAAC9hXxkAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWO8+P49wyggHQAARRoCsXlPxzIAAAAASUVORK5CYII="
        id="oG"
        width={104}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAABCAIAAABWssdnAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWO8+P49w1AGL7//EOfkGEAHAADc6gWxMeCWxAAAAABJRU5ErkJggg=="
        id="oH"
        width={107}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWO8+P49wyigGAAAbXkCsVdbn+cAAAAASUVORK5CYII="
        id="oI"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAACCAIAAADkX3TVAAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQokWPc9ey5OCcHwyigNmAaaAcMWwAAQ50Cs9Rh6aUAAAAASUVORK5CYII="
        id="oJ"
        width={115}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAACCAIAAAALnR/rAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQokWO8+P49wyigNmB6+f3HQLthAACtfQ0AC/YIY8qxjvYAAAAASUVORK5CYII="
        id="oK"
        width={114}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAABCAIAAADCVG6VAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHwwgDAJLxArGELkEYAAAAAElFTkSuQmCC"
        id="oL"
        width={82}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAABCAIAAACJ/L14AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5OCcHwyigEgAAhToCsaIgfjkAAAAASUVORK5CYII="
        id="oM"
        width={112}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAABCAIAAABfWWcdAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5OCcHwyigBgAAfScCsWadyI8AAAAASUVORK5CYII="
        id="oN"
        width={111}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAABCAIAAACnuZzqAAAABmJLR0QA/wD/AP+gvaeTAAAAIElEQVQYlWPc9ew5AwMDAwODOCcHwyjAAV5+/8HAwAAAMY8FiQ4ubBMAAAAASUVORK5CYII="
        id="oO"
        width={100}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAIAAADYaI4bAAAABmJLR0QA/wD/AP+gvaeTAAAAHklEQVQYlWPc9ew5AwMDAwODOCcHw4gEL7//wCoOADRNBYl5q+ymAAAAAElFTkSuQmCC"
        id="oP"
        width={94}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAABCAIAAAAtlgWrAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHw0gCAJoUArHhmtpAAAAAAElFTkSuQmCC"
        id="oQ"
        width={83}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAIAAACUgoPjAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWO8+P79y+8/GBgYACOXBYmjG3KkAAAAAElFTkSuQmCC"
        id="oR"
        width={3}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAABCAIAAADPSh7SAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHwwgDAKInArF9f/cbAAAAAElFTkSuQmCC"
        id="oS"
        width={84}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAABCAIAAAAQBGTNAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHw3AHAHnIArFqgoJEAAAAAElFTkSuQmCC"
        id="oT"
        width={79}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAIAAAAU8bTwAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHw/AFAGmiArG6BdDUAAAAAElFTkSuQmCC"
        id="oU"
        width={77}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAABCAIAAAD7M9/OAAAABmJLR0QA/wD/AP+gvaeTAAAAIElEQVQImWPc9ew5AwMDAwODOCcHA23Ay+8/aGc4MQAA4SYFsYmsCXwAAAAASUVORK5CYII="
        id="oV"
        width={76}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAABCAIAAAD2La+JAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHw7ADAFFpArGAMu9fAAAAAElFTkSuQmCC"
        id="oW"
        width={74}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAABCAIAAACpEOKFAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHA7UBAPYaArFjb9FxAAAAAElFTkSuQmCC"
        id="oX"
        width={31}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAIAAADM/RD6AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHA90BAEdfArEy1MLWAAAAAElFTkSuQmCC"
        id="oY"
        width={41}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAABCAIAAACzLAILAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHAyng5fcfAJtPBYn5Wv0nAAAAAElFTkSuQmCC"
        id="oZ"
        width={19}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAABCAIAAACg+0L/AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHAzXAy+8/ANvnBYm1J+38AAAAAElFTkSuQmCC"
        id="pa"
        width={27}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABCAIAAABYG7kIAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHAxHg5fcfAIMWBYl0vlWkAAAAAElFTkSuQmCC"
        id="pb"
        width={16}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAABCAIAAACkDpLCAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHA2Xg5fcfAMvBBYldeiMhAAAAAElFTkSuQmCC"
        id="pc"
        width={25}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAABCAIAAACKS7NQAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHA27w8vsPAGrdBYlbue4OAAAAAElFTkSuQmCC"
        id="pd"
        width={13}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAABCAIAAABVBclPAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODOCcHA1ng5fcfALOIBYn+dX+rAAAAAElFTkSuQmCC"
        id="pe"
        width={22}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAIAAABlidhuAAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQImWPc9ew5AwODOCcHAwZ4+f0HhAEAc9oFiYU51qsAAAAASUVORK5CYII="
        id="pf"
        width={12}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQImWPc9ew5AwMDAwODOCcHAyng5fcfAKLqBYlRBi7qAAAAAElFTkSuQmCC"
        id="pg"
        width={20}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAIAAAB2XpiaAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWPc9ew5AwwAABu6AomnC9SNAAAAAElFTkSuQmCC"
        id="ph"
        width={4}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAIAAABhfAhTAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQImWPc9ew5AwMDAwODOCcHAwZ4+f0HnA0AjBAFiR7LFawAAAAASUVORK5CYII="
        id="pi"
        width={14}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABCAIAAABYG7kIAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrAykAAIPDAs4RFyccAAAAAElFTkSuQmCC"
        id="pj"
        width={16}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAIAAABLzPn8AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA8UAAMZEAs7L6wMGAAAAAElFTkSuQmCC"
        id="pk"
        width={24}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAIAAABPOSnBAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA/UAANfnAs4GXzjkAAAAAElFTkSuQmCC"
        id="pl"
        width={26}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAABCAIAAABCJ1mGAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA1UBAOfsAs4gmmIcAAAAAElFTkSuQmCC"
        id="pm"
        width={28}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA20AAPmPAs7cUUIqAAAAAElFTkSuQmCC"
        id="pn"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAABCAIAAAC32dI2AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA4kAAIwtAs6toxmOAAAAAElFTkSuQmCC"
        id="po"
        width={17}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAABCAIAAAAq1Nu+AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw8ABAG3MAs7nZhzeAAAAAElFTkSuQmCC"
        id="pp"
        width={44}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA7kAAKVrAs6s7a0aAAAAAElFTkSuQmCC"
        id="pq"
        width={20}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAABCAIAAADFFrCAAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw4ACAHY2As4asj2RAAAAAElFTkSuQmCC"
        id="pr"
        width={45}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAABCAIAAAC6x6JxAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA8UAAL6pAs6SFoX1AAAAAElFTkSuQmCC"
        id="ps"
        width={23}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAABCAIAAAAuIQuDAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fwyAAAH9vAs60t2WQAAAAAElFTkSuQmCC"
        id="pt"
        width={46}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAABCAIAAADB42C9AAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWN89PXrjY+fGBgYNPj5GAYaAAAiKAXOf5WR/wAAAABJRU5ErkJggg=="
        id="pu"
        width={47}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAABCAIAAAA99kt3AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fAx0BADwfAs4RqaoTAAAAAElFTkSuQmCC"
        id="pv"
        width={38}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAABCAIAAAD4hNHmAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWN89PUrAwPDjY+fNPj5GAYHAAA8ywXOJjnRvwAAAABJRU5ErkJggg=="
        id="pw"
        width={49}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAIAAADM/RD6AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw0AAAFVdAs7XYVfRAAAAAElFTkSuQmCC"
        id="px"
        width={41}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAABCAIAAAD4hNHmAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrwyADAJl8As6JG1mAAAAAAElFTkSuQmCC"
        id="py"
        width={49}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAABCAIAAADICMDHAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw8ABAGYxAs43eAuNAAAAAElFTkSuQmCC"
        id="pz"
        width={43}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAIAAADYaI4bAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQYlWPc9ey5Bj8fwyjAAAATbQLOMImeQAAAAABJRU5ErkJggg=="
        id="pA"
        width={94}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fw+AGANpfAs5wUxKBAAAAAElFTkSuQmCC"
        id="pB"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAABCAIAAABWssdnAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ew5AwODBj8fwyggCwAAgAACzhLCNlsAAAAASUVORK5CYII="
        id="pC"
        width={107}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fw6AHAOLJAs4zBaBRAAAAAElFTkSuQmCC"
        id="pD"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAH0lEQVQYlWPc9ew5AwMDAwODBj8fw5ACNz5+GjxuBgAzVAXOnAbEpwAAAABJRU5ErkJggg=="
        id="pE"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAABCAIAAAC0btweAAAABmJLR0QA/wD/AP+gvaeTAAAAH0lEQVQYlWPc9ew5AwMDAwODBj8fw5ACNz5+GiRuBgAh6gXOBoiiNwAAAABJRU5ErkJggg=="
        id="pF"
        width={108}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAABCAIAAAANelpWAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5Awxo8PMxDAUAAPLOAs6gj2eyAAAAAElFTkSuQmCC"
        id="pG"
        width={60}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAABCAIAAAAXRrrYAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw2ACAJESAs6BsTGZAAAAAElFTkSuQmCC"
        id="pH"
        width={48}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5Awxo8PMxjAKyAACPNgLOm+akxQAAAABJRU5ErkJggg=="
        id="pI"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAABCAIAAAAHJvQEAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrwzACAEHTAs4UXZ3AAAAAAElFTkSuQmCC"
        id="pJ"
        width={69}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAACCAIAAADw5ihxAAAABmJLR0QA/wD/AP+gvaeTAAAAJElEQVQokWPc9ey5Bj8fw0gFNz5+GnDvMw2s9QMOBjwCGBgYALVqBhUMh9fSAAAAAElFTkSuQmCC"
        id="pK"
        width={129}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAABCAIAAADLv87vAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQYlWPc9ey5Bj8fwwgGANAOAs55Gm17AAAAAElFTkSuQmCC"
        id="pL"
        width={86}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAIAAAAnyqv5AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw8ABAF6WAs6InN1VAAAAAElFTkSuQmCC"
        id="pM"
        width={42}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAABCAIAAACdReHcAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ey5Bj8fwyhgYGBgYLjx8dOAhAYApqQFzhysnvoAAAAASUVORK5CYII="
        id="pN"
        width={130}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAABCAIAAACdReHcAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ew5AwODBj8fwyhAAjc+fqJnmAAAitUFzj89oRYAAAAASUVORK5CYII="
        id="pO"
        width={130}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAABCAIAAAB2clrfAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ew5AwODBj8fwyhABTc+fqJPsAAAcGsFzrKUjI8AAAAASUVORK5CYII="
        id="pP"
        width={129}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAIAAADYaI4bAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ew5AwMDAwODBj8fwyhAAgARzwLOUusNfAAAAABJRU5ErkJggg=="
        id="pQ"
        width={94}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAIAAABPOSnBAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA5XAjY+fAN1DBYlIF7nwAAAAAElFTkSuQmCC"
        id="pR"
        width={26}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAABCAIAAACaK/2MAAAABmJLR0QA/wD/AP+gvaeTAAAAIklEQVQYlWPc9ew5Awxo8PMxjAIMcOPjJ0pC5sbHTwwMDADEkQiJCMOCLgAAAABJRU5ErkJggg=="
        id="pS"
        width={120}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAABCAIAAABVBclPAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA7ngxsdPDAwMAMPMBYlIXblHAAAAAElFTkSuQmCC"
        id="pT"
        width={22}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAABCAIAAACJ/L14AAAABmJLR0QA/wD/AP+gvaeTAAAAIklEQVQYlWPc9ew5Awxo8PMxjAIMcOPjJ2JC5sbHTwwMDAA5QQiJD3sfigAAAABJRU5ErkJggg=="
        id="pU"
        width={112}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAIAAABhfAhTAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQImWN89PUrAwPDjY+fNPj5GLCBGx8/QRgA8N4IiYpvaEYAAAAASUVORK5CYII="
        id="pV"
        width={14}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAABCAIAAAA3quUlAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5Awxo8PMxjAIkAAAZagLO6nOObwAAAABJRU5ErkJggg=="
        id="pW"
        width={95}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAIAAACDoBMqAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PXrjY+fGLABAIeQBYmVG5xNAAAAAElFTkSuQmCC"
        id="pX"
        width={9}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAABCAIAAAAzXzUYAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ew5AwMDAwODBj8fwyiAAQAJZQLOWSBHnwAAAABJRU5ErkJggg=="
        id="pY"
        width={93}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAABCAIAAADcnV4mAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ew5AwMDAwODBj8fwyhgYGBgYAAAAPsCzgL4R5YAAAAASUVORK5CYII="
        id="pZ"
        width={92}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAABCAIAAADcnV4mAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5Awxo8PMxjAIGBgAALALOPQ6soAAAAABJRU5ErkJggg=="
        id="qa"
        width={92}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAABCAIAAADRgy5hAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQYlWPc9ew5AwMDAwODBj8fw4gHAPAYAs7GgooxAAAAAElFTkSuQmCC"
        id="qb"
        width={90}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAABCAIAAAA6tJViAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQYlWPc9ew5AwMDAwODBj8fw8gGAOeuAs5FyMFpAAAAAElFTkSuQmCC"
        id="qc"
        width={89}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAABCAIAAAA0HesNAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5Awxo8PMx0AYAABgKAs7vsYG8AAAAAElFTkSuQmCC"
        id="qd"
        width={34}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAABCAIAAAAw6DswAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5Awxo8PMxUBsAAAc2As6fiKJVAAAAAElFTkSuQmCC"
        id="qe"
        width={32}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAIAAAAnyqv5AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw0AAAFz4As7P2fcBAAAAAElFTkSuQmCC"
        id="qf"
        width={42}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fA1UBAPciAs5rzInpAAAAAElFTkSuQmCC"
        id="qg"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAIAAADM/RD6AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fA30BAFO/As6gXFvjAAAAAElFTkSuQmCC"
        id="qh"
        width={41}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAABCAIAAABCJ1mGAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fA5UAAOZOAs7F5cd5AAAAAElFTkSuQmCC"
        id="qi"
        width={28}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAABCAIAAADSNCBJAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fA70AAELrAs4kDaFbAAAAAElFTkSuQmCC"
        id="qj"
        width={39}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAABCAIAAACg+0L/AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQImWPc9ew5Awxo8PMxUAwA3RUCzsSb2bsAAAAASUVORK5CYII="
        id="qk"
        width={27}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAIAAAA5A5tKAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fA+0BACp8As7wN50hAAAAAElFTkSuQmCC"
        id="ql"
        width={36}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAABCAIAAACkDpLCAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fA2UAAM0QAs6witYlAAAAAElFTkSuQmCC"
        id="qm"
        width={25}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAABCAIAAADb34AzAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODBj8fAy0BACFDAs7+YVD3AAAAAElFTkSuQmCC"
        id="qn"
        width={35}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAIAAABhfAhTAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODBj8fA15w4+MnAHatBYmQo3fIAAAAAElFTkSuQmCC"
        id="qo"
        width={14}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAIAAABLzPn8AAAABmJLR0QA/wD/AP+gvaeTAAAAHklEQVQImWPc9ew5AwMDAwODBj8fA1ngxsdPDAwMANIzBYn7hgEAAAAAAElFTkSuQmCC"
        id="qp"
        width={24}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAIAAAB7QOjdAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWPc9ew5AwMDAAyEAok07HF2AAAAAElFTkSuQmCC"
        id="qq"
        width={2}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAABCAIAAACOvmNtAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWPc9ew5Awxo8PMxYAM3Pn6CMACN2wWJ9w/OfQAAAABJRU5ErkJggg=="
        id="qr"
        width={15}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAIAAADuA9qHAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWPc9ew5A27A+OjrV1xyNz5+AgDudwgRMwae1gAAAABJRU5ErkJggg=="
        id="qs"
        width={10}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAABCAIAAABCJ1mGAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA7UBAOi7As5E5qEbAAAAAElFTkSuQmCC"
        id="qt"
        width={28}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrAw3AjY+fAP7rBYn/h33lAAAAAElFTkSuQmCC"
        id="qu"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAABCAIAAAAw6DswAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrAy0BAApyAs56yb08AAAAAElFTkSuQmCC"
        id="qv"
        width={32}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAABCAIAAAA99kt3AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA30BADzuAs54VbJiAAAAAElFTkSuQmCC"
        id="qw"
        width={38}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAIAAABlidhuAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA15w4+MnAGd3BYmub2qJAAAAAElFTkSuQmCC"
        id="qx"
        width={12}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAABCAIAAAAXRrrYAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw6ABNz5+AgCWbgWJ+SX6KgAAAABJRU5ErkJggg=="
        id="qy"
        width={48}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAABCAIAAAAerRqiAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw6AENz5+AgC4FgWJBQPQiwAAAABJRU5ErkJggg=="
        id="qz"
        width={52}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAABCAIAAACt5TK4AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA7XBjY+fAPaBBYn1KcRyAAAAAElFTkSuQmCC"
        id="qA"
        width={29}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAABCAIAAAD1mqGhAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWN89PUrwyAGNz5+YmBgAADZhQWJJRT4uQAAAABJRU5ErkJggg=="
        id="qB"
        width={55}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAABCAIAAAAEkfosAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw6AHNz5+AgDZvgWJusX3NgAAAABJRU5ErkJggg=="
        id="qC"
        width={56}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAABCAIAAAAq1Nu+AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw0ADAG9qAs65C4PcAAAAAElFTkSuQmCC"
        id="qD"
        width={44}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrwxABNz5+AgDqkgWJO5kROQAAAABJRU5ErkJggg=="
        id="qE"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAABCAIAAAAuIQuDAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrwyAANz5+AgCFmgWJkWeH9gAAAABJRU5ErkJggg=="
        id="qF"
        width={46}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWN89PUrw1AANz5+YmBgAADywwWJbLpNbAAAAABJRU5ErkJggg=="
        id="qG"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAABCAIAAACwmwwjAAAABmJLR0QA/wD/AP+gvaeTAAAAIUlEQVQYlWN89PUrw+ADNz5+0uDnG2hXEAtufPzEwMAAAMC4CIldH0stAAAAAElFTkSuQmCC"
        id="qH"
        width={110}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAABCAIAAAAerRqiAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw2AFALK6As75WA0pAAAAAElFTkSuQmCC"
        id="qI"
        width={52}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAABCAIAAAAaWMqfAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrwyAGNz5+AgDI6gWJofYfAQAAAABJRU5ErkJggg=="
        id="qJ"
        width={54}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAABCAIAAAAJj4prAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw9AEAAbtAs7pknDUAAAAAElFTkSuQmCC"
        id="qK"
        width={62}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAIAAADhDz9AAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw5AFNz5+AgAdHQWJtEv2fwAAAABJRU5ErkJggg=="
        id="qL"
        width={64}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAABCAIAAADl+u99AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw9AHACiVAs51CeOfAAAAAElFTkSuQmCC"
        id="qM"
        width={66}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAABCAIAAAAKOIRDAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw9AHNz5+AgA2WwWJZdLm4AAAAABJRU5ErkJggg=="
        id="qN"
        width={67}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAABCAIAAAAKOIRDAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw7AAADD/As4zV65EAAAAAElFTkSuQmCC"
        id="qO"
        width={67}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAABCAIAAADo5J86AAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw7AANz5+AgA+xQWJ5ePWtAAAAABJRU5ErkJggg=="
        id="qP"
        width={68}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAABCAIAAADsEU8HAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrwzACNz5+AgBPmQWJINIjOwAAAABJRU5ErkJggg=="
        id="qQ"
        width={70}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAABCAIAAAAD0yQ5AAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWN89PUrwzACNz5+0uDnAwBg2AXOv8MlFgAAAABJRU5ErkJggg=="
        id="qR"
        width={71}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWN89PUrw6AHNz5+YmBgAADqWQWJHfxVxQAAAABJRU5ErkJggg=="
        id="qS"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw1AANz5+AgDiKAWJD24wwQAAAABJRU5ErkJggg=="
        id="qT"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAABCAIAAAAD0yQ5AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw7ADAFKnAs5GQ5xqAAAAAElFTkSuQmCC"
        id="qU"
        width={71}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAACCAIAAABNK7xBAAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQokWN89PUrwwgGNz5+YhzhQcDAwAAAQBcIVnlKIz8AAAAASUVORK5CYII="
        id="qV"
        width={86}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAACCAIAAABtx+O8AAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQYlWN89PUrw1AANz5+YhwqbmVgYAAAdp8IVsZWWhwAAAAASUVORK5CYII="
        id="qW"
        width={57}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAABCAIAAAA6tJViAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWN89PUrwyhgYGBgYAAA6hsCzuTwQpQAAAAASUVORK5CYII="
        id="qX"
        width={89}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAABCAIAAAAEkfosAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw1AAANRiAs6cIfWfAAAAAElFTkSuQmCC"
        id="qY"
        width={56}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAABCAIAAAA+QUVfAAAABmJLR0QA/wD/AP+gvaeTAAAAEElEQVQYlWN89PUrwyhAAgD67wLO2aKtVAAAAABJRU5ErkJggg=="
        id="qZ"
        width={91}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAABCAIAAAC5cKxZAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWN89PUrwyggFwAAeTQCzvoK00wAAAAASUVORK5CYII="
        id="ra"
        width={106}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAABCAIAAABWssdnAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWN89PUrwyigAAAAgZ4Czpx1EigAAAAASUVORK5CYII="
        id="rb"
        width={107}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAABCAIAAADWwfB0AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrAx0BADSEAs5zF5ieAAAAAElFTkSuQmCC"
        id="rc"
        width={37}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAABCAIAAADsEU8HAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fwzACAEluAs5KI5UfAAAAAElFTkSuQmCC"
        id="rd"
        width={70}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAABCAIAAADFFrCAAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw0CDGx8/AQB9MAWJbk1aLgAAAABJRU5ErkJggg=="
        id="re"
        width={45}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWN89PUrwyigGAAAknICzioQETQAAAAASUVORK5CYII="
        id="rf"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAABCAIAAADICMDHAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrw8CBGx8/AQBsXAWJtDG9MgAAAABJRU5ErkJggg=="
        id="rg"
        width={43}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAABCAIAAACwmwwjAAAABmJLR0QA/wD/AP+gvaeTAAAAEUlEQVQYlWN89PUrwyigBgAAmtwCzgujriIAAAAASUVORK5CYII="
        id="rh"
        width={110}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAIAAAAjP3vEAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA93BjY+fAFMeBYm745YMAAAAAElFTkSuQmCC"
        id="ri"
        width={40}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAABCAIAAACJ/L14AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5Bj8fwyigEgAAquECzvipKD4AAAAASUVORK5CYII="
        id="rj"
        width={112}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAABCAIAAABCJ1mGAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA/XAjY+fGBgYAPZIBYnJtq5nAAAAAElFTkSuQmCC"
        id="rk"
        width={28}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAIAAAAjP3vEAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA90BAEzzAs4Wc7zAAAAAAElFTkSuQmCC"
        id="rl"
        width={40}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAABCAIAAABBkFeuAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQYlWN89PUrw7ADNz5+0uDno4o5DAwMACFHCIm+8ppuAAAAAElFTkSuQmCC"
        id="rm"
        width={97}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAIAAABLzPn8AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQImWN89PUrAwXgxsdPEAYA3NEFidgCgoMAAAAASUVORK5CYII="
        id="rn"
        width={24}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA+ngxsdPDAwMALL4BYmxNgSDAAAAAElFTkSuQmCC"
        id="ro"
        width={20}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAABCAIAAACHVcMXAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQImWPc9ey5Bj8fAxK48fETMhcAfwIFibWmLIEAAAAASUVORK5CYII="
        id="rp"
        width={11}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAABCAIAAABfWWcdAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5Bj8fwyigBgAAoncCzlcSfE4AAAAASUVORK5CYII="
        id="rq"
        width={111}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAABCAIAAABfWWcdAAAABmJLR0QA/wD/AP+gvaeTAAAAHklEQVQYlWPc9ey5Bj8fw0CAGx8/DZTVtAA3Pn4CABoxCIk1pbljAAAAAElFTkSuQmCC"
        id="rr"
        width={111}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5Bj8fwyigDAAAkaMCzpt86aMAAAAASUVORK5CYII="
        id="rs"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAABCAIAAAC0btweAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ey5Bj8fwyggF9z4+AkAjpUFidHUOGkAAAAASUVORK5CYII="
        id="rt"
        width={108}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAABCAIAAACjTEzXAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ey5Bj8fwyggDtz4+AkAXBkFiW4dAb0AAAAASUVORK5CYII="
        id="ru"
        width={102}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAABCAIAAADSNCBJAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fAx3BjY+fAEnlBYkpY1nLAAAAAElFTkSuQmCC"
        id="rv"
        width={39}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAABCAIAAADWwfB0AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fA13AjY+fADkRBYl5UDG4AAAAAElFTkSuQmCC"
        id="rw"
        width={37}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAABCAIAAAATs2rlAAAABmJLR0QA/wD/AP+gvaeTAAAAE0lEQVQImWN89PUrwyADNz5+AgCnQgWJ8/E/yAAAAABJRU5ErkJggg=="
        id="rx"
        width={50}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAABCAIAAACt5TK4AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ey5Bj8fA/XAjY+fGBgYAP3jBYlfvM33AAAAAElFTkSuQmCC"
        id="ry"
        width={29}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAIAAAAjP3vEAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA33BjY+fGBgYAFtPBYkSNMMvAAAAAElFTkSuQmCC"
        id="rz"
        width={40}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAIAAABPOSnBAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrAzXAjY+fGBgYAOV0BYm7jP5eAAAAAElFTkSuQmCC"
        id="rA"
        width={26}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAABCAIAAADWwfB0AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA73AjY+fADngBYmWvs+CAAAAAElFTkSuQmCC"
        id="rB"
        width={37}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAABCAIAAAC6x6JxAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA2XgxsdPAMQFBYmSgacnAAAAAElFTkSuQmCC"
        id="rC"
        width={23}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAIAAAA5A5tKAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ey5Bj8fA43BjY+fGBgYADjYBYlNQzo0AAAAAElFTkSuQmCC"
        id="rD"
        width={36}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAABCAIAAACzLAILAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA4ngxsdPDAwMAKqOBYl6FLVPAAAAAElFTkSuQmCC"
        id="rE"
        width={19}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA7XBjY+fGBgYAAcrBYmb1XcYAAAAAElFTkSuQmCC"
        id="rF"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAABCAIAAAC32dI2AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA9HgxsdPDAwMAJm6BYnoYUtQAAAAAElFTkSuQmCC"
        id="rG"
        width={17}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAABCAIAAACt5TK4AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQImWN89PUrA/XAjY+fIAwABvIFiWUE72QAAAAASUVORK5CYII="
        id="rH"
        width={29}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAIAAABhfAhTAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrAyFw4+MnBgYGAIB8BYnk/qFbAAAAAElFTkSuQmCC"
        id="rI"
        width={14}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAABCAIAAACkDpLCAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWN89PUrA8XgxsdPDAwMAN0KBYlN97ZmAAAAAElFTkSuQmCC"
        id="rJ"
        width={25}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAIAAADuA9qHAAAABmJLR0QA/wD/AP+gvaeTAAAAIElEQVQImWPc9ew5AwODBj8fAwa48fET46OvXzEl4AAAUdMIVsCv/5gAAAAASUVORK5CYII="
        id="rK"
        width={10}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAIAAABc7mk1AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA+kAAJSXAs57cVHdAAAAAElFTkSuQmCC"
        id="rL"
        width={18}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAABCAIAAAA0HesNAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA+0BABtGAs59E18BAAAAAElFTkSuQmCC"
        id="rM"
        width={34}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAABCAIAAADWwfB0AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA70AADO1As4R0mI4AAAAAElFTkSuQmCC"
        id="rN"
        width={37}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAIAAADM/RD6AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrwwABAFYsAs5J/BH3AAAAAElFTkSuQmCC"
        id="rO"
        width={41}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAABCAIAAADICMDHAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw4ACAGcAAs4+vqnrAAAAAElFTkSuQmCC"
        id="rP"
        width={43}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAABCAIAAADFFrCAAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrwyAAAHfUAs7uRBH9AAAAAElFTkSuQmCC"
        id="rQ"
        width={45}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAABCAIAAADxb3GcAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw2AFALpVAs7IHv8oAAAAAElFTkSuQmCC"
        id="rR"
        width={53}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAABCAIAAACkDpLCAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA5UAAM99As7owDZXAAAAAElFTkSuQmCC"
        id="rS"
        width={25}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAABCAIAAAAaWMqfAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fwyAGAMK/As4AfyX6AAAAAElFTkSuQmCC"
        id="rT"
        width={54}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAABCAIAAACt5TK4AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA7UBAPBWAs4mPdDrAAAAAElFTkSuQmCC"
        id="rU"
        width={29}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAABCAIAAAD1mqGhAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw+AGAMspAs5I9DG5AAAAAElFTkSuQmCC"
        id="rV"
        width={55}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAABCAIAAADfKlAOAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrA40BABLcAs57KWFIAAAAAElFTkSuQmCC"
        id="rW"
        width={33}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw6AHANsuAs4o9qauAAAAAElFTkSuQmCC"
        id="rX"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAIAAAA5A5tKAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA10AACtLAs44heWFAAAAAElFTkSuQmCC"
        id="rY"
        width={36}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw1AAAOOYAs6lwf4jAAAAAElFTkSuQmCC"
        id="rZ"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw1AAANv9As5kQVd3AAAAAElFTkSuQmCC"
        id="sa"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw9ABAOU2As78SdVgAAAAAElFTkSuQmCC"
        id="sb"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAABCAIAAACwmwwjAAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQYlWN89PUrw2AFNz5+0uDnG2hXEAsAoSsFzheSObIAAAAASUVORK5CYII="
        id="sc"
        width={110}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAABCAIAAAD1mqGhAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw6AHAMv4As4dpIURAAAAAElFTkSuQmCC"
        id="sd"
        width={55}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWN89PXrjY+fNPj5GIYCAADihQXOMrafHwAAAABJRU5ErkJggg=="
        id="se"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAABCAIAAACE4s0/AAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ey5Bj8fw5ACNz5+GkJuBgDjrAXOBcun+wAAAABJRU5ErkJggg=="
        id="sf"
        width={118}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAABCAIAAADl+u99AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fwxAHACfGAs7ZwbHYAAAAAElFTkSuQmCC"
        id="sg"
        width={66}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAABCAIAAADo5J86AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw7AAADiaAs7us8ITAAAAAElFTkSuQmCC"
        id="sh"
        width={68}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAABCAIAAADsEU8HAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fw3ABAEifAs4+BZybAAAAAElFTkSuQmCC"
        id="si"
        width={70}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAABCAIAAAAAZCoRAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fwxABAORnAs6z2iR6AAAAAElFTkSuQmCC"
        id="sj"
        width={58}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAABCAIAAAAHJvQEAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw3ABAEEEAs4ISPTRAAAAAElFTkSuQmCC"
        id="sk"
        width={69}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAABCAIAAAAD0yQ5AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw/ACAFHYAs7SQPdGAAAAAElFTkSuQmCC"
        id="sl"
        width={71}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAABCAIAAADrU5ESAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrwxABANzMAs4FJAvGAAAAAElFTkSuQmCC"
        id="sm"
        width={57}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAABCAIAAAAD0yQ5AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fwzACAFEJAs4oFUcbAAAAAElFTkSuQmCC"
        id="sn"
        width={71}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAABCAIAAAB2clrfAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ey5Bj8fw/ACNz5+GkKeAgBASQXOhg70vQAAAABJRU5ErkJggg=="
        id="so"
        width={129}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAABCAIAAAAEkfosAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw6AHANOTAs6ax5PTAAAAAElFTkSuQmCC"
        id="sp"
        width={56}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAABCAIAAACtyfD9AAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQYlWN89PUrwyjADW58/KTBzzfQriAMAPCeBc4xJnCGAAAAAElFTkSuQmCC"
        id="sq"
        width={152}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAABCAIAAABBkFeuAAAABmJLR0QA/wD/AP+gvaeTAAAAEElEQVQYlWN89PUrwyjACwAtegLONuDtVQAAAABJRU5ErkJggg=="
        id="sr"
        width={97}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fAw0AAPjAAs7C0e4kAAAAAElFTkSuQmCC"
        id="ss"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAABCAIAAADsEU8HAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw/ACAEo9As6sPXjgAAAAAElFTkSuQmCC"
        id="st"
        width={70}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAABCAIAAAAerRqiAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fw6AEALHrAs7XnucdAAAAAElFTkSuQmCC"
        id="su"
        width={52}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAABCAIAAABfWWcdAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ew5AwODBj8fwyigGAAAoagCztgq8VEAAAAASUVORK5CYII="
        id="sv"
        width={111}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAABCAIAAACwmwwjAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5Bj8fwyigGAAAmg0CzgwKphUAAAAASUVORK5CYII="
        id="sw"
        width={110}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAABCAIAAABfWWcdAAAABmJLR0QA/wD/AP+gvaeTAAAAGklEQVQYlWPc9ey5Bj8fw0CAGx8/DZTVNAIAFNUFztLT4RUAAAAASUVORK5CYII="
        id="sx"
        width={111}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAABCAIAAACJ/L14AAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ew5AwODBj8fwyigBgAAqhICzvAD6gUAAAAASUVORK5CYII="
        id="sy"
        width={112}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAIAAABc7mk1AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fAyngxsdPAJkkBYl65VENAAAAAElFTkSuQmCC"
        id="sz"
        width={18}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAABCAIAAACOvmNtAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fAxHgxsdPAH/mBYlg/s8LAAAAAElFTkSuQmCC"
        id="sA"
        width={15}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAABCAIAAACHVcMXAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQImWPc9ew5AwODBj8fAwa48fETAwMDAGWgBYmbip9KAAAAAElFTkSuQmCC"
        id="sB"
        width={11}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ew5AwODBj8fwyigAAAAkNQCzplnLQgAAAAASUVORK5CYII="
        id="sC"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAABCAIAAAC5cKxZAAAABmJLR0QA/wD/AP+gvaeTAAAAF0lEQVQYlWPc9ew5AwODBj8fwyggHQAAd5YCzvTjdfMAAAAASUVORK5CYII="
        id="sD"
        width={106}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAABCAIAAAC9hXxkAAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQYlWPc9ey5Bj8fwyggEQAAZ5ECzkqs6fIAAAAASUVORK5CYII="
        id="sE"
        width={104}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAABCAIAAADSNCBJAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA30BAESJAs7NCqrHAAAAAElFTkSuQmCC"
        id="sF"
        width={39}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAABCAIAAAD1mqGhAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWPc9ey5Bj8fwyAGNz5+AgDQhQWJqNwJRQAAAABJRU5ErkJggg=="
        id="sG"
        width={55}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAABCAIAAADSNCBJAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fAx0BAEO6As5HRfWDAAAAAElFTkSuQmCC"
        id="sH"
        width={39}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAABCAIAAADb34AzAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fA40BACISAs78fB8BAAAAAElFTkSuQmCC"
        id="sI"
        width={35}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAABCAIAAADB42C9AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWN89PUrw6ABAIioAs4u4L9vAAAAAElFTkSuQmCC"
        id="sJ"
        width={47}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAABCAIAAADfKlAOAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fAy0BABINAs7mhaBSAAAAAElFTkSuQmCC"
        id="sK"
        width={33}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAABCAIAAAAw6DswAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODBj8fA20AAAjUAs5uLc8bAAAAAElFTkSuQmCC"
        id="sL"
        width={32}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAABCAIAAAAq1Nu+AAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQImWPc9ey5Bj8fw8CBGx8/AQBz9wWJtmqtUwAAAABJRU5ErkJggg=="
        id="sM"
        width={44}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAABCAIAAACzLAILAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWN89PUrA+ngxsdPAKJdBYkSWpl/AAAAAElFTkSuQmCC"
        id="sN"
        width={19}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAIAAABlidhuAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwODBj8fAw5w4+MnAGXZBYk448l9AAAAAElFTkSuQmCC"
        id="sO"
        width={12}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAABCAIAAAC6x6JxAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5Bj8fA2UAAL3aAs7H82IPAAAAAElFTkSuQmCC"
        id="sP"
        width={23}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fA+ngxsdPAKn4BYl24mtZAAAAAElFTkSuQmCC"
        id="sQ"
        width={20}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABCAIAAABYG7kIAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ey5Bj8fA3HgxsdPAIhQBYlre2fHAAAAAElFTkSuQmCC"
        id="sR"
        width={16}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWPc9ew5AwODOCcHAypgwRSCAACEMQLdUKZUaQAAAABJRU5ErkJggg=="
        id="sS"
        width={8}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAABCAIAAACKS7NQAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49AxEAAGYsArF0ugzIAAAAAElFTkSuQmCC"
        id="sT"
        width={13}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAABCAIAAABYG7kIAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA9EAAH3tArHdZzltAAAAAElFTkSuQmCC"
        id="sU"
        width={16}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAIAAABc7mk1AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA4kAAI4TArHm1HkuAAAAAElFTkSuQmCC"
        id="sV"
        width={18}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAABCAIAAAC+MnJMAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA7kAAKZMArFM0TIgAAAAAElFTkSuQmCC"
        id="sW"
        width={21}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAABCAIAAACdaSOZAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49AwYAADW6ArH25cqGAAAAAElFTkSuQmCC"
        id="sX"
        width={7}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAIAAAA5A5tKAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA10AAB94ArH4Jvx4AAAAAElFTkSuQmCC"
        id="sY"
        width={36}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAABCAIAAAA99kt3AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHAx0BAC+eArEqNQ4XAAAAAElFTkSuQmCC"
        id="sZ"
        width={38}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAABCAIAAACOvmNtAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49A9EAAHZSArG20YGGAAAAAElFTkSuQmCC"
        id="ta"
        width={15}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAABCAIAAADSNCBJAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHAx0BADc5ArHZrEpTAAAAAElFTkSuQmCC"
        id="tb"
        width={39}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAIAAAAjP3vEAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA90BAD/EArHXGm1lAAAAAElFTkSuQmCC"
        id="tc"
        width={40}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAIAAABPOSnBAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA5UAAM6rArEW83gBAAAAAElFTkSuQmCC"
        id="td"
        width={26}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAABCAIAAADICMDHAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHwwABAFeFArFSYQAdAAAAAElFTkSuQmCC"
        id="te"
        width={43}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAABCAIAAADWwfB0AAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHA70AACeLArF5m0eoAAAAAElFTkSuQmCC"
        id="tf"
        width={37}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAABCAIAAAAtlgWrAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHw8gDAJsEArGGNCAiAAAAAElFTkSuQmCC"
        id="tg"
        width={83}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAABCAIAAADPSh7SAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ey5OCcHwwCBl99/DKDtABm9BbEheiXoAAAAAElFTkSuQmCC"
        id="th"
        width={84}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAABCAIAAAAkfaXRAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQYlWPc9ey5OCcHw8gGALtQArGmxayKAAAAAElFTkSuQmCC"
        id="ti"
        width={87}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAABCAIAAAAuIQuDAAAABmJLR0QA/wD/AP+gvaeTAAAAEklEQVQImWPc9ey5OCcHwyAAAHA2ArEWfk07AAAAAElFTkSuQmCC"
        id="tj"
        width={46}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAABCAIAAADcnV4mAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5AwODOCcHwyiAAQDjNwKxJVQMxgAAAABJRU5ErkJggg=="
        id="tk"
        width={92}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAABCAIAAABBkFeuAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQYlWPc9ew5AwMDAwODOCcHwyjABgALLQKxyUB7iAAAAABJRU5ErkJggg=="
        id="tl"
        width={97}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAABCAIAAABBkFeuAAAABmJLR0QA/wD/AP+gvaeTAAAAH0lEQVQYlWPc9ew5AwMDAwODOCcHw2AFL7//GEDnAQCBxAWxbDhtJQAAAABJRU5ErkJggg=="
        id="tm"
        width={97}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAABCAIAAACqp+ytAAAABmJLR0QA/wD/AP+gvaeTAAAAFklEQVQYlWPc9ew5AwyIc3IwjAJsAAASyAKxsL0U6wAAAABJRU5ErkJggg=="
        id="tn"
        width={98}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAABCAIAAAAEkfosAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49w1AAAMFsArFMRplOAAAAAElFTkSuQmCC"
        id="to"
        width={56}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAABCAIAAABSRxdaAAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQYlWO8+P49w5AFL7//EOfkGCjbAcPEBbFhbva+AAAAAElFTkSuQmCC"
        id="tp"
        width={105}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAABCAIAAADsEU8HAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49w/ACADKFArF0xblNAAAAAElFTkSuQmCC"
        id="tq"
        width={70}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAIAAAAnyqv5AAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWO8+P49w8ABAFBiArFnsJccAAAAAElFTkSuQmCC"
        id="tr"
        width={42}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAACCAIAAADkX3TVAAAABmJLR0QA/wD/AP+gvaeTAAAAIUlEQVQokWPc9ey5OCcHw/AFL7//GBAPMtHfSjqDgUo3AMkXBdss6FIXAAAAAElFTkSuQmCC"
        id="ts"
        width={115}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAACCAIAAADkX3TVAAAABmJLR0QA/wD/AP+gvaeTAAAAI0lEQVQokWPc9ey5OCcHwwgDL7//oLWvmSDW0NSOQQjokJgAULQIs7MWc8QAAAAASUVORK5CYII="
        id="tt"
        width={115}
        height={2}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAABCAIAAAAtlgWrAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHwwgDAJqMArGnsOIlAAAAAElFTkSuQmCC"
        id="tu"
        width={83}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAABCAIAAACJ/L14AAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ew5AwMDAwODOCcHwyigDLz8/gMAiesFif/hOasAAAAASUVORK5CYII="
        id="tv"
        width={112}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAABCAIAAABbrLcgAAAABmJLR0QA/wD/AP+gvaeTAAAAHklEQVQYlWPc9ew5AwMDAwODOCcHw8gDL7//oIrHAUCoBbFPDxyFAAAAAElFTkSuQmCC"
        id="tw"
        width={109}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAABCAIAAAC0btweAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQYlWPc9ew5AwMDAwODOCcHwyggHbz8/gMAaZ8FicXrZ1YAAAAASUVORK5CYII="
        id="tx"
        width={108}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAABCAIAAAC+MnJMAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWO8+P49A1ng5fcfDAwMALTtBYmRwUbUAAAAAElFTkSuQmCC"
        id="ty"
        width={21}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAABCAIAAADPSh7SAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AxIQ5+RgGDEAAKE3ArHsdB4QAAAAAElFTkSuQmCC"
        id="tz"
        width={84}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAABCAIAAAAgiHXsAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AxIQ5+RgGEkAAKlKArGqblOwAAAAAElFTkSuQmCC"
        id="tA"
        width={85}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAABCAIAAADPSh7SAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwyIc3IwjCQAAKGvArFyQ5u8AAAAAElFTkSuQmCC"
        id="tB"
        width={84}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAABCAIAAAAtlgWrAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwyIc3IwjBgAAJmcArEOMt8dAAAAAElFTkSuQmCC"
        id="tC"
        width={83}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwyIc3IwUA8AAO2PArEHxDTsAAAAAElFTkSuQmCC"
        id="tD"
        width={30}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAIAAAAnyqv5AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWO8+P79y+8/GBgYxDk5GOgOAL2BBbHfaveKAAAAAElFTkSuQmCC"
        id="tE"
        width={42}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAABCAIAAACt5TK4AAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwyIc3IwUAkAAOV8ArEWIuSwAAAAAElFTkSuQmCC"
        id="tF"
        width={29}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAIAAAAnyqv5AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwyIc3Iw0BG8/P4DAFQjBYlHtTQlAAAAAElFTkSuQmCC"
        id="tG"
        width={42}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAABCAIAAACg+0L/AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHAzUAANXOArEYInUaAAAAAElFTkSuQmCC"
        id="tH"
        width={27}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAABCAIAAAA99kt3AAAABmJLR0QA/wD/AP+gvaeTAAAAGElEQVQImWPc9ew5AwMDAwODOCcHA10AAC6uArG5yy0eAAAAAElFTkSuQmCC"
        id="tI"
        width={38}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAABCAIAAACg+0L/AAAABmJLR0QA/wD/AP+gvaeTAAAAFElEQVQImWPc9ew5AwyIc3IwUAwA1VYCsSTKq1cAAAAASUVORK5CYII="
        id="tJ"
        width={27}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAIAAAA5A5tKAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWPc9ew5AwODOCcHA+0BAB8AArHz7ilEAAAAAElFTkSuQmCC"
        id="tK"
        width={36}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAIAAABlidhuAAAABmJLR0QA/wD/AP+gvaeTAAAAGUlEQVQImWPc9ew5AwyIc3IwIIGX339AGABy6gWJEiPHOwAAAABJRU5ErkJggg=="
        id="tL"
        width={12}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQImWPc9ew5AwMDAwODOCcHA3Hg5fcfEAYAs/oFiQNjYWQAAAAASUVORK5CYII="
        id="tM"
        width={20}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAABmJLR0QA/wD/AP+gvaeTAAAAD0lEQVQImWPc9ew5AzYAADomAolHn6deAAAAAElFTkSuQmCC"
        id="tN"
        width={8}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAABCAIAAAC32dI2AAAABmJLR0QA/wD/AP+gvaeTAAAAHUlEQVQImWPc9ew5AwMDAwODOCcHA17w8vsPCAMAm8EFidGJdzIAAAAASUVORK5CYII="
        id="tO"
        width={17}
        height={1}
        preserveAspectRatio="none"
      />
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAABCAIAAABhfAhTAAAABmJLR0QA/wD/AP+gvaeTAAAAG0lEQVQImWPc9ew5AxIQ5+RgYGB4+f0HAwYAAKS4BYmwtUAvAAAAAElFTkSuQmCC"
        id="tP"
        width={14}
        height={1}
        preserveAspectRatio="none"
      />
    </Defs>
  </Svg>
)
export default ShopActive
