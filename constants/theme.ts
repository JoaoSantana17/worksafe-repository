const theme = {
  colors: {
    primary: "#2563EB",
    primaryDark: "#1D4ED8",
    success: "#22C55E",
    warning: "#F97316",
    danger: "#EF4444",

    background: "#F3F4F6",
    surface: "#FFFFFF",

    text: "#0F172A",
    textMuted: "#6B7280",

    border: "#E5E7EB",
    shadow: "rgba(0,0,0,0.04)",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 28,
  },

  radius: {
    sm: 6,
    md: 10,
    lg: 14,
    pill: 999,
  },

  shadow: {
    card: {
      shadowColor: "rgba(0,0,0,0.06)",
      shadowOpacity: 1,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 8,
      elevation: 3,
    },
  },

  typography: {
  h2: { fontSize: 22, fontWeight: "700" as const },
  h3: { fontSize: 18, fontWeight: "600" as const },

  body: { fontSize: 15, color: "#4B5563" },

  label: {
    fontSize: 12,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
    color: "#6B7280",
  },

  caption: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "400" as const,
  },
 },
};

export default theme;
