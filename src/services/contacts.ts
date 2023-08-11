export const getContacts = async () => {
    console.log('process env', process.env.domainUrl);
    const res = await fetch(`${process.env.domainUrl}/api/contacts`,{
        method: "GET",
      }
    );
    const parsedRes = await res.json();
    return parsedRes;
};

export const addContact = async (payload: any) => {
    console.log('process env ----', process.env.domainUrl);
    
    const res = await fetch(`${process.env.domainUrl}/api/contacts`, {
        method: "POST",
        body: payload,
        headers: {
          accept: "application/json",
        },
      }
    );
    const response = await res.json();
  
    return response
  };

  export const deleteContact = async (id: string)  => {
    const res = await fetch(`${process.env.domainUrl}/api/contacts`, {
        method: "DELETE",
        body: id,
        headers: {
          accept: "application/json",
        },
      }
    );
    const data = await res?.json();
  
    return data;
  };

  export const getContactDetail = async (id: string) => {
    const res = await fetch(`${process.env.domainUrl}/api/contacts/${id}`, {
      method: 'GET'
    });
    const data = await res?.json();
  
    return data;
  };
  