"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./common/Header";

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
  const [tableData, setTableData] = useState<FormData[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("userTableData") || "[]");
      setTableData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userTableData", JSON.stringify(tableData));
  }, [tableData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill out all fields.");
      return;
    }
    setTableData([...tableData, formData]);
    setFormData({ firstName: "", lastName: "", email: "" });
    router.push("/read-process");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-l px-4">
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
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
