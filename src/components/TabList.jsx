import Tab from "./Tab";
import "./TabList.css";

function TabList(props) {
  const { setContent } = props;
  const tabHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ul>
        {props.data.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setContent(item);
              localStorage.setItem("stored_item", JSON.stringify(item));
            }}
          >
            <Tab item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TabList;
