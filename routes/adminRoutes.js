const express = require("express");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteController,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router object
const router = express.Router();

// routes

// GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

// DELETE DONAR
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteController);

// GET || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

module.exports = router;
