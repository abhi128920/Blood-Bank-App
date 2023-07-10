const testController = (req, res) => {
  res.status(200).send({
    message: "test route 4",
    success: true,
  });
};

module.exports = { testController };
