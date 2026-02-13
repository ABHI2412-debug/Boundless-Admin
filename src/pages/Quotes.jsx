import { Link } from "react-router-dom";

function Quotes() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-semibold">Quotation Reports</h1>

        <div className="text-right">
          <div className="text-2xl font-semibold">6</div>
          <div className="text-gray-500 text-sm">Articles</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">

        <Article
          title="How Do I Request a Quote?"
          description="Quotes can be used for one purchase order only. If additional quotes are desired for other libraries or organizations..."
          views="335 Views"
          date="Feb 28, 2025"
        />

        <Article
          title="Quote Report"
          description="You can view a Quote Report (including VAS Processing Charges, when available)..."
          views="145 Views"
          date="Mar 18, 2016"
        />

        <Article
          title="How Do I Set Up a User with Quotes?"
          description="If you wish to set up one of your users with the ability to request quotes..."
          views="68 Views"
          date="Mar 18, 2016"
        />

        <Article
          title="What are Quotes?"
          description="Quotations are specific prices you can request directly from Baker & Taylor."
          views="138 Views"
          date="Mar 18, 2016"
        />

        <Article
          title="Adding or Removing the Request Quotes User Function"
          description="Only users part of a Quotations enabled Organization can be enabled..."
          views="51 Views"
          date="Dec 14, 2015"
        />

      </div>

    </div>
  );
}

function Article({ title, description, views, date }) {
  return (
    <div className="border-b pb-8">
      <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
        {title}
      </h2>

      <p className="text-gray-600 mb-3">
        {description}
      </p>

      <div className="text-sm text-gray-400">
        {views} • {date} • Knowledge
      </div>
    </div>
  );
}

export default Quotes;
