import { getContactDetail } from "@services/contacts";
import Image from "next/image";

export default function ContactDetail({ data }: any) {
  if (data?.success) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-2/5 lg:mx-6 w-full h-96 rounded-lg lg:h-[24rem]"
              src="https://www.w3schools.com/w3images/avatar2.png"
              // src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8 lg:w-3/5 lg:px-6 lg:mt-0">
              <h3 className="text-2xl font-medium text-blue-500 dark:text-white">
                Name: {data?.result?.name}
              </h3>
              {/* <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p> */}

              <h3 className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                Email: {data?.result?.email}
              </h3>
              <h3 className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                Mobile: {data?.result?.mobile}
              </h3>
              <h3 className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">
                Designation: {data?.result?.designation}
              </h3>
              <div className="flex mt-5">
                <span className="w-6 h-6 mr-3 cursor-pointer">
                  <Image
                    src="https://www.svgrepo.com/show/490950/delete.svg"
                    width={500}
                    height={500}
                    className="bg-blend-screen"
                    alt="delete-icon"
                  />
                </span>
                <span className="w-6 h-6 cursor-pointer">
                  <Image
                    src="https://www.svgrepo.com/show/366104/edit.svg"
                    width={500}
                    height={500}
                    className="bg-blend-screen"
                    alt="edit-icon"
                  />
                </span>
              </div>
              {/* <p className="text-gray-600 dark:text-gray-300">{data?.result?.designation}</p> */}
            </div>
          </div>
        </div>
        {/* // <div>
            //     <h1>{data?.result?.name}</h1>
            //     <h1>{data?.result?.designation}</h1>
            // </div> */}
      </section>
    );
  }

  return <h1>{data?.result}</h1>;
}

// This function is used for server side render this page
// This function gets called on every request
export async function getServerSideProps({ query }: any) {
  const param = query.contactId;

  // Fetch data from external API
  const data = await getContactDetail(param);

  // Pass data to the page via props
  return { props: { data } };
}
