interface ModalProps {
    titulo: string;
    children: React.ReactNode;
    fecharModal: () => void;
}

const Modal = ({ titulo, children, fecharModal }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{titulo}</h2>
                    <button onClick={fecharModal} className="text-gray-600 hover:text-gray-800">
                        ✖
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
