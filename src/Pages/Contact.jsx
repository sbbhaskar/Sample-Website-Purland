import React from "react";
import {
  PhoneIcon,
  UserIcon,
  Building2Icon,
  Globe2Icon,
  MessageSquareIcon,
} from "lucide-react";
import Form from "../Components/Form";
import Video from "../Components/Video";
import GoogleMap from "../Components/GoogleMap";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-black via-blue-900 to-black text-white min-h-screen">
      {/* Banner Video with Heading */}
      <Video />
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 md:px-16 py-8 gap-4 lg:gap-8">
        {/* Google Map */}
          <GoogleMap />
          {/* Contact Form */}
          <Form />

      </div>
    </div>
  );
};

export default Contact;