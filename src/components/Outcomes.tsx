// import harvardLogo from "../../assets/harvardLogo.png";

// const cards = [
//   {
//     stat: "2 weeks",
//     body: "Most users notice a shift in how they think within two weeks of daily entries.",
//     tone: "var(--storia-coffee-light)",
//     accent: "var(--storia-black90)",
//     emoji: "🌅",
//   },
//   {
//     stat: "80%",
//     body: "Of Storia users report feeling less caught in mental loops after 30 days of consistent use.",
//     tone: "var(--storia-coffee-light)",
//     accent: "var(--storia-black90)",
//     emoji: "🌀",
//   },
//   {
//     stat: "3x",
//     body: "People who reflect with structure make decisions with more confidence than those journaling freely.",
//     tone: "var(--storia-coffee-light)",
//     accent: "var(--storia-black90)",
//     emoji: "🎯",
//   },
// ];

// export const Outcomes = () => {
//   return (
//     <section
//       id="outcomes"
//       className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
//     >
//       <div className="section-inner">
//         <h2 className="mx-auto max-w-[780px] text-center text-[clamp(2.1rem,4vw,2.5rem)] leading-[1.2] text-(--storia-black)">
//           What consistent reflection actually does.
//         </h2>

//         <p className="mt-4 text-center text-[14px] text-(--storia-black75)">
//           Outcomes based on early user feedback and structured reflection
//           research.
//         </p>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {cards.map((card) => (
//             <article
//               key={card.stat}
//               className="rounded-[20px] border-[0.5px] border-solid border-(--storia-black15) p-8 text-center shadow-[0_10px_28px_rgba(33,37,41,0.1)]"
//               style={{ backgroundColor: card.tone }}
//             >
//               <p className="text-[42px] leading-none font-bold md:text-[48px] opacity-90">
//                 {card.emoji}
//               </p>
//               <p
//                 className="mt-4 text-[42px] leading-none  md:text-[48px]"
//                 style={{
//                   color: card.accent,
//                   fontFamily: "Fraunces, serif",
//                 }}
//               >
//                 {card.stat}
//               </p>
//               <p className="mt-4 text-[14px] leading-[1.55] text-(--storia-black75)">
//                 {card.body}
//               </p>
//             </article>
//           ))}
//         </div>

//         <div className="mt-4 flex flex-col items-center gap-4 pt-12 md:flex-row md:items-center md:justify-center md:gap-4">
//           <div className="shrink-0 px-6 py-4">
//             <img
//               src={harvardLogo}
//               alt="Harvard University"
//               className="mx-auto h-9 w-auto max-w-[200px] object-contain sm:h-10 md:h-11"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//           <div className="max-w-[520px] text-center md:text-left">
//             <p className="text-[14px] leading-[1.65] text-(--storia-black75) md:text-[14px]">
//               The outcomes you see above rest on the same science{" "}
//               <strong className="font-semibold text-(--storia-black90)">
//                 science backed by Harvard research;
//               </strong>{" "}
//               structured writing helps people step out of loops and decide with
//               more confidence.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import harvardLogo from "../../assets/harvardLogo.png";

const cards = [
  {
    stat: "2 weeks",
    body: "Most users notice a shift in how they think within two weeks of daily entries.",
    tone: "var(--storia-coffee-light)",
    accent: "var(--storia-black90)",
    emoji: "🌅",
  },
  {
    stat: "80%",
    body: "Of Storia users report feeling less caught in mental loops after 30 days of consistent use.",
    tone: "var(--storia-coffee-light)",
    accent: "var(--storia-black90)",
    emoji: "🌀",
  },
  {
    stat: "3x",
    body: "People who reflect with structure make decisions with more confidence than those journaling freely.",
    tone: "var(--storia-coffee-light)",
    accent: "var(--storia-black90)",
    emoji: "🎯",
  },
];

export const Outcomes = () => {
  return (
    <section
      id="outcomes"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
    >
      <div className="section-inner grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14 lg:gap-20">
        <div className="text-center">
          <h3 className="text-[clamp(5.5rem,16vw,9rem)] leading-none text-(--storia-black)">
            86%
          </h3>
          <p className="mx-auto mt-4 max-w-64 text-[clamp(1rem,2.2vw,1.35rem)] leading-normal text-(--storia-black)">
            users reported feeling significantly better after just a few
            sessions*
          </p>
        </div>

        <div className="rounded-[24px] bg-(--storia-blue75) px-7 py-8 md:px-9 md:py-10">
          <h3 className="text-[clamp(1.8rem,3.6vw,2.5rem)] leading-tight font-bold text-(--storia-black)">
            Science backed and measureably effective
          </h3>
          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-4">
            <div className="shrink-0 px-6 py-4">
              <img
                src={harvardLogo}
                alt="Harvard University"
                className="mx-auto h-9 w-auto max-w-[200px] object-contain sm:h-10 md:h-11"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="max-w-[520px] text-center md:text-left">
              <p className="text-[14px] leading-[1.65] text-(--storia-black75) md:text-[14px]">
                The outcomes rest on the same{" "}
                <strong className="font-semibold text-(--storia-black90)">
                  science backed by Harvard research;
                </strong>{" "}
                structured writing helps people step out of loops and decide
                with more confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
