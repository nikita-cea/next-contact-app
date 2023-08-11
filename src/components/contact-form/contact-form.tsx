import { useState, FormEvent } from "react";
import { useRouter } from "../../../node_modules/next/router";
import SuccessToast from "../../common/toast";
import { addContact } from "@services/contacts";

const ContactForm = ({
  showFormModal,
  onClose,
}: {
  showFormModal: boolean;
  onClose: () => void;
  onEdit: () => void;
}) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const req = {
      name: name,
      designation: designation,
      email: email,
      mobile: mobile
    };
    
    const response = await addContact(JSON.stringify(req));

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

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ${
        showFormModal ? "block" : "hidden"
      }`}
    >
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-center text-gray-700 capitalize">
          Add Contact
        </h2>

        <form method="POST" onSubmit={submitForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="mobile">
                Mobile
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                maxLength={10}
                onChange={(e) => setMobile(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="designation">
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                onChange={(e) => setDesignation(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="justify-end py-2 mt-4 sm:flex">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            >
              Cancel
            </button>

            <button
              className="flex w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              type="submit"
            >
              Save
              {isLoading ? (
                <svg
                  className="w-5 h-5 ml-2 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : null}
            </button>
          </div>
        </form>
      </section>
      {/* {isSuccess ? <SuccessToast /> : null} */}
    </div>
  );
};

export default ContactForm;
