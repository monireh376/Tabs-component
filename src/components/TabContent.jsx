
function TabContent({content}) {
    console.log(content)
  return (
    <div style={{background:"#1f26b7", minHeight: "100vh"}}>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
    </div>
  )
}

export default TabContent