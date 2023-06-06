import React, { useState } from "react";
import { setaddContact } from "../redux/Features/contactSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function AddContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
const navigate=useNavigate()
  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Please enter all details");
    } else{
      const newContact = {
        id: Date.now(),
        firstName,
        lastName,
        status,
      };
      dispatch(setaddContact(newContact));
      setFirstName("");
      setLastName("");
      navigate('/contact')
    }
   
  

  };
  console.log(status, "kkkk");

  return (
    <>
   
      <div className="flex items-center justify-center max-w-screen-xl min-h-screen mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-2xl animate-fade-in-down"
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Add Contact</h2>
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

export default AddContact;
