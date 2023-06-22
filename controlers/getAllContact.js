import { Contact } from '../schemas/contacts.js';
// import { HttpError } from "../helpers/HttpErrors.js";
// import { ctrlWrapper } from "../helpers/ctrlWraper.js";

export const getAllContacts = async (req, res, next) => {
    const results = await Contact.find()
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts: results,
      },
    }) 
}