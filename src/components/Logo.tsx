import * as React from "react"
import { useTheme } from 'next-themes'

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? '#fff' : '#000'; // Ensure the colors are visible

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      x={0}
      y={0}
      style={{
        background: "new 0 0 331 50",
      }}
      viewBox="0 0 331 50"
      {...props}
    >
      <style>{`.st0{fill:${fillColor}}`}</style>
      <path
        d="M178.976 9.478v11h.1c1.8-2.4 4.4-3.6 7.8-3.6 1.5 0 2.9.2 4.3.7 1.3.5 2.5 1.2 3.6 2.2 1 1 1.9 2.2 2.5 3.7.6 1.5.9 3.2.9 5.2 0 2.2-.4 4.2-1.2 6.1-.8 1.9-2.1 3.4-3.8 4.5-1.7 1.1-3.8 1.7-6.4 1.7-3.7 0-6.3-1.2-7.8-3.5h-.1v2.9h-7v-31h7.1zm-26.7 6.8c13.5 0 12.3 14.5 12.3 14.5h-18.5c.7 2.9 3.2 4.8 6.7 4.8 4.1 0 6.4-2.5 6.4-2.5l3.9 4c-2 2-4.7 3.8-10.3 3.8-8.7 0-13.3-5.7-13.3-11.8s3.4-12.8 12.8-12.8zm168.2 0c5.8 0 9.5 2.2 9.5 2.2l-2.4 5.1c-7.7-4-11.2-1.2-11.2.2s1.4 1.5 6.8 2.5 7.9 3.2 7.9 6.9c0 3.6-3.1 7.6-10.7 7.6s-11.1-2.4-11.1-2.4l2.3-5.1c6 3.8 12.7 2.6 12.7.3 0-1.7-2.3-2-4.7-2.3l-1-.1c-.5-.1-.9-.1-1.4-.2-3.1-.5-7.7-2.1-7.7-6.9.1-4.7 5.2-7.8 11-7.8zm-34-8.4v18.7l10.1-9.7h8.3l-10 9.6 11 14.3h-8.3l-7.5-9.8-3.6 3.5v6.3h-6.8v-33h6.8zm-24.2 8.2c4.8 0 9 2.4 11.3 6l-5.7 3.4c-1.1-2-3.2-3.4-5.6-3.4-3.5 0-6.4 2.9-6.4 6.5s2.8 6.5 6.4 6.5c2.3 0 4.3-1.3 5.4-3.1l5.7 3.3c-2.3 3.5-6.5 5.8-11.2 5.8-7.3 0-13.2-5.5-13.2-12.4.1-7 6-12.6 13.3-12.6zm-31.4 0c7.3 0 13.2 5.5 13.2 12.4 0 6.8-5.9 12.4-13.2 12.4-7.3 0-13.2-5.5-13.2-12.4 0-6.8 5.9-12.4 13.2-12.4zm-120.1.7v23.8h-7.3v-23.8h7.3zm-13.9-7.2v6h-16.4v7.9h14.5v5.9h-14.5v11.3h-7.3v-31h23.7zm29.6 10.2s2.6-4.1 8-3.4v6.6s-5.8-1.5-8 4.5v13.1h-7v-23.8h6.7l.3 2.8v.2zm84.2-12v32.7h-7.4v-32.7h7.4zm-25.9 14.4c-4.1 0-6.1 2.5-6.1 7.4 0 1.9.5 3.4 1.6 4.7 1 1.3 2.6 1.9 4.7 1.9 1.4 0 2.5-.4 3.4-1.1.9-.7 1.5-1.6 1.9-2.7.4-1.1.6-2.1.6-3.2 0-2-.5-3.7-1.4-5-1.1-1.4-2.6-2-4.7-2zm46.1-.2c-3.5 0-6.4 2.9-6.4 6.5s2.8 6.5 6.4 6.5c3.5 0 6.3-2.9 6.3-6.5s-2.8-6.5-6.3-6.5zm-78.5-.5c-3.6 0-5.6 2.2-6.2 5.1h12c-.1-.8-1.3-5.1-5.8-5.1zm-45.2-15.9c2.4 0 4.3 1.8 4.3 4s-1.9 4-4.3 4-4.3-1.8-4.3-4 1.9-4 4.3-4zM48.6 0c1.1 0 2 .9 2 2v46c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h46.6zM25.3 13.9l-14 22.2h28.1L25.3 13.9z"
        className="st0"
      />
    </svg>
  );
}

export default Logo
