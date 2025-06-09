import React from "react";
import { Tree } from "./components/Tree.tsx";
import { TreeContext, createTreeManagerFromModelNodes, getLayout } from "./contexts/TreeContext.ts"
import { ModelDefinition, getModelNodes, applyLayersAndSlices } from "./modules/LayeredModel.ts"
import { createRepositoryManager } from "./contexts/RepositoryContext.ts"
import { HttpRepositorySource } from "./modules/RepositorySource.ts"
import {
  useModelSelectionManagers,
  RepositorySelectionContext,
  ModelSelectionContext,
  ProfileSelectionContext,
  SliceSelectionContext,
} from "./contexts/SelectionContexts.ts"
import "@xyflow/react/dist/style.css";
import "./App.css";
import { SettingsPanel } from "./components/SettingsPanel.tsx";
import Layout from "./components/Layout/Layout";

type AppConfig = {
  repositories: {url: string, id: string, name: string}[];
  title: string;
}


const AppBase = (props: {title: string}) => {
  return (
    <Layout
      title={props.title}
      panels={{
        settings: {
          component: <SettingsPanel />,
          icon: <></>
        },
      }}
    >
      <div className="tree-container">
        <Tree />
      </div>
    </Layout>
  )
}

export function parseAppConfig(data?: unknown): AppConfig {
  const defaults: AppConfig = {
    title: "RDA Visualisation App",
    repositories: []
  }
  if (data && typeof data === "object") {
    return {
      title: "title" in data && typeof(data.title) === "string" ? data.title : defaults.title,
      repositories: (
        "repositories" in data && Array.isArray(data.repositories)
          ? data.repositories.map<AppConfig["repositories"][number]>(r => r) 
          : defaults.repositories
      )
    }
  } else {
    return defaults
  }
}

const App = ({config}: {config: AppConfig}) => {
  const repositoryManager = createRepositoryManager(
    config.repositories.map(r =>  new HttpRepositorySource(r))
  );
  const [
    repoSelection,
    modelSelection,
    profileSelection,
    sliceSelection,
  ] = useModelSelectionManagers(repositoryManager);
  const model = modelSelection[0];
  const profiles = profileSelection[0];
  const slices = sliceSelection[0];
  const modelDefintion: ModelDefinition = React.useMemo(
    () => {
      return model ? applyLayersAndSlices(model, profiles, slices) : { nodes: []}
    },
    [model, profiles, slices]
  );
  const nodes = React.useMemo(() => getModelNodes(modelDefintion), [modelDefintion]);
  const nodeSize = 120;
  const layout = React.useMemo(() => getLayout(nodes, nodeSize), [nodes, nodeSize]);
  const treeManager = createTreeManagerFromModelNodes(nodes, layout);
  return (
    <RepositorySelectionContext.Provider value={repoSelection}>
      <ModelSelectionContext.Provider value={modelSelection}>
        <ProfileSelectionContext.Provider value={profileSelection}>
          <SliceSelectionContext.Provider value={sliceSelection}>
            <TreeContext.Provider value={treeManager}>
              <AppBase title={config.title}/>
            </TreeContext.Provider>
          </SliceSelectionContext.Provider>
        </ProfileSelectionContext.Provider>
      </ModelSelectionContext.Provider>
    </RepositorySelectionContext.Provider>
  );
};

export default App;
