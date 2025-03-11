"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    router.push("/read-process");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-xl mx-auto bg-white mt-28 rounded-xl shadow-l px-4 mb-[260px] py-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Welcome Form
        </h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 capitalize text-gray-600">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full text-center cursor-pointer bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MyForm;
