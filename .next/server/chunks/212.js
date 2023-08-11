exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 1115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Yp: () => (/* reexport */ AlternateNavbar),
  Zb: () => (/* reexport */ card_Card),
  t: () => (/* reexport */ contact_form),
  iZ: () => (/* reexport */ layout_with_sidebar_LayoutWithSidebar),
  wp: () => (/* reexport */ navbar_Navbar),
  eD: () => (/* reexport */ root_layout_RootLayout),
  YE: () => (/* reexport */ sidebar_Sidebar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.tsx



const Navbar = ()=>{
    const { pathname } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "fixed z-10 flex items-center justify-between w-full h-16 px-4 bg-white shadow-sm text-zinc-500",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-lg font-bold text-center",
                children: "Contact App"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-sm text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: `mr-2 ${pathname === "/" ? "text-blue-600" : ""}`,
                        children: "Server Side Rendering"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/static",
                        className: `${pathname === "/static" ? "text-blue-600" : ""}`,
                        children: "Static Site Generation"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/alternate-navbar/AlternateNavbar.tsx

const AlternateNavbar_Navbar = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "fixed z-10 flex items-center w-full h-16 px-4 bg-white shadow-sm text-zinc-500",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-lg font-bold",
                children: "Contact App"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex-grow"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "md:hidden",
                onClick: props.onMenuButtonClick,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    className: "w-6 h-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M4 18L20 18",
                            stroke: "#000000",
                            strokeWidth: 2,
                            strokeLinecap: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M4 12L20 12",
                            stroke: "#000000",
                            strokeWidth: 2,
                            strokeLinecap: "round"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M4 6L20 6",
                            stroke: "#000000",
                            strokeWidth: 2,
                            strokeLinecap: "round"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const AlternateNavbar = (AlternateNavbar_Navbar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/constants/navitems.ts
const defaultNavItems = [
    {
        label: "Server Side Rendering",
        href: "/"
    },
    {
        label: "Static Site Generation",
        href: "/static"
    }
];

// EXTERNAL MODULE: external "usehooks-ts"
var external_usehooks_ts_ = __webpack_require__(2140);
;// CONCATENATED MODULE: ./src/components/sidebar/Sidebar.tsx





const Sidebar = ({ open, navItems = defaultNavItems, setOpen })=>{
    const ref = (0,external_react_.useRef)(null);
    (0,external_usehooks_ts_.useOnClickOutside)(ref, ()=>{
        setOpen(false);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `flex flex-col justify-between bg-indigo-700 text-zinc-50 md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[220px] md:-translate-x-0  ${!open ? "-translate-x-full" : ""}`,
        ref: ref,
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "top-0 md:sticky md:top-16",
            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "flex flex-col gap-2 py-2",
                children: navItems.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: item.href,
                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "flex items-center gap-4 p-2 mx-2 text-indigo-100 transition-colors duration-300 rounded-md hover:bg-indigo-900",
                            children: item.label
                        })
                    }, index);
                })
            })
        })
    });
};
/* harmony default export */ const sidebar_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/root-layout/RootLayout.tsx



const RootLayout = (props)=>{
    const [showFormModal, setShowFormModal] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid min-h-screen grid-rows-header bg-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(navbar_Navbar, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto mt-20",
                        children: [
                            props.children,
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "absolute px-6 py-4 text-white bg-blue-600 rounded-full bottom-7 right-3 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80",
                                onClick: ()=>setShowFormModal(true),
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text-3xl font-bold",
                                    children: "+"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(contact_form, {
                showFormModal: showFormModal,
                onClose: ()=>setShowFormModal(false),
                onEdit: ()=>setShowFormModal(true)
            })
        ]
    });
};
/* harmony default export */ const root_layout_RootLayout = (RootLayout);

;// CONCATENATED MODULE: ./src/components/layout-with-sidebar/LayoutWithSidebar.tsx



const LayoutWithSidebar = (props)=>{
    const [sidebarOpen, setSidebarOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid min-h-screen grid-rows-header bg-zinc-100",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx(AlternateNavbar, {
                    onMenuButtonClick: ()=>setSidebarOpen((prev)=>!prev)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid md:grid-cols-sidebar",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(sidebar_Sidebar, {
                        open: sidebarOpen,
                        setOpen: setSidebarOpen
                    }),
                    props.children
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_with_sidebar_LayoutWithSidebar = (LayoutWithSidebar);

// EXTERNAL MODULE: ./src/services/contacts.ts
var contacts = __webpack_require__(8154);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./src/components/card/Card.tsx
// import { deleteContact } from "@services/";





