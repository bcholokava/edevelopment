// import "../styles/lines.css";
import anime from "animejs/lib/anime.es.js";

const Lines = () => {
  anime({
    targets: ".lines-mb path",
    strokeDashoffset: [anime.setDashoffset, -5],
    easing: "easeInOutSine",
    duration: 500,
    delay: function (el, i) {
      return i * 240;
    },
    direction: "alternate",
    loop: true,
  });
  anime({
    targets: ".lines path",
    strokeDashoffset: [anime.setDashoffset, -3],
    easing: "linear",

    duration: 500,
    delay: function (el, i) {
      return i * 230;
    },
    direction: "alternate",
    loop: true,
  });
  return (
    <div className="lines-mb">
      <svg
        className="lines"
        width="377"
        height="147"
        viewBox="0 0 377 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M376 121.825C353.939 56.1271 189.214 147.786 91.7947 116.576C-5.62482 85.3666 32.5394 121.945 1.77907 121.825"
          stroke="#463C52"
          strokeOpacity="0.58"
        />
        <path
          d="M376 69.7416C353.939 4.04374 376.13 125.751 210.314 33.9538C44.4989 -57.8429 32.5393 69.8619 1.77904 69.7416"
          stroke="#463C52"
          strokeOpacity="0.58"
        />
        <path
          d="M375.221 146.445C337.305 108.303 315.621 156.48 168.114 85.5159C20.6069 14.5518 31.7602 146.566 0.999867 146.445"
          stroke="#463C52"
          strokeOpacity="0.58"
        />
      </svg>
    </div>
  );
};

export default Lines;
