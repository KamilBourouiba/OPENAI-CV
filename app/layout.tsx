import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat 2 CV",
  description: "Just chat with my CV through a fine tuned ai",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/openai.svg" alt="OpenAI Logo" />
      </body>
    </html>
  );
}
