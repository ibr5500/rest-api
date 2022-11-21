import {
  addnewContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/controller";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    .post(addnewContact);

  app
    .route("/contact/:contactID")
    .get(getContactWithId)
    .put(updateContact)

    .delete(deleteContact);
};

export default routes;
