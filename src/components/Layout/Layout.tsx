import React from 'react';
import './Layout.css';
import Header from "../Header/Header";

type Panel = {
    component: React.ReactNode,
    icon: React.ReactNode;
}

type Props = React.PropsWithChildren<{
    title: string;
    panels?: Record<string, Panel>;
}>;

const Layout: React.FC<Props> = ({ title, children, panels = {} }) => {
    const [currentPanel, setCurrentPanel] = React.useState<string | null>(null);

    const panelButtons = Object.entries(panels).map(([id, panel]) => ({
        id,
        icon: panel.icon,
        onClick: () => setCurrentPanel(currentPanel === id ? null : id),
    }));

    return (
        <div className="layout">
            <Header title={title} panelButtons={panelButtons} />
            <main>
                {children}
                {Object.keys(panels).map((panelId) => {
                    const panel = panels[panelId];
                    return (
                        <aside key={panelId} className="panel" data-visible={currentPanel === panelId}>
                            <div className="panel-container">
                                {panel.component}
                            </div>
                        </aside>
                    )
                })}
            </main>
            <footer>
                <small>NBIS development</small>
            </footer>
        </div>
    );
};

export default Layout;
