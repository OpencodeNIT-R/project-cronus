import "./globals.css";
import Home from "./page";

// Metadata for the application
export const metadata = {
  title: "Leaderboard",
  description: "Leaderboard form opensource programs",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>
        <Home />
      </body>
    </html>
  );
}
