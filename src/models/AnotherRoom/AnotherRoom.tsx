import { useState } from "react";
import { Card, Modal, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button, Input } from "components";
import { CloudDownloadOutlined, FileExcelOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const AnotherRoom = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSmallModal, setIsSmallModal] = useState<boolean>(false);

  const paths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Lorem ipsum dolor", path: "/" },
  ];

  const gridStyle: React.CSSProperties = {
    width: "33.33%",
  };

  const openModal = () => setIsOpenModal((prevState) => !prevState);

  const { RangePicker } = DatePicker;

  const confirmation = () => {
    setIsOpenModal(false);
    setIsSmallModal(true);
  };

  const isReallyConfirmation = ({ isReally }: { isReally: boolean }) => {
    if (isReally) {
      setIsSmallModal(false);
      setIsOpenModal(true);
    } else {
      setIsSmallModal(false);
      setIsOpenModal(false);
    }
  };

  return (
    <div className="hero">
      <Modal
        footer={false}
        closeIcon={false}
        open={isSmallModal}
        className="hero-small-modal"
        onCancel={() => setIsSmallModal(false)}
      >
        <h2 className="hero-small-modal-title">
          Haqiqatdan ham tasdiqlamoqchimisiz?
        </h2>
        <div className="hero-small-modal__container">
          <button
            type="button"
            onClick={() => isReallyConfirmation({ isReally: true })}
            className="hero-small-modal__container-btn hero-small-modal__container-btn--active"
          >
            Yo'q
          </button>
          <button
            onClick={() => isReallyConfirmation({ isReally: false })}
            className="hero-small-modal__container-btn"
            type="button"
          >
            Ha
          </button>
        </div>
      </Modal>
      <Modal
        width={700}
        footer={false}
        open={isOpenModal}
        onCancel={openModal}
        className="hero-form-modal"
      >
        <div className="hero-form-modal__content">
          <h2 className="hero-form-modal-info">Ma’lumot</h2>
          <h3 className="hero-form-modal-author">
            Afzal Pulatov <span className="hero-form-modal-span">(Be’mor)</span>
          </h3>
        </div>
        <form className="hero-form-modal__inputs">
          <div className="hero-form-modal__container">
            <label className="hero-form-modal__label" htmlFor="data">
              <h3 className="hero-form-modal__label-name">Vaqt</h3>
              <RangePicker
                style={{ padding: "10px" }}
                id={"data"}
                className="hero-form-modal__label-input"
              />
            </label>
            <label className="hero-form-modal__label" htmlFor="download">
              <h3 className="hero-form-modal__label-name">Yuklash</h3>
              <Button
                download
                href="#"
                style={{ padding: "10px" }}
                id="download"
                className="hero-form-modal__label-btn btn"
              >
                Yuklash <FileExcelOutlined />
              </Button>
            </label>
            <label className="hero-form-modal__label" htmlFor="select">
              <h3 className="hero-form-modal__label-name">
                Hozirgi ko'rsatkichlar
              </h3>
              <Select
                className="hero-form-modal__select"
                style={{ width: "100%" }}
                options={[
                  {
                    label: "Birinchi",
                    value: "Birinchi",
                  },
                  {
                    label: "Ikkinchi",
                    value: "Ikkinchi",
                  },
                ]}
                id="select"
                defaultValue="lucy"
              />
            </label>
            <label className="hero-form-modal__label" htmlFor="input">
              <h3 className="hero-form-modal__label-name">
                Ohirgi ko’rsatkichlar
              </h3>
              <Input
                type="text"
                id="input"
                style={{ padding: "10px" }}
                className="hero-form-modal__label-input"
              />
            </label>
            <label className="hero-form-modal__label" htmlFor="input2">
              <h3 className="hero-form-modal__label-name">
                Lorem ipsum dolor sit
              </h3>
              <Input
                type="text"
                style={{ padding: "10px" }}
                id="input2"
                className="hero-form-modal__label-input"
              />
            </label>
          </div>
          <label htmlFor="text" className="hero-form-modal__label">
            <h3 className="hero-form-modal__label-name">Text</h3>
            <TextArea
              className="hero-form-modal-textarea"
              id="text"
              style={{ padding: "10px", height: "100px" }}
            />
          </label>

          <Button
            onClick={confirmation}
            style={{ width: "100%", padding: "25px" }}
          >
            Tasdiqlash
          </Button>
        </form>
      </Modal>
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

        <table className="table" style={{ textAlign: "left" }}>
          <thead className="table-head">
            <tr className="table-rows">
              <th className="table-th">
                <h2 className="table-th-title">Palatalar</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">Puls va nafas olish</h2>
              </th>
              <th className="table-th">
                <h2 className="table-th-title">Ko'rish</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-td">
                <button
                  type="button"
                  className="table__item-btn"
                  onClick={() => navigate("/pages/another-room/1")}
                >
                  Kravat 1
                </button>
              </td>
              <td className="table-td">
                <p className="table-td-puls">180-80 </p>
              </td>
              <td className="table-td">
                <Button type="link" onClick={openModal}>
                  Batafsil
                </Button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-td">
                <button
                  type="button"
                  className="table__item-btn"
                  onClick={() => navigate("/pages/another-room/1")}
                >
                  Kravat 1
                </button>
              </td>
              <td className="table-td">
                <p className="table-td-puls">180-80 </p>
              </td>
              <td className="table-td">
                <Button type="link" onClick={openModal}>
                  Batafsil
                </Button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-td">
                <button
                  type="button"
                  className="table__item-btn"
                  onClick={() => navigate("/pages/another-room/1")}
                >
                  Kravat 1
                </button>
              </td>
              <td className="table-td">
                <p className="table-td-puls">180-80 </p>
              </td>
              <td className="table-td">
                <Button type="link" onClick={openModal}>
                  Batafsil
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnotherRoom;
