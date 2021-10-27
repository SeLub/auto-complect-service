/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/**
 * TODOs  добавить material-ui https://material-ui.com/ru/components/breadcrumbs/
 * ? нужна ли интеграция с react-router

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
