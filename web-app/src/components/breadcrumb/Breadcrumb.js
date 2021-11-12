import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const css = `
@import url("https://fonts.cdnfonts.com/css/ford-antenna");
.css-63vwl1-MuiTypography-root-MuiBreadcrumbs-root {
  margin: 0px;
  font-family:"Ford Antenna",sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.00938em;
  color: #717171;
  padding-block: 32px 16px;
};
.breadcrumbs_link:hover {
  color: #333333;
}
.breadcrumbs_link:focus {
  color: #333333;
}
.breadcrumbs_link:active {
  color: #333333;
}
`;

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div className="App">
      <style type="text/css">{css}</style>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          className="breadcrumbs"
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link
            className="breadcrumbs_link"
            underline="hover"
            color="inherit"
            href="/"
          >
            Хлебные крошки
          </Link>
          <Link
            className="breadcrumbs_link"
            underline="hover"
            color="inherit"
            href="/"
          >
            Модификация кузова
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}
