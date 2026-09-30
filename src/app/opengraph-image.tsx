import { ImageResponse } from "next/og";

export const alt = "ByteSpace - Online Courses & Creator Learning";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#003BE2",
        padding: "70px 80px",
      }}
    >
      {/* Brand Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            backgroundColor: "#CBFC01",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
            fontWeight: 900,
            color: "#000000",
          }}
        >
          B
        </div>
        <span
          style={{ color: "#ffffff", fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          ByteSpace
        </span>
      </div>

      {/* Center Headline & Tagline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(203, 252, 1, 0.15)",
            color: "#CBFC01",
            fontSize: "18px",
            fontWeight: 700,
            padding: "8px 22px",
            borderRadius: "9999px",
            alignSelf: "flex-start",
          }}
        >
          Next-Gen Learning Platform
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "58px",
            fontWeight: 900,
            lineHeight: 1.15,
            maxWidth: "960px",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Access Hundreds of Online Courses & Learn from Top Creators
        </h1>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "24px",
            margin: 0,
          }}
        >
          Master UI/UX design, development, marketing, data science, and business.
        </p>
      </div>

      {/* Footer info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "24px",
        }}
      >
        <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "20px", fontWeight: 500 }}>
          bytespace-peach.vercel.app
        </span>
        <div
          style={{
            display: "flex",
            backgroundColor: "#CBFC01",
            color: "#000000",
            fontSize: "18px",
            fontWeight: 800,
            padding: "10px 24px",
            borderRadius: "9999px",
          }}
        >
          Explore Courses →
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