const Card = ({ _id, name, designation })=>{
    const router = (0,next_router.useRouter)();
    const triggerDelete = async (_id)=>{
        const res = await (0,contacts/* deleteContact */.GK)(_id);
        console.log("res delete", res);
        if (res.success) {
            router.replace(router.asPath);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-full p-2",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-center h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "!w-16 !h-16 mr-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `/contacts/${_id}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "user-profile-pic",
                            width: 500,
                            height: 500,
                            className: "flex-shrink-0 object-cover object-center bg-gray-100 rounded-full",
                            src: "https://www.w3schools.com/w3images/avatar2.png"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: `/contacts/${_id}`,
                    className: "flex-grow",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-medium text-gray-900 title-font",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-500",
                                children: designation
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col justify-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "w-6 h-6 cursor-pointer",
                            onClick: ()=>triggerDelete(_id),
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "https://www.svgrepo.com/show/490950/delete.svg",
                                width: 500,
                                height: 500,
                                className: "bg-blend-screen",
                                alt: "delete-icon"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "w-6 h-6 mt-5 cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "https://www.svgrepo.com/show/366104/edit.svg",
                                width: 500,
                                height: 500,
                                className: "bg-blend-screen",
                                alt: "edit-icon"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const card_Card = (Card);

;// CONCATENATED MODULE: ./src/components/contact-form/contact-form.tsx




const ContactForm = ({ showFormModal, onClose })=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [designation, setDesignation] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [mobile, setMobile] = (0,external_react_.useState)("");
    const [isSuccess, setIsSuccess] = (0,external_react_.useState)(false);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const router = (0,next_router.useRouter)();
    // Call this function whenever you want to
    // refresh props!
    const refreshData = ()=>{
        router.replace(router.asPath);
    };
    const submitForm = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const req = {
            name: name,
            designation: designation,
            email: email,
            mobile: mobile
        };
        const response = await (0,contacts/* addContact */.uK)(JSON.stringify(req));
        if (response?.success) {
            onClose();
            refreshData();
            setIsLoading(false);
            // setIsSuccess(true);
            alert(response?.result);
        } else {
            setIsLoading(false);
            alert(response?.result);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ${showFormModal ? "block" : "hidden"}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "text-lg font-semibold text-center text-gray-700 capitalize",
                    children: "Add Contact"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    method: "POST",
                    onSubmit: submitForm,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "text-gray-700 ",
                                            htmlFor: "name",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            id: "name",
                                            name: "name",
                                            type: "text",
                                            onChange: (e)=>setName(e.target.value),
                                            className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "text-gray-700 ",
                                            htmlFor: "email",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "text-gray-700 ",
                                            htmlFor: "mobile",
                                            children: "Mobile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            id: "mobile",
                                            name: "mobile",
                                            type: "text",
                                            maxLength: 10,
                                            onChange: (e)=>setMobile(e.target.value),
                                            className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "text-gray-700 ",
                                            htmlFor: "designation",
                                            children: "Designation"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            id: "designation",
                                            name: "designation",
                                            type: "text",
                                            onChange: (e)=>setDesignation(e.target.value),
                                            className: "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "justify-end py-2 mt-4 sm:flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    onClick: onClose,
                                    className: "w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40",
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "flex w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40",
                                    type: "submit",
                                    children: [
                                        "Save",
                                        isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                            className: "w-5 h-5 ml-2 text-white animate-spin",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                    className: "opacity-25",
                                                    cx: 12,
                                                    cy: 12,
                                                    r: 10,
                                                    stroke: "currentColor",
                                                    strokeWidth: 4
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                })
                                            ]
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const contact_form = (ContactForm);

;// CONCATENATED MODULE: ./src/components/index.tsx









/***/ }),

/***/ 9212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1115);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);



function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .RootLayout */ .eD, {
            children: page
        }));
    return getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 8154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GK: () => (/* binding */ deleteContact),
/* harmony export */   K2: () => (/* binding */ getContacts),
/* harmony export */   th: () => (/* binding */ getContactDetail),
/* harmony export */   uK: () => (/* binding */ addContact)
/* harmony export */ });
const getContacts = async ()=>{
    console.log("process env", "http://localhost:3000");
    const res = await fetch(`${"http://localhost:3000"}/api/contacts`, {
        method: "GET"
    });
    const parsedRes = await res.json();
    return parsedRes;
};
const addContact = async (payload)=>{
    console.log("process env ----", "http://localhost:3000");
    const res = await fetch(`${"http://localhost:3000"}/api/contacts`, {
        method: "POST",
        body: payload,
        headers: {
            accept: "application/json"
        }
    });
    const response = await res.json();
    return response;
};
const deleteContact = async (id)=>{
    const res = await fetch(`${"http://localhost:3000"}/api/contacts`, {
        method: "DELETE",
        body: id,
        headers: {
            accept: "application/json"
        }
    });
    const data = await res?.json();
    return data;
};
const getContactDetail = async (id)=>{
    const res = await fetch(`${"http://localhost:3000"}/api/contacts/${id}`, {
        method: "GET"
    });
    const data = await res?.json();
    return data;
};


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;