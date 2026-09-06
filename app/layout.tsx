import type { Metadata } from "next";
import "./globals.css";
import "./detail.css";
import "./mobile.css";
import "./polish.css";
import "./extras.css";
const origin=process.env.SITE_URL??"http://localhost:3000";
export const metadata:Metadata={metadataBase:new URL(origin),title:"PixelPay — Top Up Game Instan",description:"Konsep portfolio gaming top-up store bertema lime dark. Cepat, aman, dan mudah digunakan.",openGraph:{title:"PixelPay — Top Up Game Instan",description:"Top up. Level up. Konsep gaming store lime-dark untuk portfolio.",images:["/og.png"]},twitter:{card:"summary_large_image",title:"PixelPay — Top Up Game Instan",description:"Top up. Level up. Konsep gaming store lime-dark untuk portfolio.",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="id"><body>{children}</body></html>}
