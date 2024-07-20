import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { changePreloader } from "../../Store/Slices/Slice";

const useApi = () => {
  let axiosObject = {
    baseURL: "http://localhost:5000/api/",
  };

  const mainInstance = axios.create(axiosObject);

  const dispatch = useDispatch();

  mainInstance.interceptors.request.use(
    function (config) {
      dispatch(changePreloader(true));
      const noAuth = ["/auth"];
      if (!noAuth.includes(config.url)) {
        const localStorageToken = localStorage.getItem("token")
          ? `Bearer ${localStorageToken}`
          : null;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  mainInstance.interceptors.response.use(
    async (res) => {
      dispatch(changePreloader(false));
    },
    async (err) => {
      dispatch(changePreloader(false));
      if (err.response) {
        //when the Access Token is expired
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          // if the refresh token expired clear the local storage and navigate to login
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
          //* logout
          console.log(err);
        }
        //   // with validations errors show toasters
        if (err.response.status === 422) {
          for (const key in err.response.data.errors) {
            const element = err.response.data.errors[key];
            toast.error(element, {
              position: toast.POSITION.TOP_CENTER,
              toastId: "uniqueId",
            });
            for (const errMessage of element) {
              console.log(errMessage, "errMessage");
              toast.error(errMessage, {
                position: toast.POSITION.TOP_CENTER,
                toastId: "uniqueId",
              });
            }
          }
        }
        // else just show error message with
        // validations errors
        if (err.response.status === 403) {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        if (err.response.status === 429) {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        // servers error
        if (err.response.status === 404 || err.response.status === 500) {
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
        //internet and fire wall errors
        if (err.response.status === 0) {
          toast.error("no Internet connection", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        } else {
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
            toastId: "uniqueId",
          });
        }
      }
      return Promise.reject(err);
    }
  );
  // }, []);
  return mainInstance;
};

export default useApi;
