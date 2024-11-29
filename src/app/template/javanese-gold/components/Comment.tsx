/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent } from "react";
import useComment from "../hooks/useComment";
import { formatDistanceToNow } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { convertDate } from "@/helper/converDate";
import { FaReply } from "react-icons/fa";
import { IReplies } from "@/interfaces/IComments";
import dayjs from "dayjs";
import AnimatedCard from "@/components/motion/AnimatedCard";
import Image from "next/image";

dayjs.locale("id");

interface IRepliesProps {
  payload: IReplies | undefined;
  handleSubmitReplies: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeInput: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleCancelReply: () => void;
}

function Replies(props: IRepliesProps) {
  const { payload, handleChangeInput, handleSubmitReplies, handleCancelReply } =
    props;
  return (
    <form
      onSubmit={handleSubmitReplies}
      className="flex items-center flex-col gap-2"
    >
      <div className="w-full">
        <label className="text-black font-bold" htmlFor="">
          Nama
        </label>
        <input
          type="text"
          name="name"
          value={payload?.name}
          onChange={handleChangeInput}
          className="w-full rounded-lg bg-white/60 p-1 text-base"
        />
      </div>
      <div className="w-full">
        <label className="text-black font-bold" htmlFor="">
          Ucapan
        </label>
        <textarea
          name="content"
          value={payload?.content}
          onChange={handleChangeInput}
          className="w-full rounded-lg min-h-10 bg-white/60 p-2"
        />
      </div>
      <div className="w-full flex gap-2">
        <span
          onClick={handleCancelReply}
          className="px-4 text-center text-black font-bold w-full py-2 bg-white rounded-lg "
        >
          Batal
        </span>
        <button className="px-4 text-black font-bold w-full py-2 bg-javanese-secondary rounded-lg">
          Kirim
        </button>
      </div>
    </form>
  );
}

export default function Comment() {
  const {
    isComments,
    isReplies,
    commentPayload,
    repliesPayload,
    handleChangeInput,
    handleSubmitComment,
    handleSubmitReply,
    handleSelectReply,
    handleCancelReply,
  } = useComment();

  return (
    <div className="mt-10">
      <div className="w-full flex justify-center">
        <AnimatedCard
          isFromTop
          animationType="slideToBottom"
          className="relative w-72 aspect-[2/1]"
        >
          <Image
            src={"/javanese-gold/wish.png"}
            alt=""
            fill
            className="object-contain object-center animate-updown"
          />
        </AnimatedCard>
      </div>
      <div className="text-white mb-10  bg-[url(/javanese-gold/batikBckR.svg)] bg-contain bg-center">
        <div className="bg-gradient-to-b from-black to-black/70 h-10"></div>

        <div className="bg-black/70 px-6">
          <AnimatedCard
            animationType="scale"
            className="bg-white/10 flex flex-col gap-4 p-4 backdrop-blur-sm text-black text-sm rounded-lg bg"
          >
            <form
              onSubmit={handleSubmitComment}
              className="flex items-center flex-col gap-2"
            >
              <div className="w-full">
                <label className="text-white font-bold" htmlFor="">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={
                    commentPayload?.name === undefined
                      ? ""
                      : commentPayload.name
                  }
                  onChange={(e) => handleChangeInput(e, "comment")}
                  className="w-full rounded-full bg-white/60 p-1 text-base"
                />
              </div>
              <div className="w-full">
                <label className="text-white font-bold" htmlFor="">
                  Ucapan
                </label>
                <textarea
                  name="content"
                  value={
                    commentPayload?.content === undefined
                      ? ""
                      : commentPayload?.content
                  }
                  onChange={(e) => handleChangeInput(e, "comment")}
                  className="w-full rounded-lg min-h-10 bg-white/60 p-2"
                />
              </div>
              <button className="px-4 w-full py-2 bg-gradient-to-r from-javanese-secondary to-javanese rounded-lg">
                Kirim
              </button>
            </form>

            {isComments &&
              (isComments.length > 0 ? (
                <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                  {isComments.map((comment, i) => (
                    <div key={i}>
                      <div className="bg-white/80 rounded-lg px-2 py-1">
                        <div className="flex items-start gap-2">
                          <div className="w-7 rounded-full bg-pink-300 overflow-hidden aspect-square relative">
                            <img
                              src={comment.userProfile}
                              alt=""
                              className="object-contain"
                            />
                          </div>
                          <div className="flex flex-wrap gap-x-2">
                            <p className="font-bold w-fit">{comment.name}</p>
                            {comment.createdAt && (
                              <p className="text-xs text-slate-500 mt-[3px] w-fit">
                                {formatDistanceToNow(
                                  convertDate(comment.createdAt),
                                  {
                                    addSuffix: true,
                                    locale: localeID,
                                  }
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="ml-9">{comment.content}</p>
                        <div className="text-xs ml-9 mt-1 text-slate-600">
                          <button
                            className="flex gap-1"
                            onClick={() => handleSelectReply(i)}
                          >
                            <FaReply />
                            Balas
                          </button>
                          {isReplies?.parentId === i && !isReplies.replyId && (
                            <div className="mt-3">
                              <Replies
                                payload={repliesPayload}
                                handleChangeInput={(e) =>
                                  handleChangeInput(e, "reply")
                                }
                                handleSubmitReplies={(e) =>
                                  handleSubmitReply(e, comment.id)
                                }
                                handleCancelReply={handleCancelReply}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      {comment.replies && (
                        <div className="flex flex-col">
                          {comment.replies.map((reply, idx) => (
                            <div className="ml-3 pl-3 border-l pt-3" key={idx}>
                              <div className="bg-white/70 rounded-lg p-2">
                                <div className="flex items-start gap-2">
                                  <div className="w-7 rounded-full overflow-hidden aspect-square relative">
                                    <img
                                      src={reply.userProfile}
                                      alt=""
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="flex flex-wrap gap-x-2">
                                    <p className="font-bold">{reply.name}</p>
                                    {reply.createdAt && (
                                      <p className="text-xs text-slate-500 mt-[3px]">
                                        {formatDistanceToNow(reply.createdAt, {
                                          addSuffix: true,
                                          locale: localeID,
                                        })}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <p className="ml-9">{reply.content}</p>
                                <div className="text-xs ml-9 mt-1 text-slate-600">
                                  <button
                                    className="flex gap-1"
                                    onClick={() =>
                                      handleSelectReply(comment.id, idx)
                                    }
                                  >
                                    <FaReply />
                                    Balas
                                  </button>
                                  {isReplies?.parentId === comment.id &&
                                    isReplies?.replyId === idx && (
                                      <div className="mt-3">
                                        <Replies
                                          payload={repliesPayload}
                                          handleChangeInput={(e) =>
                                            handleChangeInput(e, "reply")
                                          }
                                          handleSubmitReplies={(e) =>
                                            handleSubmitReply(e, comment.id)
                                          }
                                          handleCancelReply={handleCancelReply}
                                        />
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-white text-center">
                  <p>Belum ada komentar</p>
                  <p>Jadilah pengirim pertama</p>
                </div>
              ))}
          </AnimatedCard>
        </div>
        <div className="bg-gradient-to-b from-black/70 to-black h-24"></div>
      </div>
    </div>
  );
}
