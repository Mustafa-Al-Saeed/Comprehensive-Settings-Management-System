import useApi from "./UseApi";

const useRequest = () => {
  const Request = useApi();

  const login = async (data) => {
    // console.log(data, "*********");
    return await Request.post(`login`, data);
  };

  //   const logOut = async () => {

  //   const userList = async () => {
  //     return await Request.get("list/userlist");
  //   };

  //   const getVideo = async (data) => {
  //     return await Request.get(`video/${data}`);
  //   };
  //   const deleteVideo = async (data) => {
  //     return await Request.delete(`video/${data}`);
  //   };

  //   };
  //   const addReport = async (data) => {
  //     return await Request.post("report", data);
  //   };
  //   const editReport = async (data) => {
  //     return await Request.patch(`report/${data.url}`, data.data);
  //   };

  return {
    login,
    // logOut,
    // userList,
    // getVideo,
    // deleteVideo,
    // addReport,
    // editReport,
  };
};
export default useRequest;
