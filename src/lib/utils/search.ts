export function search<T extends Record<string, unknown>, U extends keyof T>
    (target: T[], excludeKeys: U[], q: string): T[] {
    return [...target].filter((item: T) => {
        let includes = false;
        let keys = Object.keys(item) as U[];

        if (keys.length) {
            keys = keys.filter((key) => !excludeKeys.includes(key));
            for (const key of keys) {
                if (item[key]) {
                    const value = normalizeString(String(item[key]));
                    includes = value.includes(normalizeString(q));

                    if (includes) {
                        return true;
                    }
                } else {
                    continue;
                }
            }
        }

        return includes;
    });
}

function normalizeString(text: string) {
    return text.normalize('NFD').replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}