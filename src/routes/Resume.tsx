import './Resume.css';

export default function Resume() {
    return (
        <object
            type="application/pdf"
            data="Finnbarr O'Callahan Resume.pdf"
            className={"Pdf"}>
        </object>
    );
}