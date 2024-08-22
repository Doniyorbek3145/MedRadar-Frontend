import { Card } from "antd";
import { Breadcrumb } from "components";
// import { Divider, Table } from "antd";

const Home = () => {
  const paths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Lorem ipsum dolor", path: "/" },
  ];

  const gridStyle: React.CSSProperties = {
    width: "20%",
  };
  return (
    <div className="hero">
      <div className="container">
        <Breadcrumb paths={paths} className="bread-crumb" />
        <h1 className="hero-title">Lorem ipsum dolor</h1>

        <Card className="card">
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Bemorlar</h2>
            <h3 className="card-count">200</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Наличные:</h2>
            <h3 className="card-count">1 470 000</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Терминал:</h2>
            <h3 className="card-count">2 000 000</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Средняя цена продуктов</h2>
            <h3 className="card-count">80 000</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Количество продуктов</h2>
            <h3 className="card-count">45</h3>
          </Card.Grid>
        </Card>

        <table className="table">
          <thead className="table-head">
            <tr className="table-rows">
              <th className="table-th">
                <h2 className="table-th-title">1 - Palata</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">2 - Palata</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">3 - Palata</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">4 - Palata</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">5 - Palata</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">6 - Palata</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              {/* <td>
                <Checkbox className="table-checkbox" />
              </td> */}
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      className="table__item-btn table__item-btn--red"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button
                      className="table__item-btn table__item-btn--red"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      className="table__item-btn table__item-btn--red"
                      type="button"
                    >
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      type="button"
                      className="table__item-btn table__item-btn--red"
                    >
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      type="button"
                      className="table__item-btn table__item-btn--red"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
              <td className="table-td">
                <ul className="table__list">
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button className="table__item-btn" type="button">
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      type="button"
                      className="table__item-btn table__item-btn--red"
                    >
                      Kravat 4
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
