const routes = (elem) => {
  elem
    .route("/contact")
    .get(
      (req, res, next) => {
        // next middelware
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      (req, res, next) => {
        return res.send("GET request SUCCESSFUL!");
      }
    )
    .post((req, res) => {
      res.send("POST request SUCCESSFUL!");
    });

  elem
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("PUT request SUCCESSFUL!");
    })
    .delete((req, res) => {
      res.send("DELET request SUCCESSFUL!");
    });
};

export default routes;
