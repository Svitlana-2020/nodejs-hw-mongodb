import { sortList } from "../constants/index.js"

export const parseSortParams = ({sortBy, sortOrder}, contactsSortFields) => {
const parsedSortOrder = sortList.includes(sortOrder) ? sortOrder : sortList[0];
const parsedSortBy = contactsSortFields.includes(sortBy) ? sortBy : "contactId";

return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
}
}