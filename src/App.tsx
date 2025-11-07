import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notifySuccess = () =>
    toast.success("Success! Welcome to Coltek Technologies");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={notifySuccess}
        className="bg-blue-950 text-white px-10 py-2 rounded hover:bg-blue-700"
      >
        Coltek
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;
