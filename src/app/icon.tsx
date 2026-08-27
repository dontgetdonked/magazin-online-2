import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0c0a",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 4 10l12 6 12-6-12-6Z" fill="#c4903d" />
          <path
            d="M4 16l12 6 12-6"
            stroke="#c4903d"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 22l12 6 12-6"
            stroke="#e3c583"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
