import agentSunny from "../../assets/agentSunny.png";

export const MeetCompanion = () => {
  return (
    <section className="section-shell bg-(--storia-green50)">
      <div className="section-inner">
        <div className="mx-auto w-full max-w-[700px]">
          <div className="text-center">
            <h2 className="text-[36px] leading-[1.2]">Meet the Agent</h2>
            <p className="mt-3 text-[18px] text-(--storia-black75)">
              Your daily reflection companion.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[560px] rounded-[28px] p-3">
            <div className="rounded-[24px] bg-(--storia-white75) p-8 shadow-[0_14px_30px_rgba(33,37,41,0.12)]">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
                <div className="mx-auto h-30 w-30 shrink-0 overflow-hidden rounded-3xl sm:mx-0">
                  <img
                    src={agentSunny}
                    alt="Sunny, your reflection companion"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-(--storia-black)">
                    Sunny
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-(--storia-black75)">
                    I ask the questions worth sitting with. I notice what keeps
                    coming up in your entries. And I give you a nudge - not a
                    lecture - when you need to move forward.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-[13px] italic text-(--storia-black50)">
              Warm. Observant. On your side.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
