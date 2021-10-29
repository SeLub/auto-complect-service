/**
 * TODOs  добавить material-ui https://material-ui.com/ru/components/breadcrumbs/
 * ? нужна ли интеграция с react-router

 */
import React from "react";

export default function BreadCrumbs() {
  return (
    <div className="App">
      <div className="breadcrumb">
        <div>
          <nav>
            <ul>
              <li>
                <a className="breadcrumb1" href="/">
                  Хлебные крошки
                </a>
              </li>
              <li>
                <a className="breadcrumb2" href="/">
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
