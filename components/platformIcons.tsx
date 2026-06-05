/* Minimal monochrome platform glyphs for the distribution scene. */

type IconProps = { size?: number; color?: string };

export function TikTokIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.6-.3-3.7-1v5.6a5.6 5.6 0 11-5.6-5.6c.3 0 .5 0 .8.1v2.7a2.9 2.9 0 102 2.8V3h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill={color} stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 002 12a31 31 0 00.1 3.8 3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1A31 31 0 0022 12a31 31 0 00-.1-3.8zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}

export function FacebookIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M14 9V7.2c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.7 3 10.7 4.5 10.7 7v2H8.5v3h2.2v9H14v-9h2.4l.4-3H14z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M6.9 8.5V20H3.3V8.5h3.6zM5.1 3.2a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zM20.7 20h-3.6v-5.6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H9.2V8.5h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V20z" />
    </svg>
  );
}

export function XIcon({ size = 22, color = "#f5f2ea" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.7-6.1L5.6 21h-3l7-8L2.3 3h6.2l4.2 5.6L17.5 3zm-2.1 16h1.7L8.6 4.8H6.8L15.4 19z" />
    </svg>
  );
}

export type PlatformGlyph = (p: IconProps) => React.ReactElement;
