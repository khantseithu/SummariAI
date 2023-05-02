import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-2">
        <img src={logo} alt="SummariAi Logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/khantseithu/SummariAI", "_blank");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        SummariAi is a web app that summarizes articles using OpenAI's GPT-4
      </h2>
    </header>
  );
};
export default Hero;
