const parseNumber = (value, defaultValue) => {
    if (typeof value !== "string") return defaultValue;

    const parseValue = parseInt(value);
    if (Number.isNaN(parseValue)) return defaultValue;

    return parseValue;
}

export const parsePaginationParams = ({page, perPage}) => {
const parsedPage = parseNumber(page, 1);
const parsedPerPage = parseNumber(perPage, 10);

return {
    page: parsedPage,
    perPage: parsedPerPage,
}

}