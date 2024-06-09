// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { MessageSquareMore, Menu, X } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isHidden, setIsHidden] = useState(false);
  const [menuState, setMenuState] = useState(false);
  let preScrollY = 0;
  const scrollHandler = (e) => {
    const curScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    let curScrollDirection = "";
    if (window.location.pathname === "/") {
      setIsTop(curScrollY <= 50);
    }
    if (preScrollY < curScrollY) {
      curScrollDirection = "down";
    } else {
      curScrollDirection = "up";
    }
    setScrollDirection(preScrollY < curScrollY ? "down" : "up");
    if (curScrollY > windowHeight) {
      if (curScrollDirection == "up") {
        setIsHidden(false);
      } else if (curScrollDirection == "down") {
        setIsHidden(true);
      }
    }
    preScrollY = curScrollY;
  };
  const menuHandler = (state) => {
    const target = document.querySelector(".menuContainer");
    if (state) {
      setMenuState(true);
    } else {
      target.style.animation = "fadeOut 0.75s forwards";
      setTimeout(function () {
        setMenuState(false);
      }, 750);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  useEffect(() => {
    const target = document.getElementById("header");
    if (isHidden) {
      target.style.transform = "translateY(-100%)";
    } else {
      target.style.transform = "translateY(0%)";
    }
  }, [isHidden]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.pathname === "/") {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, [window.location.pathname]);
  return (
    <div id="header" className={`header ${!isTop && "activate"}`}>
      <div className="headerContainer">
        <div
          className="logoWrap"
          onClick={() => {
            navigate("/site");
          }}
        >
          <svg
            width="1729"
            height="320"
            viewBox="0 0 1729 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M320 160C320 248.366 248.366 320 160 320C71.6344 320 0 248.366 0 160C0 71.6344 71.6344 0 160 0C205.126 0 245.889 18.6814 274.976 48.7323C262.043 53.9707 250.231 61.3984 240 70.5557C218.77 51.5541 190.734 40 160 40C93.7258 40 40 93.7258 40 160C40 226.274 93.7258 280 160 280C226.274 280 280 226.274 280 160C280 135.269 272.519 112.286 259.696 93.1898C269.61 84.2356 281.527 77.457 294.694 73.6066C310.71 98.5251 320 128.178 320 160Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M480 160C480 248.366 408.366 320 320 320C274.874 320 234.111 301.319 205.024 271.268C217.957 266.029 229.769 258.602 240 249.444C261.23 268.446 289.266 280 320 280C386.274 280 440 226.274 440 160C440 93.7258 386.274 40 320 40C253.726 40 200 93.7258 200 160C200 184.731 207.481 207.714 220.304 226.81C210.39 235.764 198.473 242.543 185.306 246.393C169.29 221.475 160 191.822 160 160C160 71.6344 231.634 0 320 0C408.366 0 480 71.6344 480 160Z"
              fill="white"
            />
            <rect x="560" width="8" height="320" fill="white" />
            <path
              d="M1004.14 281.233C1004.14 289.962 1003.96 298.691 1004.21 307.405C1004.34 311.821 1002.77 313.528 998.321 313.499C990.24 313.455 982.144 313.705 974.078 314.073C969.397 314.294 967.778 312.763 967.793 307.758C967.94 259.728 967.778 211.684 967.748 163.654C967.719 113.416 967.748 63.1783 967.763 12.9405C967.763 10.5265 967.763 8.09781 967.763 5.02143C979.362 5.02143 990.284 4.84479 1001.16 5.3011C1002.28 5.34526 1004.14 9.23121 1004.15 11.3361C1004.31 46.3833 1004.22 81.4305 1004.19 116.478C1004.19 120.957 1004.19 125.224 1004.19 129.563C1005.05 127.9 1008.11 124.176 1009.14 122.631C1026.71 96.2237 1051.87 87.7599 1082.66 89.276C1130.53 91.6312 1162.58 126.296 1170.83 163.757C1178.94 200.556 1178.71 237.148 1159.19 271.43C1133.96 315.721 1081.16 327.217 1044.08 314.455C1030.09 309.642 1019.72 300.207 1011.39 288.255C1009.6 285.664 1007.64 283.191 1005.75 280.659C1005.21 280.851 1004.68 281.042 1004.14 281.233ZM1004.46 203.805C1004.46 212.505 1004.19 221.21 1004.52 229.906C1005.02 243.051 1007.93 255.563 1015.32 266.779C1027.94 285.929 1045.01 297.248 1068.52 296.395C1092.85 295.511 1113.21 285.767 1123.04 262.878C1140.04 223.283 1140.72 182.686 1121.89 143.37C1104.36 106.763 1054.26 98.1372 1027.05 126.369C1015.29 138.586 1006.53 152.702 1005.03 170.042C1004.05 181.273 1004.46 203.805 1004.46 203.805Z"
              fill="white"
            />
            <path
              d="M1568.2 290.213C1571.85 290.213 1574.96 290.213 1578.06 290.213C1625.62 290.168 1673.17 290.227 1720.73 289.948C1727.19 289.904 1729.26 291.582 1728.79 298.279C1727.72 313.396 1728.07 313.366 1712.51 313.425C1656.39 313.631 1600.25 313.882 1544.12 314.102C1541.68 314.117 1539.52 314.102 1536.78 314.029C1530.52 314.102 1529.53 311.35 1529.45 306.257C1529.45 301.376 1529.53 296.454 1529.53 291.552C1529.53 199.629 1529.52 107.705 1529.52 15.7963C1529.52 4.34454 1529.52 4.50646 1541.13 4.52118C1600.94 4.59477 1660.76 4.69781 1720.56 4.4623C1727.48 4.43286 1729.51 6.09617 1728.81 13.1763C1727.26 28.6023 1727.63 28.3227 1712.07 28.3079C1666.23 28.2638 1620.4 28.4993 1574.56 28.5582C1570.73 28.5582 1567.95 28.8526 1567.97 33.9161C1568.08 68.2273 1568 102.553 1568.01 136.864C1568.01 137.571 1568.35 138.263 1568.82 140.059C1574.12 140.059 1579.65 140.059 1585.17 140.059C1622.92 140.044 1660.67 140.118 1698.41 139.926C1703.61 139.897 1705.3 141.486 1705.02 146.697C1704.28 160.239 1707.69 159.312 1692.47 159.385C1653.74 159.547 1615.01 159.65 1576.28 159.43C1570.04 159.4 1567.82 160.725 1567.86 167.481C1568.13 205.472 1567.89 243.463 1567.85 281.454C1567.82 284.089 1568.04 286.724 1568.2 290.213Z"
              fill="white"
            />
            <path
              d="M1433.09 67.7711C1423.91 67.7711 1415.68 67.9919 1407.46 67.5798C1405.92 67.5062 1403.58 65.1363 1403.18 63.4583C1396.17 33.4893 1373.83 22.9207 1346.64 19.4027C1326.26 16.7532 1306.02 17.8424 1287.22 27.7929C1265.2 39.4507 1254.93 61.4123 1261.73 82.9175C1266.38 97.637 1278.02 106.351 1291.03 112.209C1314.39 122.719 1338.39 131.816 1362.16 141.383C1381.5 149.17 1400.03 158.178 1416.66 171.161C1461.28 205.958 1452.93 282.338 1395.51 306.64C1351.74 325.157 1307.55 324.421 1264.42 304.461C1236.32 291.464 1219.35 269.252 1215.39 237.06C1225.4 237.06 1234.98 237.06 1244.43 237.06C1244.89 237.664 1245.4 238.017 1245.43 238.415C1247.96 271.342 1268.06 288.711 1298.03 296.307C1325.01 303.136 1351.59 301.37 1378.1 291.847C1403.83 282.603 1413.26 253.914 1407.16 230.304C1401.27 207.533 1384.37 195.272 1364.82 186.499C1341.65 176.107 1317.47 167.996 1294.15 157.899C1281.44 152.394 1269.01 145.711 1257.5 138.013C1215.77 110.104 1220.98 47.149 1257.72 20.6097C1273.81 8.98128 1291.71 2.40165 1311.45 0.826664C1341.48 -1.5579 1370.67 0.443952 1397.04 17.2095C1413.29 27.5426 1425.35 41.2318 1431.24 59.8373C1431.97 62.0746 1432.33 64.4298 1433.09 67.7711Z"
              fill="white"
            />
            <path
              d="M648.821 4.63858C660.111 4.63858 670.399 4.88881 680.674 4.53554C686.414 4.32947 688.269 6.13997 688.181 12.0719C687.783 40.2598 687.798 68.4478 687.798 96.6357C687.783 136.835 688.46 177.034 687.798 217.218C687.047 263.379 728.262 299.162 771.022 300.207C794.5 300.781 817.08 297.351 837.186 284.516C861.959 268.692 874.883 245.097 875.413 216.276C876.664 148.655 876.532 81.0035 876.959 13.3673C876.973 10.7325 876.959 8.08295 876.959 4.69745C882.552 4.69745 887.424 4.31475 892.164 4.91825C893.695 5.1096 896.05 7.92103 896.05 9.54018C895.962 78.1626 896.624 146.8 895.049 215.393C893.813 269.605 856.057 309.701 802.022 317.267C771.022 321.609 740.42 320.196 711.158 307.64C676.479 292.759 656.254 266.617 652.147 229.023C649.969 209.093 648.556 189.001 648.35 168.967C647.79 116.522 648.07 64.0613 648.07 11.6156C648.055 9.43714 648.512 7.2881 648.821 4.63858Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="menuWrap">
          <ul>
            <li
              onClick={() => {
                navigate("/introduction");
              }}
            >
              <p>연구실 소개</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/member");
              }}
            >
              <p>구성원</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/project");
              }}
            >
              <p>프로젝트</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/news");
              }}
            >
              <p>소식</p>
              <hr />
            </li>
          </ul>
        </div>
        <div className="funcWrap">
          <button className="contact">
            연락하기
            <MessageSquareMore />
          </button>
          <button
            className="menu"
            onClick={() => {
              menuHandler(true);
            }}
          >
            <Menu />
          </button>
        </div>
      </div>
      {menuState && (
        <div className="menuContainer">
          <div className="funcWrap">
            <button
              onClick={() => {
                menuHandler(false);
              }}
            >
              <X />
            </button>
          </div>
          <ul>
            <li
              onClick={() => {
                navigate("/introduction");
                menuHandler(false);
              }}
            >
              <p>연구실 소개</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/member");
                menuHandler(false);
              }}
            >
              <p>구성원</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/project");
                menuHandler(false);
              }}
            >
              <p>프로젝트</p>
              <hr />
            </li>
            <li
              onClick={() => {
                navigate("/news");
                menuHandler(false);
              }}
            >
              <p>소식</p>
              <hr />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
