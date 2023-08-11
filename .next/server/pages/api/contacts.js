"use strict";
(() => {
var exports = {};
exports.id = 617;
exports.ids = [617];
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

/***/ 3834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8377);
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7312);


async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "GET":
            {
                return getContacts(req, res);
            }
        case "POST":
            {
                return addContact(req, res);
            }
        // case 'PUT': {
        //     return updateContact(req, res);
        // }
        case "DELETE":
            {
                return deleteContact(req, res);
            }
    }
}
async function getContacts(req, res) {
    // connect to the database
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    // fetch the contacts
    const data = await _models_contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
    // return the contacts
    if (data?.length > 0) {
        return res.status(200).json({
            result: data,
            success: true
        });
    }
    return res.status(400).json({
        result: [],
        success: false
    });
}
async function addContact(req, res) {
    // connect to the database
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    // Fetch req
    const payload = typeof (req?.body) === "object" ? req?.body : JSON.parse(req?.body);
    if (!payload?.name || !payload?.designation || !payload?.email || !payload?.mobile) {
        return res.status(400).json({
            result: "Required field not found",
            success: false
        });
    }
    // Create contact
    await _models_contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create(payload);
    return res.status(201).json({
        result: "Contact Created Successfully",
        success: true
    });
}
async function deleteContact(req, res) {
    const id = req?.body;
    const record = {
        _id: new Object(id)
    };
    // connect to the database
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    // Delete record
    const result = await _models_contact__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.deleteOne(record);
    if (!result?.acknowledged) {
        return res.status(400).json({
            result: "Something went wrong! Please try after some time",
            success: false
        });
    }
    return res.status(200).json({
        result: "Contact Deleted Successfully",
        success: true
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3834));
module.exports = __webpack_exports__;

})();