
export const getSafe = (getValue: () => any, defaultValue?: any) => {
    try {
        return getValue();
    } catch (error) {
        console.warn(error);
        return defaultValue;
    }
};
