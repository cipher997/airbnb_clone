import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Add this at the top with other imports
import { FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-sm text-gray-700 mt-10 ">

            {/* Top Grid Section */}
            <div className="px-6 md:px-20 py-10">
                <h2 className="font-semibold mb-4">Inspiration for future getaways</h2>

                {/* Unique stays / Categories Tabs */}
                <div className="flex gap-6 text-sm font-medium  pb-4 mb-4">
                    <span className="text-black border-b-2 border-black">Unique stays</span>
                    <span className="text-gray-500 cursor-pointer hover:text-black">Categories</span>
                </div>

                {/* Grid of links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-xs">
                    <div className="space-y-1">
                        <p className="font-semibold">Yurt Rentals</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Yurt Rentals</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Castle Rentals</p>
                        <p className="text-gray-500">United States</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Houseboats</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Holiday Caravans</p>
                        <p className="text-gray-500">United Kingdom</p>
                    </div>
                    {/* Add more cards as per screenshot */}
                    <div className="space-y-1">
                        <p className="font-semibold text-grey-600 cursor-pointer">{`Show more v`}</p>
                    </div>
                </div>
            </div>

            {/* Navigation links section */}
            <div className="border-t border-gray-300 px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
                <div className="space-y-2">
                    <p className="font-semibold">Support</p>
                    <p>Help Centre</p>
                    <p>AirCover</p>
                    <p>Anti-discrimination</p>
                    <p>Disability support</p>
                    <p>Cancellation options</p>
                    <p>Report neighbourhood concern</p>
                </div>

                <div className="space-y-2">
                    <p className="font-semibold">Hosting</p>
                    <p>Airbnb your home</p>
                    <p>Airbnb your experience</p>
                    <p>AirCover for Hosts</p>
                    <p>Hosting resources</p>
                    <p>Community forum</p>
                    <p>Join a Hosting class</p>
                    <p>Find a co-host</p>
                </div>

                <div className="space-y-2">
                    <p className="font-semibold">Airbnb</p>
                    <p>2025 Summer Release</p>
                    <p>Newsroom</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Airbnb.org emergency stays</p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-6 border-t border-gray-300 text-xs text-gray-600">
                <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
                    <p>© 2025 Airbnb, Inc.</p>
                    <p className="hidden md:inline">·</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Sitemap</p>
                    <p>Company details</p>
                </div>

                <div className="flex items-center gap-4">
                    <p className="flex items-center gap-1"><FaGlobe/> English (IN)</p>
                    <p>₹ INR</p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 text-gray-600">
                        <FaFacebookF className="cursor-pointer hover:text-black transition" />
                        <FaXTwitter className="cursor-pointer hover:text-black transition" />
                        <FaInstagram className="cursor-pointer hover:text-black transition" />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
