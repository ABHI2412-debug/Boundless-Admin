const cartsArticles = [
  {
    id: 1,
    title: "Quotation Reports",
    views: "355 Views",
    date: "Mar 25, 2025",
    description: "",
    content: "Generate and review quotation reports within the Carts section."
  },
  {
    id: 2,
    title: "Create a Primary Cart Video",
    views: "194 Views",
    date: "Mar 3, 2025",
    description: "Learn how to create a Primary Cart for easy ordering.",
    content: "This video walks through creating and assigning a Primary Cart."
  },
  {
    id: 3,
    title: "Video Tutorial: Change Account in Carts",
    views: "463 Views",
    date: "Nov 19, 2024",
    description: "A tutorial on changing your account while inside a cart.",
    content: "This video explains how to switch accounts within an active cart."
  },
  {
    id: 4,
    title: "How do I Add Notes to Carts and Titles?",
    views: "1565 Views",
    date: "Aug 17, 2022",
    description: "Easily add notes to titles and carts within the system.",
    content: "Notes can be added directly within cart details or title pages."
  },
  {
    id: 5,
    title: "Submitting an Order",
    views: "7807 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Review the Account Summary tab and PO before submitting your order."
  },
  {
    id: 6,
    title: "Apply a Grid Template when Creating a New Cart",
    views: "3382 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Apply a Grid Template while creating a new cart to standardize selections."
  },
  {
    id: 7,
    title: "Cart Actions - Add Carts to Merge List",
    views: "1381 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Build a merge list using carts from multiple folder locations."
  },
  {
    id: 8,
    title: "Creating a New Primary Cart",
    views: "1261 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Choose whether a new cart should serve as your Primary Cart."
  },
  {
    id: 9,
    title: "Cart Details–Item Details Total Net Price Tip",
    views: "1259 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "View total items, quantity, and net price from the Cart Details page."
  },
  {
    id: 10,
    title: "Primary Cart",
    views: "2857 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Create a Primary Cart to quickly add items using the Add button."
  },
  {
    id: 11,
    title: "Remove Titles That are Not Available for Shipping From a Cart Tip",
    views: "1114 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Refine Search to isolate and remove unavailable titles."
  },
  {
    id: 12,
    title: "Rename Folders within the Carts Drawer",
    views: "1311 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Rename any folder inside the Carts Drawer."
  },
  {
    id: 13,
    title: "Download and Export Carts to POS",
    views: "1221 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Download a POS file to export carts to your POS system."
  },
  {
    id: 14,
    title: "Archiving Carts",
    views: "2455 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Archive carts safely within the Carts Drawer."
  },
  {
    id: 15,
    title: "Find & Replace Option from the Cart Actions Drop Down",
    views: "1152 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Find & Replace to update grid codes efficiently."
  },
  {
    id: 16,
    title: "Copy a Cart",
    views: "1249 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Copy carts from the Manage Carts or Cart Details page."
  },
  {
    id: 17,
    title: "Delete a Cart",
    views: "2158 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Delete carts with a 7-day retention before permanent removal."
  },
  {
    id: 18,
    title: "Delete Items from a Cart",
    views: "1777 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Remove individual items from within the Cart Details page."
  },
  {
    id: 19,
    title: "Check Cart Inventory",
    views: "2208 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Perform real-time stock checks using Check Cart Inventory."
  },
  {
    id: 20,
    title: "Video Tutorial: Physical To Digital Cart Conversion",
    views: "810 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Convert physical items in your cart into digital versions."
  },
  {
    id: 21,
    title: "Video Tutorial: Create a New Cart from the Carts Drawer",
    views: "1090 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Learn how to create new carts directly from the Carts Drawer."
  },
  {
    id: 22,
    title: "Video Tutorial: Add Titles to Your Carts",
    views: "1115 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Add titles using the multi-functional Add button."
  },
  {
    id: 23,
    title: "Original Entry",
    views: "832 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Create a minimal product record if one is not in the catalog."
  },
  {
    id: 24,
    title: "Change the Account Assigned to a Cart",
    views: "1447 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Change cart account before submitting an order."
  },
  {
    id: 25,
    title: "Download a Cart to an Excel Spreadsheet",
    views: "3592 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Download ordered and non-ordered carts to Excel."
  },
  {
    id: 26,
    title: "Merge Carts",
    views: "1467 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Merge multiple carts into one from the Manage Carts page."
  },
  {
    id: 27,
    title: "Single-Line Cart Report with Grids",
    views: "176 Views",
    date: "Apr 19, 2016",
    description: "",
    content: "Includes grid information for titles in reports."
  },
  {
    id: 28,
    title: "Creating a New Cart",
    views: "4108 Views",
    date: "Jan 28, 2016",
    description: "",
    content: "Four different ways to create a new cart."
  },
  {
    id: 29,
    title: "Batch Upload",
    views: "783 Views",
    date: "Dec 16, 2015",
    description: "",
    content: "Enter ISBNs/UPCs manually into a cart."
  },
  {
    id: 30,
    title: "Transferring a Cart",
    views: "1651 Views",
    date: "Dec 14, 2015",
    description: "",
    content: "Transfer carts to another user from Manage Carts."
  },
  {
    id: 31,
    title: "Emailing a Cart",
    views: "452 Views",
    date: "Dec 14, 2015",
    description: "",
    content: "Send cart details via email."
  },
  {
    id: 32,
    title: "Apply Duplicates to a Cart",
    views: "759 Views",
    date: "Dec 11, 2015",
    description: "",
    content: "Remove duplicates using Dupe Check preference."
  },
  {
  id: 33,
  title: "Reopen an Archived Cart",
  views: "640 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Archived carts can be restored from the Archived folder. Select the cart and choose Restore to move it back into your active carts."
},
{
  id: 34,
  title: "Cart Summary Overview",
  views: "1022 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "The Cart Summary provides an overview of total titles, quantity, net price, and account details before submission."
},
{
  id: 35,
  title: "Editing Cart Items in Bulk",
  views: "998 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Use bulk edit tools to update quantities, grid codes, or account information for multiple titles at once."
},
{
  id: 36,
  title: "Print Cart Details",
  views: "870 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Print formatted cart details including item summaries, pricing, and grid information directly from the Cart Details page."
},
{
  id: 37,
  title: "Share Cart with Organization",
  views: "910 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Share your cart with other users within your organization for collaboration or review before placing an order."
},
{
  id: 38,
  title: "Cart History Tracking",
  views: "845 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Track modifications, edits, and activity logs associated with your cart to monitor changes over time."
},
{
  id: 39,
  title: "Restore Deleted Cart",
  views: "650 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Deleted carts remain recoverable for seven days before permanent removal. Use the Restore option within that period."
},
{
  id: 40,
  title: "Cart Permissions and Access",
  views: "720 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Manage user permissions to control who can view, edit, share, or submit carts within your organization."
},
{
  id: 41,
  title: "Cart Settings and Preferences",
  views: "680 Views",
  date: "Mar 23, 2022",
  description: "",
  content: "Configure cart behavior such as duplicate checking, default accounts, and display preferences from the Settings section."
}
];

// Fill up to 41 articles safely
for (let i = cartsArticles.length + 1; i <= 41; i++) {
  cartsArticles.push({
    id: i,
    title: `Cart Article ${i}`,
    views: "—",
    date: "—",
    description: "",
    content: "Additional cart article content."
  });
}

export default cartsArticles;
