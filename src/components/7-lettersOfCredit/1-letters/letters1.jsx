import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./letters1.css";

export default function Letters1() {
    const [activeTab, setActiveTab] = useState("new");

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-10 mt-5 " style={{ placeItems: "center" }}>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-100">
                            <div className="relative w-full md:mb-0" style={{ width: "80%" }}>
                                <input type="text" placeholder="Search anything here" className="w-full p-3 rounded-lg border border-gray-300" />
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-bell text-gray-400"></i>
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700">John Smith</span>
                                    </div>
                                    <i className="fas fa-caret-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 mb-6 w-100">
                            <span>Dashboard</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span>Letters of credit</span>
                            <i className="fas fa-chevron-right mx-2"></i>
                            <span className="font-bold text-gray-700">Create New LC</span>
                        </div>
                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">4</div>

                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    2
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    3
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    4
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>
                        <div className="table p-4 whiteaBg">
                            {/* Tabs */}
                            <div className="flex border-b w-100 " style={{ placeContent: "center" }}>
                                <button style={{ width: "33%" }}
                                    onClick={() => setActiveTab("new")}
                                    className={`p-2 ${activeTab === "new" ? "bg-red-500 text-white" : "bg-gray-100"}`}
                                >
                                    Create new invoice
                                </button>
                                <button style={{ width: "33%" }}
                                    onClick={() => setActiveTab("existing")}
                                    className={`p-2 ${activeTab === "existing" ? "bg-red-500 text-white" : "bg-gray-100"}`}
                                >
                                    Choose from existing invoices
                                </button>
                                <button style={{ width: "33%" }}
                                    onClick={() => setActiveTab("import")}
                                    className={`p-2 ${activeTab === "import" ? "bg-red-500 text-white" : "bg-gray-100"}`}
                                >
                                    Import Invoice
                                </button>
                            </div>

                            {/* Content */}
                            <div className="mt-4">
                                {activeTab === "new" && (
                                    <div>
                                        {/* محتوى Create new invoice */}
                                        <div className="p-6">
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                <div>
                                                    <label htmlFor="recipient-name" className="block text-gray-700">Recipient Name</label>
                                                    <div className="relative mt-1">
                                                        <input type="text" id="recipient-name" className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Bishoy Mikhael" />
                                                        <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="reference-number" className="block text-gray-700">Reference Number (optional)</label>
                                                    <input type="text" id="reference-number" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" defaultValue="12345" />
                                                </div>
                                                <div>
                                                    <label htmlFor="invoice-date" className="block text-gray-700">Invoice Date (optional)</label>
                                                    <div className="relative mt-1">
                                                        <input type="text" id="invoice-date" className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="12/12/2021" />
                                                        <FontAwesomeIcon icon={faCalendarAlt} className="absolute right-3 top-3 text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table overflow-x-auto">
                                                <table className=" bg-gray-100 rounded-md">
                                                    <thead>
                                                        <tr>
                                                            <th className="py-2 px-4 text-left text-gray-700">Item code</th>
                                                            <th className="py-2 px-4 text-left text-gray-700">Description</th>
                                                            <th className="py-2 px-4 text-left text-gray-700">QTY</th>
                                                            <th className="py-2 px-4 text-left text-gray-700">Unit prices</th>
                                                            <th className="py-2 px-4 text-left text-gray-700">Tax rate</th>
                                                            <th className="py-2 px-4 text-left text-gray-700">Amount</th>
                                                            <th className="py-2 px-4 text-left text-gray-700"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='whiteBg' style={{width:"5px"}}>
                                                        <tr >
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/3"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 text-center w-1/12"><button className="text-red-500"><FontAwesomeIcon icon={faTimes} /></button></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/3"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 text-center w-1/12"><button className="text-red-500"><FontAwesomeIcon icon={faTimes} /></button></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/3"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/12"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 w-1/6"><input type="text" className="w-full border border-gray-300 rounded-md py-1 px-2 text-gray-700" /></td>
                                                            <td className="py-2 px-4 text-center w-1/12"><button className="text-red-500"><FontAwesomeIcon icon={faTimes} /></button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                    <div className="mt-4">
                                                        <button className="w-full py-2 border whiteBg border-red-500 text-red-500 rounded-md"><FontAwesomeIcon icon={faPlus} /></button>
                                                    </div>
                                            </div>
                                            <div className="flex gap-5 center mt-6 w-100" style={{placeContent:"center"}}>
                                                <button className="py-2 px-6 backLetter rounded-md">Save & Exit</button>
                                                <button className="py-2 px-6  text-white rounded-md nextLetter">Next</button>
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {activeTab === "existing" && (
                                    <div>
                                        {/* محتوى Choose from existing invoices */}
                                        <p>هنا محتوى اختيار فاتورة موجودة.</p>
                                    </div>
                                )}
                                {activeTab === "import" && (
                                    <div>
                                        {/* محتوى Import Invoice */}
                                        <p>هنا محتوى استيراد فاتورة.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
