import React, { useId } from "react";

export type EvaluationCardProps = {
  title: string;
  body: string;
};

/**
 * EvaluationCard: vertical layout when viewport is tall enough (min-h 32rem),
 * horizontal (tablet) layout when viewport height is below that.
 */
const EvaluationCard = ({ title, body }: EvaluationCardProps) => {
  const clipId = useId();

  return (
    <>
      {/* Vertical layout: shown when viewport min-height >= 32rem (512px) */}
      <div className="hidden w-full min-w-[338px] max-w-[630px] min-h-[341px] pb-[30px] pt-[42px] px-[12px] relative bg-white rounded-xl border-2 
      overflow-hidden h-desktop:inline-flex flex-col justify-between items-start">
        {/* [@media(min-height:28rem)]:inline-flex  */}
        <svg className="absolute w-0 h-0" aria-hidden>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M 1 0 L 1 0 Q 1 0 1 0.04 L 1 0.55 Q 1 0.79 0.96 0.78 L 0.05 1 Q 0 0.95 0 0.78 L 0 0 Q 0 0 0 0 Z" />
          </clipPath>
        </svg>
        <div
          className="absolute inset-x-0 top-0 h-[35%] min-w-72 min-h-24 bg-blueprint-navyblue m-3 rounded-xl"
          style={{ clipPath: `url(#${clipId})` }}
          aria-hidden
        />
        <div className="self-stretch flex-1 pl-[24px] pr-[20px] flex flex-col justify-between items-start overflow-hidden relative z-10">
          <div className="text-white text-2xl font-medium font-['Poppins'] leading-8">{title}</div>
          <div className="self-stretch text-zinc-800 text-base font-normal font-['Poppins'] leading-relaxed">{body}</div>
        </div>
      </div>

      {/* Horizontal (tablet) layout: same content size at all widths */}
      <div className="w-full max-w-[1024px] sm:min-w-[630px] min-h-[145px] pl-3 pr-12 py-3 bg-white rounded-xl overflow-hidden border-2 inline-flex flex-col h-desktop:hidden">
        <div className="self-stretch inline-flex justify-start items-center gap-7">
          <div className="relative my-2 ml-2 w-64 h-32">
            <div
              className="absolute bg-blueprint-navyblue rounded-l-xl inset-y-0 left-0 w-8 min-h-[121px]"
              aria-hidden
            />
            <div
              className="relative min-h-[121px] bg-blueprint-navyblue text-white flex items-center justify-center h-full rounded-xl px-6 py-3 origin-bottom-left skew-x-[-8deg]"
            >
              <span className="text-left text-2xl font-medium font-['Poppins'] leading-8 skew-x-[8deg]">
                {title}
              </span>
            </div>
          </div>
          <div className="flex-1 w-[292px] shrink-0 text-zinc-800 text-base pl-[30px] font-normal font-['Poppins'] leading-relaxed">
            {body}
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationCard;
