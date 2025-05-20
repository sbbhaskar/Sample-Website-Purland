import React from "react";
import {
  PhoneIcon,
  UserIcon,
  Building2Icon,
  Globe2Icon,
  MessageSquareIcon,
} from "lucide-react";

const Form = () => {
  return (
    // <form className="w-full flex flex-col justify-start space-y-2">
    <form className="w-full lg:w-1/3 flex flex-col justify-start space-y-2">
      <div className="flex items-center space-x-2">
        <UserIcon className="w-5 h-5" />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="First Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <UserIcon className="w-5 h-5" />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Building2Icon className="w-5 h-5" />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Company Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Globe2Icon className="w-5 h-5" />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="url"
          placeholder="Company Website URL"
        />
      </div>

      <div className="flex items-center space-x-2">
        <PhoneIcon className="w-5 h-5" />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          type="tel"
          placeholder="Contact Number"
          required
        />
      </div>

      <div className="flex items-start space-x-2">
        <MessageSquareIcon className="w-5 h-5 mt-2" />
        <textarea
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          rows="4"
          placeholder="Message / Query"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-600 p-3 rounded font-semibold mt-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
