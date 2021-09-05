import { Modal, Button } from "react-bootstrap"

const ModalListBanks = ({bank, status, action}) => {
  return (
  <Modal show={status} onHide={action} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Lista de Bancos</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
       {bank.map(e => (
         <li key="e">
           {e}
         </li>
       ))}
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={action}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalListBanks