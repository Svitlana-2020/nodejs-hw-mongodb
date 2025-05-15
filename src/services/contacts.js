import Contacts from '../db/models/Contacts.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';
import { sortList } from '../constants/index.js';

const getAllContacts = async ({
  userId,
  page = 1,
  perPage = 10,
  sortBy = 'contactId',
  sortOrder = sortList[0],
  contactType,
}) => {
  const skip = (page - 1) * perPage;
  const filter = { userId };

  if (contactType) {
    filter.contactType = contactType; 
  }
  const items = await Contacts.find(filter)
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await Contacts.countDocuments(filter);
  const paginationData = calcPaginationData({ page, perPage, totalItems });

  return {
    userId,
    items,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export default getAllContacts;
