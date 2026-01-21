import { replacers, ReplacerType } from "@/replacers";
import { storage } from "wxt/utils/storage";

export type AppSettings = {
    replacers: ReplacerType[];
};

export const settingsStorage = storage.defineItem<AppSettings>(
    "local:settings",
    {
        fallback: {
            replacers,
        },
    },
);
