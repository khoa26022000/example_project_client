import { Route, Routes } from "react-router";
import NonAuthLayout from "../layout/NonAuth";
import Login from "../page/Login";
import NotFoundPage from "../page/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<NonAuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      {/* {token && (
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/add-product" element={<AddEditProduct />} />
        </Route>
      )} */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
