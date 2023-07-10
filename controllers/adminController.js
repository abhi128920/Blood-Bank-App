const userModel = require("../models/userModel");

// get Donar List
const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: donarData.length,
      message: "Donar List Fetched Succesfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar List API",
      error,
    });
  }
};

// get Hospital List
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: hospitalData.length,
      message: "Hospital List Fetched Succesfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API",
      error,
    });
  }
};

// get Org List
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: orgData.length,
      message: "Organisation List Fetched Succesfully",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Org List API",
      error,
    });
  }
};

// delete Donar
const deleteController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "Record Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting",
      error,
    });
  }
};

module.exports = {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteController,
};
