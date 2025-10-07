export const tokens = {
  color: {
    bg: "#0e0f12",
    text: "#e7e7ea",
    muted: "#a1a1aa",
    primary: "#27c0a7",
    onPrimary: "#041412",
    surface: "#16181d",
    onSurface: "#e7e7ea",
    surfaceBorder: "#24262d",
  },
  radius: { xl: "16px", xxl: "24px" },
  space: { gutter: "1rem", section: "3.5rem" },
} as const;

export function injectTokensCSS() {
  return `:root{
    --color-bg:${tokens.color.bg};
    --color-text:${tokens.color.text};
    --color-muted:${tokens.color.muted};
    --color-primary:${tokens.color.primary};
    --color-on-primary:${tokens.color.onPrimary};
    --color-surface:${tokens.color.surface};
    --color-on-surface:${tokens.color.onSurface};
    --color-surface-border:${tokens.color.surfaceBorder};
    --radius-xl:${tokens.radius.xl};
    --radius-2xl:${tokens.radius.xxl};
    --space-gutter:${tokens.space.gutter};
    --space-section:${tokens.space.section};
  }`;
}
