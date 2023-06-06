import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import { QueryClient, QueryClientProvider } from "react-query";
import AddContactForm from "./pages/AddContactForm";
import EditContactForm from "./pages/EditContactForm";
import ContactDisplay from "./pages/ContactDisplay";
import LayoutPage from "./Laout/LayoutPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LayoutPage />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/addContact" element={<AddContactForm />} />
          <Route path="/contact" element={<ContactDisplay />} />
          <Route path="/editContact" element={<EditContactForm />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
