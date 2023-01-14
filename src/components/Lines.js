import frLine from "../imagesmb/lines/line1.svg";
import secLine from "../imagesmb/lines/line2.svg";
import thLine from "../imagesmb/lines/line1.svg";
import "../styles/lines.css";
import anime from "animejs/lib/anime.es.js";

const Lines = () => {
  anime({
    targets: ".lines-mb path",
    strokeDashoffset: [anime.setDashoffset, -5],
    easing: "easeInOutSine",
    duration: 500,
    delay: function (el, i) {
      return i * 230;
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
        width="320"
        height="61"
        viewBox="0 0 320 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 59.8685C301.175 3.80628 320.111 107.663 178.615 29.3296C37.1191 -49.0037 26.9136 59.9711 0.664786 59.8685"
          stroke="#463C52"
          strokeOpacity="0.58"
        />
      </svg>
      <svg
        width="320"
        height="72"
        viewBox="0 0 320 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M319.335 71.3222C286.981 38.7741 268.476 79.8852 142.604 19.3292C16.7313 -41.2269 26.2488 71.4248 -9.0003e-06 71.3222"
          stroke="#463C52"
          strokeOpacity="2"
        />
      </svg>

      <svg
        className="lines"
        width="320"
        height="24"
        viewBox="0 0 320 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 21.3129C301.175 -34.7493 160.609 43.4665 77.4782 16.8341C-5.6532 -9.79835 26.9136 21.4155 0.664786 21.3129"
          stroke="#463C52"
          strokeOpacity="0.58"
        />
      </svg>
    </div>
  );
};

export default Lines;
