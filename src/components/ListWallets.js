import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalListBanks from "./ModalListBanks";

const ListWallets = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="container my-4">
      <table class="table table-secondary table-striped center-text">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Bancos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Ver Bancos
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Ver Bancos
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Ver Bancos
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>username</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Ver Bancos
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <ModalListBanks bank={["teste1", "teste1", "teste1"]} status={show} action={handleClose}/>
    </div>
  )
}

export default ListWallets;