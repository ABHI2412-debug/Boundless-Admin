import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
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
import Contact from "./pages/Contact";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      {/* Layout wraps EVERYTHING */}
      <Route path="/" element={<Layout />}>
        
        {/* Home */}
        <Route index element={<Home />} />

        {/* Feature Pages */}
        <Route path="vox-books" element={<VoxBooks />} />
        <Route path="batch-entry" element={<BatchEntry />} />
        <Route path="quotes" element={<Quotes />} />

        {/* Main Pages */}
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="settings" element={<Settings />} />
        <Route path="settings/preferences" element={<Preferences />} />
        <Route path="carts" element={<Carts />} />
        <Route path="search" element={<Search />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="faq/:id" element={<FaqDetail />} />
        <Route path="troubleshooting" element={<Troubleshooting />} />
        <Route path="preferences/:id" element={<PreferenceDetail />} />
        <Route path="title-details" element={<TitleDetails />} />
        <Route path="whats-new" element={<WhatsNew />} />
        <Route path="programs" element={<Programs />} />
        <Route path="admin" element={<Admin />} />
        <Route path="browse" element={<Browse />} />
        <Route path="customer-service" element={<CustomerServiceDashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reports" element={<Reports />} />

        {/* Dynamic Articles */}
        <Route path="article/:id" element={<Article />} />

      </Route>
    </Routes>
  );
}

export default App;
