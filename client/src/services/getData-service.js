import { useState, useEffect } from "react";
import { axiosConn } from "./helper-auth";

const getData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      axiosConn
        .get(url, {
          Signal: abortController.signal,
        })
        .then((response) => {
          // const rec = response.data;
          console.log(response.data);
          setData(response.data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.message === "AbortError") {
            console.log("fetch aborted.");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortController.abort();
  }, []);

  return { data, isPending, error };
};

// const getData = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortController = new AbortController();
//     const fetchData = async () => {
//       try {
//         const response = await axiosConn.get(url, {
//           Signal: abortController.signal,
//         });
//         setData(response.data);
//         setIsPending(false);
//         setError(null);
//       } catch (err) {
//         setIsPending(false);
//         setError(err.message);
//         console.log(error);
//       }
//       return { data, isPending, error };
//     };
//     fetchData();
//     return () => abortController.abort();
//   }, []);
// };

export default getData;
