import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Mark Truong — Full-Stack & DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050507",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#2323ff",
            letterSpacing: 4,
            marginBottom: 28,
            fontFamily: "monospace",
          }}
        >
          SOFTWARE ENGINEER • SAN DIEGO, CA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            color: "#ededf2",
            lineHeight: 1.05,
          }}
        >
          Mark Truong
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8a8a93",
            marginTop: 28,
          }}
        >
          Full-stack engineer · DevOps · cleared defense tech
        </div>
      </div>
    ),
    { ...size }
  );
}
