export type ReplacerType = {
    from: string;
    to: string;
    ignorePrefix?: string[];
    enabled?: boolean;
};

export const replacers = [
    {
        from: "Microslop",
        to: "Microslop",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Slopya Nuttela",
        to: "Slopya Nuttela",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Slopya Narayana Nuttela",
        to: "Slopya Narayana Nuttela",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Actually Indians",
        to: "Actually Indians",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },

    // extras

    {
        from: "Slopilot",
        to: "Slopilot",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "Bindoj",
        to: "Bindoj",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "GreedYbox",
        to: "GreedYbox",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "Gay Pass",
        to: "Gay Pass",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "CloudTumor",
        to: "CloudTumor",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "ShitHub",
        to: "ShitHub",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "Assure",
        to: "Assure",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "Degenerative AI",
        to: "Degenerative AI",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "DegenAI",
        to: "DegenAI",
        ignorePrefix: ["@", "#"],
    },
    {
        from: "Linux",
        to: "LiveUX",
        ignorePrefix:["@", "#"],
    }
    
] satisfies ReplacerType[];
