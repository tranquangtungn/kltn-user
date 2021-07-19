import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./UserInfo.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { userActions } from '../../_actions';
import ItemResult from "components/SearchResults/ItemResult";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function UserInfo() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const [user] = useState(useSelector(state => state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getById());
    }, [dispatch])
    return (
        <div >
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                    <span>User</span>
                    <img
                        src={user?.items?.avatar}
                        alt="User avatar"
                    />
                    {console.log(user.users)}
                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>

                        <li>
                            <a href="/signin">Sign out</a>
                        </li>


                    </ul>
                </nav>
            </div>
        </div>
    );
}
