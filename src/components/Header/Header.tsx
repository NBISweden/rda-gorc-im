import React from "react";
import { NavLink } from "react-router";
import './Header.css';
import { useConfig } from "../../contexts/ConfigContext.ts"
import {
  RepositorySelectionContext,
  useSelected,
} from "../../contexts/SelectionContexts.ts"

type PanelButton = {
    id: string;
    icon: React.ReactNode;
    onClick: () => void;
};

type HeaderProps = {
    panelButtons?: PanelButton[];
};

function Header({ panelButtons = [] }: HeaderProps) {
    const {title} = useConfig()
    const repository = useSelected(RepositorySelectionContext);
    return (
        <header className="header">
            <div className="header-title">{title}: {repository ? repository.info.name : ""}</div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li><NavLink to="/documentation">Documentation</NavLink></li>
                </ul>
                {panelButtons?.map(btn => (
                    <div key={btn.id} className="panel-button" onClick={btn.onClick}>
                        {btn.icon}
                    </div>
                ))}
            </nav>
        </header>
    );
}


export default Header;
