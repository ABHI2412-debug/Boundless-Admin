import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import HelpGrid from "./components/HelpGrid";

import GettingStarted from "./pages/GettingStarted";
import Settings from "./pages/Settings";
import Preferences from "./pages/Preferences";
import Carts from "./pages/Carts";
import Search from "./pages/Search";
import FAQ from "./pages/FAQ";
import FaqDetail from "./pages/FaqDetail";
import Troubleshooting from "./pages/Troubleshooting";
import PreferenceDetail from "./pages/PreferenceDetail";
import VoxBooks from "./pages/VoxBooks";
import BatchEntry from "./pages/BatchEntry";
import Quotes from "./pages/Quotes";
import TitleDetails from "./pages/TitleDetails";
import WhatsNew from "./pages/WhatsNew";
import Programs from "./pages/Programs";
import Admin from "./pages/Admin";
import Article from "./pages/Article";
import Browse from "./pages/Browse";
import CustomerServiceDashboard from "./pages/CustomerServiceDashboard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Routes>
      <Route element={<Layout />}>

        {/* HOMEPAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <HelpGrid searchTerm={searchTerm} />
            </>
          }
        />

        {/* Feature Pages */}
        <Route path="/vox-books" element={<VoxBooks />} />
        <Route path="/batch-entry" element={<BatchEntry />} />
        <Route path="/quotes" element={<Quotes />} />

        {/* Main Pages */}
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/preferences" element={<Preferences />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq/:id" element={<FaqDetail />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/preferences/:id" element={<PreferenceDetail />} />
        <Route path="/title-details" element={<TitleDetails />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/customer-service" element={<CustomerServiceDashboard />} />

        {/* Dynamic Articles */}
        <Route path="/article/:id" element={<Article />} />

      </Route>
    </Routes>
  );
}

export default App;
