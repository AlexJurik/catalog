export function search<T extends Record<string, unknown>, U extends keyof T>
    (target: T[], excludeKeys: U[], q: string): T[] {
    return [...target].filter((item: T) => {
        let includes = false;
        let keys = Object.keys(item) as U[];

        if (keys.length) {
            keys = keys.filter((key) => !excludeKeys.includes(key));
            for (const key of keys) {
                const value = (String(item[key])).toLowerCase();
                includes = value.includes(q.toLowerCase());

                if (includes) {
                    return true;
                }
            }
        }

        return includes;
    });
}