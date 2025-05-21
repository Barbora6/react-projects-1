import { Tabs } from "./Tabs";
import "./Tabs.css";

function RandomContent() {
  return <h1>Some random content</h1>;
}

export const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab1</div>
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab2</div>
    },
    {
      label: "Tab3",
      content: <RandomContent />
    }
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};
