import Contacts from '../db/models/Contacts.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';
import { sortList } from '../constants/index.js';

const getAllContacts = async ({
  userId,
  page = 1,
  perPage = 10,
  sortBy = 'contactId',
  sortOrder = sortList[0],
}) => {
  const skip = (page - 1) * perPage;
  const data = await Contacts.find({userId})
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await Contacts.find({userId}).countDocuments();
  const paginationData = calcPaginationData({ page, perPage, totalItems });

  return {
    data,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export default getAllContacts;
