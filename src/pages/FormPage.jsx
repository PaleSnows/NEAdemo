import React from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";

const FormsInformation = () => {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    "Forms / Information",
    "Publications / Reports",
    "Acts / Regulations",
    "Press Releases",
  ];

  return (
    <div className=" p-10">
      <div className="flex flex-col md:flex-row justify-between p-2 ">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {t("title")}
          </h2>
          <ul>
            {t("formLinks", { returnObjects: true }).map((form, index) => (
              <li
                key={index}
                className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md rounded-md p-3"
              >
                <div className="flex flex-col md:items-center mb-2 md:mb-0">
                  <span className="text-sm md:text-base text-gray-600 md:mr-8 mb-1 md:mb-0 dark:text-white">
                    {form.date}
                  </span>
                  <a href={form.links} className="text-blue-600 pr-2 hover:underline">
                    {form.download}
                  </a>
                </div>
                <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
                  <span className="text-sm md:text-base mr-2">
                    {form.title}
                  </span>
                  <FaFilePdf className="text-red-500 flex-shrink-0" size={20} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <span className="text-sm text-gray-600 dark:text-white">
              {t("showingResults", { start: 1, end: 5, total: 23 })}
            </span>
            <div className="flex mt-2">
              <button className="px-3 py-1 border border-gray-300 bg-blue-500 text-white">
                1
              </button>
              {[2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="px-3 py-1 border border-gray-300 text-blue-600"
                >
                  {num}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 text-blue-600">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:ml-4 px-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {t("formQuickLinks")}
          </h2>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <a href={t(`formLink${index+1}`)} className="hover:ml-4 text-lg hover:text-blue-800 transition-all duration-300 ease-in-out">
                  {t(`quickLink${index + 1}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormsInformation;
