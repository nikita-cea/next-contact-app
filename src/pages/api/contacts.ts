import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDb from '../../lib/mongodb';
import Contact from '../../models/contact';
import User from '../../models/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getContacts(req, res);
        }

        case 'POST': {
            return addContact(req, res);
        }

        // case 'PUT': {
        //     return updateContact(req, res);
        // }

        case 'DELETE': {
            return deleteContact(req, res);
        }
    }
}

async function getContacts(req: NextApiRequest, res: NextApiResponse) {
    // connect to the database
    await connectToDb();

    // fetch the contacts
    const data = await Contact.find();

    // return the contacts
    if (data?.length > 0) {
        return res.status(200).json({
            result: data,
            success: true,
        });
    }

    return res.status(400).json({
        result: [],
        success: false,
    });

}

async function addContact(req: NextApiRequest, res: NextApiResponse) {
    // connect to the database
    await connectToDb();

    // Fetch req
    const payload = (typeof(req?.body) === "object") ? req?.body : JSON.parse(req?.body);
    
    if (!payload?.name || !payload?.designation || !payload?.email || !payload?.mobile) {
        return res.status(400).json({ result: "Required field not found", success: false });
    }

    // Create contact
    await Contact.create(payload);
    
    return res.status(201).json({ result: "Contact Created Successfully", success: true });
}

async function deleteContact(req: NextApiRequest, res: NextApiResponse) {
    const id = req?.body;
    const record = {_id: new Object(id)};

    // connect to the database
    await connectToDb();

    // Delete record
    const result = await Contact.deleteOne(record);

    if(!result?.acknowledged) {
        return res.status(400).json({ result: "Something went wrong! Please try after some time", success: false });
    }
    
    return res.status(200).json({ result: "Contact Deleted Successfully", success: true });
}