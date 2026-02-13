const searchingArticles = [
  {
    id: 1,
    title: "Advanced Search by Book Programs Explained",
    views: "458 Views",
    date: "May 15, 2025",
    description: "Search one or several B&T programs to browse titles more efficiently.",
    content: "You can also select a date range to further narrow your search."
  },
  {
    id: 2,
    title: "How Do I View Batch Entry in Search Results?",
    views: "1220 Views",
    date: "Aug 17, 2022",
    description: "",
    content: "Learn how to enable and view Batch Entry directly within search results."
  },
  {
    id: 3,
    title: "What is the Type Ahead Feature in the TS360 Product Search box?",
    views: "855 Views",
    date: "Aug 17, 2022",
    description: "",
    content: "The Type Ahead feature provides search suggestions while typing."
  },
  {
    id: 4,
    title: "Video Tutorial: Basic Search and Filtering",
    views: "4634 Views",
    date: "Mar 23, 2022",
    description: "Step-by-step guide for performing basic searches and filtering results.",
    content: "This tutorial walks you through search and filter features."
  },
  {
    id: 5,
    title: "Batch Entry Tip",
    views: "1463 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Batch Entry to look up multiple items at once."
  },
  {
    id: 6,
    title: "Expand Refine Your Search Tip",
    views: "757 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Expand the Refine Your Search panel to see all available filters."
  },
  {
    id: 7,
    title: "Large Print Tip",
    views: "1613 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Advanced Search to easily search for Large Print items."
  },
  {
    id: 8,
    title: "My Preference Filters When Searching Tip",
    views: "1018 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Customize default filters using My Preferences."
  },
  {
    id: 9,
    title: "Save Your Searches Tip",
    views: "1165 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Save frequent searches to avoid repeating search steps."
  },
  {
    id: 10,
    title: "Advanced Search",
    views: "2095 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Advanced Search to create specific, targeted searches."
  },
  {
    id: 11,
    title: "Add or Editing Grid Distribution from Search Results Tip",
    views: "1132 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Edit grid distribution directly from search results."
  },
  {
    id: 12,
    title: "Filtering by Inventory Level Tip",
    views: "1102 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Filter results by inventory level in specific warehouses."
  },
  {
    id: 13,
    title: "eBook Purchase Options",
    views: "1095 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Review different purchasing options for eBooks."
  },
  {
    id: 14,
    title: "Popularity Sort Calculations",
    views: "1206 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Understand how popularity sorting is calculated."
  },
  {
    id: 15,
    title: "Search and Filter By BISAC",
    views: "1094 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Refine searches using BISAC subject categories."
  },
  {
    id: 16,
    title: "Video Tutorial: Add Titles to Your Carts",
    views: "1115 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Learn how to add titles to carts from search results."
  },
  {
    id: 17,
    title: "Advanced Search Tips and Tricks",
    views: "1439 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Maximize search accuracy with these helpful tips."
  },
  {
    id: 18,
    title: "Add Multiple Titles To Any Cart in Search Results",
    views: "851 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Add multiple titles at once directly from search results."
  },
  {
    id: 19,
    title: "Makerspace Products",
    views: "841 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Browse Makerspace products including robotics and hands-on tools."
  },
  {
    id: 20,
    title: "Searching for Multi-User eBooks",
    views: "763 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Find multi-user eBook titles that allow simultaneous access."
  },
  {
    id: 21,
    title: "Standing Orders Lists",
    views: "2540 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Use Standing Orders Lists to manage recurring orders."
  },
  {
    id: 22,
    title: "Standing Order Duplicate Checking",
    views: "1194 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Duplicate checking helps avoid ordering the same item twice."
  },
  {
    id: 23,
    title: "Standing Order Series/Author Searching",
    views: "1241 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Search Standing Orders by series or author."
  },
  {
    id: 24,
    title: "Standing Order Profiles Series Information Tab",
    views: "1237 Views",
    date: "Mar 23, 2022",
    description: "",
    content: "Review detailed series information inside Standing Orders."
  },
  {
    id: 25,
    title: "How can I search and filter by stock and demand?",
    views: "1793 Views",
    date: "Jul 11, 2017",
    description: "",
    content: "Use Stock Level and Demand filters to refine results."
  },
  {
    id: 26,
    title: "Sorting Saved Searches",
    views: "65 Views",
    date: "Jun 21, 2016",
    description: "",
    content: "Sort saved searches by last date updated."
  },
  {
    id: 27,
    title: "Advanced Search by Date Range Tip",
    views: "144 Views",
    date: "Jun 21, 2016",
    description: "",
    content: "Create custom date ranges for published titles."
  },
  {
    id: 28,
    title: "Advanced Search by Book Filters Explained",
    views: "1382 Views",
    date: "Apr 19, 2016",
    description: "",
    content: "Use detailed filters within Advanced Search."
  },
  {
    id: 29,
    title: "Advanced Search by Book Reviews Explained",
    views: "585 Views",
    date: "Jan 12, 2016",
    description: "",
    content: "Search titles by review journals."
  },
  {
    id: 30,
    title: "Increasing Your Search Criteria Tip",
    views: "147 Views",
    date: "Jan 8, 2016",
    description: "",
    content: "Refine and increase search criteria for better accuracy."
  },
  {
    id: 31,
    title: "Add or Editing Grid Distribution from Search Results",
    views: "582 Views",
    date: "Dec 15, 2015",
    description: "",
    content: "Modify grid distribution settings within results."
  },
  {
    id: 32,
    title: "Edit Saved Searches",
    views: "153 Views",
    date: "Dec 14, 2015",
    description: "",
    content: "Edit criteria for previously saved searches."
  },
  {
    id: 33,
    title: "Utilizing the Product Search Box",
    views: "330 Views",
    date: "Dec 14, 2015",
    description: "",
    content: "Use ISBN, UPC, Title, Author, or keywords to search efficiently."
  },
  {
    id: 34,
    title: "Saved Searches",
    views: "231 Views",
    date: "Dec 14, 2015",
    description: "",
    content: "Run, edit, and delete your saved searches."
  },
  {
    id: 35,
    title: "Page Navigation Tip",
    views: "100 Views",
    date: "Dec 11, 2015",
    description: "",
    content: "Jump quickly between pages while viewing results."
  },
  {
    id: 36,
    title: "Search by Stock Items Only Tip",
    views: "178 Views",
    date: "Dec 11, 2015",
    description: "",
    content: "Filter inventory using Publish Status in Advanced Search."
  }
];

export default searchingArticles;
