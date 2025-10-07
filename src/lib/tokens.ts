export const tokens = {
  color: {
    bg: "#ffffff",
    text: "#0f172a",
    muted: "#0f172a",
    primary: "#000000",
    onPrimary: "#ffffff",
    surface: "#ffffff",
    onSurface: "#0f172a",
    surfaceBorder: "#rgba(0,0,0,0.6)",
  },
  radius: { xl: "4px", xxl: "4px" },
  space: { gutter: "1rem", section: "3rem" },
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
