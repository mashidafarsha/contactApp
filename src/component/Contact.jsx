import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeContact } from "../redux/Features/contactSlice";

import { Link, useNavigate } from "react-router-dom";
function Contact() {
  const [load, setLoad] = useState(false);
  const [contacts, setContacts] = useState([]);
  const contact = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setContacts(contact);
    console.log(contact);
  }, [load]);

  const handleLoad = () => {
    setLoad(!load);
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    dispatch(removeContact(contactId));

    handleLoad();
  };

  const setEditContact = (contact) => {
    navigate("/editContact", { state: { contactData: contact } });
  };

  return (
    <div className="flex flex-col max-w-screen-xl min-h-screen mx-auto overflow-x-hidden bg-sky-200 rounded-2xl">
  {contacts.length !== 0 ? (
    <div className="w-full overflow-clip">
      <div className="flex flex-col max-w-screen-xl mx-auto overflow-x-hidden bg-sky-900 rounded-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600">
                  FirstName
                </th>
                <th className="px-6 py-3 text-left text-gray-600">
                  LastName
                </th>
                <th className="px-6 py-3 text-left text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contacts &&
                contacts.map((contact, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4">{contact.firstName}</td>
                      <td className="px-6 py-4">{contact.lastName}</td>
                      <td className="px-6 py-4">{contact.status}</td>
                      <td className="flex space-x-2">
                        <label
                          onClick={() => setEditContact(contact)}
                          className="btn btn-outline btn-primary"
                        >
                          Edit
                        </label>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="btn btn-outline btn-secondary"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      ) : (
<div className="flex flex-col min-h-screen mx-auto overflow-x-hidden bg-sky-200">
  <div className="m-4 bg-orange-200 sm:m-8 sm:w-96 h-36">
    <h1 className="mt-4 ml-4 text-2xl font-bold text-black sm:mt-12 sm:ml-12">The Contact List is Empty</h1>
    <button className="mt-4 ml-12 mr-4 btn btn-primary"><Link to="/addContact">Add contacts</Link></button>
  </div>
</div>

      )}
    </div>
  );
}

export default Contact;
