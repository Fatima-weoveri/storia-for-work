import agentSunny from "../../assets/agentSunny.png";

export const MeetCompanion = () => {
  return (
    <section
      id="meet-the-agent"
      className="section-shell scroll-mt-[calc(var(--site-header-height)+2rem)]"
    >
      <div className="section-inner">
        <div className="mx-auto w-full max-w-[700px]">
          <div className="text-center">
            <h2 className="text-[36px] leading-[1.2]">Meet the Agent</h2>
            <p className="mt-3 text-[18px] text-(--storia-black75)">
              Your daily reflection companion.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[530px] rounded-[28px]">
            <div className="rounded-[24px] bg-(--storia-white75) p-6 shadow-[0_14px_30px_rgba(33,37,41,0.12)]">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
                <div className="mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-3xl sm:mx-0">
                  <img
                    src={agentSunny}
                    alt="Sunny, your reflection companion"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[28px] font-bold text-(--storia-black)">
                    Sunny
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-(--storia-black75)">
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
