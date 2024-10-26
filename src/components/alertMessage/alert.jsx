import React from 'react'

export default function AlertMessage() {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
                    <h2 className="text-lg mb-4">
                        To continue signing up You have to agree to our <a href="#" className="text-black underline">Terms of Service</a> and <a href="#" className="text-black underline">Privacy Policy.</a>
                    </h2>
                    <h3 className="text-2xl font-bold text-red-600 mb-4">Our Terms of service & Privacy policy.</h3>
                    <div className="h-64 overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200">
                        <p className="text-sm text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        </p>
                        <p className="text-sm text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        </p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="/1-loginPage">
                            <button className="bg-red-600 text-white py-2 px-6 rounded mr-4">Cancel</button>
                        </Link>
                        <Link href="2-signUpPage">
                            <button className="bg-red-600 text-white py-2 px-6 rounded">I Agree</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
