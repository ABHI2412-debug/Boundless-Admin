import whatsNewImg1 from "../assets/images/WhatsNew1.png";
import whatsNewImg2 from "../assets/images/WhatsNew2.png";


function WhatsNew() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2">

          <h1 className="text-4xl font-semibold text-center mb-12">
            WHAT'S NEW IN ADMIN
          </h1>

          <div className="text-gray-500 text-sm mb-6">
            May 15, 2025 &nbsp; Knowledge
          </div>

          <h2 className="text-xl font-semibold mb-4">Description</h2>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Boundless Theme and Branding Colors
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            We have updated our Boundless Library Admin site to reflect the
            Boundless theme and brand colors. You will now see different shades
            of blue rather than the previous green colors.
          </p>

           <img
          src={whatsNewImg1}
           alt="Admin Home"
           className="rounded shadow mb-12 w-full"
/>


          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Library Settings Configuration Page
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            The Library Settings page has been updated to a new layout and
            setup progression. You will now see a menu on the left side of the
            screen containing each section applicable to your library. Please
            note that some sections remain read-only view while others can be edited.
          </p>

           <img
           src={whatsNewImg2}
           alt="Library Settings"
           className="rounded shadow mb-10 w-full"
/>


          <p className="text-gray-700 mb-8">
            To learn more about the new Library Settings page, see the{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Library Settings - Content, Lending and More
            </span>{" "}
            article.
          </p>

          <hr className="my-8" />

          <div className="mb-6">
            <div className="font-semibold">Title</div>
            <div className="text-gray-600">What's New in Admin</div>
          </div>

          <div className="mb-8">
            <div className="font-semibold">URL Name</div>
            <div className="text-gray-600">Whats-New-in-Admin</div>
          </div>

          <div className="flex gap-4">
            <span className="px-4 py-2 border rounded-full text-sm text-blue-600 border-blue-600">
              Admin User Management
            </span>
            <span className="px-4 py-2 border rounded-full text-sm text-blue-600 border-blue-600">
              Boundless
            </span>
          </div>

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="bg-white p-8 rounded shadow h-fit">

          <h3 className="text-lg font-semibold mb-6">
            Related Articles
          </h3>

          <ul className="space-y-5 text-gray-700 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">
              Admin User Management
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              New Users By Month Report
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Customize Your Library Page Through Library Admin Management
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              ePopUp Library - Admin FAQs
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              New Users By Month Graph Report
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Boundless Guide and FAQs
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              New Users By Month - Interactive Dashboard Reports
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default WhatsNew;
