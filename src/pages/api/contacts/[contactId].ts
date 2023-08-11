import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";
import connectToDb from '../../../lib/mongodb';
import Contact from "../../../models/contact";
import { contacts } from "../../../utils/db";

type contactsInterface = {
    name: string,
    designation: string,
    id: number
}

export default async function getContactDetail(
    req: NextApiRequest,
    res: NextApiResponse<{result: contactsInterface | string, success: boolean}>
    ) {
    await connectToDb();
    const contacts = await Contact.find();
    const contactById = contacts.filter((c) => c?._id?.toString() === req?.query?.contactId)
    
    return contactById.length === 0 ? res.status(200).json({result: "No Data Found", success: false}) : res.status(200).json({result: contactById[0], success: true});
}