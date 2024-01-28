import { Header } from "../views/Header/Header";

export const Chats = () => (
  <>
    <Header hideSettings hideSearchBar noShadow />

    <section style={{overflowX: "hidden"}}>
      <hr
        style={{
          height: "2px",
          background: "#7232F2",
          borderRadius: "32px",
          width: "100%",
        }}
      />
      <figure>
        <img src={`./chats.png`} alt="" />
      </figure>
    </section>
  </>
);
