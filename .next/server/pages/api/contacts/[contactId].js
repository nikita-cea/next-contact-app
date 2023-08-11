"use strict";
(() => {
var exports = {};
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// mongodb.ts

const uri = "mongodb+srv://nikitadive:Mongodb@cluster0.j7c9gug.mongodb.net/contactDB?retryWrites=true&w=majority";
if (!uri) {
    throw new Error("Add Mongo URI to .env.local");
}
const connectToDb = async ()=>{
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri).then(()=>console.log("mongo db connected"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDb);


/***/ }),

/***/ 7312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const contactModel = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: String,
    email: String,
    mobile: String,
    designation: String,
    id: String
});
const Contact = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.contacts || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("contacts", contactModel);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 5555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getContactDetail)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8377);
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7312);


async function getContactDetail(req, res) {
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const contacts = await _models_contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
    const contactById = contacts.filter((c)=>c?._id?.toString() === req?.query?.contactId);
    return contactById.length === 0 ? res.status(200).json({
        result: "No Data Found",
        success: false
    }) : res.status(200).json({
        result: contactById[0],
        success: true
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5555));
module.exports = __webpack_exports__;

})();