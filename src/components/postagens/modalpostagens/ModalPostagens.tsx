import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormularioPostagens from '../formpostagens/FormPostagens';

function ModalPostagens() {
  return (
    <>
      <Popup 
      trigger={<button className="rounded font-bold border-white border-solid border-2 py-2 px-4">Nova Postagens</button>} modal>
        <div>
          <FormularioPostagens />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagens;