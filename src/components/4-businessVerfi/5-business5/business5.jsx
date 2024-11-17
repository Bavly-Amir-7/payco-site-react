import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./business5.css";

export default function Business5() {
    const [isBusinessDetailsOpen, setIsBusinessDetailsOpen] = useState(false);
    const [isCountriesOpen, setIsCountriesOpen] = useState(false);
    const [isSignatoryPowerOpen, setIsSignatoryPowerOpen] = useState(false);
    const [isBeneficialOwnersOpen, setIsBeneficialOwnersOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [currentSection, setCurrentSection] = useState('');

    // States for storing each section's content
    const [businessDetails, setBusinessDetails] = useState(["Payco", "Fintech", "+201124027121", "704 Hauser St, New York, N.Y.", "United States"]);
    const [countriesOfOperation, setCountriesOfOperation] = useState(["Egypt", "Saudi Arabia", "UAE"]);
    const [signatoryPower, setSignatoryPower] = useState(["John Doe", "Jane Smith"]);
    const [beneficialOwners, setBeneficialOwners] = useState(["Alice Johnson", "Robert Brown"]);

    const toggleBusinessDetails = () => {
        setIsBusinessDetailsOpen(!isBusinessDetailsOpen);
    };

    const toggleCountries = () => {
        setIsCountriesOpen(!isCountriesOpen);
    };

    const toggleSignatoryPower = () => {
        setIsSignatoryPowerOpen(!isSignatoryPowerOpen);
    };

    const toggleBeneficialOwners = () => {
        setIsBeneficialOwnersOpen(!isBeneficialOwnersOpen);
    };

    const openModal = (section) => {
        setCurrentSection(section);
        setIsModalOpen(true);

        if (section === 'Business Details') {
            setModalContent([...businessDetails]);
        } else if (section === 'Countries of Operation') {
            setModalContent([...countriesOfOperation]);
        } else if (section === 'Signatory Power') {
            setModalContent([...signatoryPower]);
        } else if (section === 'Business Beneficial Owners') {
            setModalContent([...beneficialOwners]);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent([]);
    };

    const handleInputChange = (index, value) => {
        const updatedContent = [...modalContent];
        updatedContent[index] = value;
        setModalContent(updatedContent);
    };

    const saveChanges = () => {
        if (currentSection === 'Business Details') {
            setBusinessDetails([...modalContent]);
        } else if (currentSection === 'Countries of Operation') {
            setCountriesOfOperation([...modalContent]);
        } else if (currentSection === 'Signatory Power') {
            setSignatoryPower([...modalContent]);
        } else if (currentSection === 'Business Beneficial Owners') {
            setBeneficialOwners([...modalContent]);
        }
        closeModal();
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="asideComponent col-lg-3 col-md-2" style={{ height: "100%" }}>
                        <Aside />
                    </div>

                    <div className="col-12 col-lg-9 col-md-12 mt-5" style={{ placeItems: "center" }}>

                        <div className="relative mb-6 w-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="dashedLine border-t-2 border-dashed border-gray-300 " style={{ width: "80%" }}></div>
                            </div>
                            <div className="relative flex" style={{ justifyContent: "space-around" }}>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 greyColor whiteBg rounded-full flex items-center justify-center">
                                    <i>
                                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" fill="#FCFCFC" />
                                            <rect x="0.90625" y="0.5" width="49" height="49" rx="24.5" stroke="#CDCDCD" />
                                            <path d="M32.0726 21L22.9059 30.1667L18.7393 26" stroke="#C20101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="w-10 h-10 whiteColor redBg rounded-full flex items-center justify-center">4</div>
                            </div>
                        </div>


                        <div className="flex justify-between mb-6 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>

                        <div className="business5 bg-white p-6 rounded-lg shadow-lg w-full">
                            <h1 className="text-center text-lg font-semibold mb-4">Review</h1>
                            <div className="space-y-4">

                                {/* Business Details Section */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex justify-between items-center" onClick={toggleBusinessDetails} style={{ cursor: "pointer" }}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={isBusinessDetailsOpen ? faChevronUp : faChevronDown} className="mr-2" />
                                            <span className="font-semibold">Business Details</span>
                                        </div>
                                        <button onClick={() => openModal('Business Details')} className="text-red-500">Change</button>
                                    </div>
                                    {isBusinessDetailsOpen && (
                                        <div className="mt-2 text-sm">
                                            {businessDetails.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Countries of Operation Section */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex justify-between items-center" onClick={toggleCountries} style={{ cursor: "pointer" }}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={isCountriesOpen ? faChevronUp : faChevronDown} className="mr-2" />
                                            <span className="font-semibold">Countries of Operation</span>
                                        </div>
                                        <button onClick={() => openModal('Countries of Operation')} className="text-red-500">Change</button>
                                    </div>
                                    {isCountriesOpen && (
                                        <div className="mt-2 text-sm">
                                            {countriesOfOperation.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Signatory Power Section */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex justify-between items-center" onClick={toggleSignatoryPower} style={{ cursor: "pointer" }}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={isSignatoryPowerOpen ? faChevronUp : faChevronDown} className="mr-2" />
                                            <span className="font-semibold">Signatory Power</span>
                                        </div>
                                        <button onClick={() => openModal('Signatory Power')} className="text-red-500">Change</button>
                                    </div>
                                    {isSignatoryPowerOpen && (
                                        <div className="mt-2 text-sm">
                                            {signatoryPower.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Business Beneficial Owners Section */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex justify-between items-center" onClick={toggleBeneficialOwners} style={{ cursor: "pointer" }}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={isBeneficialOwnersOpen ? faChevronUp : faChevronDown} className="mr-2" />
                                            <span className="font-semibold">Business Beneficial Owners</span>
                                        </div>
                                        <button onClick={() => openModal('Business Beneficial Owners')} className="text-red-500">Change</button>
                                    </div>
                                    {isBeneficialOwnersOpen && (
                                        <div className="mt-2 text-sm">
                                            {beneficialOwners.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="documentArea mt-6 bg-gray-100 p-4 rounded-lg text-center">
                                <h2 className='additionalDocuments'>Additional Documents</h2>
                                <p className="additionalPar text-sm mb-4">Verification is within reach! Adding extra documents helps us confirm your info quickly and <br /> securely, so you can unlock the full experience sooner.</p>
                                <button className="uploadBtn7 whiteBg redClr py-2 px-4 rounded-lg flex items-center" >
                                    UPLOAD
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                        <path d="M4 13.5H10V7.5H14L7 0.5L0 7.5H4V13.5ZM0 15.5H14V17.5H0V15.5Z" fill="#C20101" />
                                    </svg>
                                </button>


                            </div>

                            <div className="flex justify-center gap-3 mt-6">
                                <button className="backBtn7 py-2 px-4 rounded-lg">Back</button>
                                <button className="nextBtn7  py-2  rounded-lg">Finish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg w-full sm:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">{currentSection} - Edit Details</h2>
                        <form>
                            {modalContent.map((item, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={item}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                                />
                            ))}
                        </form>
                        <div className="flex justify-end mt-4">
                            <button onClick={closeModal} className="bg-gray-300 text-black py-2 px-4 rounded mr-2">Cancel</button>
                            <button onClick={saveChanges} className="bg-red-500 text-white py-2 px-4 rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
