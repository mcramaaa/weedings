import React from "react";
import useComment from "../hooks/useComment";
import { formatDistanceToNow } from "date-fns";
import { id as localeID } from "date-fns/locale";
import Image from "next/image";

export default function Comment() {
  const { isComments } = useComment();
  console.log(isComments);
  return (
    <div className="text-white mt-10 bg-[url(/javanese-gold/batikBckR.svg)] bg-cover">
      <div className="bg-black/70 p-6">
        Comment
        <div>
          {isComments ? (
            <div className="bg-white/10 flex flex-col gap-4 p-4 backdrop-blur-sm text-black text-sm rounded-lg bg">
              {isComments.map((comment, i) => (
                <div key={i}>
                  <div className="bg-white/80 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      {/* <p>{comment.userProfile}</p> */}
                      <div className="w-7 rounded-full overflow-hidden aspect-square relative">
                        <img
                          src={comment.userProfile}
                          alt=""
                          className="object-contain"
                        />
                      </div>
                      <p className="font-bold">{comment.name}</p>
                      <p className="text-xs text-slate-500 mt-[2px]">
                        {formatDistanceToNow(new Date(comment.createdAt), {
                          addSuffix: true,
                          locale: localeID,
                        })}
                      </p>
                    </div>
                    <p className="ml-9">{comment.content}</p>
                  </div>
                  <div className="flex flex-col">
                    {comment.replies.map((reply, i) => (
                      <div className="ml-3 pl-3 border-l pt-3" key={i}>
                        <div className="bg-white/70 rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            {/* <p>{comment.userProfile}</p> */}
                            <div className="w-7 rounded-full overflow-hidden aspect-square relative">
                              <img
                                src={reply.userProfile}
                                alt=""
                                className="object-contain"
                              />
                            </div>
                            <p className="font-bold">{reply.name}</p>
                            <p className="text-xs text-slate-500 mt-[2px]">
                              {formatDistanceToNow(new Date(reply.createAt), {
                                addSuffix: true,
                                locale: localeID,
                              })}
                            </p>
                          </div>
                          <p>{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="">Belum ada komentar</div>
          )}
        </div>
      </div>
    </div>
  );
}
