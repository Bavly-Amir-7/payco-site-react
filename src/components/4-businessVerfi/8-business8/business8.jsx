import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../../aside/aside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./business8.css";

export default function Business8() {


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


                        <div className="flex justify-between mb-3 w-100">
                            <div className="col text-center text-sm">Business Details</div>
                            <div className="col text-center text-sm">Business Beneficial Owners</div>
                            <div className="col text-center text-sm">Signatory Power</div>
                            <div className="col text-center text-sm">Review and Additional Documents</div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8  text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-32 h-32 flex items-center justify-center border-4 border-red-600 rounded-full">
                                    <svg width="100" height="100" viewBox="0 0 301 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="150.5" cy="150" r="148.5" stroke="#C20101" strokeWidth="3" />
                                        <g clipPath="url(#clip0_2795_56456)">
                                            <path d="M221.676 131.308C221.225 131.417 220.835 131.7 220.591 132.095C220.347 132.49 220.27 132.966 220.376 133.418C221.657 138.856 222.306 144.424 222.309 150.012C222.286 168.917 214.766 187.041 201.398 200.409C188.03 213.777 169.906 221.298 151.001 221.32C135.473 221.375 120.362 216.299 108.016 206.883C109.674 204.411 110.336 201.404 109.87 198.465C109.405 195.525 107.845 192.87 105.505 191.032C103.164 189.194 100.215 188.308 97.2491 188.552C94.2829 188.797 91.5187 190.153 89.5104 192.349C87.502 194.545 86.3979 197.42 86.4193 200.396C86.4406 203.372 87.586 206.23 89.6257 208.397C91.6654 210.564 94.4489 211.881 97.4182 212.082C100.387 212.284 103.323 211.356 105.637 209.484C118.637 219.492 134.595 224.892 151.001 224.836C162.302 224.824 173.455 222.254 183.623 217.32C193.791 212.386 202.71 205.214 209.713 196.344C216.716 187.473 221.62 177.132 224.06 166.097C226.499 155.061 226.409 143.617 223.797 132.621C223.745 132.395 223.648 132.182 223.513 131.993C223.378 131.805 223.207 131.645 223.01 131.523C222.813 131.401 222.594 131.32 222.365 131.283C222.136 131.246 221.902 131.255 221.676 131.308Z" fill="url(#paint0_linear_2795_56456)" />
                                            <path d="M79.6915 150.012C79.6922 137.327 83.0761 124.873 89.4941 113.932C95.9122 102.992 105.132 93.9607 116.203 87.7708C127.275 81.5808 139.797 78.4557 152.478 78.7178C165.16 78.9798 177.542 82.6195 188.348 89.2615C187.232 91.6478 187.054 94.3659 187.848 96.8775C188.641 99.3891 190.349 101.511 192.633 102.823C194.917 104.135 197.611 104.541 200.18 103.962C202.75 103.382 205.008 101.858 206.507 99.6925C208.006 97.5268 208.638 94.877 208.276 92.2679C207.914 89.6588 206.586 87.2807 204.554 85.6047C202.522 83.9286 199.934 83.0768 197.304 83.218C194.674 83.3592 192.193 84.483 190.352 86.367C179.017 79.36 166.017 75.5069 152.694 75.2061C139.372 74.9052 126.211 78.1675 114.571 84.6557C102.932 91.1438 93.2359 100.623 86.4859 112.112C79.7359 123.602 76.1766 136.686 76.1759 150.012C76.1696 154.579 76.5854 159.138 77.418 163.629C77.4895 164.033 77.7015 164.4 78.0166 164.663C78.3317 164.927 78.7298 165.071 79.1407 165.07C79.2471 165.07 79.3532 165.058 79.4571 165.035C79.9153 164.952 80.322 164.691 80.5878 164.309C80.8537 163.926 80.957 163.454 80.8751 162.996C80.0851 158.713 79.6889 154.367 79.6915 150.012Z" fill="url(#paint1_linear_2795_56456)" />
                                            <path d="M140.453 138.398V139.453H161.547V138.398C161.383 124.148 140.617 124.148 140.453 138.398Z" fill="url(#paint2_linear_2795_56456)" />
                                            <path d="M200.16 113.484C180.379 113.683 161.348 101.461 154.07 96.1874C153.177 95.5418 152.102 95.1943 151 95.1943C149.898 95.1943 148.823 95.5418 147.93 96.1874C140.652 101.461 121.574 113.637 101.84 113.484C101.139 113.477 100.444 113.609 99.794 113.872C99.1442 114.135 98.5529 114.524 98.0541 115.016C97.5552 115.508 97.1586 116.094 96.8872 116.741C96.6158 117.387 96.4749 118.08 96.4727 118.781C96.4844 145.84 101.898 184.547 148.621 208.195C149.358 208.571 150.173 208.767 151 208.767C151.827 208.767 152.642 208.571 153.379 208.195C200.102 184.547 205.516 145.84 205.527 118.781C205.517 117.367 204.946 116.016 203.939 115.022C202.933 114.029 201.574 113.476 200.16 113.484ZM170.336 166.992C170.336 169.323 169.41 171.559 167.762 173.207C166.113 174.855 163.878 175.781 161.547 175.781H140.453C138.122 175.781 135.887 174.855 134.238 173.207C132.59 171.559 131.664 169.323 131.664 166.992V148.242C131.665 146.533 132.164 144.861 133.101 143.431C134.038 142.001 135.371 140.875 136.938 140.191V138.375C137.148 119.566 164.852 119.566 165.062 138.375V140.191C166.629 140.875 167.962 142.001 168.899 143.431C169.836 144.861 170.335 146.533 170.336 148.242V166.992Z" fill="url(#paint3_linear_2795_56456)" />
                                            <path d="M153.878 155.599C153.852 155.442 153.859 155.281 153.9 155.127C153.94 154.972 154.012 154.828 154.112 154.704C154.505 154.136 154.735 153.472 154.777 152.783C154.819 152.094 154.672 151.407 154.351 150.796C154.031 150.185 153.549 149.673 152.959 149.316C152.368 148.958 151.691 148.77 151.001 148.77C150.311 148.77 149.634 148.958 149.043 149.316C148.453 149.673 147.971 150.185 147.651 150.796C147.33 151.407 147.183 152.094 147.225 152.783C147.267 153.472 147.497 154.136 147.89 154.704C147.989 154.827 148.061 154.97 148.102 155.122C148.142 155.275 148.15 155.435 148.124 155.591C147.849 156.963 147.069 160.887 146.52 163.61C146.453 163.95 146.462 164.3 146.547 164.636C146.631 164.971 146.789 165.284 147.009 165.552C147.229 165.819 147.506 166.034 147.819 166.182C148.132 166.33 148.474 166.406 148.82 166.406H153.179C153.526 166.406 153.869 166.33 154.182 166.181C154.496 166.033 154.773 165.817 154.992 165.549C155.212 165.281 155.37 164.967 155.454 164.631C155.538 164.294 155.547 163.943 155.479 163.603L153.878 155.599Z" fill="url(#paint4_linear_2795_56456)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_2795_56456" x1="156.122" y1="131.26" x2="156.122" y2="224.836" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#C20101" />
                                                <stop offset="1" stopColor="#7F0202" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2795_56456" x1="142.276" y1="75.187" x2="142.276" y2="165.07" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#C20101" />
                                                <stop offset="1" stopColor="#7F0202" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_2795_56456" x1="151" y1="127.711" x2="151" y2="139.453" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#C20101" />
                                                <stop offset="1" stopColor="#7F0202" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_2795_56456" x1="151" y1="95.1943" x2="151" y2="208.767" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#C20101" />
                                                <stop offset="1" stopColor="#7F0202" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_2795_56456" x1="151" y1="148.77" x2="151" y2="166.406" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#C20101" />
                                                <stop offset="1" stopColor="#7F0202" />
                                            </linearGradient>
                                            <clipPath id="clip0_2795_56456">
                                                <rect width="150" height="150" fill="white" transform="translate(76 75)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-8">
                                Hey there! You're almost ready to join Payco! Just a few quick EDD (Enhanced Due diligence) questions to complete your verification and unlock all the features of our fintech platform.
                            </p>
                        </div>

                        <div className="flex justify-center gap-2 mt-5 w-100">


                            <Link to="/business9" className='saveNext'>
                            <button className=" redBtn redBg text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Start EDD</button>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>



        </>
    );
}
