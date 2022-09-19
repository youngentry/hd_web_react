import React from "react";

const Wrapper = ({ children }) => {
    return (
        <>
            {/* 컴포넌트로 컴포넌트를 감싸려면
            children을 props로 주고 나서 App.js에서 Wrapper 컴포넌트로 감싸면 됩니다. */}
            <div className="Wrapper">{children}</div>
        </>
    );
};

export default Wrapper;
