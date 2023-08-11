// import { deleteContact } from "@services/";
import { deleteContact } from "@services/contacts";
import Image from "next/image";
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";
import { CardProps } from "./types";

const Card = ({ _id, name, designation }: CardProps) => {

  const router = useRouter();
  const triggerDelete = async (_id: string) => {
   const res = await deleteContact(_id);

   console.log('res delete', res);
   
    if(res.success) {
      router.replace(router.asPath);
    }
  };

  return (
    <div className="w-full p-2">
      <div className="flex items-center h-full p-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="!w-16 !h-16 mr-4">
          <Link href={`/contacts/${_id}`}>
            <Image
              alt="user-profile-pic"
              width={500}
              height={500}
              className="flex-shrink-0 object-cover object-center bg-gray-100 rounded-full"
              src="https://www.w3schools.com/w3images/avatar2.png"
            />
          </Link>
        </div>
        <Link href={`/contacts/${_id}`} className="flex-grow">
          <div>
            <h2 className="font-medium text-gray-900 title-font">{name}</h2>
            <p className="text-gray-500">{designation}</p>
          </div>
        </Link>
        <div className="flex flex-col justify-end">
          <span className="w-6 h-6 cursor-pointer" onClick={() => triggerDelete(_id)}>
            <Image
              src="https://www.svgrepo.com/show/490950/delete.svg"
              width={500}
              height={500}
              className="bg-blend-screen"
              alt="delete-icon"
            />
          </span>
          <span className="w-6 h-6 mt-5 cursor-pointer">
            <Image
              src="https://www.svgrepo.com/show/366104/edit.svg"
              width={500}
              height={500}
              className="bg-blend-screen"
              alt="edit-icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
