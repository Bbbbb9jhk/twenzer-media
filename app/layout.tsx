import type { Metadata } from "next";
import { Bebas_Neue, Cairo, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
const cairo = Cairo({
  weight: ["300", "400", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});
const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://twenzer.media";
const DESCRIPTION =
  "Twenzer Media — وكالة توزيع المحتوى. نحوّل الفيديو الطويل الواحد إلى نظام توزيع محتوى قصير واسع النطاق على TikTok و Reels و Shorts و LinkedIn و X. نخلّي الناس تشوفك.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Twenzer Media — نظام توزيع المحتوى | Content Distribution Engine",
    template: "%s | Twenzer Media",
  },
  description: DESCRIPTION,
  keywords: [
    "Content Distribution",
    "توزيع المحتوى",
    "Video Repurposing",
    "Short Form Content",
    "Personal Brand",
    "Viral Content",
    "Content Marketing",
    "YouTube Content Repurposing",
    "Podcast Clips",
    "Content Distribution Agency",
    "Short Form Video Agency",
    "Personal Branding Agency",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: "Twenzer Media",
    title: "Twenzer Media — نساعدك على تهكير الخوارزميات",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Twenzer Media — Content Distribution Engine",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Twenzer Media",
      url: SITE_URL,
      description: DESCRIPTION,
      slogan: "نساعدك على تهكير الخوارزميات — Hack The Algorithm",
      areaServed: ["EG", "SA", "AE", "KW", "QA", "BH", "OM"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Content Distribution",
      provider: { "@id": `${SITE_URL}/#org` },
      serviceType: "Content Distribution & Short-Form Video Repurposing",
      description:
        "تحويل المحتوى الطويل إلى توزيع محتوى قصير واسع النطاق عبر TikTok و Instagram Reels و YouTube Shorts و Facebook Reels و LinkedIn و X.",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هي خدمة توزيع المحتوى؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نحوّل فيديوهاتك الطويلة إلى عشرات الفيديوهات القصيرة ونوزّعها على كل المنصات لتصل لأكبر عدد من الناس.",
          },
        },
        {
          "@type": "Question",
          name: "كم فيديو يمكن إنتاجه شهرياً؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "حسب الباقة: 360+ أو 520+ أو 720+ فيديو شهرياً.",
          },
        },
        {
          "@type": "Question",
          name: "هل الإنتاج داخلي؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، الإنتاج بالكامل داخلي بدون أي outsourcing، ولكل عميل فريق مخصص.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${bebas.variable} ${cairo.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-ar bg-ink text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>{children}</LenisProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
