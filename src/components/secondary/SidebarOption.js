import "../../css/SidebarOption.css";

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option_icon" />}
            {Icon ? (<h4>{title}</h4>) : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;
