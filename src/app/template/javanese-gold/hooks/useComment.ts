/* eslint-disable react-hooks/exhaustive-deps */
import api from "@/config/axiosConfig";
import { useLayout } from "@/hooks/zustand/layout";
import { IComments, IReplies } from "@/interfaces/IComments";
import { usePathname } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const useComment = () => {
  const path = usePathname().slice(1);
  const { setError, setIsSuccess } = useLayout();
  // const [isReplies, setIsReplies] = useState<number | null>(null);
  const [isReplies, setIsReplies] = useState<{
    parentId?: number;
    replyId?: number;
  } | null>(null);
  const [isComments, setIsComments] = useState<IComments[]>();
  const [commentPayload, setCommentPayload] = useState<IComments>();
  const [repliesPayload, setRepliesPayload] = useState<IReplies>();

  async function getComment() {
    await api.get(`/comment/${path}`).then((res) => {
      setIsComments(res.data);
    });
  }

  async function postComment() {
    const payload: IComments = {
      ...commentPayload,
      userProfile: `https://ui-avatars.com/api/name=${commentPayload?.name}&background=ffecd6`,
      weedingPathName: path,
    };
    await api
      .post(`/comment`, payload)
      .then(() => {
        setIsSuccess(true, "Berhasil mengirim ucapan");
        setCommentPayload(undefined);
        setIsReplies(null);
      })
      .then(() => {
        getComment();
      });
  }

  console.log(isComments);
  console.log(commentPayload);
  async function postReply(parentId?: number) {
    const payload: IComments = {
      ...repliesPayload,
      userProfile: `https://ui-avatars.com/api/name=${repliesPayload?.name}&background=ffecd6`,
    };
    await api
      .patch(`/comment/replies/${parentId}`, payload)
      .then(() => {
        setIsSuccess(true, "Berhasil membalas ucapan");
        setCommentPayload(undefined);
        console.log("first");
        setIsReplies(null);
      })
      .then(() => {
        getComment();
      })
      .catch(() => {});
  }

  /**
   * HANDLE SUBMIT ETC
   */

  function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!commentPayload?.name) {
      setError(true, "Silahkan masukkan nama");
    }
    if (!commentPayload?.content) {
      setError(true, "Silahkan masukkan ucapan");
    }
    postComment();
  }

  function handleSubmitReply(
    e: React.FormEvent<HTMLFormElement>,
    parentId?: number
  ) {
    e.preventDefault();
    if (!repliesPayload?.name) {
      setError(true, "Silahkan masukkan nama");
    }
    if (!repliesPayload?.content) {
      setError(true, "Silahkan masukkan ucapan");
    }
    postReply(parentId);
  }

  function handleSelectReply(parentId?: number, replyId?: number) {
    setIsReplies({ parentId, replyId });
    setRepliesPayload(undefined);
  }

  function handleCancelReply() {
    setIsReplies(null);
    setRepliesPayload(undefined);
  }

  /**
   * HANDLE CHANGE ETC
   */

  function handleChangeInput(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) {
    if (id === "comment") {
      setCommentPayload((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    if (id === "reply") {
      setRepliesPayload((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  useEffect(() => {
    getComment();
  }, []);

  return {
    isComments,
    isReplies,
    commentPayload,
    repliesPayload,
    handleChangeInput,
    handleSubmitComment,
    handleSubmitReply,
    handleSelectReply,
    handleCancelReply,
  };
};
export default useComment;
