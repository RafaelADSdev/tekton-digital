import { ImageResponse } from "next/og";

export const alt = "Tekton Digital — Design e desenvolvimento para negócios reais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        color: "#CFCFCF",
        background: "#141414",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 2 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 8,
            background: "#7E49B3",
            color: "#FFFFFF",
            fontWeight: 800,
          }}
        >
          T
        </span>
        TEKTON DIGITAL
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ color: "#BE96E0", fontSize: 22 }}>ESTRATÉGIA · DESIGN · ENGENHARIA</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 74,
            lineHeight: 1.05,
            fontWeight: 750,
            letterSpacing: -3,
          }}
        >
          <span>Negócios reais.</span>
          <span>Experiências digitais de alto nível.</span>
        </div>
      </div>
    </div>,
    size,
  );
}
