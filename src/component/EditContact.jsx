import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/Features/contactSlice";
import { useNavigate } from "react-router-dom";
function EditContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const location = useLocation();
  const { contactData } = location.state;
const dispatch=useDispatch()
const navigate=useNavigate()
  useEffect(() => {
    setFirstName(contactData?.firstName);
    setLastName(contactData?.lastName);
    setStatus(contactData?.status);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
        alert("Please enter all details");
      }else{
        const updatedContact = {
            id: contactData.id,
            firstName,
            lastName,
            status,
          };
          dispatch(updateContact(updatedContact));
         navigate('/contact')
      }
   
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-2xl animate-fade-in-down"
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Edit Contact
          </h2>
          <div className="mb-6">
            <label
              className="block text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-purple-500 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-700"
              value={firstName}
              type="text"
              placeholder="Jane"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-purple-500 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-700"
              value={lastName}
              type="text"
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label
              className="block text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="last-name"
            >
              Status
            </label>
            <label className="cursor-pointer label">
              <span className="label-text">Active</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked={status === "Active"}
                value={"Active"}
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">InActive</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked={status === "InActive"}
                value={"InActive"}
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 text-white transition duration-300 ease-in-out bg-purple-500 rounded-full hover:bg-purple-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditContact;
