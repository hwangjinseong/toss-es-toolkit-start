type NotFalsey<T> = Exclude<T, false | null | 0 | "" | undefined>;

declare function compact<T>(arr: readonly T[]): Array<NotFalsey<T>>;

export { compact };
