import "./globals.css";

import Theme from "@/components/Theme";
import DartLightSwitch from "@/components/DarkLightSwitch";

export const metadata = {
  title: "Mehdi Mansour",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Theme>
          <DartLightSwitch></DartLightSwitch>
          {children}
        </Theme>
      </body>
    </html>
  );
}
