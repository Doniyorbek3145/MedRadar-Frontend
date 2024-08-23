import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "components";
import { CloudDownloadOutlined } from "@ant-design/icons";

const SecondRoom = () => {
  const navigate = useNavigate();

  const paths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Lorem ipsum dolor", path: "/" },
  ];

  const gridStyle: React.CSSProperties = {
    width: "33.33%",
  };

  return (
    <div className="hero">
      <div className="container">
        <Breadcrumb paths={paths} className="bread-crumb" />

        <div className="hero__box">
          <h1 className="hero-title">Lorem ipsum dolor</h1>

          <ul className="hero__button-group">
            <li className="hero__button-item">
              <Button download className="hero__button-group-btn">
                Umumiy bemorlar ahvoli
                <CloudDownloadOutlined className="hero__button-group-icon" />
              </Button>
            </li>
            <li className="hero__button-item">
              <Button download className="hero__button-group-btn">
                Sog'lig'ida o'zgarish bo'lgan bemorlar ahvoli
                <CloudDownloadOutlined className="hero__button-group-icon" />
              </Button>
            </li>
          </ul>
        </div>

        <Card className="card">
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Bemorlar</h2>
            <h3 className="card-count">200</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Palata</h2>
            <h3 className="card-count">1 470 000</h3>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h2 className="card-title">Kravat</h2>
            <h3 className="card-count">2 000 000</h3>
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn table__item-btn--red"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn table__item-btn--red"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      type="button"
                      className="table__item-btn table__item-btn--red"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
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
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 1
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 2
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
                      className="table__item-btn"
                      type="button"
                    >
                      Kravat 3
                    </button>
                  </li>
                  <li className="table__item">
                    <button
                      onClick={() => navigate("/pages/another-room/1")}
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

export default SecondRoom;
