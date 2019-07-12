import React from "react";
import "../../CSS/PageNotFound.css";
import { Link } from "react-router-dom";
import AppFooter from "../AppFooter";
import FourZeroFour from "./FourZeroFour";
import Earth from "./Earth";
import Moon from "./Moon";
import Astronaut from "./Astronaut";

// Copyright (c) 2019  Saleh Riaz Qureshi
// Released under the MIT license
// https://codepen.io/salehriaz/pen/erJrZM

const PageNotFound = () => (
  <div className="PageNotFound">
    <div className="PageNotFound-content">
      <div className="PageNotFound-stars">
        <div className="PageNotFound-central-body">
          <div className="PageNotFound-image-404">
            <FourZeroFour />
          </div>
          <Link to="/" className="PageNotFound-btn-go-home">
            BRING ME HOME
          </Link>
        </div>
        <div className="PageNotFound-objects">
          <div className="PageNotFound-object_rocket">
            <img
              src="data:image/svg+xml;base64,PCEtLUhhbmRjcmFmdGVkIGJ5IFNhbGVoIFJpYXogUXVyZXNoaSAtIHd3dy5zYWxlaHJpYXouY29t%0D%0AIC0gc2FsZWhyaWF6cUBnbWFpbC5jb20gLSBkcmliYmJsZS5jb20vc2FsZWhyaWF6IC0gYmVoYW5j%0D%0AZS5uZXQvc2FsZWhyaWF6IC0gdHdpdHRlci5jb20vc2FsZWhyaWF6cSAtIGZhY2Vib29rLmNvbS9z%0D%0AYWxlaHJpYXpxdXJlc2hpIC0gaW5zdGFncmFtLmNvbS9zYWxlaHJpYXoKClBsZWFzZSB1c2UgdGhp%0D%0AcyBTVkcgd2l0aCBhdHRyaWJ1dGlvbiB0byB0aGUgYXV0aG9yIGkuZSBTYWxlaCBSaWF6Ci0tPgoK%0D%0APHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ny44%0D%0AMyA0MS45MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1YmNiZjU7fS5jbHMtMntmaWxsOiNm%0D%0AZmNiMzk7fS5jbHMtM3tmaWxsOiNmZjk2MDA7fS5jbHMtNHtmaWxsOiMwMDdiYmQ7fS5jbHMtNXtm%0D%0AaWxsOiNjN2Y0Zjk7fS5jbHMtNntmaWxsOiM1YzU0NmE7fS5jbHMtN3tmaWxsOiNlODdlMDQ7fTwv%0D%0Ac3R5bGU+PC9kZWZzPjx0aXRsZT5yb2NrZXRfMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEt%0D%0AbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48ZyBp%0D%0AZD0icm9ja2V0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNi4zMSw0MS41N2E3Ljg5LDcuODks%0D%0AMCwwLDAsMS45MS0xLDkuNjgsOS42OCwwLDAsMC02LTE3LjY2QTEwLDEwLDAsMCwwLDcuMywyNC41%0D%0ANywxMC4xLDEwLjEsMCwwLDAsNS42NywyNmExMy44MywxMy44MywwLDEsMSwyNi44MSw2LjQzLDEz%0D%0ALjY3LDEzLjY3LDAsMCwxLTUuMzUsN0ExMy40MSwxMy40MSwwLDAsMSwxNi4zMSw0MS41N1oiLz48%0D%0AcGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01Ny44MSwyLjM1YS45Mi45MiwwLDAsMC0uNTMtLjc4QTIx%0D%0ALjc1LDIxLjc1LDAsMCwwLDM2Ljc1LDMuOUMzMi42Myw2LjcsMjIuMzgsMTUuMiwxMi44OSwyMy42%0D%0ANWEzLjY5LDMuNjksMCwwLDAtLjU5LDQuODJsNC4wNSw1Ljk0YTMuNjksMy42OSwwLDAsMCw0Ljcs%0D%0AMS4yYzExLjMzLTUuNzQsMjMtMTIuMTksMjcuMS0xNUEyMS43NSwyMS43NSwwLDAsMCw1Ny44MSwy%0D%0ALjM1Wm0wLDAiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNC4zMywzMS40NGwtMi0zYTMuNjks%0D%0AMy42OSwwLDAsMSwuNTktNC44MkMyMi4zOCwxNS4yLDMyLjYzLDYuNywzNi43NSwzLjlBMjEuNzUs%0D%0AMjEuNzUsMCwwLDEsNTcuMjgsMS41N2EuOTIuOTIsMCwwLDEsLjM3LjMyaDBabTAsMCIvPjxwYXRo%0D%0AIGNsYXNzPSJjbHMtMSIgZD0iTTQ0LjgsMTcuMzRhNS41Miw1LjUyLDAsMSwxLDEuNDUtNy42Nyw1%0D%0ALjUyLDUuNTIsMCwwLDEtMS40NSw3LjY3Wm0wLDAiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01%0D%0ANy4yOCwxLjU3QTIxLjQ4LDIxLjQ4LDAsMCwwLDQ2LjQ2LjE3bDguNzEsMTIuNzdBMjEuNDgsMjEu%0D%0ANDgsMCwwLDAsNTcuODEsMi4zNWEuOTIuOTIsMCwwLDAtLjUzLS43OFptMCwwIi8+PHBhdGggY2xh%0D%0Ac3M9ImNscy00IiBkPSJNNTcuNjYsMS44OWEuOTIuOTIsMCwwLDAtLjM4LS4zMkEyMS40OCwyMS40%0D%0AOCwwLDAsMCw0Ni40Ni4xN2w0LjM1LDYuMzhaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNDQu%0D%0AOCwxNy4zNGE1LjUyLDUuNTIsMCwwLDAsMS40NS03LjY3bC05LjEyLDYuMjJhNS41Miw1LjUyLDAs%0D%0AMCwwLDcuNjcsMS40NVptMCwwIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMzYuMzcsMTYuNDFh%0D%0ANi40NCw2LjQ0LDAsMSwxLDksMS42OSw2LjQ1LDYuNDUsMCwwLDEtOS0xLjY5Wm05LjEyLTYuMjJh%0D%0ANC42LDQuNiwwLDEsMC0xLjIxLDYuMzksNC42MSw0LjYxLDAsMCwwLDEuMjEtNi4zOVptMCwwIi8+%0D%0APGcgaWQ9ImZsYW1lIj48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik0xMS4zOSwzOC40OUM3LjM5LDQx%0D%0ALjIxLDAsNDEuMjIsMCw0MS4yMnMyLjMzLTYuNjMsNi43LTkuNjFhNC4xNiw0LjE2LDAsMCwxLDQu%0D%0ANjksNi44OFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMS43NSwzNi41NGMtMi42NSwxLjgx%0D%0ALTcuNTYsMS44MS03LjU2LDEuODFTNS43NCwzNCw4LjY0LDMyYTIuNzYsMi43NiwwLDAsMSwzLjEy%0D%0ALDQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEuNzIsMzUuMzdjLTEuNjEsMS4xLTQu%0D%0ANjEsMS4xLTQuNjEsMS4xYTksOSwwLDAsMSwyLjcxLTMuODksMS42OCwxLjY4LDAsMCwxLDEuOSwy%0D%0ALjc4WiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
              alt="rocket"
            />
          </div>
          <div className="PageNotFound-earth-moon">
            <div className="PageNotFound-object_earth">
              <Earth />
            </div>

            <div className="PageNotFound-object_moon">
              <Moon />
            </div>
          </div>
          <div className="PageNotFound-box_astronaut">
            <div className="PageNotFound-object_astronaut">
              <Astronaut />
            </div>
          </div>
        </div>
        <div className="PageNotFound-glowing_stars">
          <div className="PageNotFound-star" />
          <div className="PageNotFound-star" />
          <div className="PageNotFound-star" />
          <div className="PageNotFound-star" />
          <div className="PageNotFound-star" />
        </div>
      </div>
    </div>
    <div className="PageNotFound-footer">
      <AppFooter />
    </div>
  </div>
);

export default PageNotFound;
