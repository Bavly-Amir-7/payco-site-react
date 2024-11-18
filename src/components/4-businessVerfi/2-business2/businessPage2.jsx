import React, { useState } from 'react';
import "./business2.css";
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import selectedImage from "../../images/Group 138.png";
import { FaRegCalendarAlt } from "react-icons/fa";


function Business2() {
    const [owners, setOwners] = useState([
        { firstName: '', middleName: '', lastName: '', citizenship: 'United Kingdom', dob: '', address: '', ownership: '' },
    ]);

    const addOwner = () => {
        setOwners([...owners, { firstName: '', middleName: '', lastName: '', citizenship: 'United Kingdom', dob: '', address: '', ownership: '' }]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedOwners = [...owners];
        updatedOwners[index][field] = value;
        setOwners(updatedOwners);
    };

    return (
        <>
            <div className="d-flex">
                <div className="asideComponent fixed" style={{ height: "100%" }}>
                    <Aside />
                </div>



                <div className="mainVerf">
                    <h1 className="text-2xl font-bold mb-6 text-center">Business Verification</h1>
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-between">

                            <div className="w-10 h-10 redBg text-white rounded-full flex items-center justify-center">1</div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">2</div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">3</div>
                            <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">4</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-center flex-1">Account Type</p>
                        <p className="text-center flex-1">Personal Details</p>
                        <p className="text-center flex-1">Identity Verification</p>
                        <p className="text-center flex-1">Review and Additional Documents</p>
                    </div>

                    <div className='businessForm2'>
                        {owners.map((owner, index) => (
                            <div key={index} className="bg-white p-6 shadow rounded-md mb-6">
                                <div className="flex items-center mb-4">
                                    <input type="radio" className="mr-2" id="operationalEntity" name="entityType" />
                                    <label htmlFor="operationalEntity" className="text-lg font-medium">Operational Legal Entity or Partnership</label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">First Name*</label>
                                        <div className="relative">
                                            <input type="text" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholder="Changeable" value={owner.firstName} onChange={(e) => handleInputChange(index, 'firstName', e.target.value)} />
                                            <i className="fas fa-user absolute left-3 top-2.5 text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Middle Name (Optional)</label>
                                        <div className="relative">
                                            <input type="text" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholder="Changeable" value={owner.middleName} onChange={(e) => handleInputChange(index, 'middleName', e.target.value)} />
                                            <i className="fas fa-user absolute left-3 top-2.5 text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Last Name*</label>
                                        <div className="relative">
                                            <input type="text" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholder="Changeable" value={owner.lastName} onChange={(e) => handleInputChange(index, 'lastName', e.target.value)} />
                                            <i className="fas fa-user absolute left-3 top-2.5 text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Citizenship*</label>
                                    <select className="w-full border border-gray-300 rounded-md p-2" value={owner.citizenship} onChange={(e) => handleInputChange(index, 'citizenship', e.target.value)}>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Date of Birth*</label>
                                        <div className="relative">
                                            <input type="date" className="w-full border border-gray-300 rounded-md p-2 pl-10" value={owner.dob} onChange={(e) => handleInputChange(index, 'dob', e.target.value)} />
                                            <i className="fas fa-calendar-alt absolute left-3 top-2.5 text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Residential Address*</label>
                                        <div className="relative">
                                            <input type="text" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholder="Changeable" value={owner.address} onChange={(e) => handleInputChange(index, 'address', e.target.value)} />
                                            <i className="fas fa-map-marker-alt absolute left-3 top-2.5 text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Ownership Percentage*</label>
                                    <div className="relative">
                                        <input type="text" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholder="Changeable" value={owner.ownership} onChange={(e) => handleInputChange(index, 'ownership', e.target.value)} />
                                        <i className="fas fa-percent absolute left-3 top-2.5 text-gray-400"></i>
                                    </div>
                                </div>

                                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full mt-4">Add User</button>

                                <div className=" p-6  rounded-md mb-6">
                                    <div className="flex items-center mb-4">
                                        <input type="radio" className="mr-2" id="operationalEntity" name="entityType" />
                                        <label htmlFor="operationalEntity" className="text-lg font-medium">Operational Legal Entity or Partnership</label>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">Check this option if the beneficial owner of the business is an Operational Legal Entity, Limited Liability Corporation (LLC), Partnership, or a similar concept.</p>
                                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 w-full">+ Add Another Beneficial Owner</button>
                                </div>

                                <div>




                                    <h2 class="text-center text-lg font-bold mb-4">Beneficial Owner(s)</h2>

                                    <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                                        <div>
                                            <p class="font-bold">John Smith</p>
                                            <p class="text-sm">United Kingdom</p>
                                            <p class="text-sm">26%</p>
                                        </div>
                                        <div class="flex space-x-2">
                                            <button class="bg-red-600 text-white py-1 px-3 rounded-md font-bold flex items-center">
                                                <i class="fas fa-trash-alt mr-1"></i> DELETE
                                            </button>
                                            <button class="bg-gray-300 text-gray-700 py-1 px-3 rounded-md font-bold flex items-center">
                                                <i class="fas fa-edit mr-1"></i> EDIT
                                            </button>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        ))}


                    </div>
                                <div className='w-100 text-center mt-6'>

                                    <button className='save bg-blue-600 text-white px-6 py-2 rounded-md'>Save & Next</button>
                                </div>
                </div>
            </div>
        </>
    );
}

export default Business2;