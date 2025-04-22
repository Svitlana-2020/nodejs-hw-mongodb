import Contacts from '../db/models/Contacts.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';
import { sortList } from '../constants/index.js';

const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'contactId',
  sortOrder = sortList[0],
}) => {
  const skip = (page - 1) * perPage;
  const items = await Contacts.find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await Contacts.find().countDocuments();
  const paginationData = calcPaginationData({ page, perPage, totalItems });

  return {
    items,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export default getAllContacts;
