/* Design system Tailwind preset v2.0.0. Generated from tokens.json by scripts/build.mjs. Do not edit by hand.
   Usage (tailwind.config.js): module.exports = { presets: [require('./design-system/tailwind.preset.js')], content: [...] }
   Semantic colours (bg-canvas, text-primary, border-input, bg-action-primary-bg, ...) read CSS variables, so also load design-system/tokens.css. */
module.exports = {
  "theme": {
    "screens": {
      "sm": "600px",
      "md": "1024px",
      "lg": "1440px"
    },
    "colors": {
      "transparent": "transparent",
      "current": "currentColor",
      "ink": {
        "600": "#4b5563",
        "900": "#0b1220"
      },
      "paper": "#f4f6f8",
      "slate": {
        "50": "#fafafb",
        "100": "#f4f6f9",
        "200": "#e5e9f0",
        "300": "#ccd3dc",
        "400": "#a2abb9",
        "450": "#949a9f",
        "500": "#7c899a",
        "600": "#5d6e83",
        "700": "#43546a",
        "800": "#2e3d4f",
        "850": "#1f2a39",
        "900": "#132237"
      },
      "white": "#ffffff",
      "black": "#000000",
      "blue": {
        "50": "#eaf3ff",
        "300": "#7aa7ff",
        "600": "#2563eb",
        "700": "#1d4ed8"
      },
      "green": {
        "50": "#e6fcf5",
        "300": "#34d399",
        "700": "#00704a"
      },
      "red": {
        "50": "#fdecec",
        "300": "#ff5c5c",
        "600": "#ea0000",
        "700": "#c40000"
      },
      "amber": {
        "50": "#fff4e5",
        "300": "#ffb547",
        "700": "#8f4b00"
      },
      "alpha": {
        "overlay": "#00000080",
        "shadow-1": "#0000000a",
        "shadow-2": "#0b12201a",
        "shadow-3": "#00000066"
      },
      "action-primary-bg": "var(--color-action-primary-bg)",
      "action-primary-bg-hover": "var(--color-action-primary-bg-hover)",
      "action-primary-fg-hover": "var(--color-action-primary-fg-hover)",
      "action-primary-bg-pressed": "var(--color-action-primary-bg-pressed)",
      "action-secondary-border": "var(--color-action-secondary-border)",
      "action-destructive-bg": "var(--color-action-destructive-bg)",
      "action-destructive-bg-hover": "var(--color-action-destructive-bg-hover)",
      "focus-ring": "var(--color-focus-ring)",
      "highlight": "var(--color-highlight)",
      "status-success-fg": "var(--color-status-success-fg)",
      "status-success-bg": "var(--color-status-success-bg)",
      "status-warning-fg": "var(--color-status-warning-fg)",
      "status-warning-bg": "var(--color-status-warning-bg)",
      "status-error-fg": "var(--color-status-error-fg)",
      "status-error-fg-strong": "var(--color-status-error-fg-strong)",
      "status-error-bg": "var(--color-status-error-bg)",
      "status-info-fg": "var(--color-status-info-fg)",
      "status-info-bg": "var(--color-status-info-bg)",
      "logo-node": "var(--color-logo-node)",
      "logo-ink": "var(--color-logo-ink)"
    },
    "fontFamily": {
      "display": [
        "Space Grotesk",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ],
      "sans": [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif"
      ],
      "mono": [
        "IBM Plex Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "monospace"
      ]
    },
    "fontWeight": {
      "regular": "400",
      "medium": "500",
      "semibold": "600"
    },
    "fontSize": {
      "display": [
        "128px",
        {
          "lineHeight": "140.8px",
          "letterSpacing": "-0.03em",
          "fontWeight": "600"
        }
      ],
      "display-mobile": [
        "80px",
        {
          "lineHeight": "84px",
          "letterSpacing": "-0.03em",
          "fontWeight": "600"
        }
      ],
      "display-number": [
        "72px",
        {
          "lineHeight": "72px",
          "letterSpacing": "-0.03em",
          "fontWeight": "600"
        }
      ],
      "display-number-mobile": [
        "72px",
        {
          "lineHeight": "72px",
          "letterSpacing": "-0.03em",
          "fontWeight": "600"
        }
      ],
      "h1": [
        "63px",
        {
          "lineHeight": "63px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h1-mobile": [
        "45px",
        {
          "lineHeight": "45px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h2": [
        "50px",
        {
          "lineHeight": "55px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h2-mobile": [
        "31px",
        {
          "lineHeight": "34.1px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h3": [
        "40px",
        {
          "lineHeight": "48px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h3-mobile": [
        "30px",
        {
          "lineHeight": "36px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "h4": [
        "30px",
        {
          "lineHeight": "31.5px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "h4-mobile": [
        "30px",
        {
          "lineHeight": "31.5px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "h5": [
        "24px",
        {
          "lineHeight": "26.4px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "h5-mobile": [
        "24px",
        {
          "lineHeight": "26.4px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "h6": [
        "18px",
        {
          "lineHeight": "19.8px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "h6-mobile": [
        "18px",
        {
          "lineHeight": "19.8px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "body-l": [
        "24px",
        {
          "lineHeight": "36px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "body-l-mobile": [
        "20px",
        {
          "lineHeight": "28px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "body-m": [
        "16px",
        {
          "lineHeight": "24px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "body-m-mobile": [
        "16px",
        {
          "lineHeight": "24px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "body-s": [
        "14px",
        {
          "lineHeight": "21px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "body-s-mobile": [
        "14px",
        {
          "lineHeight": "21px",
          "letterSpacing": "-0.01em",
          "fontWeight": "400"
        }
      ],
      "caption": [
        "12px",
        {
          "lineHeight": "13.2px",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ],
      "caption-mobile": [
        "12px",
        {
          "lineHeight": "13.2px",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ],
      "eyebrow": [
        "12px",
        {
          "lineHeight": "18px",
          "letterSpacing": "0.14em",
          "fontWeight": "600"
        }
      ],
      "eyebrow-mobile": [
        "12px",
        {
          "lineHeight": "18px",
          "letterSpacing": "0.14em",
          "fontWeight": "600"
        }
      ],
      "label": [
        "12px",
        {
          "lineHeight": "18px",
          "letterSpacing": "0.14em",
          "fontWeight": "500"
        }
      ],
      "label-mobile": [
        "12px",
        {
          "lineHeight": "18px",
          "letterSpacing": "0.14em",
          "fontWeight": "500"
        }
      ],
      "label-l": [
        "16px",
        {
          "lineHeight": "28px",
          "letterSpacing": "0.14em",
          "fontWeight": "500"
        }
      ],
      "label-l-mobile": [
        "16px",
        {
          "lineHeight": "28px",
          "letterSpacing": "0.14em",
          "fontWeight": "500"
        }
      ],
      "button": [
        "16px",
        {
          "lineHeight": "24px",
          "letterSpacing": "-0.01em",
          "fontWeight": "500"
        }
      ],
      "button-mobile": [
        "16px",
        {
          "lineHeight": "24px",
          "letterSpacing": "-0.01em",
          "fontWeight": "500"
        }
      ],
      "button-l": [
        "24px",
        {
          "lineHeight": "26.4px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "button-l-mobile": [
        "24px",
        {
          "lineHeight": "26.4px",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "nav-mobile-mobile": [
        "40px",
        {
          "lineHeight": "46px",
          "letterSpacing": "-0.02em",
          "fontWeight": "600"
        }
      ],
      "code": [
        "14px",
        {
          "lineHeight": "21px",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ],
      "code-mobile": [
        "14px",
        {
          "lineHeight": "21px",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ]
    },
    "spacing": {
      "0": "0px",
      "2": "2px",
      "4": "4px",
      "8": "8px",
      "12": "12px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
      "32": "32px",
      "40": "40px",
      "48": "48px",
      "54": "54px",
      "72": "72px",
      "108": "108px",
      "140": "140px",
      "section-sm": "54px",
      "section-md": "72px",
      "section-lg": "108px",
      "section-xl": "140px",
      "margin-mobile": "36px",
      "margin-tablet": "54px",
      "margin-desktop": "108px"
    },
    "borderRadius": {
      "none": "0px",
      "xs": "3px",
      "sm": "4px",
      "md": "8px",
      "lg": "16px",
      "xl": "20px",
      "pill": "1000px",
      "circle": "50%"
    },
    "borderWidth": {
      "0": "0px",
      "DEFAULT": "1px",
      "hairline": "1px",
      "thick": "2px",
      "focus": "4px"
    },
    "boxShadow": {
      "0": "none",
      "1": "0px 1px 3px 0px #0000000a",
      "2": "0px 4px 12px 0px #0b12201a",
      "3": "0px 4px 16px 0px #00000066"
    },
    "opacity": {
      "0": "0",
      "100": "1",
      "disabled": "0.5",
      "muted": "0.6"
    },
    "scale": {
      "100": "1",
      "hover": "1.05",
      "hover-large": "1.03",
      "hover-small": "1.08",
      "press": "0.98"
    },
    "transitionDuration": {
      "instant": "100ms",
      "fast": "150ms",
      "base": "200ms",
      "moderate": "300ms",
      "slow": "400ms",
      "reveal": "600ms",
      "reveal-long": "800ms",
      "counter": "1500ms",
      "toast-dismiss": "5000ms"
    },
    "transitionDelay": {
      "stagger": "300ms"
    },
    "transitionTimingFunction": {
      "standard": "cubic-bezier(0.17, 0.17, 0.34, 1)",
      "decelerate": "cubic-bezier(0.17, 0.17, 0.1, 1)",
      "emphasized": "cubic-bezier(0.9, 0, 0.1, 1)",
      "snap": "cubic-bezier(0.2, 0, 0, 1)",
      "spring": "cubic-bezier(0.835, 0.255, 0.17, 1.605)",
      "in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "out": "cubic-bezier(0, 0, 0.58, 1)",
      "in": "cubic-bezier(0.42, 0, 1, 1)"
    },
    "zIndex": {
      "base": "0",
      "sticky": "50",
      "dropdown": "100",
      "overlay": "900",
      "modal": "1000",
      "toast": "1100"
    },
    "aspectRatio": {
      "auto": "auto",
      "video": "16 / 9",
      "square": "1 / 1",
      "wide": "2 / 1",
      "portrait": "4 / 5",
      "banner": "10 / 3"
    },
    "maxWidth": {
      "none": "none",
      "full": "100%",
      "container": "1224px",
      "measure-body": "70ch",
      "measure-lead": "50ch",
      "measure-heading": "20ch",
      "measure-display": "15ch",
      "measure-display-tight": "10ch"
    },
    "extend": {
      "backgroundColor": {
        "canvas": "var(--color-bg-canvas)",
        "surface": "var(--color-bg-surface)",
        "subtle": "var(--color-bg-subtle)",
        "inverse": "var(--color-bg-inverse)",
        "brand": "var(--color-bg-brand)",
        "media": "var(--color-bg-media)",
        "overlay": "var(--color-bg-overlay)"
      },
      "textColor": {
        "primary": "var(--color-text-primary)",
        "secondary": "var(--color-text-secondary)",
        "tertiary": "var(--color-text-tertiary)",
        "disabled": "var(--color-text-disabled)",
        "inverse": "var(--color-text-inverse)",
        "accent": "var(--color-text-accent)",
        "on-action": "var(--color-text-on-action)"
      },
      "borderColor": {
        "default": "var(--color-border-default)",
        "strong": "var(--color-border-strong)",
        "input": "var(--color-border-input)",
        "input-hover": "var(--color-border-input-hover)",
        "control": "var(--color-border-control)",
        "DEFAULT": "var(--color-border-default)"
      },
      "outlineColor": {
        "focus": "var(--color-focus-ring)"
      },
      "ringColor": {
        "focus": "var(--color-focus-ring)"
      }
    }
  }
};
