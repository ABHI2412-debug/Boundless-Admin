import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Article() {
  const { id } = useParams();

  // Article Database (you can move this later to a separate file)
  const articles = {
    "editing-product-lookup": {
      title: "Editing Product Lookup as an Admin",
      date: "Mar 23, 2022",
      views: "18201 Views",
      content: `
        You can edit the data displayed in the Product Lookup field within the Admin section.

        Go to Admin → General Information.
        Click Edit next to Product Lookup inside Organization Profile.
      `,
    },

    "assigning-user-functions": {
      title: "Assigning User Functions",
      date: "Mar 23, 2022",
      views: "1617 Views",
      content: `
        Users with Create or Maintain User function can add and remove functionality
        for Users within the Admin section of the system.
      `,
    },

    "shared-login-function": {
      title: "Shared Login Function",
      date: "Mar 23, 2022",
      views: "2967 Views",
      content: `
        Shared Logins allow unlimited users to be logged into an ID at the same time.
      `,
    },

    // Add more articles here later
  };

  const article = articles[id];

  if (!article) {
    return (
      <div>
        <Navbar />
        <div className="py-32 text-center">
          <h1 className="text-2xl font-semibold">Article Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-3xl font-semibold">{article.title}</h1>
        <p className="mt-2 text-gray-500">
          {article.views} • {article.date} • Knowledge
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <p className="text-gray-700 whitespace-pre-line leading-7">
          {article.content}
        </p>
      </div>
    </div>
  );
}

export default Article;
