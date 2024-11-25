import api from "@/config/axiosConfig";
import { IComments } from "@/interfaces/IComments";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useComment = () => {
  const path = usePathname();
  const [isComments, setIsComments] = useState<IComments[]>();

  async function getComment() {
    await api.get(`/comment${path}`).then((res) => {
      console.log(res.data);
      setIsComments(res.data);
    });
    // /api/v1/user/comment/{weedingPath}
  }

  useEffect(() => {
    getComment();
  }, []);

  return { isComments };
};
export default useComment;
