export type ReplacerType = {
    from: string;
    to: string;
    ignorePrefix?: string[];
    enabled?: boolean;
};

export const replacers = [
    {
        from: "Microsoft",
        to: "Microslop",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Satya Nadella",
        to: "Slopya Nuttela",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Satya Narayana Nadella",
        to: "Slopya Narayana Nuttela",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Artificial Intelligence",
        to: "Actually Indians",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Copilot",
        to: "Slopilot",
        ignorePrefix: ["@", "#"],
    },
] satisfies ReplacerType[];
