/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/**
 *  
 * Docs 1) https://material-ui.com/ru/components/breadcrumbs/#active-last-breadcrumb
 * Docs 2) https://material-ui.com/ru/components/breadcrumbs/#integration-with-react-router
 * Docs 3) https://material-ui.com/ru/components/breadcrumbs/#accessibility

 */
import React from "react";

export default class BreadCrumbs extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="breadcrumb">
          <div>
            <nav>
              <ul>
                <li>
                  <a className="breadcrumb1" href="">
                    Хлебные крошки
                  </a>
                </li>
                <li>
                  <a className="breadcrumb2" href="">
                    Хлебные крошки
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
