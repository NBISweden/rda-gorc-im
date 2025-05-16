import "./PanelView.css";
import { PropsWithChildren, ReactNode, useState } from 'react'

type Props = PropsWithChildren<{
    left?: ReactNode;
    right?: ReactNode;
    top?: ReactNode;
    bottom?: ReactNode;
}>

function PanelView(props: Props) {
    return (
        <div className="root-panel">
            <div className="content-panel">{props.children}</div>
            <div className="overlay">
                <VerticalPanel alignment="left">{props.left}</VerticalPanel>
                <div className="main-panel">
                    <div className="top-panel">{props.top}</div>
                    <div className="bottom-panel">{props.bottom}</div>
                </div>
                <VerticalPanel alignment="right">{props.right}</VerticalPanel>
            </div>
        </div>
    )
}


type VeritcalPanelProps = PropsWithChildren<{
    alignment: "left" | "right";
}>


function VerticalPanel(props: VeritcalPanelProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="vertical-panel" data-alignment={props.alignment} data-is-open={isOpen}>
            <div className="handle" onClick={(event) => {setIsOpen(!isOpen); event.preventDefault()}}></div>
            <div className="panel-content">{props.children}</div>
        </div>
    );
}


export default PanelView
