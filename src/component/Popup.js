import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

// styled components는 컴포넌트 명을 변수로 선언하여 만듭니다.
const Pop = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 9999;

    &.on {
        display: none;
    }
    & button {
        float: right;
    }
`;
const Popup = () => {
    const [TG, setTG] = useState();
    const [cookies, setCookie] = useCookies();

    // (1)만료시간을 설정합니다. 우선 현재 시간을 불러옵니다.
    let now = new Date();
    let after = new Date();

    return (
        // TG가 true라면 Pop에 'on'을 붙이도록 합니다.
        // ⓑcookies의 name이 존재하면 on을 붙이도록 합니다.
        <Pop className={(cookies.pop || TG) && "on"}>
            <div>
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/images/main_news02.jpg"
                    }
                    alt=""
                />
            </div>
            {/* input의 type으로 체크박스를 만듭니다. */}
            <div className="bottom">
                <input
                    type="checkbox"
                    // ⓐcookies에 'ddd'라는 이름을 붙여줍니다.
                    onChange={() => {
                        // (2)onChange에서 after의 시간을 now의 현재시간으로 설정합니다.
                        after.setMinutes(now.getMinutes() + 1);
                        // (3)expires 프로퍼티를 추가해 값을 after로 설정합니다.
                        setCookie("pop", "pop", { path: "/", expires: after });
                    }}
                />
                오늘 하루 열지 않기.
                {/* setTG의 state가 true로 변하게 합니다. */}
                <button onClick={() => setTG(true)}>Close</button>
            </div>
        </Pop>
    );
};

export default Popup;
