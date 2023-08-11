import { PropsWithChildren, useState } from "react";
import { ContactForm, Navbar } from "@components";

const RootLayout = (props: PropsWithChildren) => {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <div className="grid min-h-screen grid-rows-header bg-zinc-100">
        <Navbar />
        <div className="container mx-auto mt-20">
          {props.children}
          <button
            className="absolute px-6 py-4 text-white bg-blue-600 rounded-full bottom-7 right-3 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={() => setShowFormModal(true)}
          >
            <span className="text-3xl font-bold">+</span>
          </button>
        </div>
      </div>
      <ContactForm
        showFormModal={showFormModal}
        onClose={() => setShowFormModal(false)}
        onEdit={() => setShowFormModal(true)}
      />
    </>
  );
};

export default RootLayout;
